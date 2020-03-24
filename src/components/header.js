import React from 'react'

const Header = (props) => {
    return (
        <header>
            <i className="fa fa-bars" onClick={props.showSidebar} aria-hidden="true"></i>
        </header>
    );
}

export default Header