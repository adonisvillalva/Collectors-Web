import React, {useState, useEffect} from 'react';

import MisteryAd from './MysteryAd';
import {getDays, getHours, getMin, getDateFinal} from   '../api/CountDate';

function Advertisements(){
    const [date, setDate] = useState(getDateFinal());
    const dateLimit = () => {
        setDate(getDateFinal());
    }
    useEffect(() => {
        if(date){
            requestAnimationFrame(dateLimit);
        }
    }, [date])
    return(
        <div className = 'advertisements_container'>
            <MisteryAd days = {getDays(date)} hours = {getHours(date)} min = {getMin(date)}/>
        </div>  
    );
}
export default Advertisements;