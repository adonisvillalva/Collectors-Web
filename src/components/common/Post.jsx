import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import {getCollectors} from '../api/Api';
import Slider from '../common/Slider';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';


const pageVariants = {
    hidden: {
        opacity: 0,
        x: "-100%"
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8
        }
    },
}
const Post = (props) => {
    useEffect(() =>{
        collectorsPost();
    }, []);
    const [post, setPost] = useState([]);
    const path = '/api/collectors?_format=json';
    const collectorsPost = () =>{
        getCollectors(path).then((res) => {
            const postScearch = res.data.map(x =>{
                const nid = props.match.params.nid;
                if(x.nid == nid){
                    setPost(x)
                }
            })
        }).catch((err) => console.log(err));
    }
    return (
        <motion.div variants = {pageVariants} initial = 'hidden' animate = 'show'>
            <Navbar/>
            <Slider/>
            <hr className = 'hr-slider'/>
            <div className = 'post container'>   
                <center>
                    <img className = 'img-post' src = {"http://collectors.enragestudio.com/" + post.field_post_img}/>
                </center>
                <h1>{post.title}</h1>
                <div className = 'post-content' dangerouslySetInnerHTML={{__html: post.body_1}} ></div>
            </div>
            <Footer/>
        </motion.div>
    )
}
export default Post
