import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap';
import pic_logo from '../assets/logo.svg'


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <Media border="success" className="mt-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={pic_logo}
                                alt="pic"
                            />
                            <Media.Body>
                                <h5>Title of the post</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo laboriosam, totam soluta adipisci maxime dignissimos cum velit suscipit temporibus molestiae quis sed quibusdam sunt accusantium, exercitationem ipsum eaque. Nostrum?</p>
                            </Media.Body>
                        </Media>

                        <Media border="success" className="mt-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={pic_logo}
                                alt="pic"
                            />
                            <Media.Body>
                                <h5>Title of the post</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo laboriosam, totam soluta adipisci maxime dignissimos cum velit suscipit temporibus molestiae quis sed quibusdam sunt accusantium, exercitationem ipsum eaque. Nostrum?</p>
                            </Media.Body>
                        </Media>

                        <Media border="success" className="mt-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={pic_logo}
                                alt="pic"
                            />
                            <Media.Body>
                                <h5>Title of the post</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo laboriosam, totam soluta adipisci maxime dignissimos cum velit suscipit temporibus molestiae quis sed quibusdam sunt accusantium, exercitationem ipsum eaque. Nostrum?</p>
                            </Media.Body>
                        </Media>

                        <Media border="success" className="mt-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={pic_logo}
                                alt="pic"
                            />
                            <Media.Body>
                                <h5>Title of the post</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo laboriosam, totam soluta adipisci maxime dignissimos cum velit suscipit temporibus molestiae quis sed quibusdam sunt accusantium, exercitationem ipsum eaque. Nostrum?</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html / CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Erlang</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Assembler</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card bg="light" className="mt-5">
                            <Card.Body>
                                <Card.Title>Side some whatever</Card.Title>
                                <Card.Text>Some text</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
