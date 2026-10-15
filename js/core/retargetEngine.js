/**
 * ============================================================================
 * Universal Retargeting Copilot - Smart Retargeting Engine (retargetEngine.js)
 * ============================================================================
 * 
 * Responsibilities:
 * - Skeletal topology and fuzzy string matching (e.g., "L_Arm" -> "Left Arm").
 * - Levenshtein distance and token-based anatomical confidence scoring.
 * - Generates auto-mapping recommendations for the MappingTable UI widget.
 */

(function (global) {
    "use strict";

    var ANATOMY_SYNONYMS = {
        "l": ["left", "lt", "lft", "side_l"],
        "r": ["right", "rt", "rgt", "side_r"],
        "arm": ["upperarm", "arm", "bicep"],
        "forearm": ["lowerarm", "forearm", "elbow"],
        "hand": ["wrist", "hand", "fist", "palm"],
        "leg": ["thigh", "upperleg", "leg"],
        "lowerleg": ["shin", "calf", "lowerleg", "knee"],
        "foot": ["feet", "foot", "shoe", "ankle"],
        "torso": ["body", "chest", "trunk", "pelvis", "hips", "torso"],
        "head": ["skull", "face", "head"]
    };

    function RetargetEngine() {}

    /**
     * Calculates Levenshtein Distance between two strings.
     */
    RetargetEngine.prototype.levenshtein = function (a, b) {
        var matrix = [];
        var n = a.length;
        var m = b.length;

        if (n === 0) return m;
        if (m === 0) return n;

        for (var i = 0; i <= n; i++) matrix[i] = [i];
        for (var j = 0; j <= m; j++) matrix[0][j] = j;

        for (var i = 1; i <= n; i++) {
            for (var j = 1; j <= m; j++) {
                var cost = (a.charAt(i - 1) === b.charAt(j - 1)) ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,       // deletion
                    matrix[i][j - 1] + 1,       // insertion
                    matrix[i - 1][j - 1] + cost // substitution
                );
            }
        }
        return matrix[n][m];
    };

    /**
     * Cleans and tokenizes layer names into canonical anatomical parts.
     */
    RetargetEngine.prototype.tokenize = function (name) {
        if (!name) return [];
        return name
            .toLowerCase()
            .replace(/[-_.]/g, " ")
            .split(" ")
            .filter(function (t) { return t.length > 0; });
    };

    /**
     * Computes similarity score (0.0 to 1.0) between Source and Target layer names.
     */
    RetargetEngine.prototype.computeScore = function (sourceName, targetName) {
        if (!sourceName || !targetName) return 0.0;
        var sExact = sourceName.trim().toLowerCase();
        var tExact = targetName.trim().toLowerCase();
        if (sExact === tExact) return 1.0;

        var sClean = sExact.replace(/[-_ ]/g, "");
        var tClean = tExact.replace(/[-_ ]/g, "");
        if (sClean === tClean) return 0.98;

        // Substring containment (at least 3 characters)
        if (Math.min(sClean.length, tClean.length) >= 3) {
            if (sClean.indexOf(tClean) !== -1 || tClean.indexOf(sClean) !== -1) {
                var lenRatio = Math.min(sClean.length, tClean.length) / Math.max(sClean.length, tClean.length);
                return 0.70 + (lenRatio * 0.15); // max 0.85
            }
        }

        var sTokens = this.tokenize(sourceName);
        var tTokens = this.tokenize(targetName);
        if (sTokens.length === 0 || tTokens.length === 0) return 0.0;

        var tokenMatches = 0;
        for (var i = 0; i < sTokens.length; i++) {
            var st = sTokens[i];
            for (var j = 0; j < tTokens.length; j++) {
                var tt = tTokens[j];
                if (st === tt) {
                    tokenMatches += 1.0;
                    break;
                } else {
                    for (var key in ANATOMY_SYNONYMS) {
                        var list = ANATOMY_SYNONYMS[key];
                        var sHas = (key === st || list.indexOf(st) !== -1);
                        var tHas = (key === tt || list.indexOf(tt) !== -1);
                        if (sHas && tHas) {
                            tokenMatches += 0.8;
                            break;
                        }
                    }
                }
            }
        }

        var tokenScore = tokenMatches / Math.max(sTokens.length, tTokens.length);
        var lev = this.levenshtein(sClean, tClean);
        var maxLen = Math.max(sClean.length, tClean.length);
        var levRatio = (maxLen > 0) ? (1.0 - (lev / maxLen)) : 0;

        var finalScore = (tokenScore * 0.5) + (levRatio * 0.3);
        // Fuzzy token score never exceeds 0.85 so exact matches always win
        return Math.min(0.85, Math.max(0.0, finalScore));
    };

    /**
     * Maps an array of source layer names to target layer names (1:1 Unique Assignment).
     * 
     * @param {Array<string>} sourceLayers - Source character layer names.
     * @param {Array<string>} targetLayers - Target character layer names.
     * @returns {Object} Map of source -> { target, confidence }
     */
    RetargetEngine.prototype.createMapping = function (sourceLayers, targetLayers) {
        var mapping = {};
        if (!sourceLayers || sourceLayers.length === 0) return mapping;
        if (!targetLayers || targetLayers.length === 0) {
            for (var s = 0; s < sourceLayers.length; s++) {
                mapping[sourceLayers[s]] = { target: sourceLayers[s], confidence: 0 };
            }
            return mapping;
        }

        var usedTargets = {};
        var unmappedSources = [];

        // Phase 1: Assign Exact and Normalized Matches (Score >= 0.95)
        for (var i = 0; i < sourceLayers.length; i++) {
            var src = sourceLayers[i];
            var foundExact = false;

            for (var j = 0; j < targetLayers.length; j++) {
                var tgt = targetLayers[j];
                if (usedTargets[tgt]) continue;

                var score = this.computeScore(src, tgt);
                if (score >= 0.95) {
                    mapping[src] = { target: tgt, confidence: score };
                    usedTargets[tgt] = true;
                    foundExact = true;
                    break;
                }
            }

            if (!foundExact) {
                unmappedSources.push(src);
            }
        }

        // Phase 2: Best Available Unused Target Matches
        for (var u = 0; u < unmappedSources.length; u++) {
            var uSrc = unmappedSources[u];
            var bestTarget = "";
            var highestScore = -1;

            for (var j = 0; j < targetLayers.length; j++) {
                var tgt = targetLayers[j];
                if (usedTargets[tgt]) continue;

                var score = this.computeScore(uSrc, tgt);
                if (score > highestScore) {
                    highestScore = score;
                    bestTarget = tgt;
                }
            }

            if (bestTarget && highestScore >= 0.35) {
                mapping[uSrc] = { target: bestTarget, confidence: highestScore };
                usedTargets[bestTarget] = true;
            } else {
                // Phase 3: Fallback if all targets are exhausted or low score
                var fallbackTarget = uSrc;
                var fallbackScore = 0;
                for (var j = 0; j < targetLayers.length; j++) {
                    var tgt = targetLayers[j];
                    var score = this.computeScore(uSrc, tgt);
                    if (score > fallbackScore) {
                        fallbackScore = score;
                        fallbackTarget = tgt;
                    }
                }
                mapping[uSrc] = {
                    target: (fallbackScore > 0.25) ? fallbackTarget : (targetLayers[0] || uSrc),
                    confidence: fallbackScore
                };
            }
        }

        return mapping;
    };

    global.retargetEngine = new RetargetEngine();

})(window);
