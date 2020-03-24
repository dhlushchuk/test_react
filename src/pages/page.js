import React, { useState, useEffect } from 'react'
import './page.css'
import PropTypes from 'prop-types'
import { addUser, userAuthorization, loadPage } from '../redux/actions'

const user = JSON.parse(localStorage.getItem('redux-store'))
const useBeforeFirstRender = (f) => {
    const [hasRendered, setHasRendered] = useState(false)
    useEffect(() => setHasRendered(true), [hasRendered])
    if (!hasRendered) {
      f()
    }
}

const Page = ({ store }) => {
    useBeforeFirstRender(() => {
        store.dispatch(userAuthorization({userFirstName: store.getState().userState.lastname, userLastName: store.getState().userState.username}))
    })
    const [pageState, setPageState] = useState(false)
    useEffect(() => {
        setPageState(true)
        store.dispatch(loadPage(pageState))
    },[pageState, store])
    let usernameEdit, usernameSave, inputUsername, inputLastname
    const getRegistrationDate = (date) => {
        return (new Date().getDate()) - (new Date(date).getDate())
    }
    return (
        <div className="page-main">
            <div className="username-edit" ref={div => usernameEdit = div}>
            <p>{store.getState().userLoginState.userLastName} {store.getState().userLoginState.userFirstName}</p>
            <button className="button-edit-name" onClick={() => {
                usernameEdit.className = "username-edit-hide"
                usernameSave.className = "username-save-show"
            }}>Редактировать</button>
        </div>
        <div className="username-save" ref={div => usernameSave = div}>
            <form onSubmit={(e) => {
                usernameEdit.className = "username-edit"
                usernameSave.className = "username-save"
                user.userState.username = inputUsername.value
                user.userState.lastname = inputLastname.value
                store.dispatch(addUser(user.userState))
                store.dispatch(userAuthorization({userFirstName: inputLastname.value, userLastName: inputUsername.value}))
                e.preventDefault()
            }}>
                <input minLength="1" maxLength="15" className="inputs" ref={input => inputUsername = input} defaultValue={store.getState().userLoginState.userLastName} type="text" placeholder="Имя" autoComplete="off" required/>
                <input minLength="1" maxLength="15" className="inputs" ref={input => inputLastname = input} defaultValue={store.getState().userLoginState.userFirstName} type="text" placeholder="Фамилия" autoComplete="off" required/>
                    <input type="submit" className="button-edit-name" id="buttonSave" value="Сохранить"/>
            </form>
        </div>
        <p>Дата рождения: {store.getState().userState.bday} {store.getState().userState.bmonth} {store.getState().userState.byear}</p>
        <p>Дней с момента регистрации: {getRegistrationDate(store.getState().userState.registrationDate)}</p>
        </div>
    );
}

Page.contextTypes = {
    store: PropTypes.object
}

export default Page