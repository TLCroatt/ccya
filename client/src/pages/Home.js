import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardGroup, CardBody, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Logo from '../assets/SBLogo.jpg';
import SB6 from '../assets/SB6.JPG';
import sponsors3 from '../assets/sponsors3.png';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Footer from '../components/Footer/Footer';
import '../App.css';

const items = [
  {
    src: './images/SB1.JPG',
    altText: 'girl swinging bat',
    caption: '',
    key: '1',
  },
  {
    src: './images/SB14.JPG',
    altText: 'girl hitting ball with bat',
    caption: '',
    key: '2',
  },
  {
    src: './images/SB3.JPG',
    altText: 'girl pitching',
    caption: '',
    key: '3',
  }
];


const Home = () => {

  return (
    <div>
    <Jumbotron />
    <Container>
      <Row className="cards">
      <CardGroup>
        <Card className="card">
          <CardBody className="card-body">
            <CardTitle className="card-title" tag="h5">Mission Statement</CardTitle>
            <CardText className="card-text" id="cardText">Commerce City Youth Athletics believes that our programs help teach children about the importance of commitment, discipline, and teamwork. These skills will be beneficial to our participants throughout their adult lives. We believe our programs motivate our youths physically, to support good health, mentally, to enable them to think for themselves, and civically, to develop pride in our community and to represent our community in a positive manner. It also allows Commerce City residents to view competitive youth sports for free.</CardText>
          </CardBody>
          <CardImg className="card-img" top width="100%" src={ Logo } alt="CCYA Lady Eagles Logo" />
        </Card>
        <Col className="col-lg-1"></Col>
        <Card className="card">
          <CardImg className="card-img" top width="100%" src={ SB6 } alt="athlete tagging opposing athlete out as she approaches base" />
          <CardBody>
            <CardTitle className="card-title" tag="h5">Sponsors</CardTitle>
            <CardText className="card-text" id="cardText">We are grateful for the generosity of our partners! Thank you to our amazing sponsors.
            </CardText>
            <CardImg className="card-img" height="50%" width="100%" src={ sponsors3 } alt="Card image cap" />
          </CardBody>
        </Card>
      </CardGroup>
      </Row>
      <Row>
        <Col className="about">
          <h1 id="about-header">About Us</h1>
          Commerce City Youth Athletics is a non-profit organization. We as a league are committed to honesty, integrity, and a commitment to provide low cost registration fees, so that as many children as possible may join the sport we provide. The Lady Eagles are a girls’ traveling softball team. We are able to provide this program through registration fees, fundraisers, and donations. All officers and coaches are non-paid volunteers.
          <br />
          <br />
          No one involved in our program receives payment for the time, energy, and services they provide to CCYA.
          Our coaches, team parents, committee members, and board members take time away from their families to donate many hours a week to our organization. We hope that each and every one of you appreciates all that they give to our children. Please remember we are NOT a city operated or funded program.
          We conduct very important fundraisers for our organization every year, that without, we would have to raise our registration fees.
          <br />
          <br />
          The money raised is used to pay for the equipment and uniforms, as well as, the cost of team fees, etc. Please support these worth while fundraising projects. We do accept money donations.
          <br />
          <br />
          You can mail these donations to:
          <br />
          <br />
          Commerce City Youth Athletics
          C/O Chuck Ingram
          <br />
          6820 East 77th Avenue
          <br />
          Commerce City, CO 80022
        </Col>
        <Col className="col-lg-1"></Col>
        <Col className="carousel mx-auto">
          <UncontrolledCarousel className="carousel" controls={false} indicators={false} items={items} />
        </Col> 
      </Row>
      <Row>
      </Row>
    </Container>
    <Footer />
    </div>
  );
};

export default Home;