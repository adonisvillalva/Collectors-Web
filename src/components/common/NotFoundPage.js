import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

const pageVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8
        }
    },
}
const NotFoundPage = () => {
    useEffect(() =>{
        collectorsPosts();
    }, []);
    const collectorsPosts = () =>{
        axios.get('https://utpl.edu.ec/carreras/servicios/carrerasgeneral.json').then((res) => {
            console.log("Test"+res.data);
        }).catch((err) => console.log(err));
    }
    return (
        <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show' className = "error">
            <p className = "glitch">
                <span aria-hidden="true">Error 404</span>
                Error 404
                <span aria-hidden="true">Error 404</span>
            </p>
            <div className = "error-content">
                <p>La página que solicitaste no esta disponible o en construcción.</p>
                <Link exact to = "/">Ir al Inicio</Link>
            </div>
        </motion.div>
    )
}

export default NotFoundPage
