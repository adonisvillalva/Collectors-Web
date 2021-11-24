import React, {useState, useEffect} from 'react';

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Banner from './Banner';
import {getDays, getHours, getMin, getDateFinal, getSeconds} from   '../api/CountDate';

function Collectors() {
    const [date, setDate] = useState(getDateFinal());
    const dateLimit = () => {
        setDate(getDateFinal());
    }
    useEffect(() => {
        if(date){
            requestAnimationFrame(dateLimit);
        }
    }, [date])
    return (
        <div>
            <Navbar/>
            <Banner days = {getDays(date)} hours = {getHours(date)} min = {getMin(date)} seconds = {getSeconds(date)}/>
            <Footer/>
        </div>
    );
}

export default Collectors