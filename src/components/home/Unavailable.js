import React, {useState, useEffect} from 'react';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import work from '../../assets/gifs/capoo-blue.gif'

const Unavailable = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(progress => progress + 1);
        })
        const timer = setTimeout(() => {
            clearInterval(intervalId);
        }, 2500)
        return() => clearTimeout(timer);
    }, []);
    return (
        <div className='unavailable'>
            <div className='top'/>
            <Navbar/>
            <div className='info'>
                <h2>Estamos trabajando en la información solicitada</h2>
                <h2>¡Síguenos en redes sociales para estar al tanto de las novedades!</h2>
                <div align = "middle"><img src = {work} alt = "work"/></div>
                <div className='progress'>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                    role="progressbar" 
                    style= {{width: progress}} 
                    aria-valuenow="100" 
                    aria-valuemin="0" 
                    aria-valuemax="100">
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Unavailable
