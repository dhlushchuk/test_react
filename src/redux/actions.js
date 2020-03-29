export const addUser = (user) => ({
    type: "ADD_USER",
    payload: user
})
export const showSidebar = (bool) =>
({
    type: "SHOW_SIDEBAR",
    payload: bool
})
export const loadPage = (bool) =>
({
    type: "LOAD_PAGE",
    payload: bool
})
export const backgroundTheme = (color) => 
({
    type: "CHANGE_BACKGROUND_COLOR",
    payload: color
})