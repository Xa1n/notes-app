(function(exports) {
    function testNoteText() {
        var note = new Note("Hello Notes");

        if(note.text !== "Hello Notes") {
            throw new Error("Not the right string");
        }

    };

    testNoteText();
})(this);