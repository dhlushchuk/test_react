import React from 'react'
import { withRouter } from 'react-router'
import './authorization.css'

const Authorization = (props) => {
    let error
    const user = JSON.parse(localStorage.getItem('redux-store'))
    let userLog = {email: "", password: ""}
    const onChange = (e) => {
        let name = e.target.name
        userLog[name] = e.target.value
    }
    const onSubmit = (e) => {
        if(userLog.email === user.userState.email && userLog.password === user.userState.password) {
            user.userState.signIn = "true"
            props.addUser(user.userState)
            props.history.push(`/page`)
        }
        else {
            error.className = "error error-message-show"
        }
        e.preventDefault()
    }
    return (
        <div className="authorization-main"><br/>
            <form onSubmit={onSubmit}>
                <h2>Авторизация</h2>
                <div className="error" ref={div => error = div}>Неправильный email или пароль!</div>
                <input minLength="5" maxLength="30" className="inputs-log" onChange={onChange} placeholder="email" type="text" name="email" autoComplete="off" required/>
                <input minLength="4" maxLength="40" className="inputs-log" onChange={onChange} placeholder="Пароль" type="password" name="password" required/>
                <button id="button-login">Войти</button>
            </form>
        </div>
    );
}

export default withRouter(Authorization)