(function(exports) {
    function NoteController(noteList) {
        this.noteList = noteList;
        this.noteList.create("Default Note")
        this.noteListView = new NoteListView(this.noteList)
    };

    NoteController.prototype.insertHTML = function() {
        var noteListHTML = this.noteListView.getHTML()

          // gets element of "app" id
        var element = document.getElementById('app');  // innerHTML gets the actual html contents inside the element.

        return element.innerHTML = noteListHTML

        
    };


    exports.NoteController = NoteController;
})(this);