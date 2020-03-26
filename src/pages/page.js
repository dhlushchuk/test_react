import React, { useState, useEffect } from 'react'
import './page.css'
import { connect } from 'react-redux'
import { addUser, userAuthorization, loadPage } from '../redux/actions'

const useBeforeFirstRender = (f) => {
    const [hasRendered, setHasRendered] = useState(false)
    useEffect(() => setHasRendered(true), [hasRendered])
    if (!hasRendered) {
      f()
    }
}

const Page = (props) => {
    const user = JSON.parse(localStorage.getItem('redux-store'))
    useBeforeFirstRender(() => {
        props.userAuthorization({userFirstName: props.userState.lastname, userLastName: props.userState.username})
    })
    const [pageState, setPageState] = useState(false)
    useEffect(() => {
        setPageState(true)
        props.loadPage(pageState)
    },[pageState, props])
    let usernameEdit, usernameSave, inputUsername, inputLastname
    const getRegistrationDate = (date) => {
        return (new Date().getDate()) - (new Date(date).getDate())
    }
    return (
        <div className="page-main">
            <div className="username-edit" ref={div => usernameEdit = div}>
            <p>{props.userLoginState.userLastName} {props.userLoginState.userFirstName}</p>
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
                props.addUser(user.userState)
                props.userAuthorization({userFirstName: inputLastname.value, userLastName: inputUsername.value})
                e.preventDefault()
            }}>
                <input minLength="1" maxLength="15" className="inputs" ref={input => inputUsername = input} defaultValue={props.userLoginState.userLastName} type="text" placeholder="Имя" autoComplete="off" required/>
                <input minLength="1" maxLength="15" className="inputs" ref={input => inputLastname = input} defaultValue={props.userLoginState.userFirstName} type="text" placeholder="Фамилия" autoComplete="off" required/>
                    <input type="submit" className="button-edit-name" id="buttonSave" value="Сохранить"/>
            </form>
        </div>
        <p>Дата рождения: {props.userState.bday} {props.userState.bmonth} {props.userState.byear}</p>
        <p>Дней с момента регистрации: {getRegistrationDate(props.userState.registrationDate)}</p>
        </div>
    );
}

export default connect(
    state => ({
        userState: state.userState,
        userLoginState: state.userLoginState
    }),
    dispatch => ({
        userAuthorization(object) {
            dispatch(userAuthorization(object))
        },
        loadPage(bool) {
            dispatch(loadPage(bool))
        },
        addUser(user) {
            dispatch(addUser(user))
        }
    })
)(Page)