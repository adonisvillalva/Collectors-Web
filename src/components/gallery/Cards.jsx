import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
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
        collectorsGallery();
    }, []);
    const [items, setItems] = useState([]);
    const [img, setImg] = useState([]);
    const collectorsGallery = () => {
        getCollectors(path).then((res) => {
            setImg(res.data);
            setItems(res.data[img.length]);
        }).catch((err) => console.log(err));
    }   
    return (
        <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show' className = 'col-md-6'>
            <div className = 'row'>
                <Card border="light" bg="light">
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Link href={`/media/${title}`} className="btn-more">
                            Entrar a la galería de {title}
                        </Card.Link>
                    </Card.Body>
                    <Card.Link href={`/media/${title}`}> 
                        <Card.Img src = {"http://collectors.enragestudio.com/" + items.image} alt = 'img_gallery'/>
                    </Card.Link>  
                </Card>
            </div>
        </motion.div>
    )
}

export default Cards
