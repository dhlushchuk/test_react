import React, { useState, useEffect } from 'react'
import './page.css'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'

const Page = (props) => {
    const user = JSON.parse(localStorage.getItem('redux-store'))
    const [fullName, setFullName] = useState({userFirstName: props.userState.lastname, userLastName: props.userState.username})
    useEffect(() => {
        props.checkLoadPage(true)
    },[props])
    let usernameEdit, usernameSave, inputUsername, inputLastname
    const getRegistrationDate = (date) => {
        return (new Date().getDate()) - (new Date(date).getDate())
    }
    return (
        <div className="page-main">
            <div className="username-edit" ref={div => usernameEdit = div}>
            <p>{fullName.userLastName} {fullName.userFirstName}</p>
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
                setFullName({userFirstName: inputLastname.value, userLastName: inputUsername.value})
                e.preventDefault()
            }}>
                <input minLength="1" maxLength="15" className="inputs" ref={input => inputUsername = input} defaultValue={fullName.userLastName} type="text" placeholder="Имя" autoComplete="off" required/>
                <input minLength="1" maxLength="15" className="inputs" ref={input => inputLastname = input} defaultValue={fullName.userFirstName} type="text" placeholder="Фамилия" autoComplete="off" required/>
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
    }),
    dispatch => ({
        addUser(user) {
            dispatch(addUser(user))
        }
    })
)(Page)