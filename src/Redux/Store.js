import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { rootreducer } from "./Reducer/Index";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./ReduxSaga/Rootsaga";

const sagaMiddleware = createSagaMiddleware()




const middlewares = [thunk , sagaMiddleware]


export const Configreducer = () =>{
    let store = createStore(rootreducer, applyMiddleware(...middlewares))
    sagaMiddleware.run(rootSaga)
    return store ;

}