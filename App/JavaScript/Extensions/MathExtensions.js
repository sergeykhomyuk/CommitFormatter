(function(definition) {
    // RequireJS
    if (typeof define == "function") {
        define(definition);
        // CommonJS and <script>
    } else {
        definition();
    }
})(function() {

    if (!Math.randomInt)
        Math.randomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
});