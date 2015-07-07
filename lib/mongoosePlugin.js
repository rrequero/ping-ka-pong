module.exports = function(schema) {
    schema.method('persist', function() {
        var model = this;

        return function(callback) {
            model.save(callback);
        };
    });
    schema.method('destroy', function() {
        var model = this;

        return function(callback) {
            model.remove(callback);
        };
    });
};