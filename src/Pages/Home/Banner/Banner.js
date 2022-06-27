import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannder1 from '../../../assets/img/Banner/banner (1).jpg';
import bannder2 from '../../../assets/img/Banner/banner (2).jpg';
import bannder3 from '../../../assets/img/Banner/banner (3).jpg';
import bannder4 from '../../../assets/img/Banner/banner (4).jpg';
import bannder5 from '../../../assets/img/Banner/banner (5).jpg';
import './Bannder.css';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannder1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannder2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannder3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannder4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannder5}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;