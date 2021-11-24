import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { getCollectors} from '../api/Api'

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
        <div className = 'collectors__posts'>
            <div className="row">
                {
                    posts.map((item) => ((
                        <div className="col-md-4" key={item.nid}>
                            <Card bg="light" border="secondary">
                                <Card.Link href={`/post/${item.nid}`}>
                                    <Card.Img src = {"http://collectors.enragestudio.com/" + item.field_post_img}/>
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text>{item.body}</Card.Text>
                                    <Card.Link href={`/post/${item.nid}`} className="btn-more">
                                        Leer más...
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )))
                }
            </div>
        </div>      
    )
}
export default Posts;