import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Slider from '../common/Slider';
import Cards from './Cards.jsx'
import TitlePage from '../common/Title_page';

const pageVariants = {
    hidden: {
        opacity: 0,
        y: "100%"
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    },
}
const Gallery = () => {
    const Title = "Galería";
    const Card_1 = "Collector's";
    const Path_1 = "/api/gallery?_format=json";
    const Card_2 = "Comunidad";
    const Card_3 = "Destacado";
    return (
        <div>
            <Navbar/>
            <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show' className = 'gallery'>
                <Slider/>
                <div className = "container">
                    <div className = 'row'>
                        <TitlePage attribute = {Title}/>
                    </div>
                    <div className = 'content row'>
                        <Cards title = {Card_1} path = {Path_1}/>
                        <Cards title = {Card_2} path = {Path_1}/>
                        <Cards title = {Card_3} path = {Path_1}/>
                    </div>
                </div> 
            </motion.div>
            <Footer/>
        </div>
    )
}

export default Gallery
