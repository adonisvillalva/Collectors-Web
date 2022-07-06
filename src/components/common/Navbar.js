import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    const [offset, setOffset] = useState(0);
    const [menu, setMenu] = useState("navbar-menu");
    const [navMobile, setNavMobile] = useState('off');
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.scrollY)
            if(window.scrollY < 60){
                setMenu('navbar-menu');
            }else{
                setMenu('navbar-menu-activate');
            }
        }
    }, []);
    const navbarMobile = () => {
        if(navMobile == 'off'){
            setNavMobile('on'); 
        }else{
            setNavMobile('off');
        }
    }
    return (
        <div id='navbar__container' className = {menu}>
            <div className = 'navbar__container--mobile'>
                <FontAwesomeIcon icon = {faBars} onClick = {navbarMobile}/>
                <h2>{props.title}</h2>
            </div>
            <div id = {navMobile} className = 'navbar__container--menu'>     
                <ul>
                    <Link to = '/collectors' style={{ textDecoration: 'none' }}>
                        <li>
                            Collector's
                        </li>
                    </Link>
                    <Link to = '/unavailable' style={{ textDecoration: 'none' }}>
                        <li>
                            Taller
                        </li>
                    </Link>
                    <Link to = '/' className = 'navbar__container--logo'>
                        <li>
                            <img src = {Logo} alt = 'logo'/>
                        </li>
                    </Link>
                    <Link to = '/unavailable' style={{ textDecoration: 'none' }}>
                        <li>
                            Comunidad
                        </li>
                    </Link>
                    <Link to = '/unavailable' style={{ textDecoration: 'none' }}>
                        <li>
                            Tienda
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
