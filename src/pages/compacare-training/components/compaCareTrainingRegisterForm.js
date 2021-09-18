import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert, Form, Button, Row, Col } from "react-bootstrap";
import { useAuth } from "../../../util/AuthContext";
import { db } from "../../../util/firebase";

export default function CompaCareCourseRegisterForm() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState([]);
  // const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const history = useHistory();

  // get form items to populate fields on load
  useEffect(() => {
    async function fetchUser() {
      var userRef = db.collection("Users").doc(currentUser.uid);

      try {
        var doc = await userRef.get();
        const data = await doc.data();
        await setProfile(data);
        return data.profile;
      } catch (error) {
        console.log(error);
        setError("Mr Stark, I don't feel so good.");
      }
    }
    fetchUser();
  }, []);

  // const handleInput = (e) => {
  //   const copyFormData = { ...formData };
  //   copyFormData[e.target.name] = e.target.value;
  //   setFormData(copyFormData);
  // };

  const SendData = async (e) => {
    e.preventDefault();

    // collect form items
    const elementsArray = [...e.target.elements];
    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});

    // push to firestore
    const unsubscribe = db
      .collection("Users")
      .doc(currentUser.uid)
      .update(formData);
    history.push("/compacare-training");

    return unsubscribe;
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {/* <h5 className="m-3">Register for the course.</h5> */}

      <Form
        onSubmit={SendData}
        className="d-flex flex-column justify-items-center"
      >
        <Form.Group className="mt-3 bg-light p-3 border">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                id="first_name"
                type="text"
                placeholder="First Name"
                defaultValue={profile.first_name}
                // onChange={handleInput}
              ></Form.Control>
            </Col>

            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                id="last_name"
                type="text"
                placeholder="Last Name"
                defaultValue={profile.last_name}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Label>Your church information:</Form.Label>
          <br />
          <Form.Label>Church Name:</Form.Label>
          <Form.Control
            id="church_name"
            type="text"
            placeholder="Name of your local church"
            className="form-control m-2"
            // onChange={handleInput}
            defaultValue={profile.church_name}
          />

          <Form.Label>Church Address:</Form.Label>
          <Form.Control
            id="church_address"
            type="text"
            placeholder="Church Address"
            className="form-control m-2"
            // onChange={handleInput}
            defaultValue={profile.church_address}
          />
          <Form.Label>Church Phone:</Form.Label>
          <Form.Control
            id="church_phone"
            type="tel"
            placeholder="Church Phone Number"
            className="form-control m-2"
            // onChange={handleInput}
            defaultValue={profile.church_phone}
          />

          <Form.Label>Church Website URL:</Form.Label>
          <Form.Control
            id="church_website"
            type="url"
            placeholder="Church Website URL(if available)"
            className="form-control m-2"
            // onChange={handleInput}
            defaultValue={profile.church_website}
          />

          <Form.Label>Pastor Name:</Form.Label>
          <Form.Control
            id="pastor_name"
            type="text"
            placeholder="Lead Pastor's Name"
            // onChange={handleInput}
            defaultValue={profile.pastor_name}
            className="form-control m-2"
          />
        </Form.Group>

        {/* email to profile */}
        <Form.Control
          id="email"
          type="email"
          placeholder="Your Email"
          defaultValue={currentUser.email}
          hidden
          className="form-control m-2"
        />
        {/* enrolled YES flag */}
        <Form.Control
          id="cc_training_enrolled"
          type="text"
          defaultValue="yes"
          hidden
          // className="form-control m-2"
        />
        {/* enrolled YES flag */}
        {/* <Form.Control
          id="cc_training_progress"
          type="number"
          // as="number"
          defaultValue={profile.cc_training_progress}
          // hidden
          className="form-control m-2"
        /> */}

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Control
            id="compacare_rep"
            as="select"
            className="form-control m-2"
            defaultValue={profile.compacare_rep}

            // onChange={handleInput}
          >
            <option>Select Your CompaCare Representative</option>
            <option value="Don't who my rep is">
              I don't know who my CompaCare Representative is
            </option>
            <option value="Dr. Johan Mostert (national)">
              Dr. Johan Mostert (national)
            </option>
            <option value="Lance Nelson (Arkansas)">
              Lance Nelson (Arkansas)
            </option>
            <option value="Ashley Grant (Missouri)">
              Ashley Grant (Missouri)
            </option>
            <option value="Ted and Angie Stackpole (Florida)">
              Ted and Angie Stackpole (Florida)
            </option>
            <option value="Steve and Sandra Hogue (Florida)">
              Steve and Sandra Hogue (Florida)
            </option>
            <option value="Paris Yanno (Ohio)">Paris Yanno (Ohio)</option>
            <option value="Dr. Bob Griffith (Wisconsin)">
              Dr. Bob Griffith (Wisconsin)
            </option>
            <option value="Lee and Gretchen Watson (Mississippi)">
              Lee and Gretchen Watson (Mississippi)
            </option>
            <option value="Mark Orphan (California)">
              Mark Orphan (California)
            </option>
            <option value="Dr. Bradley Barrick (Oklahoma)">
              Dr. Bradley Barrick (Oklahoma)
            </option>
            <option value="Rachelle Carkin (Oregon)">
              Rachelle Carkin (Oregon)
            </option>
          </Form.Control>
        </Form.Group>

        <Button className="btn btn-secondary m-2" type="submit">
          Register/Update Profile
        </Button>
      </Form>
    </>
  );
}
