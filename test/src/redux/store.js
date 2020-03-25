import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
    userState: {},
    userLoginState: {},
    showSidebar: false,
    loadPage: false,
    changeBackgroundTheme: ""
}
const Store = createStore(reducer,
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        initialState
)
Store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(Store.getState())
})

export default Store