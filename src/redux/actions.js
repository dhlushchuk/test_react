export const addUser = (user) => ({
    type: "ADD_USER",
    user
})
export const userAuthorization = (user) => ({
    type: "CHECK_USER_AUTHORIZATION",
    user
})
export const showSidebar = (isShowedSidebar) =>
({
    type: "SHOW_SIDEBAR",
    isShowedSidebar
})
export const loadPage = (isPageOnload) =>
({
    type: "LOAD_PAGE",
    isPageOnload
})
export const changeBackgroundTheme = (backgroundTheme) => 
({
    type: "CHANGE_BACKGROUND_COLOR",
    backgroundTheme
})