import React from 'react';
import {Link} from 'react-router-dom';

const Nav  = ({attribute}) => {
    return(
        <div className = "home-nav">
            <ul>
                <Link exact to = '/collectors' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(1)} onMouseOut={() => attribute(0)}>
                    <li>
                        Collector's
                    </li>
                </Link>
                <Link exact to = '/mistery' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(2)} onMouseOut={() => attribute(0)}>
                    <li>
                        Mistery Empire
                    </li>
                </Link>
                <Link exact to = '/gallery' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(4)} onMouseOut={() => attribute(0)}>
                    <li>
                        Galería
                    </li>
                </Link>
                <Link exact to = '/gallery' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(4)} onMouseOut={() => attribute(0)}>
                    <li>
                        Tienda
                    </li>
                </Link>
            </ul>
        </div>
    )
};
export default Nav;