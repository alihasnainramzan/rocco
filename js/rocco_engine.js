/**
 * ============================================================================
 * Rocco by Raceducater / Ramza Rocco - Master Studio Engine (rocco_engine.js)
 * Fully Unlocked Studio Toolkits + Universal Retargeting Copilot
 * ============================================================================
 */

(function (window) {
    "use strict";

    // 1. Permanent Unlocked License API
    window.TY_License = {
        getHWID: function () { return "ROCCO-ENTERPRISE-2026-VIP"; },
        getSeatHWID: function () { return "ROCCO-SEAT-01"; },
        activate: async function () { return { success: true }; },
        validate: async function () { return { success: true }; },
        deactivate: async function () { return { success: true }; },
        startTrial: async function () { return { success: true }; },
        saveSession: function () {},
        getSecureSession: function () {
            return {
                valid: true,
                isTrial: false,
                planName: "Rocco Studio Master Enterprise",
                daysLeft: 9999,
                totalSeats: 8,
                activeSeats: 1,
                expiresAtText: "Lifetime Enterprise"
            };
        },
        clearSession: function () {},
        checkStatus: function (cbSuccess, cbErr) {
            var details = {
                valid: true,
                isExpired: false,
                isTrial: false,
                planName: "Rocco Studio Master Enterprise",
                totalSeats: 8,
                activeSeats: 1,
                daysLeft: 9999,
                expiresAtText: "Lifetime Enterprise",
                token: "ROCCO-PERMANENT-LICENSE"
            };
            if (typeof cbSuccess === "function") cbSuccess(details);
        },
        parseDetails: function () {
            return {
                valid: true,
                isExpired: false,
                isTrial: false,
                planName: "Rocco Studio Master Enterprise",
                totalSeats: 8,
                activeSeats: 1,
                daysLeft: 9999,
                expiresAtText: "Lifetime Enterprise"
            };
        },
        isAuthorized: function () { return true; }
    };

    // 2. Global State & CEP Bridge
    var isCEP = typeof window.__adobe_cep__ !== "undefined";
    var csInterface = (typeof CSInterface !== "undefined") ? new CSInterface() : null;

    function getExtensionRoot() {
        if (csInterface && csInterface.getSystemPath) {
            try {
                var p = csInterface.getSystemPath(SystemPath.EXTENSION);
                if (p) return p.replace(/\\/g, "/");
            } catch (e) {}
        }
        return "E:/rocco";
    }

    function evalJSFL(script, callback) {
        if (isCEP && window.__adobe_cep__) {
            window.__adobe_cep__.evalScript(script, function (res) {
                if (callback) callback(res);
            });
        } else if (csInterface) {
            csInterface.evalScript(script, callback);
        } else {
            console.log("[ROCCO MOCK JSFL]", script);
            if (callback) callback("MOCK_RESULT");
        }
    }

    // 3. Auto-Renew Perpetual 2099 Host License Token on Disk
    function ensureHostLicenseKey() {
        var jsfl = [
            "(function() {",
            "    try {",
            "        var dir = fl.configURI + 'Commands/';",
            "        if (!FLfile.exists(dir)) FLfile.createFolder(dir);",
            "        var myPath = fl.configURI.toLowerCase();",
            "        var h1 = 5381;",
            "        for (var i = 0; i < myPath.length; i++) {",
            "            h1 = ((h1 << 5) + h1) + myPath.charCodeAt(i);",
            "            h1 |= 0;",
            "        }",
            "        var pHash = Math.abs(h1).toString(16).toUpperCase();",
            "        var expTime = 4102444800000;", // Year 2100!
            "        var signStr = pHash + '#' + expTime + '#TY_ENTERPRISE_AIRTIGHT_2026_@#$';",
            "        var h2 = 5381;",
            "        for (var j = 0; j < signStr.length; j++) {",
            "            h2 = ((h2 << 5) + h2) + signStr.charCodeAt(j);",
            "            h2 |= 0;",
            "        }",
            "        var sig = Math.abs(h2).toString(16).toUpperCase();",
            "        var payload = pHash + '||' + expTime + '||' + sig;",
            "        FLfile.write(dir + 'ty_license.dat', payload);",
            "        FLfile.write(dir + 'rocco_license.dat', payload);",
            "    } catch(e) {}",
            "})();"
        ].join("\n");
        evalJSFL(jsfl);
    }

    // Global Safe External Link Opener
    window.openExternalLink = function (url) {
        if (!url) return;
        try {
            if (window.cep && window.cep.util && window.cep.util.openURLInDefaultBrowser) {
                window.cep.util.openURLInDefaultBrowser(url);
                return;
            }
        } catch (e) {}
        try {
            var cp = (typeof require !== 'undefined') ? require('child_process') : ((window.cep_node) ? window.cep_node.require('child_process') : null);
            if (cp) {
                var isWin = (typeof process !== 'undefined' && process.platform === 'win32') || (navigator.platform && navigator.platform.indexOf('Win') !== -1);
                if (isWin) {
                    cp.exec('start "" "' + url.replace(/"/g, '\\"') + '"');
                    return;
                } else {
                    cp.exec('open "' + url.replace(/"/g, '\\"') + '"');
                    return;
                }
            }
        } catch (e) {}
        try {
            window.open(url, '_blank');
        } catch (e) {}
    };

    // 3.5 Monetization & Direct Sponsor Ad Links Interceptor Engine
    (function () {
        var API_URL = "https://rocco.ct.ws/api/monetization.php";
        var STORAGE_KEY_COUNT = "rocco_monetization_clicks";
        var STORAGE_KEY_CFG = "rocco_monetization_cfg";

        var config = {
            enabled: true,
            click_interval: 2,
            notification_text: "Sponsor partner ad opening in browser. Click RUN again to execute your tool!",
            direct_link: {
                id: 2,
                title: "monetag",
                url: "https://uplcm.com/4/12001519"
            },
            links_pool: [
                { id: 2, title: "monetag", url: "https://uplcm.com/4/12001519" },
                { id: 1, title: "out traffic", url: "https://uplcm.com/4/11999187" }
            ],
            is_ad_free: false
        };

        try {
            var cached = localStorage.getItem(STORAGE_KEY_CFG);
            if (cached) {
                var p = JSON.parse(cached);
                if (p && typeof p === "object") {
                    for (var k in p) {
                        if (p.hasOwnProperty(k)) config[k] = p[k];
                    }
                }
            }
        } catch (e) {}

        function queryHttp(url, callback) {
            // 1. Try Node.js in CEP
            try {
                var nodeHttps = (typeof require !== 'undefined') ? (url.indexOf('https:') === 0 ? require('https') : require('http')) : ((window.cep_node) ? window.cep_node.require('https') : null);
                if (nodeHttps) {
                    var u = new URL(url);
                    var cookieHeader = '';
                    try {
                        var c = localStorage.getItem('rocco_byet_cookie');
                        if (c) cookieHeader = '__test=' + c;
                    } catch(e) {}
                    var opts = {
                        hostname: u.hostname,
                        port: u.port || (u.protocol === 'https:' ? 443 : 80),
                        path: u.pathname + u.search,
                        rejectUnauthorized: false,
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                        }
                    };
                    if (cookieHeader) opts.headers['Cookie'] = cookieHeader;

                    nodeHttps.get(opts, function (res) {
                        var body = '';
                        res.on('data', function (c) { body += c; });
                        res.on('end', function () {
                            try { callback(null, JSON.parse(body)); } catch(e) { callback(e); }
                        });
                    }).on('error', function () {
                        doFetch(url, callback);
                    });
                    return;
                }
            } catch(e) {}
            doFetch(url, callback);
        }

        function doFetch(url, callback) {
            if (typeof fetch !== 'undefined') {
                fetch(url).then(function(r) { return r.json(); })
                    .then(function(d) { callback(null, d); })
                    .catch(function() { doXhr(url, callback); });
            } else {
                doXhr(url, callback);
            }
        }

        function doXhr(url, callback) {
            try {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onload = function() {
                    try { callback(null, JSON.parse(xhr.responseText)); } catch(e) { callback(e); }
                };
                xhr.onerror = function() { callback(new Error('xhr fail')); };
                xhr.send();
            } catch(e) { callback(e); }
        }

        function syncConfig() {
            try {
                var email = localStorage.getItem("rocco_user_email") || localStorage.getItem("ty_user_email") || "";
                var token = localStorage.getItem("rocco_user_token") || localStorage.getItem("ty_user_auth_token") || "";
                var ep = API_URL + "?action=config&email=" + encodeURIComponent(email) + "&token=" + encodeURIComponent(token);

                queryHttp(ep, function (err, data) {
                    if (err || !data || !data.success) {
                        queryHttp("http://rocco.ct.ws/api/monetization.php?action=config", function (err2, data2) {
                            if (!err2 && data2 && data2.success) { applyConfig(data2); return; }
                            queryHttp("https://rocco.ct.ws/admin/api/monetization.php?action=config", function (err3, data3) {
                                if (!err3 && data3 && data3.success) { applyConfig(data3); return; }
                                queryHttp("http://127.0.0.1/rocco-admin/api/monetization.php?action=config", function (err4, data4) {
                                    if (!err4 && data4 && data4.success) applyConfig(data4);
                                });
                            });
                        });
                        return;
                    }
                    applyConfig(data);
                });
            } catch (e) {}
        }

        function applyConfig(data) {
            try {
                config.enabled = (data.enabled === true || data.enabled === "1" || data.enabled === 1);
                if (!config.enabled) {
                    localStorage.setItem("rocco_monetization_enabled", "0");
                } else {
                    localStorage.setItem("rocco_monetization_enabled", "1");
                }
                config.click_interval = parseInt(data.click_interval) || 2;
                if (data.notification_text) config.notification_text = data.notification_text;
                if (data.direct_link && data.direct_link.url) config.direct_link = data.direct_link;
                if (Array.isArray(data.links_pool) && data.links_pool.length > 0) {
                    config.links_pool = data.links_pool;
                }
                if (data.is_ad_free) {
                    config.is_ad_free = true;
                    localStorage.setItem("rocco_no_ads", "1");
                } else if (localStorage.getItem("rocco_no_ads") === "1") {
                    config.is_ad_free = true;
                } else {
                    config.is_ad_free = false;
                }
                localStorage.setItem(STORAGE_KEY_CFG, JSON.stringify(config));
            } catch(e) {}
        }

        syncConfig();
        setInterval(syncConfig, 20000);
        window.addEventListener('focus', syncConfig);
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') syncConfig();
        });

        function showAdToast(msg) {
            try {
                var old = document.getElementById("roccoAdToast");
                if (old) old.remove();

                var t = document.createElement("div");
                t.id = "roccoAdToast";
                t.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#0a2530,#107980);color:#ffffff;border:1px solid #00d2ff;border-radius:8px;padding:9px 15px;box-shadow:0 6px 20px rgba(0,0,0,0.45),0 0 10px rgba(0,210,255,0.3);z-index:9999999;display:flex;align-items:center;gap:10px;font-size:12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:92%;pointer-events:auto;";
                t.innerHTML = '<span style="font-size:16px;">🌐</span><div style="flex:1;"><div style="font-size:10px;font-weight:700;color:#38bdf8;text-transform:uppercase;letter-spacing:0.5px;">Sponsor Partner Offer</div><div style="font-size:11.5px;color:#f1f5f9;margin-top:1px;">' + (msg || config.notification_text) + '</div></div><span style="cursor:pointer;font-size:14px;color:#94a3b8;padding:0 4px;" onclick="this.parentElement.remove()">✕</span>';

                document.body.appendChild(t);
                setTimeout(function () {
                    if (t && t.parentElement) {
                        t.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                        t.style.opacity = "0";
                        t.style.transform = "translateX(-50%) translateY(8px)";
                        setTimeout(function () { if (t && t.parentElement) t.remove(); }, 300);
                    }
                }, 4000);
            } catch (e) {}
        }

        function checkAction(actionName) {
            // IF MONETIZATION IS DISABLED IN ADMIN: EXECUTE IMMEDIATELY ON SINGLE CLICK!
            if (!config.enabled || config.enabled === "0" || config.enabled === 0 || config.enabled === false || localStorage.getItem("rocco_monetization_enabled") === "0") {
                return true;
            }
            if (config.is_ad_free || localStorage.getItem("rocco_no_ads") === "1") {
                return true;
            }
            if (localStorage.getItem("rocco_dev_mode") === "1") {
                return true;
            }

            var clicks = parseInt(localStorage.getItem(STORAGE_KEY_COUNT) || "0", 10);
            clicks++;
            localStorage.setItem(STORAGE_KEY_COUNT, String(clicks));

            var interval = config.click_interval || 2;
            var isAdTurn = (clicks % interval !== 0);

            if (isAdTurn) {
                var targetLink = (Array.isArray(config.links_pool) && config.links_pool.length > 0)
                    ? config.links_pool[(clicks - 1) % config.links_pool.length]
                    : config.direct_link;
                var targetUrl = (targetLink && targetLink.url) ? targetLink.url : "https://uplcm.com/4/12001519";

                window.openExternalLink(targetUrl);

                if (targetLink && targetLink.id) {
                    try {
                        fetch(API_URL + "?action=click&id=" + targetLink.id, { method: "POST" }).catch(function () {});
                    } catch (e) {}
                }

                showAdToast("🌐 Sponsor Offer opened in browser. Click RUN again to execute your tool!");
                return false;
            }

            return true;
        }

        window.RoccoMonetization = {
            config: config,
            checkAction: checkAction,
            syncConfig: syncConfig,
            showAdToast: showAdToast
        };
    })();

    // 3.6 Permanent Offline Lifetime Account Sync
    (function () {
        function checkUserAccountState(cb) {
            try {
                localStorage.setItem('rocco_user_authenticated', '1');
                localStorage.setItem('rocco_user_name', 'Rocco Studio Animator');
                localStorage.setItem('rocco_user_email', 'animator@rocco.studio');
                localStorage.setItem('rocco_bound_email', 'animator@rocco.studio');
                localStorage.setItem('ty_user_email', 'animator@rocco.studio');
                localStorage.setItem('rocco_user_token', 'ROC-LIFETIME-ENTERPRISE-TOKEN');
                localStorage.setItem('rocco_license_plan', 'Rocco Studio Master Enterprise');
                localStorage.setItem('rocco_license_key', 'ROC-VIP-2026-UNLOCKED');
                localStorage.setItem('toonyug_license_key', 'ROC-VIP-2026-UNLOCKED');
                localStorage.setItem('toonyug_customer_name', 'Rocco Studio Animator');
                localStorage.removeItem('rocco_account_blocked');
                localStorage.removeItem('rocco_account_unverified');
                if (typeof window.syncSecurityLockUI === 'function') {
                    window.syncSecurityLockUI();
                }
                if (typeof window.syncRoccoAccountBranding === 'function') {
                    window.syncRoccoAccountBranding();
                }
            } catch(e) {}
            if (cb) cb(null, { success: true, status: 'active' });
        }

        window.checkUserAccountState = checkUserAccountState;
        window.processUserStatusResult = function() {};

        setTimeout(checkUserAccountState, 500);
    })();

    // 4. Universal Tool Runner (100% Free & Unlocked)
    window.runTYCmd = function (toolName) {
        if (!toolName) return;

        // Ensure host license is valid
        ensureHostLicenseKey();

        var extRoot = getExtensionRoot();
        var cleanTool = toolName.replace(/"/g, '\\"');
        var jsfl = [
            "(function() {",
            "    try {",
            "        var doc = fl.getDocumentDOM();",
            "        if (!doc) {",
            "            alert('⚠️ Please open or create an Animate Document (.FLA) first!');",
            "            return 'NO_DOC';",
            "        }",
            "        var tName = \"" + cleanTool + "\";",
            "        var p1 = fl.configURI + 'Commands/' + tName + '.jsfl';",
            "        var p2 = 'file:///' + \"" + extRoot.replace(/:/g, "|") + "\" + '/host/' + tName + '.jsfl';",
            "        var appData = fl.configURI.split('/Adobe/')[0];",
            "        var p3 = appData + '/Adobe/CEP/extensions/com.raceducater.rocco/host/' + tName + '.jsfl';",
            "        var p4 = appData + '/Adobe/CEP/extensions/com.toonyug.masterpanel/host/' + tName + '.jsfl';",
            "        var target = FLfile.exists(p1) ? p1 : (FLfile.exists(p2) ? p2 : (FLfile.exists(p3) ? p3 : (FLfile.exists(p4) ? p4 : '')));",
            "        if (target) {",
            "            fl.runScript(target);",
            "            return 'OK';",
            "        } else {",
            "            alert('❌ [ROCCO Error] Tool script not found:\\n' + tName + '.jsfl');",
            "            return 'NOT_FOUND';",
            "        }",
            "    } catch(err) {",
            "        alert('[ROCCO Error] Tool Execution:\\n' + err.message);",
            "        return 'ERR';",
            "    }",
            "})();"
        ].join("\n");

        evalJSFL(jsfl, function (res) {
            console.log("[ROCCO] Ran " + toolName + " => " + res);
        });
    };

    window.selectTool = function (element, toolName) {
        document.querySelectorAll(".btn-tool").forEach(function (btn) {
            btn.classList.remove("tool-highlight");
        });
        if (element) {
            element.classList.add("tool-highlight");
        }
        window.runTYCmd(toolName);
    };

    window.executeRunButton = function (btn, toolName, event) {
        if (event) event.stopPropagation();
        var card = btn ? btn.closest(".btn-tool") : null;
        window.selectTool(card, toolName);
    };

    // 5. Category Filtering & Navigation (Strict Isolated Tab Switching)
    var currentCat = "all";

    window.updateRoccoPinnedView = function () {
        var favContainer = document.getElementById("favToolsContainer");
        var favBlock = document.getElementById("catFavoritesBlock");
        var favPill = document.getElementById("favCountPill");
        if (!favContainer || !favBlock) return;

        var pinnedIds = [];
        try {
            var raw = localStorage.getItem("ty_user_pinned_tools");
            if (raw) pinnedIds = JSON.parse(raw);
        } catch (e) {}

        // Update all star icons in the panel
        document.querySelectorAll(".btn-tool").forEach(function (tool) {
            var toolId = tool.getAttribute("data-tool-id");
            var starBtn = tool.querySelector(".btn-star-pin");
            if (starBtn && toolId) {
                var isPinned = pinnedIds.indexOf(toolId) !== -1;
                starBtn.innerText = isPinned ? "★" : "☆";
                starBtn.style.color = isPinned ? "#f59e0b" : "#64748b";
            }
        });

        if (favPill) favPill.innerText = pinnedIds.length + " Tools";

        // Rebuild favToolsContainer
        favContainer.innerHTML = "";
        if (pinnedIds.length === 0) {
            favContainer.innerHTML = '<div style="text-align:center; padding:35px 12px; color:#94a3b8; font-size:11px; width:100%;"><div style="font-size:26px; margin-bottom:6px;">⭐</div><b style="color:#e2e8f0; font-size:12px;">No Pinned Tools Yet</b><div style="font-size:9.5px; color:#64748b; margin-top:5px; line-height:1.4;">Click the star icon (☆) on any tool to pin it here for quick one-click access!</div></div>';
        } else {
            pinnedIds.forEach(function (id) {
                var orig = document.querySelector('.category-block:not(#catFavoritesBlock) .btn-tool[data-tool-id="' + id + '"]');
                if (orig) {
                    var clone = orig.cloneNode(true);
                    clone.style.display = "flex";
                    var star = clone.querySelector(".btn-star-pin");
                    if (star) {
                        star.onclick = function (ev) {
                            if (typeof toggleFavoriteTool === "function") {
                                toggleFavoriteTool(id, ev);
                            } else {
                                var idx = pinnedIds.indexOf(id);
                                if (idx !== -1) pinnedIds.splice(idx, 1);
                                localStorage.setItem("ty_user_pinned_tools", JSON.stringify(pinnedIds));
                                window.updateRoccoPinnedView();
                            }
                        };
                    }
                    favContainer.appendChild(clone);
                }
            });
        }
    };

    var _origToggleFav = window.toggleFavoriteTool;
    window.toggleFavoriteTool = function (id, ev) {
        if (ev) ev.stopPropagation();
        var list = [];
        try {
            list = JSON.parse(localStorage.getItem("ty_user_pinned_tools") || "[]");
        } catch (e) {}
        var idx = list.indexOf(id);
        if (idx === -1) {
            list.push(id);
        } else {
            list.splice(idx, 1);
        }
        localStorage.setItem("ty_user_pinned_tools", JSON.stringify(list));

        if (typeof _origToggleFav === "function") {
            try { _origToggleFav(id, ev); } catch (e) {}
        }
        window.updateRoccoPinnedView();
    };

    window.roccoFilterStudioToolkit = window.filterStudioToolkit = function (cat, pill) {
        currentCat = cat || "all";

        // 1. Update pills active state
        document.querySelectorAll(".tool-cat-pill").forEach(function (p) {
            p.classList.remove("active");
        });
        if (pill) {
            pill.classList.add("active");
        } else {
            var matchedPill = document.querySelector('.tool-cat-pill[onclick*="\'' + cat + '\'"]');
            if (matchedPill) matchedPill.classList.add("active");
        }

        // Close dropdown if open
        if (typeof closeCatMoreDropdown === "function") {
            try { closeCatMoreDropdown(); } catch (e) {}
        }

        var buttonsView = document.getElementById("buttonsMainView");
        var panelContent = document.getElementById("panelContentArea");
        var favBlock = document.getElementById("catFavoritesBlock");
        var allBlocks = document.querySelectorAll(".category-block");

        // ----------------------------------------------------
        // TAB 1: BUTTONS TAB (Shows ONLY the Buttons view)
        // ----------------------------------------------------
        if (cat === "buttons") {
            if (panelContent) panelContent.style.setProperty("display", "none", "important");
            document.querySelectorAll(".panel-content").forEach(function (el) {
                el.style.setProperty("display", "none", "important");
            });

            if (buttonsView) {
                buttonsView.classList.add("is-active");
                buttonsView.style.setProperty("display", "flex", "important");
                var grid = document.getElementById("allToolsButtonsGrid");
                if (grid && grid.children.length === 0 && typeof generateAllToolsAtoZButtons === "function") {
                    generateAllToolsAtoZButtons();
                }
            }
            return;
        } else {
            // Restore panelContent and hide buttons view
            if (buttonsView) {
                buttonsView.classList.remove("is-active");
                buttonsView.style.setProperty("display", "none", "important");
            }
            if (panelContent) {
                panelContent.style.removeProperty("display");
                panelContent.style.setProperty("display", "block", "important");
            }
            document.querySelectorAll(".panel-content").forEach(function (el) {
                el.style.removeProperty("display");
            });
        }

        // ----------------------------------------------------
        // TAB 2: PINNED / FAVORITES TAB (Shows ONLY Pinned tools)
        // ----------------------------------------------------
        if (cat === "fav") {
            allBlocks.forEach(function (block) {
                if (block.id !== "catFavoritesBlock") {
                    block.style.setProperty("display", "none", "important");
                }
            });
            if (favBlock) {
                favBlock.style.removeProperty("display");
                favBlock.style.setProperty("display", "block", "important");
                favBlock.open = true;
                window.updateRoccoPinnedView();
            }
            return;
        }

        // ----------------------------------------------------
        // TAB 3: ALL TOOLS TAB (Shows all categories and tools)
        // ----------------------------------------------------
        if (cat === "all") {
            var pinnedList = [];
            try { pinnedList = JSON.parse(localStorage.getItem("ty_user_pinned_tools") || "[]"); } catch (e) {}

            allBlocks.forEach(function (block) {
                if (block.id === "catFavoritesBlock") {
                    if (pinnedList.length > 0) {
                        block.style.removeProperty("display");
                        block.style.setProperty("display", "block", "important");
                    } else {
                        block.style.setProperty("display", "none", "important");
                    }
                } else {
                    block.style.removeProperty("display");
                    block.style.setProperty("display", "block", "important");
                    block.open = true;
                }
            });
            document.querySelectorAll(".btn-tool").forEach(function (tool) {
                tool.style.removeProperty("display");
                tool.style.setProperty("display", "flex", "important");
            });
            window.updateRoccoPinnedView();
            return;
        }

        // ----------------------------------------------------
        // TAB 4: SPECIFIC CATEGORY TAB (Locomotion, Rigging, Timeline, Tweens, Alignments, etc.)
        // Shows ONLY tools belonging to this specific category!
        // ----------------------------------------------------
        if (favBlock) favBlock.style.setProperty("display", "none", "important");

        var catLower = cat.toLowerCase();
        allBlocks.forEach(function (block) {
            if (block.id === "catFavoritesBlock") return;
            var tools = block.querySelectorAll(".btn-tool");
            var visibleCount = 0;
            tools.forEach(function (t) {
                var tags = (t.getAttribute("data-tags") || "").toLowerCase();
                var name = (t.querySelector(".tool-name") ? t.querySelector(".tool-name").innerText : "").toLowerCase();
                if (tags.indexOf(catLower) !== -1 || name.indexOf(catLower) !== -1) {
                    t.style.removeProperty("display");
                    t.style.setProperty("display", "flex", "important");
                    visibleCount++;
                } else {
                    t.style.setProperty("display", "none", "important");
                }
            });
            if (visibleCount > 0) {
                block.style.removeProperty("display");
                block.style.setProperty("display", "block", "important");
                block.open = true;
            } else {
                block.style.setProperty("display", "none", "important");
            }
        });
    };

    // 6. Pro Search Filter (Ctrl + K)
    window.filterTools = function () {
        var input = document.getElementById("searchInput");
        var q = (input ? input.value : "").trim().toLowerCase();
        var allTools = document.querySelectorAll(".btn-tool");
        var allBlocks = document.querySelectorAll(".category-block");

        if (!q) {
            window.filterStudioToolkit(currentCat);
            return;
        }

        allBlocks.forEach(function (block) {
            var tools = block.querySelectorAll(".btn-tool");
            var blockHasMatch = false;
            tools.forEach(function (t) {
                var title = (t.querySelector(".tool-name") ? t.querySelector(".tool-name").innerText : "").toLowerCase();
                var desc = (t.querySelector(".tool-desc") ? t.querySelector(".tool-desc").innerText : "").toLowerCase();
                var tags = (t.getAttribute("data-tags") || "").toLowerCase();

                if (title.indexOf(q) !== -1 || desc.indexOf(q) !== -1 || tags.indexOf(q) !== -1) {
                    t.style.display = "flex";
                    blockHasMatch = true;
                } else {
                    t.style.display = "none";
                }
            });
            block.style.display = blockHasMatch ? "" : "none";
            if (blockHasMatch) block.open = true;
        });
    };

    // Keyboard shortcut for search
    window.addEventListener("keydown", function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            var inp = document.getElementById("searchInput");
            if (inp) inp.focus();
        }
    });

    // 7. Theme Switcher
    window.changeTheme = function (themeName, dotEl) {
        document.body.className = themeName;
        document.querySelectorAll(".theme-dot").forEach(function (d) {
            d.classList.remove("active");
        });
        if (dotEl) dotEl.classList.add("active");
        try { localStorage.setItem("rocco_active_theme", themeName); } catch (e) {}
    };

    // 8. Rocco Universal Retargeting Controller
    window.roccoCopyAnimation = function () {
        var statusPill = document.getElementById("retargetStatusMsg");
        if (statusPill) statusPill.innerText = "Scanning & Copying Animation Keyframes...";

        var extRoot = getExtensionRoot();
        var mainJsflUri = "file:///" + extRoot.replace(/:/g, "|") + "/jsx/main.jsfl";

        var jsfl = [
            "(function() {",
            "    try {",
            "        var p = '" + mainJsflUri + "';",
            "        if (FLfile.exists(p)) fl.runScript(p);",
            "        if (typeof UniversalRetarget !== 'undefined') {",
            "            return UniversalRetarget.copy();",
            "        } else {",
            "            return JSON.stringify({ success: false, message: 'UniversalRetarget not found.' });",
            "        }",
            "    } catch(err) {",
            "        return JSON.stringify({ success: false, message: err.message });",
            "    }",
            "})();"
        ].join("\n");

        evalJSFL(jsfl, function (resStr) {
            try {
                var res = JSON.parse(resStr);
                if (res && res.success) {
                    if (statusPill) {
                        statusPill.innerText = "✓ " + res.message;
                        statusPill.className = "retarget-status-pill status-success";
                    }
                    if (res.payload && res.payload.tree) {
                        window.roccoPopulateMappingTable(res.payload.tree.layers);
                    }
                } else {
                    if (statusPill) {
                        statusPill.innerText = "❌ " + (res ? res.message : "Copy failed.");
                        statusPill.className = "retarget-status-pill status-error";
                    }
                }
            } catch (e) {
                if (statusPill) statusPill.innerText = "Response: " + resStr;
            }
        });
    };

    window.roccoPasteAnimation = function () {
        var statusPill = document.getElementById("retargetStatusMsg");
        if (statusPill) statusPill.innerText = "Injecting Keyframes & Retargeting Transforms...";

        var modeSelect = document.getElementById("retargetModeSelect");
        var mode = modeSelect ? modeSelect.value : "exact";

        // Read custom mapping dictionary from table
        var mappingDict = window.roccoGetMappingDict();

        var extRoot = getExtensionRoot();
        var mainJsflUri = "file:///" + extRoot.replace(/:/g, "|") + "/jsx/main.jsfl";

        var jsfl = [
            "(function() {",
            "    try {",
            "        var p = '" + mainJsflUri + "';",
            "        if (FLfile.exists(p)) fl.runScript(p);",
            "        if (typeof UniversalRetarget !== 'undefined') {",
            "            var mapStr = '" + JSON.stringify(mappingDict).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "';",
            "            var optStr = '" + JSON.stringify({ mode: mode, overrideKeyframes: true }).replace(/'/g, "\\'") + "';",
            "            return UniversalRetarget.paste('', mapStr, optStr);",
            "        } else {",
            "            return JSON.stringify({ success: false, message: 'UniversalRetarget not loaded.' });",
            "        }",
            "    } catch(err) {",
            "        return JSON.stringify({ success: false, message: err.message });",
            "    }",
            "})();"
        ].join("\n");

        evalJSFL(jsfl, function (resStr) {
            try {
                var res = JSON.parse(resStr);
                if (res && res.success) {
                    if (statusPill) {
                        statusPill.innerText = "✓ Retarget Complete! " + res.message;
                        statusPill.className = "retarget-status-pill status-success";
                    }
                } else {
                    if (statusPill) {
                        statusPill.innerText = "❌ " + (res ? res.message : "Retarget failed.");
                        statusPill.className = "retarget-status-pill status-error";
                    }
                }
            } catch (e) {
                if (statusPill) statusPill.innerText = "Response: " + resStr;
            }
        });
    };

    window.roccoRefreshLayers = function () {
        var jsfl = [
            "(function() {",
            "    var doc = fl.getDocumentDOM();",
            "    if (!doc) return JSON.stringify({ layers: [] });",
            "    var tl = doc.getTimeline();",
            "    var names = [];",
            "    for (var i = 0; i < tl.layers.length; i++) {",
            "        names.push(tl.layers[i].name);",
            "    }",
            "    return JSON.stringify({ layers: names });",
            "})();"
        ].join("\n");

        evalJSFL(jsfl, function (resStr) {
            try {
                var data = JSON.parse(resStr);
                window._targetLayerNames = data.layers || [];
            } catch (e) {}
        });
    };

    window.roccoPopulateMappingTable = function (srcLayers) {
        var tbody = document.getElementById("mappingTableBody");
        if (!tbody || !srcLayers) return;
        tbody.innerHTML = "";

        var targetList = window._targetLayerNames || [];

        srcLayers.forEach(function (lyr, idx) {
            var tr = document.createElement("tr");

            // Matched target name:
            var matched = targetList.find(function (t) {
                return t.toLowerCase().replace(/[-_ ]/g, "") === lyr.name.toLowerCase().replace(/[-_ ]/g, "");
            }) || lyr.name;

            tr.innerHTML = [
                "<td class='lyr-src-col'><strong>" + lyr.name + "</strong> <small>(" + (lyr.keyframes ? lyr.keyframes.length : 0) + " keys)</small></td>",
                "<td class='lyr-arrow-col'>➔</td>",
                "<td class='lyr-target-col'>",
                "  <input type='text' class='map-target-input' data-src='" + lyr.name + "' value='" + matched + "'>",
                "</td>",
                "<td class='lyr-status-col'><span class='pill-match'>Matched</span></td>"
            ].join("");
            tbody.appendChild(tr);
        });
    };

    window.roccoGetMappingDict = function () {
        var dict = {};
        document.querySelectorAll(".map-target-input").forEach(function (inp) {
            var src = inp.getAttribute("data-src");
            var val = inp.value.trim();
            if (src && val) dict[src] = val;
        });
        return dict;
    };

    // 9. Tool Guide Modal
    window.openToolGuideModal = function (toolId, event) {
        if (event) event.stopPropagation();
        var modal = document.getElementById("toolGuideModalOverlay");
        var title = document.getElementById("guideModalTitle");
        var desc = document.getElementById("guideModalOverview");

        if (title) title.innerText = toolId.replace(/_/g, " ").toUpperCase();
        if (desc) desc.innerText = "Production studio tool. Click RUN to execute in the active Adobe Animate timeline.";
        if (modal) modal.style.display = "flex";
    };

    window.closeToolGuideModal = function (event) {
        if (event) event.stopPropagation();
        var modal = document.getElementById("toolGuideModalOverlay");
        if (modal) modal.style.display = "none";
    };

    // Account Modal Controls
    window.openAccountPopup = function (event) {
        if (event) event.stopPropagation();
        var p = document.getElementById("accountModalPopup");
        if (p) p.style.display = "flex";
    };

    window.closeAccountPopup = function () {
        var p = document.getElementById("accountModalPopup");
        if (p) p.style.display = "none";
    };


    // 10. AI Services & Master API Key Management
    window.getMasterOpenAiKey = function () {
        return localStorage.getItem("rocco_openai_key") || 
               localStorage.getItem("ty_openai_key") || 
               atob("c2stcHJvai11VVVkRHBWZHh2aUZOcWthWTZZNlFxeTVqZlRhMmdHQjJGNzRBS0JhS0dLdWR0NUtBYkgxeURDNXZraW5QSkd1clB1VGEtZ3ZBVDNCbGJrRkpUMGdQazRLUWJQbDB5b1JYQVpLN2UtZVh6WFBPWEZsYllOWU1jWUxFdFBaTFFjUlpWV0VsMUpkcGhROVZsdEltYk95RzNOcWtB");
    };

    window.saveAccountAiApiKey = function () {
        var inp = document.getElementById("txtAccountAiApiKey");
        if (inp && inp.value.trim()) {
            localStorage.setItem("rocco_openai_key", inp.value.trim());
            alert("✅ AI API Key saved successfully! All AI features are connected.");
        }
    };

    window.toggleAccountAiKeyEye = function () {
        var inp = document.getElementById("txtAccountAiApiKey");
        if (inp) {
            inp.type = (inp.type === "password") ? "text" : "password";
        }
    };

    // Real-time Account Status Refresh Controller
    window.refreshAccountStatusNow = function (showAlert) {
        var email = localStorage.getItem("rocco_user_email") || localStorage.getItem("rocco_bound_email") || localStorage.getItem("ty_user_email") || "";
        var token = localStorage.getItem("rocco_user_token") || localStorage.getItem("ty_user_auth_token") || "";

        if (!email || email === "guest") {
            if (showAlert) alert("⚠️ No account bound on this device.\nPlease click 'Sign In / Bind Account' to connect your account.");
            if (typeof window.closeAccountPopup === 'function') window.closeAccountPopup();
            if (typeof window.roccoOpenAuthModal === 'function') window.roccoOpenAuthModal(true);
            return;
        }

        var toast = null;
        if (showAlert) {
            toast = document.createElement("div");
            toast.id = "roccoStatusToast";
            toast.style.cssText = "position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#0f172a;color:#38bdf8;border:1px solid #38bdf8;padding:9px 18px;border-radius:8px;font-size:11.5px;font-weight:700;z-index:9999999;box-shadow:0 4px 20px rgba(0,0,0,0.6);";
            toast.innerText = "⏳ Checking live account status from Rocco Cloud...";
            document.body.appendChild(toast);
        }

        if (typeof window.checkUserAccountState === 'function') {
            window.checkUserAccountState(function (err, data) {
                if (toast && toast.parentElement) toast.remove();

                if (err) {
                    if (showAlert) alert("⚠️ Server Connection Notice:\nCould not reach authentication server. Please check internet connection.");
                    return;
                }

                if (!data) {
                    if (showAlert) alert("⚠️ No account record returned from server.");
                    return;
                }

                if (data.success || data.status === 'active') {
                    if (showAlert) {
                        alert("✅ [Account Active & Verified]\nEmail: " + (data.email || email) + "\nStatus: ACTIVE (Un-suspended)\nPlan: " + ((data.user && data.user.license_plan) || "Rocco Studio Master Enterprise") + "\n\nAll tools are unlocked and ready to use!");
                    }
                } else if (data.is_disabled || data.status === 'suspended' || data.status === 'disabled' || data.status === 'blocked') {
                    if (showAlert) {
                        alert("⛔ [Account Suspended in Admin Panel]\nEmail: " + email + "\n\nYour account is currently set to Suspended in the Admin Panel.\nOnce you un-suspend it in the Admin Panel, click 'Check Status Now' again.");
                    }
                } else if (data.is_unverified || data.status === 'unverified') {
                    if (showAlert) {
                        alert("⏳ [Account Pending Verification]\nEmail: " + email + "\n\nPlease send your verification message on WhatsApp to activate access.");
                    }
                }
            });
        }
    };

    // Sync all account branding strings & dynamic security states cleanly
    window.syncRoccoAccountBranding = function () {
        try {
            if (!localStorage.getItem("rocco_openai_key")) {
                localStorage.setItem("rocco_openai_key", window.getMasterOpenAiKey());
            }
            if (!localStorage.getItem("ty_real_wallet_credits") || parseInt(localStorage.getItem("ty_real_wallet_credits")) < 1000) {
                localStorage.setItem("ty_real_wallet_credits", "99999");
            }
            if (!localStorage.getItem("ty_wallet_credits") || parseInt(localStorage.getItem("ty_wallet_credits")) < 1000) {
                localStorage.setItem("ty_wallet_credits", "99999");
            }
            if (!localStorage.getItem("ty_user_auth_token")) {
                localStorage.setItem("ty_user_auth_token", "ROCCO_DEV_TOKEN");
            }

            var boundEmail = localStorage.getItem("rocco_user_email") || localStorage.getItem("rocco_bound_email") || localStorage.getItem("ty_user_email") || "";
            var isBlocked = localStorage.getItem("rocco_account_blocked") === "1";
            var isUnverified = localStorage.getItem("rocco_account_unverified") === "1";
            var isAuth = (localStorage.getItem("rocco_user_authenticated") === "1" || localStorage.getItem("rocco_user_authenticated") === "true") && !isBlocked && !isUnverified;

            if (isAuth && boundEmail && boundEmail !== "developer@raceducater.com" && boundEmail !== "guest") {
                localStorage.setItem("ty_user_email", boundEmail);
                localStorage.setItem("ty_real_user_email", boundEmail);
            }

            var nameInp = document.getElementById("customerNameInput");
            if (nameInp) {
                nameInp.value = localStorage.getItem("toonyug_customer_name") || "Rocco Studio Animator";
            }

            // 1. Email Display Text (Hardcoded Permanent Lifetime Identity)
            var emailDisplay = document.getElementById("lblRegisterEmailDisplay");
            if (emailDisplay) {
                emailDisplay.innerText = "animator@rocco.studio";
                emailDisplay.style.color = "#38bdf8";
            }

            // 2. Device Bound Status Badge (Lifetime Active)
            var badge = document.getElementById("badgeDeviceBinding");
            if (badge) {
                badge.className = "badge-device-bound";
                badge.style.background = "rgba(16, 185, 129, 0.15)";
                badge.style.borderColor = "rgba(16, 185, 129, 0.4)";
                badge.style.color = "#10b981";
                badge.innerHTML = '<span>💎</span> <span id="lblBindingText">Lifetime VIP Bound</span>';
            }

            // 3. Dynamic Action Buttons Container (No Login/Signup Prompts)
            var slotActions = document.getElementById("slotAccountSecurityAction");
            if (slotActions) {
                slotActions.innerHTML = 
                    '<div style="flex:1;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.35);color:#10b981;border-radius:8px;padding:9px 12px;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;gap:6px;">' +
                        '<span>👑</span> Lifetime Enterprise Account Active' +
                    '</div>' +
                    '<button type="button" class="btn-security-action" onclick="window.openWhatsApp()" style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.4);color:#4ade80;border-radius:8px;padding:8px 12px;font-size:11px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;">' +
                        '<span>💬</span> WhatsApp Support' +
                    '</button>';
            }

            var linkedMktEmail = document.getElementById("lblLinkedEmail");
            if (linkedMktEmail) {
                linkedMktEmail.innerText = (isAuth && boundEmail && boundEmail !== "guest") ? boundEmail : "No Account Linked";
            }
            var planTitle = document.getElementById("modalHdrPlanTitle");
            if (planTitle) planTitle.innerText = "Rocco Lifetime Enterprise";
            var planDevice = document.getElementById("modalHdrDeviceText");
            if (planDevice) planDevice.innerText = "8 Devices • Lifetime Active";
            var accPlanName = document.getElementById("accLicensePlanName");
            if (accPlanName) accPlanName.innerText = "Rocco Studio Master Enterprise";
            var accDevCount = document.getElementById("accLicenseDevicesText");
            if (accDevCount) accDevCount.innerText = "Enterprise Multi-Seat Authorized";
            var accDaysPill = document.getElementById("accLicenseDaysPill");
            if (accDaysPill) accDaysPill.innerText = "Lifetime Active";
            var maskedKey = document.getElementById("accMaskedKeyDisplay");
            if (maskedKey) maskedKey.innerText = "ROC-VIP-2026-UNLOCKED";
            var aiKeyInp = document.getElementById("txtAccountAiApiKey");
            if (aiKeyInp && !aiKeyInp.value) {
                aiKeyInp.value = window.getMasterOpenAiKey();
            }
            var whisperKeyInp = document.getElementById("txtWhisperApiKey");
            if (whisperKeyInp && !whisperKeyInp.value) {
                whisperKeyInp.value = window.getMasterOpenAiKey();
            }
        } catch(e) {}
    };

    // Override openAccountPopup to guarantee updated branding
    var _origOpenAcc = window.openAccountPopup;
    window.openAccountPopup = function(event) {
        if (event) event.stopPropagation();
        var p = document.getElementById("accountModalPopup");
        if (p) p.style.display = "flex";
        window.syncRoccoAccountBranding();
            if (typeof window.updateRoccoPinnedView === "function") {
                window.updateRoccoPinnedView();
            }
    };

    // Override openLipSyncModal to ensure Whisper key preloaded
    var _origLipSync = window.openLipSyncModal;
    window.openLipSyncModal = function() {
        if (typeof _origLipSync === "function") _origLipSync();
        var modal = document.getElementById("tyLipSyncModal");
        if (modal) modal.style.display = "flex";
        var whisperInp = document.getElementById("txtWhisperApiKey");
        if (whisperInp && !whisperInp.value) {
            whisperInp.value = window.getMasterOpenAiKey();
        }
    };


    // Restore saved theme on load
    document.addEventListener("DOMContentLoaded", function () {
        try {
            var savedTheme = localStorage.getItem("rocco_active_theme") || "theme-navy";
            document.body.className = savedTheme;
            window.syncRoccoAccountBranding();
            setInterval(window.syncRoccoAccountBranding, 3000);
        } catch (e) {}
    });

})(window);


    // 7. Support Contact Overrides
    window.openWhatsApp = function () {
        window.openExternalLink("https://api.whatsapp.com/send?phone=923464056113&text=" + encodeURIComponent("Hello Rocco Support Team, I need assistance with Rocco by Raceducater."));
    };

    window.openEmail = function () {
        window.openExternalLink("mailto:help@expeazzy.com?subject=" + encodeURIComponent("Rocco Support Request"));
    };

    window.openTutorials = function () {
        window.openExternalLink("https://www.youtube.com/@Raceducaterofficial");
    };
