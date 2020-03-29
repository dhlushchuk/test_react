export const userState = (state = {}, action) => {
    switch (action.type) {
    case "ADD_USER" :
        return action.payload 
    default:
        return state
    }
}
export const showSidebar = (state = false, action) => {
    switch (action.type) {
    case "SHOW_SIDEBAR" :
        return  action.payload  
    default:
        return state
    }
}
export const loadPage = (state = false, action) => {
    switch (action.type) {
    case "LOAD_PAGE" :
        return action.payload 
    default:
        return state
    }
}
export const backgroundTheme = (state = "rgb(237, 238, 240)", action) => {
    switch (action.type) {
    case "CHANGE_BACKGROUND_COLOR" :
        return  action.payload 
    default:
        return state
    }
}