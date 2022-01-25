import React  from 'react';
import logo from  './assets/link.png'
import { Link } from "react-router-dom";
import { removeToken,getToken } from './services/auth';
import { useEffect, useState } from 'react';


const Nav = () => {

    const [token,setToken] = useState(getToken());
 
    useEffect(() => {
        setToken(getToken());
    },[token])

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
            <span className="navbar-brand text-primary">
                <img src={logo} alt="logo" className="nav_logo"/> Shorty
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link  to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/registration" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Docs</Link>
                </li>
                
                    {
                        token ?
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={() =>{setToken(null); removeToken()}}>Logout</Link>
                        </li>
                       : null
                    }
                </ul>
            </div>

            </div>
            
        </nav>
    );
}


export default  Nav;