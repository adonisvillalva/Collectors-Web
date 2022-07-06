import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faSpotify, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className = 'footer container-fluid'>
            <div className = 'row'>
                <div className = 'col-sm-2'>
                    {/* <h5>Collector's</h5> */}
                </div>
                <div className = 'col-sm-2'>
                    {/* <h5>Podcast</h5> */}
                </div>
                <div className = 'col-sm-2'>
                    <h5>Galería</h5>
                    <ul>
                        <li>Collector's</li>
                        <li>Comunidad</li>
                        <li>Destacado</li>
                    </ul>
                </div>
                <div className = 'col-sm-2'>
                    <h5>Contáctanos</h5>
                    <ul>
                        <li className = 'network'>
                            <a className = 'fb' target = '_blank' href = 'https://www.facebook.com/col.empire'>
                                <FontAwesomeIcon icon = {faFacebookF}/>Facebook
                            </a>   
                        </li>
                        <li className = 'network'>
                            <a className = 'inst' target = '_blank' href = 'https://www.instagram.com/col.empire/'>
                                <FontAwesomeIcon icon = {faInstagram}/>Instagram
                            </a>
                        </li>
                        <li className = 'network'>
                            <a className = 'whats' target = '_blank' href = "https://api.whatsapp.com/send?phone=593962741174&text=%C2%A1Hola!%20Vengo%20por%20Collector's%20Empire.">
                                <FontAwesomeIcon icon = {faWhatsapp}/>Whatsapp
                            </a>
                        </li>
                        {/* <li className = 'network'>
                            <a className = 'spo' target = '_blank' href = 'https://www.facebook.com/col.empire'>
                                <FontAwesomeIcon icon = {faSpotify}/>Spotify
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className = 'col-sm-4'>
                    {/* <h5>Newsletter</h5>
                    <p>Suscribete </p> */}
                </div>
            </div>
            <div className = 'row'>
                <hr className = 'hr-white'/>
            </div>
            <div className = 'row'>
                <div className = 'col-sm-6'>
                    <p>Copyright 2022 | <strong>Collector's Empire</strong></p>
                </div>
                <div className = 'copyright col-sm-6'>
                    <p>Desarrollador por <strong><a target = '_blank' href = 'http://www.enragestudio.com/'>Enrage Studio</a></strong></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;