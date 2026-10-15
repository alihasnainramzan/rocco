/**
 * ============================================================================
 * Rocco by Raceducater - Master Core Engine (main.jsfl)
 * Adobe Animate CC 2023 (Host: FLPR)
 * ============================================================================
 */

(function (global) {
    "use strict";

    // ========================================================================
    // 1. EMBEDDED ENTERPRISE JSON ENGINE (STRICT RFC 8259, NO NaN/UNDEFINED)
    // ========================================================================
    if (typeof global.JSON === "undefined") {
        global.JSON = {};
    }
    var JSON = global.JSON;

    global.JSON.stringify = function (value) {
        if (value === null || typeof value === "undefined") {
            return "null";
        }
        var type = typeof value;
        if (type === "number") {
            if (isNaN(value) || !isFinite(value)) {
                return "0";
            }
            return String(value);
        }
        if (type === "boolean") {
            return value ? "true" : "false";
        }
        if (type === "string") {
            return '"' + value
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\u0008/g, '\\b')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\f/g, '\\f')
                .replace(/\r/g, '\\r') + '"';
        }
        if (type === "object") {
            var isArray = (value.constructor === Array);
            var results = [];

            if (isArray) {
                for (var i = 0; i < value.length; i++) {
                    results.push(global.JSON.stringify(value[i]));
                }
                return "[" + results.join(",") + "]";
            } else {
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var val = value[key];
                        var valType = typeof val;
                        if (valType === "function" || valType === "undefined") continue;
                        results.push('"' + key + '":' + global.JSON.stringify(val));
                    }
                }
                return "{" + results.join(",") + "}";
            }
        }
        return "null";
    };

    global.JSON.parse = function (jsonStr) {
        if (!jsonStr || typeof jsonStr !== "string") return null;
        var trimmed = jsonStr.replace(/^\s+|\s+$/g, "");
        if (trimmed === "" || trimmed === "null" || trimmed === "undefined") return null;
        return eval("(" + trimmed + ")");
    };

    function safeNum(val, defaultVal) {
        if (typeof val === "number" && !isNaN(val) && isFinite(val)) {
            return val;
        }
        return (typeof defaultVal === "number") ? defaultVal : 0;
    }

    function debugLog(msg) {
        try {
            var uri = FLfile.platformPathToURI("E:\\rocco\\debug.log");
            FLfile.write(uri, "[" + (new Date()).toLocaleTimeString() + "] " + msg + "\r\n", "append");
            fl.trace("[ROCCO] " + msg);
        } catch (e) {}
    }


    // ========================================================================
    // 2. RETARGET UTILITIES & CONTEXT RESOLVER
    // ========================================================================
    var RetargetUtils = {
        getActiveDoc: function () {
            return fl.getDocumentDOM();
        },

        findLayerForElement: function (timeline, element) {
            if (!timeline || !element) return null;
            var curIdx = timeline.currentLayer;
            if (curIdx >= 0 && curIdx < timeline.layers.length) {
                var curLyr = timeline.layers[curIdx];
                var curF = timeline.currentFrame;
                if (curF >= 0 && curF < curLyr.frames.length) {
                    var fr = curLyr.frames[curF];
                    if (fr && fr.elements) {
                        for (var e = 0; e < fr.elements.length; e++) {
                            if (fr.elements[e] === element) {
                                return { layer: curLyr, index: curIdx, frameIndex: curF };
                            }
                        }
                    }
                }
            }

            for (var l = 0; l < timeline.layers.length; l++) {
                var lyr = timeline.layers[l];
                for (var f = 0; f < lyr.frames.length; f++) {
                    var fObj = lyr.frames[f];
                    if (fObj && fObj.elements) {
                        for (var elIdx = 0; elIdx < fObj.elements.length; elIdx++) {
                            if (fObj.elements[elIdx] === element) {
                                return { layer: lyr, index: l, frameIndex: f };
                            }
                        }
                    }
                }
            }
            return null;
        },

        getTargetContext: function (doc) {
            if (!doc) return null;
            var curTimeline = doc.getTimeline();
            var sel = doc.selection;

            // Only target a symbol instance if the current timeline is a stage container with 1 layer.
            // If the current timeline already has multiple layers (e.g. character rig with 9 layers),
            // NEVER drill down into a clicked limb symbol!
            if (curTimeline && curTimeline.layers.length <= 1 && sel && sel.length === 1 && sel[0].elementType === "instance" && sel[0].instanceType === "symbol") {
                var selectedEl = sel[0];
                var stageLayerInfo = RetargetUtils.findLayerForElement(curTimeline, selectedEl);

                return {
                    type: "symbol_instance",
                    element: selectedEl,
                    stageTimeline: curTimeline,
                    stageLayer: stageLayerInfo ? stageLayerInfo.layer : null,
                    stageLayerIndex: stageLayerInfo ? stageLayerInfo.index : curTimeline.currentLayer,
                    libraryItem: selectedEl.libraryItem,
                    symbolTimeline: selectedEl.libraryItem ? selectedEl.libraryItem.timeline : null,
                    name: selectedEl.libraryItem ? selectedEl.libraryItem.name : (selectedEl.name || "Symbol")
                };
            }

            return {
                type: "timeline",
                element: null,
                stageTimeline: curTimeline,
                stageLayer: null,
                stageLayerIndex: curTimeline ? curTimeline.currentLayer : 0,
                libraryItem: null,
                symbolTimeline: curTimeline,
                name: (curTimeline && curTimeline.name) ? curTimeline.name : (doc.name || "Scene")
            };
        },

        findLibraryItem: function (lib, itemName) {
            if (!lib || !lib.items) return null;
            for (var i = 0; i < lib.items.length; i++) {
                if (lib.items[i].name === itemName) {
                    return lib.items[i];
                }
            }
            return null;
        },

        generateUniqueCopyName: function (lib, originalName) {
            var baseName = originalName.replace(/ copy.*$/i, "") + "_copy";
            var uniqueName = baseName;
            var counter = 1;
            while (lib.itemExists(uniqueName) || lib.itemExists(uniqueName + " copy")) {
                uniqueName = baseName + "_" + counter++;
            }
            return uniqueName;
        },

        isTimelineBlank: function (timeline) {
            if (!timeline) return true;
            if (timeline.layers.length === 0) return true;
            if (timeline.layers.length === 1) {
                var lyr = timeline.layers[0];
                if (lyr.frames.length <= 1) {
                    if (lyr.frames.length === 0) return true;
                    if (!lyr.frames[0].elements || lyr.frames[0].elements.length === 0) return true;
                }
            }
            return false;
        }
    };

    // ========================================================================
    // 3. RETARGET EXTRACTOR (FULL TIMELINE + NATIVE CLIPBOARD INTEGRATION)
    // ========================================================================
    var RetargetExtractor = {
        extractLayerKeyframes: function (layer) {
            var kfs = [];
            if (!layer || !layer.frames) return kfs;

            var f = 0;
            while (f < layer.frames.length) {
                var frame = layer.frames[f];
                if (!frame) { f++; continue; }

                if (frame.startFrame === f) {
                    var kfRecord = {
                        frameIndex: safeNum(f, 0),
                        duration: safeNum(frame.duration, 1),
                        tweenType: frame.tweenType || "none",
                        acceleration: safeNum(frame.acceleration, 0),
                        label: frame.name || "",
                        elements: []
                    };

                    for (var e = 0; e < frame.elements.length; e++) {
                        var el = frame.elements[e];
                        var elRecord = {
                            elementType: el.elementType || "instance",
                            name: el.name || "",
                            x: safeNum(el.x, 0),
                            y: safeNum(el.y, 0),
                            scaleX: safeNum(el.scaleX, 1),
                            scaleY: safeNum(el.scaleY, 1),
                            rotation: safeNum(el.rotation, 0),
                            skewX: safeNum(el.skewX, 0),
                            skewY: safeNum(el.skewY, 0),
                            transformX: (typeof el.transformX === "number" && !isNaN(el.transformX)) ? el.transformX : safeNum(el.x, 0),
                            transformY: (typeof el.transformY === "number" && !isNaN(el.transformY)) ? el.transformY : safeNum(el.y, 0)
                        };

                        if (el.matrix) {
                            elRecord.matrix = {
                                a: safeNum(el.matrix.a, 1),
                                b: safeNum(el.matrix.b, 0),
                                c: safeNum(el.matrix.c, 0),
                                d: safeNum(el.matrix.d, 1),
                                tx: safeNum(el.matrix.tx, 0),
                                ty: safeNum(el.matrix.ty, 0)
                            };
                        }

                        if (el.elementType === "instance") {
                            elRecord.instanceType = el.instanceType || "symbol";
                            elRecord.symbolType = el.symbolType || "graphic";
                            elRecord.libraryItemName = el.libraryItem ? el.libraryItem.name : "";

                            if (el.symbolType === "graphic") {
                                elRecord.firstFrame = safeNum(el.firstFrame, 0);
                                elRecord.loop = el.loop || "loop";
                            }

                            if (el.colorMode) {
                                elRecord.colorMode = el.colorMode;
                                elRecord.colorAlphaPercent = safeNum(el.colorAlphaPercent, 100);
                            }
                        }

                        kfRecord.elements.push(elRecord);
                    }

                    kfs.push(kfRecord);
                    f += frame.duration;
                } else {
                    f++;
                }
            }
            return kfs;
        },

        extractTimeline: function (timeline, depth, visitedMap) {
            if (!timeline || depth > 12) return null;

            var timelineData = {
                name: timeline.name || "Timeline",
                frameCount: safeNum(timeline.frameCount, 0),
                layers: []
            };

            for (var l = 0; l < timeline.layers.length; l++) {
                var layer = timeline.layers[l];
                if (layer.layerType === "folder" || layer.layerType === "guide") continue;

                var layerRecord = {
                    name: layer.name,
                    layerType: layer.layerType,
                    visible: !!layer.visible,
                    locked: !!layer.locked,
                    keyframes: RetargetExtractor.extractLayerKeyframes(layer)
                };

                timelineData.layers.push(layerRecord);
            }

            return timelineData;
        },

        execute: function () {
            try {
                var doc = RetargetUtils.getActiveDoc();
                if (!doc) {
                    return JSON.stringify({ success: false, message: "No active document open in Animate." });
                }

                var enteredEdit = false;
                if (doc.selection && doc.selection.length === 1 && doc.selection[0].elementType === "instance" && doc.selection[0].instanceType === "symbol") {
                    try {
                        doc.enterEditMode("inPlace");
                        enteredEdit = true;
                    } catch (emErr) {}
                }

                var activeTl = doc.getTimeline();
                var visitedMap = {};

                // 1. Load Animate's native internal clipboard with complete frames & symbols
                try {
                    activeTl.selectAllFrames();
                    activeTl.copyFrames();
                    activeTl.currentLayer = 0;
                    activeTl.setSelectedLayers(0, true);
                    activeTl.setSelectedFrames(0, 1, true);
                } catch (cfErr) {}


                // 2. Extract mathematical motion hierarchy to JSON
                var extractedTree = RetargetExtractor.extractTimeline(activeTl, 0, visitedMap);

                if (enteredEdit) {
                    try { doc.exitEditMode(); } catch (exErr) {}
                }

                var totalKeyframes = 0;
                for (var l = 0; l < extractedTree.layers.length; l++) {
                    totalKeyframes += extractedTree.layers[l].keyframes.length;
                }

                var srcName = (activeTl && activeTl.name) ? activeTl.name : (doc.name || "Character");
                var payload = {
                    sourceName: srcName,
                    frameRate: safeNum(doc.frameRate, 30),
                    scope: enteredEdit ? "symbol" : "timeline",
                    tree: extractedTree,
                    stats: {
                        layers: extractedTree.layers.length,
                        keyframes: totalKeyframes,
                        totalFrames: safeNum(extractedTree.frameCount, activeTl.frameCount)
                    }
                };

                // Persist payload in JSFL global memory and temp file for zero-IPC paste
                try {
                    fl._roccoClipboard = payload;
                    var tempUri = fl.configURI + "rocco_clipboard.json";
                    FLfile.write(tempUri, global.JSON.stringify(payload));
                } catch (pErr) {}

                return JSON.stringify({
                    success: true,
                    message: "Copied '" + srcName + "' (" + extractedTree.layers.length + " layers, " + totalKeyframes + " keyframes, " + activeTl.frameCount + " frames).",
                    payload: payload
                });
            } catch (err) {
                return JSON.stringify({
                    success: false,
                    message: "Extraction Error: " + (err.message || String(err))
                });
            }
        }
    };

    // ========================================================================
    // 4. RETARGET INJECTOR (SAFE EXTENSION, CLEAN TWEENS & CROSS-DOC SUPPORT)
    // ========================================================================
    var RetargetInjector = {
        applyLayerKeyframes: function (timeline, layerIdx, srcKeyframes, srcTotalFrames, options, deltaX, deltaY, baseSourceTx, baseSourceTy) {
            try {
                if (!timeline || layerIdx < 0 || layerIdx >= timeline.layers.length) return false;
                var layer = timeline.layers[layerIdx];
                if (!layer) return false;

                var lName = layer.name;
                var kfCount = (srcKeyframes && srcKeyframes.length) ? srcKeyframes.length : 0;
                debugLog("applyLayerKeyframes START: lyr=" + layerIdx + " ('" + lName + "') KFs=" + kfCount);

                try { layer.locked = false; } catch (lkErr) {}
                try { layer.visible = true; } catch (vsErr) {}
                try { timeline.currentLayer = layerIdx; } catch (clErr) {}
                try { timeline.setSelectedLayers(layerIdx, true); } catch (slErr) {}

                // 1. Capture base element from frame 0 before modifying frames
                var baseEl = (layer.frames && layer.frames.length > 0 && layer.frames[0].elements && layer.frames[0].elements.length > 0) ? layer.frames[0].elements[0] : null;
                var baseTargetTx = 0;
                var baseTargetTy = 0;
                if (baseEl && baseEl.elementType === "instance") {
                    try {
                        baseTargetTx = (baseEl.x !== undefined) ? safeNum(baseEl.x, 0) : ((baseEl.matrix && baseEl.matrix.tx !== undefined) ? safeNum(baseEl.matrix.tx, 0) : 0);
                        baseTargetTy = (baseEl.y !== undefined) ? safeNum(baseEl.y, 0) : ((baseEl.matrix && baseEl.matrix.ty !== undefined) ? safeNum(baseEl.matrix.ty, 0) : 0);
                    } catch (beErr) {}
                }

                var curLen = (layer && layer.frames) ? layer.frames.length : 1;
                var targetDuration = Math.max(safeNum(srcTotalFrames, 1), 1);

                // 2. Ensure layer has at least targetDuration frames (extend cleanly without deleting!)
                if (curLen < targetDuration) {
                    var needed = targetDuration - curLen;
                    try {
                        timeline.currentLayer = layerIdx;
                        timeline.insertFrames(needed, false, curLen - 1);
                    } catch (ifErr) {}
                }

                // Re-fetch layer after extension
                layer = timeline.layers[layerIdx];
                var totalAvailableFrames = (layer && layer.frames) ? layer.frames.length : targetDuration;
                debugLog("  lyr=" + layerIdx + " totalAvailableFrames=" + totalAvailableFrames);

                // ====================================================================
                // PASS 1: Establish all Keyframe boundaries using convertToKeyframes
                // ====================================================================
                debugLog("  lyr=" + layerIdx + " PASS 1 START (KFs=" + kfCount + ")");
                for (var k = 0; k < kfCount; k++) {
                    var kf1 = srcKeyframes[k];
                    var fIdx1 = safeNum(kf1.frameIndex, 0);
                    if (fIdx1 <= 0 || fIdx1 >= totalAvailableFrames) continue;

                    layer = timeline.layers[layerIdx];
                    var frCheck = (layer && layer.frames && fIdx1 < layer.frames.length) ? layer.frames[fIdx1] : null;
                    if (!frCheck || frCheck.startFrame !== fIdx1) {
                        try {
                            timeline.currentLayer = layerIdx;
                            timeline.convertToKeyframes(fIdx1, fIdx1 + 1);
                            debugLog("    PASS1: convertToKeyframes at fIdx=" + fIdx1);
                        } catch (ckErr) {
                            try {
                                timeline.insertKeyframe(fIdx1);
                                debugLog("    PASS1 fallback insertKeyframe at fIdx=" + fIdx1);
                            } catch (ikErr) {}
                        }
                    }
                }
                debugLog("  lyr=" + layerIdx + " PASS 1 COMPLETE");

                // ====================================================================
                // PASS 2: Apply 6-DOF Instance Transforms, Graphic States, and Tweens
                // ====================================================================
                debugLog("  lyr=" + layerIdx + " PASS 2 START");
                layer = timeline.layers[layerIdx];
                for (var k = 0; k < kfCount; k++) {
                    var kf = srcKeyframes[k];
                    var fIdx = safeNum(kf.frameIndex, 0);
                    if (fIdx < 0 || fIdx >= totalAvailableFrames) continue;

                    layer = timeline.layers[layerIdx];
                    var curFrame = (layer && layer.frames && fIdx < layer.frames.length) ? layer.frames[fIdx] : null;
                    if (!curFrame) continue;

                    debugLog("    PASS2 k=" + k + " fIdx=" + fIdx + " START");

                    // 1. Transfer Classic Tweens & Easing safely
                    try {
                        var twType = kf.tweenType || "none";
                        if (twType === "classic") twType = "motion";
                        curFrame.tweenType = twType;
                    } catch (twErr) {}

                    try {
                        if (kf.acceleration !== undefined) curFrame.acceleration = safeNum(kf.acceleration, 0);
                    } catch (acErr) {}

                    try {
                        if (kf.label) curFrame.name = kf.label;
                    } catch (lbErr) {}

                    if (!curFrame.elements || curFrame.elements.length === 0) {
                        debugLog("    PASS2 k=" + k + " fIdx=" + fIdx + " (no elements)");
                        continue;
                    }

                    var elemList = kf.elements || [];
                    for (var e = 0; e < elemList.length; e++) {
                        var srcEl = elemList[e];
                        var targetEl = (e < curFrame.elements.length) ? curFrame.elements[e] : curFrame.elements[0];
                        if (!targetEl) continue;

                        // ONLY transform instances (guards against Shape C++ errors)
                        if (targetEl.elementType === "instance") {
                            try {
                                // 2. Graphic Symbol FirstFrame, Loop, & Color Mode
                                if (targetEl.instanceType === "symbol" && targetEl.symbolType === "graphic") {
                                    if (srcEl.firstFrame !== undefined) targetEl.firstFrame = safeNum(srcEl.firstFrame, 0);
                                    if (srcEl.loop !== undefined) targetEl.loop = srcEl.loop;
                                }
                                if (srcEl.colorAlphaPercent !== undefined && srcEl.colorMode && srcEl.colorMode !== "none") {
                                    targetEl.colorMode = srcEl.colorMode;
                                    targetEl.colorAlphaPercent = safeNum(srcEl.colorAlphaPercent, 100);
                                }
                            } catch (symErr) {}

                            // 3. Compute Translation
                            var srcTx = (srcEl.x !== undefined) ? safeNum(srcEl.x, 0) : ((srcEl.matrix) ? safeNum(srcEl.matrix.tx, 0) : 0);
                            var srcTy = (srcEl.y !== undefined) ? safeNum(srcEl.y, 0) : ((srcEl.matrix) ? safeNum(srcEl.matrix.ty, 0) : 0);

                            var finalTx, finalTy;
                            if (options.mode === "exact") {
                                finalTx = srcTx;
                                finalTy = srcTy;
                            } else if (options.mode === "relative") {
                                finalTx = srcTx + deltaX;
                                finalTy = srcTy + deltaY;
                            } else {
                                var dxFromSrc0 = srcTx - safeNum(baseSourceTx, srcTx);
                                var dyFromSrc0 = srcTy - safeNum(baseSourceTy, srcTy);
                                finalTx = baseTargetTx + dxFromSrc0;
                                finalTy = baseTargetTy + dyFromSrc0;
                            }

                            // 4. Assign Coordinates
                            try {
                                if (finalTx !== undefined && !isNaN(finalTx)) targetEl.x = Number(finalTx);
                                if (finalTy !== undefined && !isNaN(finalTy)) targetEl.y = Number(finalTy);
                            } catch (posErr) {}

                            // 5. Rotation with ToonYug Pivot Stability Compensation
                            try {
                                if (srcEl.rotation !== undefined && !isNaN(srcEl.rotation)) {
                                    var preTfX = (typeof targetEl.transformX !== "undefined") ? targetEl.transformX : targetEl.x;
                                    var preTfY = (typeof targetEl.transformY !== "undefined") ? targetEl.transformY : targetEl.y;
                                    targetEl.rotation = Number(srcEl.rotation);
                                    var postTfX = (typeof targetEl.transformX !== "undefined") ? targetEl.transformX : targetEl.x;
                                    var postTfY = (typeof targetEl.transformY !== "undefined") ? targetEl.transformY : targetEl.y;
                                    targetEl.x += (preTfX - postTfX);
                                    targetEl.y += (preTfY - postTfY);
                                }
                            } catch (rotErr) {}

                            // 6. Scale
                            try {
                                if (srcEl.scaleX !== undefined && !isNaN(srcEl.scaleX)) targetEl.scaleX = Number(srcEl.scaleX);
                                if (srcEl.scaleY !== undefined && !isNaN(srcEl.scaleY)) targetEl.scaleY = Number(srcEl.scaleY);
                            } catch (sclErr) {}
                        }
                    }
                    debugLog("    PASS2 k=" + k + " fIdx=" + fIdx + " DONE");
                }
                debugLog("  lyr=" + layerIdx + " PASS 2 COMPLETE");

                debugLog("applyLayerKeyframes DONE: lyr=" + layerIdx + " ('" + lName + "')");
                return true;
            } catch (err) {
                debugLog("applyLayerKeyframes FATAL: " + (err.message || String(err)));
                return false;
            }
        },

        injectTimeline: function (targetTimeline, srcTimelineData, mappingDict, options) {
            if (!targetTimeline || !srcTimelineData) return;
            options = options || { mode: "exact", overrideKeyframes: true, safeClone: false };

            // 1. Determine total animation duration
            var srcTotalFrames = safeNum(srcTimelineData.frameCount, 1);
            for (var s = 0; s < srcTimelineData.layers.length; s++) {
                var kfs = srcTimelineData.layers[s].keyframes;
                if (kfs && kfs.length > 0) {
                    var lastKf = kfs[kfs.length - 1];
                    var endF = safeNum(lastKf.frameIndex, 0) + safeNum(lastKf.duration, 1);
                    if (endF > srcTotalFrames) srcTotalFrames = endF;
                }
            }
            if (srcTotalFrames < 1) srcTotalFrames = 1;

            // 2. Ensure all target layers are unlocked and visible
            for (var l = 0; l < targetTimeline.layers.length; l++) {
                try {
                    targetTimeline.layers[l].locked = false;
                    targetTimeline.layers[l].visible = true;
                } catch (ulErr) {}
            }

            // 3. Rewind to frame 0 safely
            try {
                targetTimeline.currentFrame = 0;
                targetTimeline.currentLayer = 0;
            } catch (rw0) {}

            // 4. Extend ALL layers of the target timeline simultaneously to srcTotalFrames
            if (targetTimeline.frameCount < srcTotalFrames) {
                var neededGlobal = srcTotalFrames - targetTimeline.frameCount;
                try {
                    targetTimeline.currentLayer = 0;
                    targetTimeline.insertFrames(neededGlobal, true, 0);
                } catch (ifAllErr) {}
            }

            // 5. Compute anchor translation delta (DeltaX, DeltaY)
            var deltaX = 0;
            var deltaY = 0;

            if (options.mode !== "exact") {
                for (var s = 0; s < srcTimelineData.layers.length; s++) {
                    var sLyr = srcTimelineData.layers[s];
                    var tName = (mappingDict && mappingDict[sLyr.name]) ? mappingDict[sLyr.name] : sLyr.name;

                    for (var t = 0; t < targetTimeline.layers.length; t++) {
                        var tLyr = targetTimeline.layers[t];
                        if (tLyr.name === tName && tLyr.frames.length > 0 && sLyr.keyframes.length > 0) {
                            var tEl = (tLyr.frames[0].elements.length > 0) ? tLyr.frames[0].elements[0] : null;
                            var sEl = (sLyr.keyframes[0].elements.length > 0) ? sLyr.keyframes[0].elements[0] : null;

                            if (tEl && sEl) {
                                var sTx = (sEl.x !== undefined) ? sEl.x : ((sEl.matrix) ? sEl.matrix.tx : 0);
                                var sTy = (sEl.y !== undefined) ? sEl.y : ((sEl.matrix) ? sEl.matrix.ty : 0);
                                var tTx = (tEl.x !== undefined) ? tEl.x : ((tEl.matrix) ? tEl.matrix.tx : 0);
                                var tTy = (tEl.y !== undefined) ? tEl.y : ((tEl.matrix) ? tEl.matrix.ty : 0);

                                deltaX = safeNum(tTx - sTx, 0);
                                deltaY = safeNum(tTy - sTy, 0);
                                break;
                            }
                        }
                    }
                    if (deltaX !== 0 || deltaY !== 0) break;
                }
            }

            // 6. Inject each source layer cleanly
            for (var s = 0; s < srcTimelineData.layers.length; s++) {
                var srcLayer = srcTimelineData.layers[s];
                if (!srcLayer || srcLayer.layerType === "folder" || srcLayer.layerType === "guide") continue;

                var targetLayerName = (mappingDict && mappingDict[srcLayer.name]) 
                    ? mappingDict[srcLayer.name] 
                    : srcLayer.name;

                var targetLayerIdx = -1;
                // 1. Try mapped targetLayerName
                for (var i = 0; i < targetTimeline.layers.length; i++) {
                    if (targetTimeline.layers[i].name === targetLayerName) {
                        targetLayerIdx = i;
                        break;
                    }
                }

                // 2. Fallback to exact srcLayer.name
                if (targetLayerIdx === -1) {
                    for (var i = 0; i < targetTimeline.layers.length; i++) {
                        if (targetTimeline.layers[i].name === srcLayer.name) {
                            targetLayerIdx = i;
                            break;
                        }
                    }
                }

                // 3. Fallback to normalized match (case-insensitive, no underscores or spaces)
                if (targetLayerIdx === -1) {
                    var sClean = srcLayer.name.toLowerCase().replace(/[-_ ]/g, "");
                    for (var i = 0; i < targetTimeline.layers.length; i++) {
                        var tClean = targetTimeline.layers[i].name.toLowerCase().replace(/[-_ ]/g, "");
                        if (sClean === tClean) {
                            targetLayerIdx = i;
                            break;
                        }
                    }
                }

                // 4. Fallback to consonant-collapsed match (e.g. "dhottipart" vs "dhotipart")
                if (targetLayerIdx === -1) {
                    var sCollapsed = srcLayer.name.toLowerCase().replace(/[-_ ]/g, "").replace(/([a-z])\1+/g, "$1");
                    for (var i = 0; i < targetTimeline.layers.length; i++) {
                        var tCollapsed = targetTimeline.layers[i].name.toLowerCase().replace(/[-_ ]/g, "").replace(/([a-z])\1+/g, "$1");
                        if (sCollapsed === tCollapsed) {
                            targetLayerIdx = i;
                            break;
                        }
                    }
                }

                // 5. Fallback to substring match
                if (targetLayerIdx === -1) {
                    var sNorm = srcLayer.name.toLowerCase().replace(/[-_ ]/g, "");
                    for (var i = 0; i < targetTimeline.layers.length; i++) {
                        var tNorm = targetTimeline.layers[i].name.toLowerCase().replace(/[-_ ]/g, "");
                        if (sNorm.indexOf(tNorm) !== -1 || tNorm.indexOf(sNorm) !== -1) {
                            targetLayerIdx = i;
                            break;
                        }
                    }
                }

                // If target layer does not exist in target character, skip cleanly
                if (targetLayerIdx === -1) {
                    debugLog("  Layer NOT matched in target: '" + srcLayer.name + "' (mapped to: '" + targetLayerName + "')");
                    continue;
                }

                debugLog("  Layer MATCHED: src='" + srcLayer.name + "' -> target[" + targetLayerIdx + "]='" + targetTimeline.layers[targetLayerIdx].name + "'");

                // Capture source frame 0 base translation
                var baseSourceTx = 0;
                var baseSourceTy = 0;
                if (srcLayer.keyframes && srcLayer.keyframes.length > 0 && srcLayer.keyframes[0].elements.length > 0) {
                    var s0El = srcLayer.keyframes[0].elements[0];
                    baseSourceTx = (s0El.x !== undefined) ? safeNum(s0El.x, 0) : ((s0El.matrix) ? safeNum(s0El.matrix.tx, 0) : 0);
                    baseSourceTy = (s0El.y !== undefined) ? safeNum(s0El.y, 0) : ((s0El.matrix) ? safeNum(s0El.matrix.ty, 0) : 0);
                }

                try {
                    RetargetInjector.applyLayerKeyframes(
                        targetTimeline,
                        targetLayerIdx,
                        srcLayer.keyframes,
                        srcTotalFrames,
                        options,
                        deltaX,
                        deltaY,
                        baseSourceTx,
                        baseSourceTy
                    );
                } catch (lyrErr) {
                    debugLog("  applyLayerKeyframes exception: " + lyrErr);
                }
            }

            // 7. Rewind playhead to frame 0 safely
            try {
                targetTimeline.currentFrame = 0;
                targetTimeline.currentLayer = 0;
            } catch (rwErr) {}
        },

        execute: function (payloadInput, mappingDictStr, optionsInput) {
            try {
                var doc = RetargetUtils.getActiveDoc();
                if (!doc) {
                    return JSON.stringify({ success: false, message: "No active document open in Animate." });
                }

                var motionData = null;
                var mappingDict = {};
                var options = {
                    mode: "exact",
                    overrideKeyframes: true,
                    safeClone: false
                };

                // 1. Resolve Motion Data from memory, file, or inline string
                try {
                    // Try memory clipboard first
                    if (fl._roccoClipboard && typeof fl._roccoClipboard === "object") {
                        motionData = fl._roccoClipboard;
                    }

                    // Try file path or inline JSON
                    if (typeof payloadInput === "string" && payloadInput.length > 0) {
                        var trimmed = payloadInput.replace(/^\s+|\s+$/g, "");
                        if (trimmed.charAt(0) === "{" || trimmed.charAt(0) === "[") {
                            motionData = JSON.parse(trimmed);
                        } else {
                            var uri = FLfile.platformPathToURI(trimmed);
                            if (FLfile.exists(uri)) {
                                var fileText = FLfile.read(uri);
                                if (fileText) {
                                    motionData = JSON.parse(fileText);
                                }
                            }
                        }
                    }

                    // Fallback to default temp config file
                    if (!motionData) {
                        var defaultTempUri = fl.configURI + "rocco_clipboard.json";
                        if (FLfile.exists(defaultTempUri)) {
                            var defaultText = FLfile.read(defaultTempUri);
                            if (defaultText) {
                                motionData = JSON.parse(defaultText);
                            }
                        }
                    }

                    if (mappingDictStr) {
                        mappingDict = (typeof mappingDictStr === "string") ? JSON.parse(mappingDictStr) : mappingDictStr;
                    }

                    if (typeof optionsInput === "boolean") {
                        options.safeClone = optionsInput;
                    } else if (typeof optionsInput === "string") {
                        var parsedOpt = JSON.parse(optionsInput);
                        if (typeof parsedOpt === "object" && parsedOpt !== null) {
                            if (parsedOpt.mode) options.mode = parsedOpt.mode;
                            if (parsedOpt.overrideKeyframes !== undefined) options.overrideKeyframes = !!parsedOpt.overrideKeyframes;
                            if (parsedOpt.safeClone !== undefined) options.safeClone = !!parsedOpt.safeClone;
                        }
                    } else if (typeof optionsInput === "object" && optionsInput !== null) {
                        if (optionsInput.mode) options.mode = optionsInput.mode;
                        if (optionsInput.overrideKeyframes !== undefined) options.overrideKeyframes = !!optionsInput.overrideKeyframes;
                        if (optionsInput.safeClone !== undefined) options.safeClone = !!optionsInput.safeClone;
                    }
                } catch (parseErr) {
                    return JSON.stringify({ success: false, message: "Payload parse error: " + parseErr.message });
                }

                if (!motionData || !motionData.tree) {
                    return JSON.stringify({ success: false, message: "Missing motion tree in payload. Please copy an animation first." });
                }

                // 2. Resolve Target Context:
                var activeTimeline = doc.getTimeline();
                var enteredEdit = false;

                // Check if current timeline already has multi-layer rig structure (e.g. Seth Character with 9 layers)
                var isAlreadyInsideRig = false;
                if (activeTimeline && activeTimeline.layers.length > 1) {
                    isAlreadyInsideRig = true;
                }


                // If user is on outer stage container (e.g. Scene 1) and didn't explicitly select, auto-select single symbol instance if present
                if (!isAlreadyInsideRig && (!doc.selection || doc.selection.length === 0)) {
                    var curLyr = (activeTimeline.layers.length > 0) ? activeTimeline.layers[activeTimeline.currentLayer || 0] : null;
                    var curFr = (curLyr && curLyr.frames && curLyr.frames.length > 0) ? curLyr.frames[0] : null;
                    if (curFr && curFr.elements && curFr.elements.length === 1 && curFr.elements[0].elementType === "instance" && curFr.elements[0].instanceType === "symbol") {
                        try {
                            doc.selectNone();
                            curFr.elements[0].selected = true;
                        } catch (selErr) {}
                    }
                }

                // If user is on outer stage container (e.g. Scene 1) and selected the character symbol, enter edit mode
                if (!isAlreadyInsideRig && doc.selection && doc.selection.length === 1 && doc.selection[0].elementType === "instance" && doc.selection[0].instanceType === "symbol") {
                    try {
                        doc.enterEditMode("inPlace");
                        enteredEdit = true;
                        activeTimeline = doc.getTimeline();
                    } catch (emErr) {}
                }

                // Always clear stage selection so timeline operations never conflict with selected stage instances
                try { doc.selectNone(); } catch (snErr) {}

                if (!activeTimeline) {
                    if (enteredEdit) try { doc.exitEditMode(); } catch (e) {}
                    return JSON.stringify({ success: false, message: "No active timeline open in document." });
                }

                // ============================================================
                // CASE 1: BLANK / NEW DOCUMENT AUTO-PASTE (Cross-Document)
                // If target timeline is an empty file (e.g. Untitled-1 with blank Layer_1),
                // use native pasteFrames to instantly copy all symbols, artwork, and layers!
                // ============================================================
                if (!enteredEdit && RetargetUtils.isTimelineBlank(activeTimeline)) {
                    try {
                        activeTimeline.setSelectedLayers(0, true);
                        activeTimeline.pasteFrames();

                        // Remove empty initial Layer_1 if multiple layers were pasted
                        if (activeTimeline.layers.length > 1) {
                            for (var l = activeTimeline.layers.length - 1; l >= 0; l--) {
                                if (activeTimeline.layers[l].name === "Layer_1" && activeTimeline.layers[l].frames.length <= 1) {
                                    activeTimeline.deleteLayer(l);
                                    break;
                                }
                            }
                        }

                        return JSON.stringify({
                            success: true,
                            message: "Transferred complete character rig and animation (" + activeTimeline.layers.length + " layers, " + activeTimeline.frameCount + " frames) into new document successfully!"
                        });
                    } catch (pfErr) {
                        // Fall back to algorithmic inject if pasteFrames failed
                    }
                }

                // ============================================================
                // CASE 2: TARGET RIG RETARGETING (High-Fidelity Affine Matrix Engine)
                // Sequentially process every mapped layer with exact keyframe, tween, & matrix injection
                // ============================================================
                debugLog("Calling RetargetInjector.injectTimeline...");
                RetargetInjector.injectTimeline(
                    activeTimeline,
                    motionData.tree,
                    mappingDict,
                    options
                );
                debugLog("RetargetInjector.injectTimeline returned successfully.");

                var appliedName = activeTimeline.name;
                var appliedLayersCount = motionData.tree.layers.length;

                // Exit edit mode if we entered it, and extend stage timeline cleanly from the end
                if (enteredEdit) {
                    try {
                        doc.exitEditMode();
                        var stageTl = doc.getTimeline();
                        var srcTotalFrames = safeNum(motionData.tree.frameCount, 1);
                        if (stageTl && stageTl.frameCount < srcTotalFrames) {
                            var neededStage = srcTotalFrames - stageTl.frameCount;
                            stageTl.setSelectedLayers(0, true);
                            stageTl.setSelectedFrames(stageTl.frameCount - 1, stageTl.frameCount, true);
                            stageTl.insertFrames(neededStage, false, stageTl.frameCount - 1);
                        }
                    } catch (exErr) {}
                }

                return JSON.stringify({
                    success: true,
                    message: "Applied " + appliedLayersCount + " layers to '" + appliedName + "' successfully [Mode: " + options.mode + ", Override: " + (options.overrideKeyframes ? "ON" : "OFF") + "]."
                });

            } catch (globalErr) {
                debugLog("RetargetInjector.execute GLOBAL ERROR: " + (globalErr.message || String(globalErr)));
                return JSON.stringify({
                    success: false,
                    message: "Injection Error: " + (globalErr.message || String(globalErr))
                });
            }
        }
    };

    // ========================================================================
    // 5. UNIFIED PUBLIC RETARGET API
    // ========================================================================
    var UniversalRetarget = {
        deepExtract: function () {
            return RetargetExtractor.execute();
        },

        deepInject: function (payloadStr, mappingStr, options) {
            debugLog("=== UniversalRetarget.deepInject START ===");
            try {
                var res = RetargetInjector.execute(payloadStr, mappingStr, options);
                debugLog("=== UniversalRetarget.deepInject SUCCESS ===");
                return res;
            } catch (diErr) {
                debugLog("=== UniversalRetarget.deepInject FATAL: " + (diErr.message || String(diErr)) + " ===");
                return JSON.stringify({
                    success: false,
                    message: "deepInject Error: " + (diErr.message || String(diErr))
                });
            }
        },

        getTargetLayers: function () {
            try {
                var doc = RetargetUtils.getActiveDoc();
                if (!doc) return JSON.stringify({ success: false, message: "No active document." });

                var targetCtx = RetargetUtils.getTargetContext(doc);
                var curTimeline = (targetCtx && targetCtx.type === "symbol_instance" && targetCtx.symbolTimeline)
                    ? targetCtx.symbolTimeline
                    : doc.getTimeline();

                if (!curTimeline) return JSON.stringify({ success: false, message: "No timeline found." });

                var layers = [];
                for (var i = 0; i < curTimeline.layers.length; i++) {
                    if (curTimeline.layers[i].layerType !== "folder" && curTimeline.layers[i].layerType !== "guide") {
                        layers.push(curTimeline.layers[i].name);
                    }
                }

                return JSON.stringify({
                    success: true,
                    targetName: curTimeline.name,
                    layers: layers
                });
            } catch (e) {
                return JSON.stringify({ success: false, message: e.message, layers: [] });
            }
        },

        autoLipSync: function (audioLayer, mouthSymbol) {
            try {
                var doc = RetargetUtils.getActiveDoc();
                if (!doc) return JSON.stringify({ success: false, message: "No active document." });

                var tl = doc.getTimeline();
                var audioIdx = -1;

                for (var i = 0; i < tl.layers.length; i++) {
                    var name = tl.layers[i].name.toLowerCase();
                    if ((audioLayer && name === audioLayer.toLowerCase()) || name.indexOf("audio") !== -1 || name.indexOf("voice") !== -1) {
                        audioIdx = i;
                        break;
                    }
                }

                if (typeof tl.autoLipSync === "function") {
                    if (audioIdx !== -1) tl.setSelectedLayers(audioIdx);
                    tl.autoLipSync();
                    return JSON.stringify({ success: true, message: "Lip-Sync generated." });
                }

                return JSON.stringify({ success: true, message: "Audio prepared for Lip-Sync." });
            } catch (e) {
                return JSON.stringify({ success: false, message: "Lip-Sync error: " + e.message });
            }
        },

        setFacialExpression: function (frameIndex) {
            try {
                var doc = RetargetUtils.getActiveDoc();
                if (!doc) return JSON.stringify({ success: false, message: "No active document open." });

                var fIdx = parseInt(frameIndex, 10);
                if (isNaN(fIdx) || fIdx < 0) fIdx = 0;

                var updated = 0;

                function applyToGraphicInstance(el) {
                    if (el && el.elementType === "instance" && el.symbolType === "graphic") {
                        try {
                            el.loop = "single frame";
                            el.firstFrame = fIdx;
                            updated++;
                            return true;
                        } catch (e) {}
                    }
                    return false;
                }

                function drillTimelineForFace(tl) {
                    if (!tl) return;
                    for (var l = 0; l < tl.layers.length; l++) {
                        var lyr = tl.layers[l];
                        var lName = lyr.name.toLowerCase();

                        if (lName.indexOf("head") !== -1 || lName.indexOf("face") !== -1) {
                            if (lyr.frames && lyr.frames.length > 0 && lyr.frames[0].elements.length > 0) {
                                var headEl = lyr.frames[0].elements[0];
                                if (headEl && headEl.libraryItem && headEl.libraryItem.timeline) {
                                    var headTl = headEl.libraryItem.timeline;
                                    for (var hl = 0; hl < headTl.layers.length; hl++) {
                                        var fLyr = headTl.layers[hl];
                                        var fName = fLyr.name.toLowerCase();
                                        if (fName.indexOf("mouth") !== -1 || fName.indexOf("eye") !== -1 || fName.indexOf("face") !== -1) {
                                            if (fLyr.frames && fLyr.frames.length > 0 && fLyr.frames[0].elements.length > 0) {
                                                applyToGraphicInstance(fLyr.frames[0].elements[0]);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        if (lName.indexOf("mouth") !== -1 || lName.indexOf("eye") !== -1) {
                            if (lyr.frames && lyr.frames.length > 0 && lyr.frames[0].elements.length > 0) {
                                applyToGraphicInstance(lyr.frames[0].elements[0]);
                            }
                        }
                    }
                }

                var sel = doc.selection;
                if (sel && sel.length > 0) {
                    for (var s = 0; s < sel.length; s++) {
                        var itm = sel[s];
                        if (applyToGraphicInstance(itm)) continue;
                        if (itm.libraryItem && itm.libraryItem.timeline) {
                            drillTimelineForFace(itm.libraryItem.timeline);
                        }
                    }
                } else {
                    drillTimelineForFace(doc.getTimeline());
                }

                return JSON.stringify({
                    success: true,
                    message: "Expression set to frame " + fIdx + " (" + updated + " parts updated)."
                });
            } catch (e) {
                return JSON.stringify({ success: false, message: "Facial expression error: " + e.message });
            }
        }
    };

    global.UniversalRetarget = UniversalRetarget;

})(this);
