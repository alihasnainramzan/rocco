/**
 * Rocco Studio Toolkits - Permanent Lifetime Offline Account Provider
 * E:\rocco\js\rocco_auth_modal.js
 * 
 * Auto-activates permanent local lifetime account credentials without requiring
 * external server sign-in, account creation, or login modals.
 */

(function () {
    'use strict';

    // 1. Immediately seed and enforce local lifetime enterprise credentials
    function ensureLifetimeCredentials() {
        try {
            localStorage.setItem('rocco_user_authenticated', '1');
            localStorage.setItem('rocco_user_name', 'Rocco Studio Animator');
            localStorage.setItem('rocco_user_email', 'animator@rocco.studio');
            localStorage.setItem('rocco_bound_email', 'animator@rocco.studio');
            localStorage.setItem('ty_user_email', 'animator@rocco.studio');
            localStorage.setItem('rocco_user_phone', '+92 346 4056113');
            localStorage.setItem('rocco_user_token', 'ROC-LIFETIME-ENTERPRISE-TOKEN');
            localStorage.setItem('rocco_license_plan', 'Rocco Studio Master Enterprise');
            localStorage.setItem('rocco_license_key', 'ROC-VIP-2026-UNLOCKED');
            localStorage.setItem('toonyug_license_key', 'ROC-VIP-2026-UNLOCKED');
            localStorage.setItem('toonyug_customer_name', 'Rocco Studio Animator');
            localStorage.removeItem('rocco_account_blocked');
            localStorage.removeItem('rocco_account_unverified');
        } catch (e) {}
    }

    ensureLifetimeCredentials();

    // 2. Hide and suppress any auth modals or security lock screens
    function removeLockScreens() {
        ensureLifetimeCredentials();
        const overlay = document.getElementById('roccoAuthOverlay');
        if (overlay) {
            overlay.style.display = 'none';
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }
        const lock = document.getElementById('roccoSecurityLockScreen');
        if (lock) {
            lock.style.display = 'none';
            if (lock.parentNode) lock.parentNode.removeChild(lock);
        }
    }

    // 3. Inject CSS to permanently guarantee no modal or lock screen appears
    function injectAntiLockStyles() {
        if (document.getElementById('roccoAntiLockStyles')) return;
        const style = document.createElement('style');
        style.id = 'roccoAntiLockStyles';
        style.textContent = `
            #roccoAuthOverlay,
            #roccoSecurityLockScreen,
            .rocco-auth-overlay,
            .rocco-security-lock {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    injectAntiLockStyles();

    // 4. Safe external link launcher
    window.roccoOpenExternal = function (url) {
        if (!url) return;
        try {
            if (window.cep && window.cep.util && window.cep.util.openURLInDefaultBrowser) {
                window.cep.util.openURLInDefaultBrowser(url);
                return;
            }
        } catch (e) {}
        try {
            if (typeof require !== 'undefined') {
                const child_process = require('child_process');
                if (process.platform === 'win32') {
                    child_process.exec('start "" "' + url.replace(/"/g, '""') + '"');
                    return;
                }
            }
        } catch (e) {}
        window.open(url, '_blank');
    };

    // 5. Auth API compatibility layer (Always Authenticated & Lifetime Unlocked)
    window.roccoIsAuthenticated = function () {
        return true;
    };

    window.roccoRequireAuth = function (actionCallback) {
        ensureLifetimeCredentials();
        removeLockScreens();
        if (typeof actionCallback === 'function') actionCallback();
        return true;
    };

    window.syncSecurityLockUI = function () {
        ensureLifetimeCredentials();
        removeLockScreens();
    };

    // If any code or button tries to open the auth modal, open the Account Settings popup instead
    window.roccoOpenAuthModal = function () {
        removeLockScreens();
        if (typeof window.openAccountPopup === 'function') {
            window.openAccountPopup();
        }
    };

    window.roccoCloseAuthModal = function () {
        removeLockScreens();
    };

    window.roccoSwitchAuthTab = function () {};

    window.roccoHandleRegister = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        removeLockScreens();
    };

    window.roccoHandleLogin = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        removeLockScreens();
    };

    // Header avatar click directly opens Account & Settings
    window.openAccountFromHeader = function (event) {
        if (event && event.stopPropagation) event.stopPropagation();
        removeLockScreens();
        if (typeof window.openAccountPopup === 'function') {
            window.openAccountPopup(event);
        }
    };

    // Sign out handler: informs user license is permanently offline
    window.roccoSignOutAccount = function () {
        alert("👑 Rocco Studio Master Enterprise\n\nYour license is permanently activated locally with lifetime offline access.\nSign out is not required.");
    };

    // Generic QR Modal for Support / WhatsApp inquiry
    window.roccoShowGenericQrModal = function (opts) {
        const waPhone = (opts && opts.phone) || '923464056113';
        const msg = (opts && opts.message) || 'Hello Rocco Studio team, I am reaching out regarding Rocco Studio Master Enterprise.';
        const waLink = 'https://wa.me/' + waPhone + '?text=' + encodeURIComponent(msg);
        window.roccoOpenExternal(waLink);
    };

    window.roccoRequestKeyTransfer = function () {
        window.roccoShowGenericQrModal({
            message: "Hello Rocco Studio Team,\nI have Rocco Studio Master Enterprise lifetime license active on my workstation.\nKey: ROC-VIP-2026-UNLOCKED"
        });
    };
    window.requestDeactivation = window.roccoRequestKeyTransfer;

    window.roccoRenewSubscription = function () {
        window.roccoShowGenericQrModal({
            message: "Hello Rocco Studio Team,\nI am using Rocco Studio Master Enterprise Lifetime Edition."
        });
    };

    // 6. DOM Lifecycle listeners
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            ensureLifetimeCredentials();
            removeLockScreens();
            if (typeof window.syncRoccoAccountBranding === 'function') {
                window.syncRoccoAccountBranding();
            }
        });
    } else {
        ensureLifetimeCredentials();
        removeLockScreens();
        if (typeof window.syncRoccoAccountBranding === 'function') {
            window.syncRoccoAccountBranding();
        }
    }

})();
