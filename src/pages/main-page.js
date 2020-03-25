import React, { useState, useEffect } from 'react'
import { loadPage } from '../redux/actions'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './main-page.css'

const MainPage = (props) => {
    const [pageState, setPageState] = useState(true)
    useEffect(() => {
        setPageState(false)
        props.loadPage(pageState)
    },[pageState, props])
    return (
        <div className="mainPage-main">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}
// MainPage.contextTypes = {
//     store: PropTypes.object
// }

export default connect(
    null,
    dispatch => ({
        loadPage(bool) {
            dispatch(loadPage(bool))
        }
    })
)(MainPage)