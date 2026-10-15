var doc = fl.getDocumentDOM();
var msg = "No doc";
if (doc) {
    msg = "Doc: " + doc.name + ", activeTimeline: " + (doc.getTimeline() ? doc.getTimeline().name : "none");
}
FLfile.write("file:///e|/rocco/test_out.txt", msg);
