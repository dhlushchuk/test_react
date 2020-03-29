import React, { useCallback, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import { addUser, showSidebar, loadPage, backgroundTheme } from './redux/actions'

import MainPage from './pages/main-page'
import { AppRegistration, AppAuthorization } from './components/containers'
import Page from './pages/page'

import './App.css'

const App = (props) => {
  const [pageState, setPageState] = useState(false)
  const checkLoadPage = useCallback((bool) => {
    setPageState(bool)
    props.loadPage(pageState)
  }, [props, pageState])
  const useBeforeFirstRender = (f) => {
    const [hasRendered, setHasRendered] = useState(false)
    useEffect(() => setHasRendered(true), [hasRendered])
    if (!hasRendered) {
      f()
    }
  }
  useBeforeFirstRender(() => {
    document.body.style.backgroundColor = props.checkBackgroundTheme
  })
  const changeColor = useCallback((e) => {
    document.body.style.backgroundColor = `${e.target.style.backgroundColor}`
    props.backgroundTheme(`${e.target.style.backgroundColor}`)
  }, [props])
  return (
    <div>
      <Header showLeftSidebar = {() => {props.showSidebar ? props.showLeftSidebar(false) : props.showLeftSidebar(true)}}/>
      <Router>
        <Sidebar changeColor={changeColor} />
        <Switch>
          <Route exact path="/" render={() => <MainPage checkLoadPage={checkLoadPage}/>} />
          <Route exact path="/registration" render={() => <AppRegistration checkLoadPage={checkLoadPage}/>} />
          <Route exact path="/authorization" render={() => <AppAuthorization checkLoadPage={checkLoadPage}/>} />
          <Route exact path="/page" render={() => <Page checkLoadPage={checkLoadPage}/>} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default connect(
  state => ({
    showSidebar: state.showSidebar,
    checkBackgroundTheme: state.backgroundTheme
  }),
  dispatch => ({
    showLeftSidebar(bool) {
      dispatch(showSidebar(bool))
    },
    backgroundTheme(color) {
      dispatch(backgroundTheme(color))
    },
    addUser(user) {
      dispatch(addUser(user))
    },
    loadPage(bool) {
      dispatch(loadPage(bool))
    }
  })
)(App)