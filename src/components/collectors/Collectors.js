import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Slider from '../common/Slider';
import Posts from '../common/Posts';
import TitlePage from '../common/Title_page';

const pageVariants = {
    hidden: {
        opacity: 0,
        y: "-100%"
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    },
}
const Collectors = () => {
    const Title = "Novedades Collector's";
    return (
        <div >
            <Navbar/>
            <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show' className = 'collectors'>
                <Slider/>
                <div className = "container">
                    <div className = 'row'>
                        <TitlePage attribute = {Title}/>
                    </div>
                    <div className = 'content row'>
                        <Posts/>
                    </div>
                </div> 
            </motion.div >
            <Footer/>
        </div>
    )
}

export default Collectors
