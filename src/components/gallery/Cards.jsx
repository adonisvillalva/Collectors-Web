import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {getCollectors} from '../api/Api';

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
const Cards = ({title, path}) => {
    useEffect(() =>{
        fetchCollectors();
    }, []);
    const [items, setItems] = useState([]);
    const [img, setImg] = useState([]);
    const fetchCollectors = async () => {
        getCollectors(path).then((res) => {
            setImg(res.data);
            setItems(res.data[img.length]);
        }).catch((err) => console.log(err));
    }   
    return (
        <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show' className = 'col-sm-4'>
            <div className = 'row'>
                <div className = 'gallery-cards'>
                    <Link to={`/media/${"collectors"}`}>
                        <div className = 'gallery-title'>
                            <h2>{title}</h2>
                        </div>
                        <img src = {"http://collectors.enragestudio.com/" + items.image} alt = 'img_gallery'/>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Cards
