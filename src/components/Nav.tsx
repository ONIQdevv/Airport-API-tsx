import React from 'react';
import {Link} from "react-router-dom";


export function Nav() {
    return (

        <nav className="nav-bar">
            Airport
            <Link to="/auth" className="auth-btn">Auth</Link>
        </nav>

    );
}