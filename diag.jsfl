try {
    var doc = fl.getDocumentDOM();
    var out = [];
    if (!doc) {
        out.push("NO_DOC_OPEN");
    } else {
        out.push("Doc: " + doc.name);
        var tl = doc.getTimeline();
        out.push("Timeline: " + tl.name + " (" + tl.layerCount + " layers, " + tl.frameCount + " frames)");
        for (var i = 0; i < Math.min(tl.layerCount, 15); i++) {
            var lyr = tl.layers[i];
            var elInfo = "no frames";
            if (lyr.frames && lyr.frames.length > 0 && lyr.frames[0].elements && lyr.frames[0].elements.length > 0) {
                var el = lyr.frames[0].elements[0];
                elInfo = "type=" + el.elementType;
                if (el.elementType === "instance") {
                    elInfo += "/" + el.instanceType + "/" + el.symbolType + " name=" + (el.name || "unnamed");
                }
            }
            out.push("  Layer[" + i + "]: '" + lyr.name + "' (" + lyr.frames.length + " frames) -> " + elInfo);
        }
    }
    var uri = "file:///E|/rocco/diag_output.txt";
    FLfile.write(uri, out.join("\r\n"));
} catch (e) {
    FLfile.write("file:///E|/rocco/diag_output.txt", "ERROR: " + e.message + "\r\n" + e.stack);
}
