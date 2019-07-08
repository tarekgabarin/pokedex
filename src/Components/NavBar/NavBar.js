import React, {Component} from 'react';
import logo from '../../logo.png';

class NavBar extends Component {
    render() {
        return (
            <nav className={'navbar is-success is-fixed-top'}>
                {/*<div className="navbar-brand">*/}
                {/*    <div className="navbar-item">*/}
                {/*        <img src={logo} alt=""/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="navbar-menu is-active">
                    <div className="navbar-start">
                        <a  className={'navbar-item'} href="">My Pokemon</a>
                        <a className={'navbar-item'} href="">Browse</a>
                    </div>

                </div>

            </nav>
        );
    }
}

export default NavBar;