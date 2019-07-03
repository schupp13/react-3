import React from 'react';
import './Menu.css'

function Menu(props){
  return(
  <div className="menu">
    <div className="previousDiv">
      <button className="previousNextButton" onClick={props.previous}>&#60;Previous</button>
    </div>
    <div className="crudDiv">
      <button className="crudButton" >Edit</button>
      <button className="crudButton">Delete</button>
      <button className="crudButton">New</button>
    </div>
    <div className="nextDiv">
      <button className="previousNextButton" onClick={props.next}>Next&#62;</button>
    </div>
  </div>
  )
}
export default Menu;