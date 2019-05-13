(function(exports) {
    function testNoteList() {
        var noteList = new NoteList()
        noteList.create("Favourite drink: Lucozade Sport");

        if(noteList.returnNotes()[0].returnText() !== "Favourite drink: Lucozade Sport" ) {
            throw new Error("Sorry, try again.")
        } else { return console.log("Test passes!") }
    }

    testNoteList();
})(this);