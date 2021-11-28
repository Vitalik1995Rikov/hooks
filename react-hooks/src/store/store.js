import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer, {itt: 1});
store.subscribe(() => { console.log(store.getState())})

export { store };

