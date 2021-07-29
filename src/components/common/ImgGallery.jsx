import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import {getCollectors} from '../api/Api';
import Slider from '../common/Slider';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ViewImg from './ViewImg';


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
const ImgGallery = () => {
    useEffect(() =>{
        fetchCollectors();
    }, []);
    const [items, setItems] = useState([]);
    const [view, setView] = useState('viewImg close');
    const [path, setPath] = useState([]);
    const fetchCollectors = async () => {
        getCollectors("/api/gallery?_format=json").then((res) => {
            setItems(res.data);
        }).catch((err) => console.log(err));
    }
    const activeView = (path) => {
        document.body.classList.add("no-sroll")
        setView('viewImg open');
        setPath(path);
    }
    const desactiveView = () => {
        setView('viewImg close');
    }
    return (
        <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show'>
            <Navbar/>
            <Slider/>
            <hr className = 'hr-slider'/>
            <div className = 'imgGallery'>
                <div className = 'container'>
                    <div className = 'row'>
                    {
                        items.map((item) => (
                            <div className = 'col-4'>
                                <div className = 'imgGallery-img'>
                                    <img src = {"http://collectors.enragestudio.com/" + item.image} onClick = {() => activeView(item.image)}/>
                                </div>
                            </div>         
                        ))                
                    } 
                    <ViewImg openView = {view} closeView = {desactiveView}>
                        <img src = {"http://collectors.enragestudio.com/" + path}/>
                    </ViewImg>
                    </div>
                </div>
            </div>           
            <Footer/>
        </motion.div>
    )
}

export default ImgGallery
