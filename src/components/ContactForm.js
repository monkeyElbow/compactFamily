import { useState } from "react";
import {
  Container,
  Form,
  Button,
  // Fade,
} from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState(new Date());
  const [isPending, setIsPending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactMessage = { name, email, body, date };

    setIsPending(true);

    fetch("http://localhost:8001/contactmessages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactMessage),
    }).then(() => {
      setIsPending(false);
      setSent(true);
    });
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
          <Form.Group controlId="formName">
            <Form.Label>Your Name:</Form.Label>

            <Form.Control
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
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

          <Form.Group>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></Form.Control>

            <Form.Control plaintext readonly defaultValue="date" value={date} />
          </Form.Group>

          {!isPending && (
            <Button variant="primary" type="submit">
              Send
            </Button>
          )}
          {isPending && (
            <Button disabled variant="primary" type="submit">
              Sending Message...
            </Button>
          )}
        </Form>
      )}


    </>
  );
};
export default ContactForm;
