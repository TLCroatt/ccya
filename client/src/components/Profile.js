import React, { useContext } from 'react';
import { Row, Col, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import UserContext from '../utils/UserContext';
import { Link } from "react-router-dom";
import "../Forms.css"

export const Profile = () => {
  const { user, handleRemoveChild, handleAddChild,
    handleChildInputChange, childData, loggedIn } = useContext(UserContext);
  return (
    <CardBody className="profile">
    {(user && user.participants.length > 0) ? (
      user.participants.map(({_id, childName, childDoB, address}) => {
        return(
        <Row key={ _id }>
          <Col id="registerBtn">
            <Button tag={Link} to={loggedIn ? "/register" : "/login"} color="success" size="md">Register</Button>
          </Col>
          <Col id="kidInfo">
            <Row> {childName} </Row>
            <Row> {childDoB} </Row>
            <Row> {address} </Row>
          </Col>
          <Col id="removeBtn">
            <Button value={_id} onClick={() => handleRemoveChild(_id)} color="danger" size="md">Remove</Button>
          </Col>
        </Row>
        )
      }) 
    ) : (
      <Row> No participants added</Row>
    )}

    <hr/>
    
    <h5>Add a new Participant</h5>
    <Form>
      <FormGroup className="form-group">
        <Input
          type="text"
          name="childName"
          id="childName"
          placeholder="first and last name"
          value={childData.childName}
          onChange={handleChildInputChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Input
          type="text"
          name="childDoB"
          id="childDoB"
          placeholder="MM/DD/YYYY"
          value={childData.childDoB}
          onChange={handleChildInputChange}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Input
          type="text"
          name="address"
          id="childaddress"
          placeholder="address"
          value={childData.address}
          onChange={handleChildInputChange}
        />
      </FormGroup>
      <Button onClick={handleAddChild} id="addParticipantBtn" size="md">
        Add Participant
      </Button>
    </Form>
    </CardBody>
  );
}

export default Profile;