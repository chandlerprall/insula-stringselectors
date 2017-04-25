var InsulaStringSelectorsMiddleware = {
    getPartialStateParseSelector: function insulaStringSelectorsGetPartialStateParseSelector(args) {
        var selector = args[0];
        if (typeof selector === 'string') {
            selector = selector.split('.');
        }
        return [selector];
    },
    setPartialState: function insulaStringSelectorsSetPartialState(args) {
        var selector = args[0];
        var value = args[1];
        if (typeof selector === 'string') {
            selector = selector.split('.');
        }
        return [selector, value];
    },
    subscribeToState: function insulaStringSelectorsSubscribeToState(args) {
        var selectors = args[0].map(function(selector) {
            if (typeof selector === 'string') {
                selector = selector.split('.');
            }
            return selector;
        });
        var listener = args[1];
        return [selectors, listener];
    }
};

module.exports = InsulaStringSelectorsMiddleware;