import React from 'react'

const Palette = (props) => {
    return (
    <div className="palette">
        <div style={{background: "lightgreen"}} className="colors" onClick={props.changeColor}/>
        <div style={{background: "rgb(65, 30, 80)"}} className="colors" onClick={props.changeColor}/>
        <div style={{background: "rgb(61, 61, 65)"}} className="colors" onClick={props.changeColor}/>
        <div style={{background: "rgb(237, 238, 240)"}} className="colors" onClick={props.changeColor}/>
    </div>
    );
}

export default Palette