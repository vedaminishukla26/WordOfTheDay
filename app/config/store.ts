import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import ajax from "./ajax";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware<any, any, any, any>({
    dependencies: {
        ajax,
    },
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);
export type RootState = ReturnType<typeof store.getState>

export default store;