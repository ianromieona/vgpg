import React, {Component} from 'react';
// import './nav.css';

class Menu extends Component {

    render() {
        return (
            <nav id="navBar">
                <ul>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Browse</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
