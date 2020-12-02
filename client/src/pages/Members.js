import React, { useContext } from 'react';
import { Container, Card, CardTitle, CardText, CardGroup, CardBody, } from 'reactstrap';
import Schedule from '../components/Calendar';
import Footer from '../components/Footer/Footer';
import UserContext from '../utils/UserContext';





export const Members = (props) => {
  const {
    user
  } =useContext(UserContext);
  console.log(user);
  return (
    <div>
    <Container>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Enrolled Athletes</CardTitle>
            <CardText>
              <p>Kid A</p>
              <p>Kid B</p>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Schedule</CardTitle>
            <Schedule />
          </CardBody>
        </Card>
      </CardGroup>
     
  
    </Container>
    <Footer />
    </div>
  );
}

export default Members;