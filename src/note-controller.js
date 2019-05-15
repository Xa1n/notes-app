(function(exports) {
    function NoteController() {
        // gets id element of "app" and logs to console
        var elem = document.getElementById('app').innerHTML;  // innerHTML gets the actual html contents inside the element.
        // changes the value of "app" from "Hello" to "Howdy"
        console.log(elem);
    };

    exports.NoteController = NoteController;
})(this);