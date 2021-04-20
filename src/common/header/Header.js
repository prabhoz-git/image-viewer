import React,{Component} from 'react';
import './Header.css';

/* Header component is defined here and is Common to all pages*/

class Header extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
    }

    render() {
        return (
            <div>
                <header className="app-header app-logo">
                    Image Viewer

                </header>
            </div>
        )
    }
}

export default Header;