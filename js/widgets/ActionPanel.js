/**
 * ============================================================================
 * Rocco by Raceducater - ActionPanel Widget (ActionPanel.js)
 * ============================================================================
 */

(function (global) {
    "use strict";

    function ActionPanel(container, events) {
        this.container = container;
        this.events = events || {};
        this.render();
        this.bindEvents();
    }

    ActionPanel.prototype.render = function () {
        this.container.innerHTML = 
            '<header class="rocco-header">' +
                '<div class="rocco-brand">' +
                    '<img src="assets/logo.png" alt="RAC" class="rocco-logo-img">' +
                    '<div class="rocco-brand-text">' +
                        '<span class="rocco-title">ROCCO</span>' +
                        '<span class="rocco-subtitle">by Raceducater</span>' +
                    '</div>' +
                '</div>' +
                '<div class="rocco-header-actions">' +
                    '<button id="btnReload" class="btn-icon-reload" title="Reload Extension">' +
                        '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<path d="M23 4v6h-6"></path>' +
                            '<path d="M1 20v-6h6"></path>' +
                            '<path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>' +
                        '</svg>' +
                    '</button>' +
                '</div>' +
            '</header>' +

            '<main class="rocco-body">' +

                '<!-- MOTION RETARGETING CARD -->' +
                '<section class="rocco-card">' +
                    '<div class="card-title-bar">' +
                        '<span class="card-title">Motion Retargeting</span>' +
                    '</div>' +

                    '<div id="clipboardStrip" class="rocco-status-strip">' +
                        '<div class="status-dot"></div>' +
                        '<div class="status-text-wrap">' +
                            '<span id="lblClipTitle" class="status-main">Clipboard: Empty</span>' +
                            '<span id="lblClipDetails" class="status-sub">Select character on stage</span>' +
                        '</div>' +
                    '</div>' +

                    '<div class="button-stack">' +
                        '<button id="btnExtract" class="btn btn-primary">' +
                            '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">' +
                                '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>' +
                                '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>' +
                            '</svg>' +
                            'Copy Animation (Source)' +
                        '</button>' +

                        '<div class="form-row">' +
                            '<label class="form-label" for="selRetargetMode">Transfer Mode:</label>' +
                            '<select id="selRetargetMode" class="form-select">' +
                                '<option value="exact" selected>Exact 1:1 Match (Full Fidelity Matrix)</option>' +
                                '<option value="pin_joints">Preserve Joint Positions (Keep Body Intact)</option>' +
                                '<option value="relative">Relative Delta Offsets</option>' +
                            '</select>' +
                        '</div>' +

                        '<div class="checkbox-stack">' +
                            '<label class="checkbox-label" title="Clear old keyframes on Target and recreate exact source keyframe timing">' +
                                '<input type="checkbox" id="chkOverrideKeyframes" checked>' +
                                '<span>Override Existing Keyframes</span>' +
                            '</label>' +
                            '<label class="checkbox-label" title="Duplicate nested symbols in the Library (only needed when altering shared library symbols)">' +
                                '<input type="checkbox" id="chkSafeClone">' +
                                '<span>Safe Duplicate Library Items</span>' +
                            '</label>' +
                        '</div>' +

                        '<button id="btnInject" class="btn btn-accent" disabled>' +
                            '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">' +
                                '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>' +
                                '<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>' +
                            '</svg>' +
                            'Paste Animation (Target)' +
                        '</button>' +
                    '</div>' +

                    '<div class="button-row">' +
                        '<button id="btnExport" class="btn btn-tiny" disabled>Export</button>' +
                        '<button id="btnImport" class="btn btn-tiny">Import</button>' +
                        '<input type="file" id="filePicker" accept=".json" style="display:none;">' +
                    '</div>' +
                '</section>' +

                '<!-- MAPPING TABLE MOUNT POINT -->' +
                '<div id="mappingTableMount"></div>' +

                '<!-- FACIAL & AUDIO CARD -->' +
                '<section class="rocco-card">' +
                    '<div class="card-title-bar">' +
                        '<span class="card-title">Facial &amp; Lip-Sync</span>' +
                    '</div>' +

                    '<button id="btnLipSync" class="btn btn-secondary">' +
                        '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>' +
                            '<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>' +
                        '</svg>' +
                        'Auto Lip-Sync' +
                    '</button>' +

                    '<div class="expr-strip">' +
                        '<button class="btn-expr-tile" data-frame="0"><span class="tile-icon">😐</span><span class="tile-name">Default</span></button>' +
                        '<button class="btn-expr-tile" data-frame="1"><span class="tile-icon">😄</span><span class="tile-name">Happy</span></button>' +
                        '<button class="btn-expr-tile" data-frame="2"><span class="tile-icon">😠</span><span class="tile-name">Angry</span></button>' +
                        '<button class="btn-expr-tile" data-frame="3"><span class="tile-icon">😢</span><span class="tile-name">Sad</span></button>' +
                    '</div>' +
                '</section>' +

                '<!-- CONSOLE -->' +
                '<section class="rocco-card">' +
                    '<div class="card-title-bar">' +
                        '<span class="card-title">Console</span>' +
                        '<button id="btnClearConsole" class="btn btn-tiny" style="padding:1px 5px; font-size:8.5px;">Clear</button>' +
                    '</div>' +
                    '<div id="logConsole" class="rocco-console">' +
                        '<div class="log-entry info">[Rocco] Ready.</div>' +
                    '</div>' +
                '</section>' +

            '</main>';
    };

    ActionPanel.prototype.bindEvents = function () {
        var self = this;
        var btnExtract = document.getElementById("btnExtract");
        var btnInject = document.getElementById("btnInject");
        var btnExport = document.getElementById("btnExport");
        var btnImport = document.getElementById("btnImport");
        var filePicker = document.getElementById("filePicker");
        var btnLipSync = document.getElementById("btnLipSync");
        var chkSafeClone = document.getElementById("chkSafeClone");
        var chkOverrideKeyframes = document.getElementById("chkOverrideKeyframes");
        var selRetargetMode = document.getElementById("selRetargetMode");
        var btnReload = document.getElementById("btnReload");
        var btnClear = document.getElementById("btnClearConsole");

        btnReload.addEventListener("click", function () {
            if (window.cepManager) {
                window.cepManager.initHostEngine(function () {
                    window.location.reload();
                });
            } else {
                window.location.reload();
            }
        });

        btnClear.addEventListener("click", function () {
            document.getElementById("logConsole").innerHTML = '<div class="log-entry info">[Rocco] Cleared.</div>';
        });

        btnExtract.addEventListener("click", function () {
            if (self.events.onExtract) self.events.onExtract();
        });

        btnInject.addEventListener("click", function () {
            if (self.events.onInject) {
                self.events.onInject({
                    mode: selRetargetMode ? selRetargetMode.value : "pin_joints",
                    overrideKeyframes: chkOverrideKeyframes ? chkOverrideKeyframes.checked : true,
                    safeClone: chkSafeClone ? chkSafeClone.checked : true
                });
            }
        });

        btnExport.addEventListener("click", function () {
            if (self.events.onExport) self.events.onExport();
        });

        btnImport.addEventListener("click", function () { filePicker.click(); });
        filePicker.addEventListener("change", function (e) {
            if (self.events.onImport && e.target.files[0]) {
                self.events.onImport(e.target.files[0]);
                filePicker.value = "";
            }
        });

        btnLipSync.addEventListener("click", function () {
            if (self.events.onLipSync) self.events.onLipSync();
        });

        var exprTiles = document.querySelectorAll(".btn-expr-tile");
        exprTiles.forEach(function (tile) {
            tile.addEventListener("click", function () {
                var frame = parseInt(this.getAttribute("data-frame"), 10);
                if (self.events.onExpression) self.events.onExpression(frame);
            });
        });
    };

    ActionPanel.prototype.updateClipboard = function (payload) {
        var strip = document.getElementById("clipboardStrip");
        var lblTitle = document.getElementById("lblClipTitle");
        var lblDetails = document.getElementById("lblClipDetails");
        var btnInject = document.getElementById("btnInject");
        var btnExport = document.getElementById("btnExport");

        if (!payload) {
            strip.classList.remove("has-data");
            lblTitle.textContent = "Clipboard: Empty";
            lblDetails.textContent = "Select character on stage";
            btnInject.disabled = true;
            btnExport.disabled = true;
            return;
        }

        strip.classList.add("has-data");
        lblTitle.textContent = payload.sourceName || "Rig Selected";
        
        var statStr = "";
        if (payload.stats) {
            statStr = payload.stats.layers + " Layers | " + payload.stats.keyframes + " Keyframes";
            if (payload.stats.totalFrames) {
                statStr += " | " + payload.stats.totalFrames + " Frames";
            }
        } else if (payload.stageMotion) {
            statStr = "Stage Motion: " + payload.stageMotion.frameCount + " frames (" + payload.stageMotion.keyframes.length + " keyframes)";
        } else {
            statStr = "Motion Data Ready";
        }
        lblDetails.textContent = statStr;

        btnInject.disabled = false;
        btnExport.disabled = false;
    };

    ActionPanel.prototype.log = function (msg, level) {
        var consoleEl = document.getElementById("logConsole");
        if (!consoleEl) return;

        level = level || "info";
        var entry = document.createElement("div");
        entry.className = "log-entry " + level;

        var d = new Date();
        var time = [d.getHours(), d.getMinutes(), d.getSeconds()]
            .map(function (v) { return v < 10 ? "0" + v : v; })
            .join(":");

        entry.textContent = "[" + time + "] " + msg;
        consoleEl.appendChild(entry);
        consoleEl.scrollTop = consoleEl.scrollHeight;
    };

    global.ActionPanel = ActionPanel;

})(this);
