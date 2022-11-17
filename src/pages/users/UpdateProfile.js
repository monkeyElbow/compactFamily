import { useState, useEffect } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";
import { useNavigate } from "react-router-dom";
import {getDoc, setDoc, doc } from 'firebase/firestore'

export default function UpdateProfile() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // profile fields:
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [userState, setUserState] = useState('NONE')
const [userCity, setUserCity] = useState('')
const [userZip, setUserZip] = useState('')
const [socialMedia, setSocialMedia] = useState('')
const [streetAddress, setStreetAddress] = useState('')

useEffect(() => {
  console.log(userCity)
  setLoading(true);
  async function fetchProfile() {
    const docRef = doc(db, "Users", currentUser.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log('Loading Profile');
      setUserState(docSnap.data().state)
      setFirstName(docSnap.data().first_name)
      setLastName(docSnap.data().last_name)
      setUserCity(docSnap.data().city)
      console.log(docSnap.data().city)
      console.log(`that: ${docSnap.data().city}`)
      console.log(`that: ${userCity}`)

      setUserZip(docSnap.data().user_zip)
      setStreetAddress(docSnap.data().street_address)
      setSocialMedia(docSnap.data().social_media)
    } else {
      console.log('no profile found.')

      // const docRef = doc(db, "Users", currentUser.uid)
      // await setDoc(docRef, {
      //   email: currentUser.email,
      //   uid: currentUser.uid,
      // },{merge: true})
    }
  }

  try{
    fetchProfile();
  } catch (e) {
    console.log(error);
    setError(e)
  }
  setLoading(false)
},[]) //eslint-disable-line


  // SAVING PROFILE INFO CODE //
  const updateProfile = async (e) => {
    setLoading(true);
    e.preventDefault();
    const docRef = doc(db, "Users", currentUser.uid)
    await setDoc(docRef, {
        email: currentUser.email,
        uid: currentUser.uid,
        first_name: firstName,
        last_name: lastName,
        city: userCity,
        social_media: socialMedia,
        state: userState,
        street_address: streetAddress,
        user_zip: userZip,
    }, {merge:true});
    setLoading(false)
    navigate('/dashboard')
  }
  // END SAVING PROFILE INFO CODE //

  return (
    <div style={{ margin: "75px" }}>
      {error && <Alert variant="warning">{error}</Alert>}
      <h2>Create your User Profile</h2>
      <br />
      <Form onSubmit={updateProfile}>
        <Form.Group className="mt-3 bg-light p-3 border">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                id="first_name"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              ></Form.Control>
            </Col>

            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                id="last_name"
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Control
            id="street_address"
            defaultValue={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            type="text"
            placeholder="Street Address"
          ></Form.Control>

          <Row className="mt-3">
            <Col>
              <Form.Label>City</Form.Label>
              <Form.Control
                id="city"
                defaultValue={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                type="text"
                placeholder="City"
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>State</Form.Label>
              <Form.Control id="state" as="select"
              value={userState}
              onChange={(e) => setUserState(e.target.value)}
              >
                <option value="NONE">None Selected</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                id="user_zip"
                type="text"
                defaultValue={userZip}
                onChange={(e) => setUserZip(e.target.value)}
                placeholder="Zip"
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Label>Social Media</Form.Label>
          <Row>
            <Col md={1} className="d-flex align-items-center">
              <small>https://</small>
            </Col>
            <Col>
              <Form.Control
                id="social_media"
                type="text"
                defaultValue={socialMedia}
                onChange={(e) => setSocialMedia(e.target.value)}
                placeholder="URL"
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

  
        <input type="hidden" id="uid" value={currentUser.uid}></input>

        <Button className="mt-4" disabled={loading} type="submit">
          Update Profile
        </Button>
      </Form>

    </div>
  );
}
