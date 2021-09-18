import { useState } from "react";
import {
  Container,
  Form,
  Button,
  // Fade,
} from "react-bootstrap";

import { db } from "../util/firebase";
// import { useAuth } from "../util/AuthContext";



const ContactForm = () => {
  // const { currentUser } = useAuth();

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [date] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [human, setHuman] = useState(false);

  function humanCheck(e) {
    e.preventDefault();
    setHuman(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const elementsArray = [...event.target.elements];
    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});

    db.collection("Contact").doc().set(formData);

    setLoading(false);
    setSent(true);
  };

  return (
    <>
      {sent && (
        <>
          <Container className="mt-5">
            <h3>Message sent!</h3> <h5>Thanks for reaching out to us.</h5>
          </Container>
        </>
      )}

      {!sent && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Your Name:</Form.Label>

            <Form.Control
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Your Email:</Form.Label>
            <Form.Control
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></Form.Control>

          </Form.Group>

          <Form.Group hidden controlId="date">
            <Form.Control plaintext readonly value={date} />
          </Form.Group>

          <Form.Group hidden controlId="form">
<Form.Control 
value="contactus"
/>
          </Form.Group>

{!human &&  <Button className="w-100 btn-secondary" onClick={humanCheck}>
              I am indeed a person
            </Button>
            }



{human && (
<>
  {!loading && (
    <Button className="w-100" variant="primary" type="submit">
    Send
    </Button>
    )}
          {loading && (
            <Button  className="w-100" disabled variant="primary" type="submit">
            Sending Message...
            </Button>
            )}
            </>
            )}



        </Form>
      )}


    </>
  );
};
export default ContactForm;
