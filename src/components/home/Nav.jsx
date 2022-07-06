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
                <Link exact to = '/unavailable' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(2)} onMouseOut={() => attribute(0)}>
                    <li>
                        Taller
                    </li>
                </Link>
                <Link exact to = '/unavailable' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(4)} onMouseOut={() => attribute(0)}>
                    <li>
                        Comunidad
                    </li>
                </Link>
                <Link exact to = '/unavailable' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(4)} onMouseOut={() => attribute(0)}>
                    <li>
                        Tienda
                    </li>
                </Link>
            </ul>
        </div>
    )
};
export default Nav;