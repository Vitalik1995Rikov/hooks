import { createStore } from 'redux';

function reducer(state = { itt: 1}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                itt: state.itt + 1
            }
            case 'DECREMENT':
            return {
                ...state,
                itt: state.itt - 1
            }
            default:
                return state;
    }
}

const store = createStore(reducer, {itt: 1});
store.subscribe(() => { console.log(store.getState())})

export { store };

