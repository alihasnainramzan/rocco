/**
 * CSInterface - v11.0.0
 * Adobe Common Extensibility Platform Interface
 */

var CSInterface = function () {
};

/**
 * User data directory paths.
 */
CSInterface.prototype.SystemPath = {
    USER_DATA: "userData",
    COMMON_FILES: "commonFiles",
    MY_DOCUMENTS: "myDocuments",
    APPLICATION: "application",
    EXTENSION: "extension",
    HOST_APPLICATION: "hostApplication"
};

/**
 * Color types.
 */
CSInterface.prototype.ColorType = {
    RGB: "rgb",
    GRADIENT: "gradient"
};

/**
 * Retrieves the unique identifier of the application.
 */
CSInterface.prototype.getApplicationID = function () {
    var appId = this.getHostEnvironment().appId;
    return appId;
};

/**
 * Retrieves host environment information.
 */
CSInterface.prototype.getHostEnvironment = function () {
    var hostEnvStr = window.__adobe_cep__ ? window.__adobe_cep__.getHostEnvironment() : "{}";
    var hostEnv = JSON.parse(hostEnvStr);
    return hostEnv;
};

/**
 * Closes this extension.
 */
CSInterface.prototype.closeExtension = function () {
    if (window.__adobe_cep__) {
        window.__adobe_cep__.closeExtension();
    }
};

/**
 * Evaluates a JavaScript/JSFL script in the host application.
 *
 * @param script   The script string to execute.
 * @param callback Optional. Function to receive the execution return value.
 */
CSInterface.prototype.evalScript = function (script, callback) {
    if (callback === null || callback === undefined) {
        callback = function () {};
    }
    if (window.__adobe_cep__) {
        window.__adobe_cep__.evalScript(script, callback);
    } else {
        console.warn("[CSInterface Mock] evalScript called outside CEP runtime:\n" + script);
        callback("{\"success\":false,\"message\":\"Not in CEP runtime environment\"}");
    }
};

/**
 * Registers an event listener for CEP client events.
 */
CSInterface.prototype.addEventListener = function (type, listener, obj) {
    if (window.__adobe_cep__) {
        window.__adobe_cep__.addEventListener(type, listener, obj);
    }
};

/**
 * Removes an event listener for CEP client events.
 */
CSInterface.prototype.removeEventListener = function (type, listener, obj) {
    if (window.__adobe_cep__) {
        window.__adobe_cep__.removeEventListener(type, listener, obj);
    }
};

/**
 * Dispatches an event to the CEP runtime.
 */
CSInterface.prototype.dispatchEvent = function (event) {
    if (window.__adobe_cep__) {
        var eventStr = JSON.stringify(event);
        window.__adobe_cep__.dispatchEvent(eventStr);
    }
};

/**
 * Retrieves a system path.
 */
CSInterface.prototype.getSystemPath = function (pathType) {
    var path = "";
    if (window.__adobe_cep__) {
        path = decodeURI(window.__adobe_cep__.getSystemPath(pathType));
    }
    return path;
};

/**
 * Retrieves skin/theme information from the host.
 */
CSInterface.prototype.getHostCapabilities = function () {
    var hostCapabilitiesStr = window.__adobe_cep__ ? window.__adobe_cep__.getHostCapabilities() : "{}";
    return JSON.parse(hostCapabilitiesStr);
};

/**
 * Opens a page in the default external browser.
 */
CSInterface.prototype.openURLInDefaultBrowser = function (url) {
    if (window.cep && window.cep.util) {
        window.cep.util.openURLInDefaultBrowser(url);
    } else if (window.__adobe_cep__) {
        window.__adobe_cep__.openURLInDefaultBrowser(url);
    } else {
        window.open(url, '_blank');
    }
};

/**
 * Window resize helper.
 */
CSInterface.prototype.resizeContent = function (width, height) {
    if (window.__adobe_cep__) {
        window.__adobe_cep__.resizeContent(width, height);
    }
};
