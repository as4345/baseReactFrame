import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from "redux-immutable"
import thunk from 'redux-thunk'
import * as rds from '../reducers'

const reducers = combineReducers({
    public: rds.public,

})

//若生产跟开发环境都需要reduxDevTool工具则用这一句
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//若只需开发环境需要reduxDevTool工具则用这一句
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV != "production"
                            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
    reducers,
     composeEnhancers(applyMiddleware(thunk))
)

//console.log(store.getState())


store.subscribe(() =>{
        //console.log(store.getState())
    }
)
export default store