import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
    userState: {},
    showSidebar: false,
    loadPage: false,
    backgroundTheme: "rgb(237, 238, 240)"
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