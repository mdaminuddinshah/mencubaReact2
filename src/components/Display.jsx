import PropTypes from 'prop-types';
// import { useState } from 'react';

function Display(props) {

  return (
    <div style={{border: "1px solid black", borderRadius: "1rem", margin: "1rem 2rem 1rem 0",padding: "1rem",display: "flex"}}>
        <label style={{flexGrow: 1, textDecoration: props.clickOrNot ? "line-through": "none"}}>

            {/* 4) cara receive value dari App.jsx utk display */}
            <h2>{props.username}</h2>
            <p>{props.text}</p>
        </label>
        <input type="checkbox" id={props.id} onChange={props.toggle} checked={props.clickOrNot}/>
    </div>
  )
}

Display.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string,
    clickOrNot: PropTypes.bool,
    toggle: PropTypes.func,
}

export default Display;
