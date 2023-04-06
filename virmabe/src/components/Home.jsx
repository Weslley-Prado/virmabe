import React from 'react';

import image1 from '../../src/img/banner1.jpg';
import image2 from '../../src/img/banner2.jpg';
import image3 from '../../src/img/banner3.jpg';
import './Home.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Form from './Form';

const Home = () => {
        return (
                <section>
                <div className="sec__one">                       
                      <AliceCarousel className="slide" autoPlay autoPlayInterval="3000">
                                <img src={image1} className="sliderimg" alt="" />
                                <img src={image2} className="sliderimg" alt=""/>
                                <img src={image3} className="sliderimg" alt="" />
                        </AliceCarousel>
                </div>
                <h2 className="order">FAÇA SEU ORÇAMENTO</h2>
                <Form />
                </section>
        )
}
export default Home