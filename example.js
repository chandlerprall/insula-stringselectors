const Store = require('insula');
const insulaStringSelectors = require('./index');

const store = new Store(
    {
        deeply: {
            nested: {
                object: 'foo'
            }
        }
    },
    [insulaStringSelectors]
);

const value = store.getPartialState('deeply.nested.object');
console.log(`deeply.nested.object started as ${value}`);

store.subscribeToState(
    ['deeply.nested.object'],
    ([deeplyNestedObject]) => {
        const value = store.getPartialState('deeply.nested.object');
        console.log(`deeply.nested.object is now ${value}`);
    }
);

store.setPartialState('deeply.nested.object', 'baz');