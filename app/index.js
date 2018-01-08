import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'
import "./public/Iconfont/iconfont.js"
import './public/Reset/Reset.sass'
window.Promise = require('es6-promise').Promise //解决ie10报Promise未定义问题


render(<Routes />, document.getElementById("app"))