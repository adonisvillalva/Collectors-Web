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
                <Link exact to = '/figurefile' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(2)} onMouseOut={() => attribute(0)}>
                    <li>
                        Fichas
                    </li>
                </Link>
                <Link exact to = '/podcast' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(3)} onMouseOut={() => attribute(0)}>
                    <li>
                        Podcast
                    </li>
                </Link>
                <Link exact to = '/gallery' style={{ textDecoration: 'none' }} onMouseOver={() => attribute(4)} onMouseOut={() => attribute(0)}>
                    <li>
                        Galería
                    </li>
                </Link>
            </ul>
        </div>
    )
};
export default Nav;