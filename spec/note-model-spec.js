(function(exports) {
    function testNoteText() {
        var note = new Note("Hello Notes");

        if(note.text !== "Hello Notes") {
            throw new Error("Not the right string");
        } else { console.log("Test passes!")}

    };

    function testNoteReturnText() {
        var note = new Note("Hello Notes");

        if(note.returnText() !== "Hello Notes") {
            throw new Error("Nothing returned")
        } else { console.log("Test passes!") }
    }

    testNoteText();
    testNoteReturnText();
})(this);