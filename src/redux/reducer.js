import { combineReducers }  from 'redux'
import { userState, showSidebar, loadPage,backgroundTheme } from './reducers'

export default combineReducers({ 
    userState, 
    showSidebar, 
    loadPage, 
    backgroundTheme 
})