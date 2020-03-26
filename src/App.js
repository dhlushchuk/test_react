import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import { addUser, showSidebar, loadPage, changeBackgroundTheme } from './redux/actions'

import MainPage from './pages/main-page'
import { AppRegistration, AppAuthorization } from './components/containers'
import Page from './pages/page'

import './App.css'

const useBeforeFirstRender = (f) => {
  const [hasRendered, setHasRendered] = useState(false)
  useEffect(() => setHasRendered(true), [hasRendered])
  if (!hasRendered) {
    f()
  }
}

const App = (props) => {
  const user = JSON.parse(localStorage.getItem('redux-store'))
  useBeforeFirstRender(() => {
    document.body.style.backgroundColor = props.checkChangeBackgroundTheme
  })
  return (
    <div>
      <Header showLeftSidebar = {() => {props.showSidebar ? props.showLeftSidebar(false) : props.showLeftSidebar(true)}}/>
      <Router>
        <Sidebar changeColor={(e) => {
          document.body.style.backgroundColor = `${e.target.style.backgroundColor}`
          props.changeBackgroundTheme(`${e.target.style.backgroundColor}`)
          user.userState.background = `${e.target.style.backgroundColor}`
          props.addUser(user.userState)
        }} />
        <Switch>
          <Route exact path="/" render={() => <MainPage mainPageOnload = {() => props.loadPage(false)} />} />
          <Route exact path="/registration" component={AppRegistration} />
          <Route exact path="/authorization" component={AppAuthorization} />
          <Route exact path="/page" render={() => <Page pageOnload = {() => props.loadPage(true)} />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default connect(
  state => ({
    showSidebar: state.showSidebar,
    checkChangeBackgroundTheme: state.changeBackgroundTheme
  }),
  dispatch => ({
    showLeftSidebar(bool) {
      dispatch(showSidebar(bool))
    },
    changeBackgroundTheme(color) {
      dispatch(changeBackgroundTheme(color))
    },
    addUser(user) {
      dispatch(addUser(user))
    },
    loadPage(bool) {
      dispatch(loadPage(bool))
    }
  })
)(App)