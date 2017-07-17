import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './reducers';

export default () => {
    const persistedState = undefined;

    const store = createStore(
        RootReducer,
        persistedState,
        applyMiddleware(
            thunkMiddleware
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            console.info('executing callback');
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};