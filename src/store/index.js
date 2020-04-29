import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux"
import thunk from "redux-thunk"


import detail from "./detail"
import collections from "./collections"
import comment from "./comment"
const reducer = combineReducers({
    //key-模块名称，value-该模块对应的reducer
    detail,
    collections,
    comment
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;