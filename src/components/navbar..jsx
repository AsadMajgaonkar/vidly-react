import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {
    state = {}
    render() {
        const user = this.props.user
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="nav-item navbar-brand" to="#">Vildy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link " aria-current="page" to="/movies">Movies</NavLink>
                            <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
                            <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                            {
                                (!user)&&
                                <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                            }
                            {
                                (user)&&
                                <>
                                <NavLink className="nav-item nav-link" to="/profile">{user.name}</NavLink>
                                <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
                                </>
                            }
                            
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;