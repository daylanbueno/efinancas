import { createStore } from 'redux';

import reducers from './modules/rootReducer';

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devTools);

export default store;
