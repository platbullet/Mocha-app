import React from "react";
import ProfilePic from './ProfilePic'

function Header() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
            <a className="navbar-brand" href="#"><img className="mocha-logo" src={process.env.PUBLIC_URL + "/images/logo_mocha_text_transparent_bg.png"} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ml-5">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a className="nav-link" href="/lists">Lists</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a className="nav-link" href="/addlist">Add Users</a>
                    </li>
                    <li className="nav-item ml-5">
                        <a className="nav-link" href="/deletelist">Delete Users</a>
                    </li>
                    <li className="nav-item ml-5">

                        < ProfilePic />
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}



export default Header;