import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import { addUser, showSidebar, loadPage, changeBackgroundTheme } from './redux/actions'

import MainPage from './pages/main-page'
import Registration from './pages/registration'
import Authorization from './pages/authorization'
import Page from './pages/page'

import './App.css'

const user = JSON.parse(localStorage.getItem('redux-store'))

class App extends Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  componentWillMount() {
    document.body.style.backgroundColor = this.props.store.getState().changeBackgroundTheme
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render(){
    const { store } = this.props
    return (
      <div>
        <Header showSidebar = {() => {
          store.getState().showSidebar ? store.dispatch(showSidebar(false)) : store.dispatch(showSidebar(true)) 
        }}/>
        <Router>
          <Sidebar changeColor={(e) => {
            document.body.style.backgroundColor = `${e.target.style.backgroundColor}`
            store.dispatch(changeBackgroundTheme(`${e.target.style.backgroundColor}`))
            user.userState.background = `${e.target.style.backgroundColor}`
            store.dispatch(addUser(user.userState))
          }} />
          <Switch>
            <Route exact path="/" render={() => <MainPage store = {store} mainPageOnload = {() => store.dispatch(loadPage(false))} />} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/authorization" component={Authorization} />
            <Route exact path="/page" render={() => <Page store = {store} pageOnload = {() => store.dispatch(loadPage(true))} />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  isShowedSidebar: PropTypes.bool,
  isPageOnload: PropTypes.bool,
  backgroundTheme: PropTypes.string
}
App.defaultProps = {
  isShowedSidebar: false,
  isPageOnload: false
}
App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App