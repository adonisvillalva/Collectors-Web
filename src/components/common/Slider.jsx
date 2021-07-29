import React, {useState, useEffect} from 'react';

const Slider = () => {
    useEffect(() =>{
        fetchCollectors();
    }, []);
    const [items, setItems] = useState([]);
    const fetchCollectors = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const data = await fetch("http://collectors.enragestudio.com/api/slider?_format=json", requestOptions);
        const items = await data.json();
        setItems(items);
    }
    return(
        <div className = "slider">
            <ul>
                {
                    items.map((item, index) => (
                        <li key = {index} style = {{opacity: 1}}>
                            <img src = {"http://collectors.enragestudio.com/" + item.image} alt = 'slider_img'/>
                        </li>
                    ))
                }           
            </ul>
        </div>      
    )
};

export default Slider;