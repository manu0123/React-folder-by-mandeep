import React from 'react'

import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page"to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <div className={`htmlForm-check htmlForm-switch text-${props.mode ==='light'?"dark":'light'}`}>
  <input className="htmlForm-check-input" onClick = {props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="htmlForm-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {title :propTypes.string.isRequired, 
aboutText :propTypes.string.isRequired}
// Navbar.defaultProps ={
//     title :"set title here",
//     aboutText :"About text here"
// }
