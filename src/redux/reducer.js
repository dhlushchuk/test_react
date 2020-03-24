import { combineReducers }  from 'redux'
import { userState, userLoginState, showSidebar, loadPage, changeBackgroundTheme } from './reducers'

export default combineReducers({ 
    userState, 
    userLoginState, 
    showSidebar, 
    loadPage, 
    changeBackgroundTheme 
})