(function(exports) {
    function testNoteListView() {
        var noteListView = new NoteListView(noteList = new NoteList())
        noteList.create("Favourite drink: Lucozade Sport")
        noteList.create("Favourite food: Hamburger")

        console.log(noteList)
        console.log(noteListView.getHTML())

        if(noteListView.getHTML() !== '<ul><li><div>Favourite drink: Lucozade Sport</div></li><li><div>Favourite food: Hamburger</div></li></ul>' ) {
            throw new Error("Sorry, I can't see the notes")
        } else { return console.log("Test passes!") }
    };

    testNoteListView();
})(this);