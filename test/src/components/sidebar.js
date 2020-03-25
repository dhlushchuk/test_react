import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'
import Palette from './palette'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    const user = JSON.parse(localStorage.getItem('redux-store'))
    const checkAuthorization = () => {
        if(user !== null && user.userState !== null && user.userState.signIn === "true") {
            return '/page'
        }
        else {
            return '/authorization'
        }
    }
    return (
        <div>
        <div className={props.showSidebar ? "sidebar sidebar-show" : "sidebar"}>     
            <ul>
                <Link to='/' className='links'>
                    <li>На главную</li>
                </Link>
                <Link to={checkAuthorization} className={props.loadPage ? "links signification-hide" : "links signification"}>
                    <li>Войти</li>
                </Link>
                <Link to='/registration' className='links'>
                    <li>Регистрация</li>
                </Link>
                <Link to='/' className='links'>
                    <li>Новости</li>
                </Link>
                <Link to='/' className='links'>
                    <li>Услуги</li>
                </Link>
                <Link to='/' className='links'>
                    <li>О нас</li>
                </Link>
                <Link to='/' onClick={() => { 
                        user.userState.signIn = "false" 
                        props.addUser(user.userState)
                    }} className={props.loadPage ? "links logout-show" : "links logout"}>
                    <li>Выйти</li>
                </Link>
            </ul>
            <div className={props.loadPage ? "palette-show" : "palette-hide"}>
                <Palette changeColor={props.changeColor}/>
            </div>
        </div>
        </div>
    );
}

export default connect(
    state => ({
        showSidebar: state.showSidebar,
        loadPage: state.loadPage
    }),
    dispatch => ({
        addUser(user) {
            dispatch(addUser(user))
        }
    })
)(Sidebar)