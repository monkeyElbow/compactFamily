import { useState } from "react";
import { db } from "../util/firebase";
import { Button, Form, Container } from "react-bootstrap";

export default function CompaCareInterestForm() {
  const [date] = useState(new Date());

//   const [formData, setFormData] = useState({});
//   const [message, setMessage] = useState("");

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

    db.collection("CompacareContact").doc().set(formData);

    setLoading(false);
    setSent(true);
  };

//   const handleInput = (e) => {
//     const copyFormData = { ...formData };
//     copyFormData[e.target.name] = e.target.value;
//     setFormData(copyFormData);
//   };

  // const sendData = async e => {
  //     e.preventDefault();
  //     const {Date, Name, Email, Phone, ChurchName, Pastor, ChurchAddress, HearAboutUs} = formData
  //     try {
  //         const response = await fetch(
  //             "https://v1.nocodeapi.com/monkeyelbow/google_sheets/ARcIFlMgbSYAzdFO?tabId=interest",
  //             {
  //                 method: "post",
  //                 body: JSON.stringify([[postDate, Name, Email, Phone, ChurchName, Pastor, ChurchAddress, HearAboutUs]]),
  //                 headers: {
  //                     "Content-Type": "application/json"
  //                 }
  //             }
  //         );
  //         const json = await response.json();
  //         console.log("Success:", JSON.stringify(json));
  //         setMessage("Success! Thanks for your interest in CompaCare");
  //     } catch (error) {
  //         console.error("Error:", error);
  //         setMessage("Error");
  //     }
  // };
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
          className="d-flex flex-column justify-items-center w-100 mr-3"
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
            //   onChange={handleInput}
              className="form-control m-2"
            />
          </Form.Group>

          <Form.Group controlId="email">
          <Form.Control
            name="Email"
            type="email"
            placeholder="Your Email"
            required
            // onChange={handleInput}
            className="form-control m-2"
            />
            </Form.Group>
            

<Form.Group controlId="phone">
          <Form.Control
            name="Phone"
            type="tel"
            placeholder="Your Phone Number"
            className="form-control m-2"
            // onChange={handleInput}
            />
            </Form.Group>

<Form.Group controlId="churchName">
          <Form.Control
            name="ChurchName"
            type="text"
            placeholder="Your Church's Name"
            className="form-control m-2"
            // onChange={handleInput}
            />
            </Form.Group>

<Form.Group controlId="leadPastor">
          <Form.Control
            name="Pastor"
            type="text"
            placeholder="Lead Pastor's Name"
            className="form-control m-2"
            // onChange={handleInput}
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
            // onChange={handleInput}
            />
            </Form.Group>

<Form.Group controlId="hearAboutUs">
          <Form.Control
            rows="5"
            name="HearAboutUs"
            as="textarea"
            placeholder="How did you hear about CompaCare?"
            className="form-control m-2"
            // onChange={handleInput}
            />
            </Form.Group>

          <Form.Group hidden controlId="date">
            <Form.Control plaintext readonly value={date} />
          </Form.Group>

          <Form.Group hidden controlId="form">
            <Form.Control value="compacare" />
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
