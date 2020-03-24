export const userState = (state = {}, action) => {
    switch (action.type) {
    case "ADD_USER" :
        return action.user
    default:
        return state
    }
}
export const userLoginState = (state = {}, action) => {
    switch (action.type) {
    case "CHECK_USER_AUTHORIZATION" :
        return action.user
    default:
        return state
    }
}
export const showSidebar = (state = false, action) => {
    switch (action.type) {
    case "SHOW_SIDEBAR" :
        return  action.isShowedSidebar    
    default:
        return state
    }
}
export const loadPage = (state = false, action) => {
    switch (action.type) {
    case "LOAD_PAGE" :
        return action.isPageOnload
    default:
        return state
    }
}
export const changeBackgroundTheme = (state = "rgb(237, 238, 240)", action) => {
    switch (action.type) {
    case "CHANGE_BACKGROUND_COLOR" :
        return  action.backgroundTheme
    default:
        return state
    }
}