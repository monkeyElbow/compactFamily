import { useState } from "react";
import {
  Container,
  Form,
  Button,
  // Fade,
} from "react-bootstrap";

import { db } from "../util/firebase";
import { addDoc, collection } from "@firebase/firestore";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [date] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [human, setHuman] = useState(false);

  function humanCheck(e) {
    e.preventDefault();
    setHuman(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(collection(db, "Contact"), {
      date: date,
      form: 'contactus',
      message: userMessage,
      name: userName,
      email: userEmail
    })

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
              defaultValue={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Your Email:</Form.Label>
            <Form.Control
              type="email"
              required
              defaultValue={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
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
              defaultValue={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {!human && (
            <Button className="w-100 mt-3 btn-secondary" onClick={humanCheck}>
              I am indeed a person
            </Button>
          )}

          {human && (
            <>
              {!loading && (
                <Button className="w-100 mt-3" variant="primary" type="submit">
                  Send
                </Button>
              )}
              {loading && (
                <Button
                  className="w-100 mt-3"
                  disabled
                  variant="primary"
                  type="submit"
                >
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
