import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {

    return (<>
        <nav>
            <div class="logo">
                Portfolio
            </div>
            <input type="checkbox" id="click" />
            <label for="click" class="menu-btn">
                <i class="fas fa-bars"></i>
            </label>
            <ul>
                <li><h5><Link to="/">Home</Link> </h5></li>
                <li><h5><Link to="/about">About</Link> </h5></li>
                <li><h5><Link to="/service">Service</Link> </h5></li>
                <li><h5><Link to="/project">Project</Link> </h5></li>
                <li><h5><Link to="/contact">Contact-Me</Link> </h5></li>
            </ul>
        </nav>
    </>)
}
export default Header;