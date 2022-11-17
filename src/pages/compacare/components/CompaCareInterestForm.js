import { useState } from "react";
import { db } from "../../../util/firebase";
import { Button, Form, Container } from "react-bootstrap";
import { addDoc, collection } from "@firebase/firestore";

export default function CompaCareInterestForm() {

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [human, setHuman] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [date] = useState(new Date());
  const [phone, setPhone] = useState('')
  const [churchName, setChurchName] = useState('')
  const [pastor, setPastor] = useState('')
  const [churchAddress, setChurchAddress] = useState('')

  function humanCheck(e) {
    e.preventDefault();
    setHuman(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(collection(db, "Contact"), {
      date: date,
      form: 'compacare',
      message: body,
      name: name,
      email: email,
      phone: phone,
      church_name: churchName,
      lead_pastor: pastor,
      church_address: churchAddress,
    });
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
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-items-center w-100 me-3"
        >
          <h5 className="m-3">
            Interested in CompaCare? <br />
            Let us know.
          </h5>

          <Form.Group controlId="name">
            <Form.Control
              name="Name"
              type="text"
              placeholder="Your Full Name"
              required
              onChange={(e) => setName(e.target.value)}
              className="form-control m-2"
            />
          </Form.Group>

          <Form.Group controlId="email">
          <Form.Control
            name="Email"
            type="email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="form-control m-2"
            />
            </Form.Group>
            

<Form.Group controlId="phone">
          <Form.Control
            name="Phone"
            type="tel"
            placeholder="Your Phone Number"
            className="form-control m-2"
            onChange={(e) => setPhone(e.target.value)}
            />
            </Form.Group>

<Form.Group controlId="churchName">
          <Form.Control
            name="church_Name"
            type="text"
            placeholder="Your Church's Name"
            className="form-control m-2"
            onChange={(e) => setChurchName(e.target.value)}
            />
            </Form.Group>

<Form.Group controlId="leadPastor">
          <Form.Control
            name="Pastor"
            type="text"
            placeholder="Lead Pastor's Name"
            className="form-control m-2"
            onChange={(e) => setPastor(e.target.value)}
            />
            </Form.Group>

<Form.Group controlId="churchAddress">
          <Form.Control
            as="textarea"
            rows="5"
            name="ChurchAddress"
            type="text"
            placeholder="Church Address"
            className="form-control m-2"
            onChange={(e) => setChurchAddress(e.target.value)}
            />
            </Form.Group>

<Form.Group controlId="hearAboutUs">
          <Form.Control
            rows="5"
            name="HearAboutUs"
            as="textarea"
            placeholder="How did you hear about CompaCare?"
            className="form-control m-2"
            onChange={(e) => setBody(e.target.value)}
            />
            </Form.Group>


          {!human && (
            <Button className="w-100 btn-secondary" onClick={humanCheck}>
              I am indeed a person
            </Button>
          )}

          {human && (
            <Button disabled={loading} className="w-100" type="submit">
              Express Yourself!
            </Button>
          )}
          <br />
        </Form>
      )}
    </>
  );
}
