(function(){
    var dir = fl.configURI + "Commands/";
    if (!FLfile.exists(dir)) FLfile.createFolder(dir);
    
    var cfg = fl.configURI;
    var pHash = 5381;
    for (var i = 0; i < cfg.length; i++) {
        pHash = (((pHash << 5) + pHash) + cfg.charCodeAt(i)) | 0;
    }
    var h1 = Math.abs(pHash).toString(16).toUpperCase();
    var expTime = 4102444800000;
    var salt = "TY_ENTERPRISE_AIRTIGHT_2026_@#$";
    var combo = cfg + "#" + expTime + "#" + salt;
    var sHash = 5381;
    for (var j = 0; j < combo.length; j++) {
        sHash = (((sHash << 5) + sHash) + combo.charCodeAt(j)) | 0;
    }
    var h2 = Math.abs(sHash).toString(16).toUpperCase();
    
    var token = h1 + "||" + expTime + "||" + h2;
    FLfile.write(dir + "ty_license.dat", token);
    fl.trace("LICENSE_WRITTEN: " + token + " to " + dir + "ty_license.dat");
    fl.trace("CONFIG_URI: " + cfg);
})();
