import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(parms) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${parms.mode} bg-${parms.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{parms.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">{parms.aboutText}</a>
                            </li> */}
                        </ul>

                        {/* <span className="p-3 m-1 rounded-2 bg-primary"></span>
                        <span className="p-3 m-1 rounded-2 bg-success"></span>
                        <span className="p-3 m-1 ml rounded-2 bg-danger"></span> */}

                        <div className={`form-check form-switch text-${parms.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onClick={parms.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Title Gose Here",
    aboutText: "About"
}

