import React from 'react';
import './Gallery.scss'
import image from '../../assets/aside.jpg'

const Gallery = () => {
    return (
        <div className={'gallery'}>
            <h2>Галерея</h2>
            <div className="slider">
                <div className="arrow-left">

                </div>
                <div className="photo">
                    <a href={image} target={'_blank'}><img src={image}/></a>
                    <a href={image} target={'_blank'}><img src={image}/></a>
                    <a href={image} target={'_blank'}><img src={image}/></a>
                    <a href={image} target={'_blank'}><img src={image}/></a>
                </div>
                <div className="arrow-right">

                </div>
            </div>
        </div>
    );
};

export default Gallery;