import React, { Component } from "react"
import { Link } from "react-router"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from 'components';
import { act_public } from 'actions'
import "./App.scss"
class App extends Component{
    
    render() {
       
        return (
            <div>
                首页
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state.get('public'));
    return {
        state:state.get('public')
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(
            {
                ...act_public
            },
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
