
import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from '../store'
import * as hooks from "./hooks"


//按需加载路由
import { 
    App
 } from "./asyncRoutes"


class Routes extends Component{
    render() {
        return(
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" getComponent={App}>
                        <IndexRoute  />
                    </Route>
                </Router>
            </Provider>
        )
    }
}
export default Routes