(function(exports) {
    function NoteListView(noteList) {
        this.noteList = noteList
    };

    NoteListView.prototype.getHTML = function() {
        
        var openUl = "<ul><li><div>"
        var closeUl = "</div></li></ul>"
        var newList = noteList.list.map(i => i.returnText())

        return openUl + newList.join("</div></li><li><div>") + closeUl
    };

    exports.NoteListView = NoteListView;
})(this);