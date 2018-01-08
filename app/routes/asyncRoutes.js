


//App容器
export const App = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/App/App').default)
    }, 'App')
}
