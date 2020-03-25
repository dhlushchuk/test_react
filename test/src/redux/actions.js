export const addUser = (user) => ({
    type: "ADD_USER",
    payload: user
})
export const userAuthorization = (user) => ({
    type: "CHECK_USER_AUTHORIZATION",
    payload: user
})
export const showSidebar = (isShowedSidebar) =>
({
    type: "SHOW_SIDEBAR",
    payload: isShowedSidebar
})
export const loadPage = (isPageOnload) =>
({
    type: "LOAD_PAGE",
    payload: isPageOnload
})
export const changeBackgroundTheme = (backgroundTheme) => 
({
    type: "CHANGE_BACKGROUND_COLOR",
    payload: backgroundTheme
})