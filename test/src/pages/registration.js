import React from 'react'
import { withRouter } from 'react-router'
import './registration.css'

const Registration = (props, {store}) => {
    let error
    let user = {email: "", username: "", lastname: "", bday: "День", bmonth: 'Месяц', byear: "Год", password: "", registrationDate: "", signIn: "false", background: "default"}
    const validateEmail = (email) => {
        let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    }
    const validateBirthday = () => {
        if(user.bday !== "День" && user.bmonth !== "Месяц" && user.byear !== "Год") {
            return true
        }
        return false
    }
    const onChange = (e) => {
        let name = e.target.name
        user[name] = e.target.value
    }
    const onSubmit = (e) => {
        if(validateEmail(user.email) && validateBirthday()) {
            user.registrationDate = new Date()
            user.signIn = "true"
            props.addUser(user)
            props.history.push(`/page`)
        }
        else {
            error.className = "error error-message-show"
        }
        e.preventDefault()
    }
    return (
        <div className="registration-main">
            <form onSubmit={onSubmit}>
                <div className="error" ref={div => error = div}>Введены некорректные данные!</div>
                <span>Почта: <input minLength="5" maxLength="30" className="inputs" type="email" onChange={onChange} autoComplete="off" name="email" required/></span>
                <span>Имя: <input minLength="1" maxLength="15" className="inputs" type="text" onChange={onChange} autoComplete="off" name="username" required/></span>
                <span>Фамилия: <input minLength="1" maxLength="15" className="inputs" type="text" onChange={onChange} autoComplete="off" name="lastname" required/></span>
                <span>Дата рождения: 
                    <div className="date"><select className="date-margin" onChange={onChange} name="bday" required>
                        <option>День</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>
                        <option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
                        <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option>
                        <option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
                    </select>
                    <select className="date-margin" onChange={onChange} name="bmonth" required>
                        <option>Месяц</option><option>Января</option><option>Февраля</option><option>Марта</option><option>Апреля</option><option>Мая</option>
                        <option>Июня</option><option>Июля</option><option>Августа</option><option>Сентября</option><option>Октября</option><option>Ноября</option><option>Декабря</option>
                    </select>
                    <select name="byear" onChange={onChange} required>
                        <option>Год</option><option>1994</option><option>1995</option><option>1996</option><option>1997</option><option>1998</option><option>1999</option>
                        <option>2000</option><option>2001</option><option>2002</option><option>2003</option><option>2004</option><option>2005</option>
                    </select>
                    </div>
                </span>
                <span>Пароль: <input minLength="4" maxLength="40" className="inputs" type="password" onChange={onChange} name="password" required/></span>
                <button id="button-reg" >Зарегестрироваться</button>
            </form>
        </div>
    );
}

export default withRouter(Registration)