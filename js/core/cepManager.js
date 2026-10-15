/**
 * ============================================================================
 * Universal Retargeting Copilot - Enterprise CEP Manager (cepManager.js)
 * ============================================================================
 * 
 * Responsibilities:
 * 1. Encapsulate CSInterface runtime and lifecycle events.
 * 2. Synchronize Adobe Animate dynamic theme colors (THEME_COLOR_CHANGED_EVENT).
 * 3. Verify and bridge JSFL execution safely without fragile fl.runScript calls.
 * 4. Execute JSFL scripts safely with JSON parsing.
 */

(function (global) {
    "use strict";

    function CEPManager() {
        this.cs = new CSInterface();
        this.rawExtensionPath = this.cs.getSystemPath(this.cs.SystemPath.EXTENSION);
        this.initThemeListener();
        this.syncThemeWithHost();
    }

    /**
     * Initializes the host JSX/JSFL engine.
     * Verifies UniversalRetarget is loaded (via manifest.xml <ScriptPath>),
     * with an inline Node.js fs evaluation fallback if needed.
     */
    CEPManager.prototype.initHostEngine = function (onReady) {
        var self = this;
        // Always load latest main.jsfl from disk into host runtime so changes take effect immediately
        try {
            if (window.require) {
                var fs = window.require("fs");
                var path = window.require("path");
                var mainPath = path.join(self.rawExtensionPath, "jsx", "main.jsfl");
                if (fs.existsSync(mainPath)) {
                    var fileUri = "file:///" + mainPath.replace(/\\/g, "/").replace(/^([A-Za-z]):/, "$1|");
                    self.cs.evalScript("fl.runScript('" + fileUri + "'); typeof UniversalRetarget !== 'undefined'", function (res) {
                        if (res && String(res).indexOf("true") !== -1) {
                            if (typeof onReady === "function") onReady(true);
                        } else {
                            var code = fs.readFileSync(mainPath, "utf8");
                            self.cs.evalScript(code, function () {
                                if (typeof onReady === "function") onReady(true);
                            });
                        }
                    });
                    return;
                }
            }
        } catch (fsErr) {}

        this.evalJsfl('typeof UniversalRetarget !== "undefined"', function (isLoaded) {
            if (typeof onReady === "function") onReady(isLoaded === true);
        });
    };

    /**
     * Executes JSFL script safely with error catching and JSON deserialization.
     */
    CEPManager.prototype.evalJsfl = function (script, callback) {
        if (!callback) callback = function () {};

        this.cs.evalScript(script, function (response) {
            if (!response || response === "undefined" || response === "null") {
                callback({ success: false, message: "Null response from JSFL engine." });
                return;
            }

            try {
                var parsed = JSON.parse(response);
                callback(parsed);
            } catch (jsonErr) {
                var clean = String(response)
                    .replace(/^EvalError:\s*/i, "")
                    .replace(/^Error:\s*/i, "")
                    .trim();
                callback({ 
                    success: false, 
                    raw: response, 
                    error: jsonErr.message, 
                    message: clean || response 
                });
            }
        });
    };

    CEPManager.prototype.initThemeListener = function () {
        var self = this;
        this.cs.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, function () {
            self.syncThemeWithHost();
        });
    };

    CEPManager.prototype.syncThemeWithHost = function () {
        var hostEnv = this.cs.getHostEnvironment();
        if (!hostEnv || !hostEnv.appSkinInfo) return;

        var skin = hostEnv.appSkinInfo;
        var panelBg = skin.panelBackgroundColor ? skin.panelBackgroundColor.color : { red: 38, green: 38, blue: 38 };
        
        var r = Math.round(panelBg.red);
        var g = Math.round(panelBg.green);
        var b = Math.round(panelBg.blue);

        var luminance = (0.299 * r + 0.587 * g + 0.114 * b);
        var isDark = luminance < 128;

        var root = document.documentElement;
        root.style.setProperty("--color-bg", "rgb(" + r + "," + g + "," + b + ")");
        root.style.setProperty("--color-card", isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)");
        root.style.setProperty("--color-card-border", isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.12)");
        root.style.setProperty("--color-text", isDark ? "#e4e4e4" : "#1a1a1a");
        root.style.setProperty("--color-text-secondary", isDark ? "#9e9e9e" : "#5a5a5a");
        root.style.setProperty("--color-input-bg", isDark ? "#181818" : "#ffffff");
        root.style.setProperty("--color-input-border", isDark ? "#383838" : "#c4c4c4");
        root.style.setProperty("--color-btn-default", isDark ? "#383838" : "#e0e0e0");
        root.style.setProperty("--color-btn-default-hover", isDark ? "#484848" : "#d0d0d0");
        root.style.setProperty("--color-accent-blue", "#1473e6");
        root.style.setProperty("--color-accent-green", "#10b981");
        root.style.setProperty("--color-accent-red", "#ef4444");
    };

    global.cepManager = new CEPManager();

})(window);
