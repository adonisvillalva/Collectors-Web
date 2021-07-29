import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [offset, setOffset] = useState(0);
    const [menu, setMenu] = useState("navbar-menu container-fluid");
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.scrollY)
            if(window.scrollY < 60){
                setMenu('navbar-menu container-fluid');
            }else{
                setMenu('navbar-menu-activate container-fluid');
            }
        }
    }, []);
    return (
        <div id='navbar' className = {menu}>
            <div className = 'row'>
            <ul>
                <Link to = '/collectors' style={{ textDecoration: 'none' }}>
                    <li>
                        Collector's
                    </li>
                </Link>
                <Link to = '/figurefile' style={{ textDecoration: 'none' }}>
                    <li>
                        Fichas
                    </li>
                </Link>
                <Link to = '/'>
                    <li>
                        <img src = {Logo} alt = 'logo'/>
                    </li>
                </Link>
                <Link to = '/podcast' style={{ textDecoration: 'none' }}>
                    <li>
                        Podcast
                    </li>
                </Link>
                <Link to = '/gallery' style={{ textDecoration: 'none' }}>
                    <li>
                        Galería
                    </li>
                </Link>
            </ul>
            </div>
        </div>
    )
}

export default Navbar
