import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = (props) => {


   




    return (
        <div className=''>
            {/* Navbar Section   */}

            <nav className={`navbar text-dark navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
           
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>

                        </ul>
                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        {/* <div className='d-flex'>
                            <div onClick={()=>{props.toggleMode("primary")}} className='bg-primary rounded mx-2' style={{ height : "30px", width: "30px", cursor: "pointer" }}></div>
                            <div onClick={()=>{props.toggleMode("danger")}} className='bg-danger rounded mx-2' style={{ height : "30px", width: "30px", cursor: "pointer" }}></div>
                            <div onClick={()=>{props.toggleMode("success")}} className='bg-success rounded mx-2' style={{ height : "30px", width: "30px", cursor: "pointer" }}></div>
                            <div onClick={()=>{props.toggleMode("warning")}} className='bg-warning rounded mx-2' style={{ height : "30px", width: "30px", cursor: "pointer" }}></div>
                            <div onClick={()=>{props.toggleMode("light")}} className='bg-light rounded mx-2' style={{ height : "30px", width: "30px", cursor: "pointer" }}></div>
                            <div onClick={()=>{props.toggleMode("dark")}} className='bg-dark rounded mx-2' style={{ height : "30px", width: "30px", cursor: "pointer" }}></div>
                            
                        </div> */}

                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" onClick={()=> props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                          {props.mode === "dark"? "Disable" : "enable"} Darkmode
                        </div>
                    </div>
                </div>
            </nav>

          
        </div>
    )
}

export default Navbar


// This is the way to define the type of props
Navbar.prototypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

// If the props are not passed, then the default props will be used
Navbar.defaultProps = {
    title: "Rayq",
    about: "About"
}