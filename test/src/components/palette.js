import React from 'react'

const Palette = (props) => {
    return (
        <div className="palette">
            <div style={{background: "lightgreen"}} className="colors lightgreen" onClick={props.changeColor}></div>
            <div style={{background: "rgb(65, 30, 80)"}} className="colors purple" onClick={props.changeColor}></div>
            <div style={{background: "rgb(61, 61, 65)"}} className="colors dark" onClick={props.changeColor}></div>
            <div style={{background: "rgb(237, 238, 240)"}} className="colors default" onClick={props.changeColor}></div>
        </div>
    );
}

export default Palette