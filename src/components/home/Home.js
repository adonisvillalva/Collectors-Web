import React, {useState} from 'react';
import { motion } from 'framer-motion';

import Logo from '../../assets/images/logo.png';
import Slider from '../../assets/images/banner_main.png';
import Slider_1 from '../../assets/images/banner_01.png';
import Slider_2 from '../../assets/images/banner_02.png';
import Slider_3 from '../../assets/images/banner_03.png';
import Slider_4 from '../../assets/images/banner_04.JPG';

import Nav from './Nav';


const pageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8
        }
    },
}
const containerVariants = {
    hidden: {
        x: '100%',
        scale: 0.5
    },
    show: {
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8
        }
    },
}
const containerVariants1 = {
    hidden: {
        x: '-100%',
        scale: 0.5
    },
    show: {
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8
        }
    },
}
const Home = () => {
    const [slider_1, set1] = useState(0);
    const [slider_2, set2] = useState(0);
    const [slider_3, set3] = useState(0);
    const [slider_4, set4] = useState(0);
    const sliderSelected = (value) =>{
        switch(value){
            case 1:
                set1(1);
                set2(0);
                set3(0);
                set4(0);
                break;
            case 2:
                set1(0);
                set2(1);
                set3(0);
                set4(0);
                break;
            case 3:
                set1(0);
                set2(0);
                set3(1);
                set4(0);
                break;
            case 4:
                set1(0);
                set2(0);
                set3(0);
                set4(1);
                break;
            default:
                set1(0);
                set2(0);
                set3(0);
                set4(0);
                break;
        }
    }
    return (
        <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show' className = 'home'>
            <ul className = "home-slider">
                    <li style = {{opacity: 1}}>
                        <img src = {Slider} alt = 'background_00'/>
                    </li>
                    <li style = {{opacity: slider_1}}>
                        <img src = {Slider_1} alt = 'background_01'/>
                    </li>
                    <li style = {{opacity: slider_2}}>
                        <img src = {Slider_2} alt = 'background_02'/>
                    </li>
                    <li style = {{opacity: slider_3}}>
                        <img src = {Slider_3} alt = 'background_03'/>
                    </li>
                    <li style = {{opacity: slider_4}}>
                        <img src = {Slider_4} alt = 'background_04'/>
                    </li>
                </ul>
            <div className = 'home-menu container-fluid'>
                <div className = 'row'>
                    <motion.div variants = {containerVariants1} initial = 'hidden' animate = 'show' className = 'home-logo col-sm-6'>
                        <img className = '' src = {Logo} alt = 'logo_collectors'/>
                    </motion.div>
                    <motion.div variants = {containerVariants} initial = 'hidden' animate = 'show' className = "col-sm-6">
                        <Nav attribute={sliderSelected}/>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
