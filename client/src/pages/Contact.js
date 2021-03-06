import React from 'react';
import { Container, Card, CardImg, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';
import SB7 from '../assets/SB7.JPG'
import Footer from '../components/Footer/Footer';
import '../Forms.css'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  
  render() {
    const{ status } = this.state;
  return (
    <div>
      <Container className="form-container">
        <div>

          <Card>
            <CardImg top width="100%" src={SB7} alt="coach and player giving high five" />
              <CardBody className="contact-card">
                <h2 className="contactTitle">Contact Us!</h2>
                  <hr />
                  <form className="contactForm" 
                    onSubmit={this.submit}
                    action="https://formspree.io/f/xayldrqv"
                    method="POST"
                  >
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" />
                  </FormGroup>
                  <FormGroup>  
                    <Label for="email">Email Address</Label>
                    <Input type="text" name="email" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="message">Message</Label>
                    <Input type="textarea" name="message" />
                  </FormGroup>
                    {status === "SUCCESS" ? <p>Thanks for contacting us!</p> : <Button id="submitBtn" size="lg">Submit</Button>}
                    {status === "ERROR" && <p>Oops! There was an error.</p>}
                    </form>
              </CardBody>
          </Card>
        </div>
      </Container>
      <Footer />
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

}

export default Contact;