import React from 'react';
import img from '../../assets/images/banner_main.png'

const Banner  = (props) => {
    return(
        <div className = "banner__container">
            <div className = 'banner__container__img'>
                <img src = {img}/>
            </div>     
            <div className = 'banner__container__text'>
                <h2>Adentrate en nuestra ¡Mistery Empire!</h2>
                <h3>Sube de nivel y obten increibles sorpresas dentro de nuestra <strong>Caja misteriosa</strong>, cuyas sorpresas mejoran con el tiempo.</h3>
                <div className = 'banner__container__text__count'>
                    <div className = 'banner__container__text__count--box'>
                        <h2>{props.days}</h2>
                        <h2>Días</h2>
                    </div>
                    <div className = 'banner__container__text__count--box'>
                        <h2>{props.hours}</h2>
                        <h2>Horas</h2>
                    </div>
                    <div className = 'banner__container__text__count--box'>
                        <h2>{props.min}</h2>
                        <h2>Minutos</h2>
                    </div>
                    <div className = 'banner__container__text__count--box'>
                        <h2>{props.seconds}</h2>
                        <h2>Segundos</h2>
                    </div>
                </div>
            </div>         
        </div>
    )
};
export default Banner;