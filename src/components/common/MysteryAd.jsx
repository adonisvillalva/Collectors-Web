import React from 'react';

const MysteryAd = (props) => {
    return(
        <div className = 'misteryad_container'>
            <div className = 'misteryad_container_title'>
                <h1>Mistery Empire</h1>
            </div>
            <div className = 'misteryad_container_count'>
                <h2 className = 'misteryad_container_count--box'>{props.days}</h2>
                <h2>Días</h2>
            </div>
            <div className = 'misteryad_container_count'>
                <h2 className = 'misteryad_container_count--box'>{props.hours}</h2>
                <h2>Horas</h2>
            </div>
            <div className = 'misteryad_container_count'>
                <h2 className = 'misteryad_container_count--box'>{props.min}</h2>
                <h2>Minutos</h2>
            </div>
        </div>
    )
}
export default MysteryAd;