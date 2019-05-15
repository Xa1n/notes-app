(function(exports) {
    function NoteListView(noteList) {

    };

    NoteListView.prototype.getHTML = function() {

        var newList = noteList.list.map(i => i.returnText())

        return newList.join("</div></li><li><div>")
    }

    exports.NoteListView = NoteListView;
})(this);