import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { getCollectors, getURL} from '../api/Api'

const Posts = () => {
    useEffect(() =>{
        collectorsPosts();
    }, []);
    const [posts, setPosts] = useState([]);
    const path = '/collectors?_format=json';
    const baseURL = getURL();
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
                                <Card.Link href={`/post/${item.title}`}>
                                    <Card.Img src = {baseURL + item.image}/>
                                </Card.Link>
                                <Card.Body>
                                    <Card.Title>
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text>{item.summary}</Card.Text>
                                    <Card.Link href={`/post/${item.title}`} className="btn-more">
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