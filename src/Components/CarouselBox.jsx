import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic_1 from '../assets/pic_1.jpg';
import pic_2 from '../assets/pic_2.jpg';
import pic_3 from '../assets/pic_3.jpg';
import pic_4 from '../assets/pic_4.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel pause="false">
                <Carousel.Item>
                    <img className="d-block w-80" src={pic_1} width='500' alt='picture' />
                    <Carousel.Caption>
                        <h3>Picture 1</h3>
                        <p>Some text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-80" src={pic_2} width='500' alt='picture' />
                    <Carousel.Caption>
                        <h3>Picture 2</h3>
                        <p>Some text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-80" src={pic_3} width='500' alt='picture' />
                    <Carousel.Caption>
                        <h3>Picture 3</h3>
                        <p>Some text</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-80" src={pic_4} width='500' alt='picture' />
                    <Carousel.Caption>
                        <h3>Picture 4</h3>
                        <p>Some text</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
