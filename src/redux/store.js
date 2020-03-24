import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
    userState: {},
    userLoginState: {},
    isShowedSidebar: false,
    isPageOnload: false,
    backgroundTheme: ""
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