import React, {useState, useEffect} from 'react';

import { getCollectors} from '../api/Api'
import { Link } from 'react-router-dom';

const Posts = () => {
    useEffect(() =>{
        collectorsPosts();
    }, []);
    const [posts, setPosts] = useState([]);
    const path = '/api/collectors?_format=json';
    const collectorsPosts = () =>{
        getCollectors(path).then((res) => {
            setPosts(res.data);
        }).catch((err) => console.log(err));
    }
    return (
        <div className = 'posts'>
            <div className = 'row'>
            {
                posts.map((item) => (
                    <div className = 'col-4'>
                        <div className = 'posts-card'>
                            <Link to={`/post/${item.nid}`}  style={{ textDecoration: 'none' }}>
                                <img src = {"http://collectors.enragestudio.com/" + item.field_post_img}/>
                            </Link>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                            <Link to={`/post/${item.nid}`}  style={{ textDecoration: 'none' }}>
                                <p class = 'btn-more'>Leer más...</p>
                            </Link>
                        </div>
                    </div>
                ))                
            } 
            </div>
        </div>      
    )
}
export default Posts;