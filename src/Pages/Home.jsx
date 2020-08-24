import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, Button, CardDeck, Card } from 'react-bootstrap';
import tea_1 from '../assets/tea_1.jpg';
import tea_2 from '../assets/tea_2.jpg';
import tea_3 from '../assets/tea_3.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card border="success" text="primary">
                            <Card.Img variant="top" src={tea_1} />
                            <Card.Body>
                                <Card.Title>The title 1</Card.Title>
                                <Card.Text>Text</Card.Text>
                                <Button variant="primary">About Picture 1</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>The title 2</Card.Title>
                                <Card.Text>Text</Card.Text>
                                <Button variant="primary">About Picture 2</Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src={tea_2} />

                        </Card>

                        <Card>
                            <Card.Img variant="top" src={tea_3} />
                            <Card.Body>
                                <Card.Title>The title 3</Card.Title>
                                <Card.Text>Text</Card.Text>
                                <Button variant="primary">About Picture 3</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                </Container>
            </>
        )
    }
}
