import React, {useState, useEffect} from 'react';
import MisteryAd from './MysteryAd';

function Advertisements(){
    useEffect(() =>{
        dateLimit();
    }, []);
    const [limit, setLimit] = useState(null);
    const [dateL, setDateL] = useState(null);
    const dateLimit = () => {
        setLimit(new Date("2021,11,30,12:00:00"));
        setDateL(new Date(limit - Date.now()));
    }
    useEffect(() => {
        if(dateL){
            requestAnimationFrame(dateLimit);
        }
    }, [dateL])
    const days = (date) => {
        if(!date) return "00";
        let days = date.getDate();
        return `${days}`;
    }
    const hours = (date) => {
        if(!date) return "00";
        let hours = date.getHours();
        return `${hours}`;
    }
    const min = (date) => {
        if(!date) return "00";
        let min = date.getMinutes();
        return `${min}`;
    }
    return(
        <div className = 'advertisements_container'>
            <MisteryAd days = {days(dateL)} hours = {hours(dateL)} min = {min(dateL)}/>
        </div>  
    );
}
export default Advertisements;