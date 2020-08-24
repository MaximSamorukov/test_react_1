import React, { Component } from 'react';
import picPng_1 from '../assets/picPng_1.png';
import picPng_2 from '../assets/picPng_2.png';
import picPng_3 from '../assets/picPng_3.png';
import picPng_4 from '../assets/picPng_4.png';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                    <Nav.Link eventKey="third">Frameworks</Nav.Link>
                                    <Nav.Link eventKey="fourth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={picPng_1} alt="pic" />
                                    <p>Picture 1</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={picPng_2} alt="pic" />
                                    <p>Picture 2</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={picPng_3} alt="pic" />
                                    <p>Picture 3</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={picPng_4} alt="pic" />
                                    <p>Picture 4</p>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
