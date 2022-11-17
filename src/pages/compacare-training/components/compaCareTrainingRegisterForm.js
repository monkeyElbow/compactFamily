import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Form, Button, Row, Col } from "react-bootstrap";
import { useAuth } from "../../../util/AuthContext";
import { db } from "../../../util/firebase";
import {getDoc, setDoc, doc} from 'firebase/firestore'
// import { FaYenSign } from "react-icons/fa";

export default function CompaCareCourseRegisterForm() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [churchName,setChurchName] = useState('')
  const [churchCity,setChurchCity] = useState('')
  const [churchState,setChurchState] = useState('')
  const [churchPhone,setChurchPhone] = useState('')
  const [churchUrl,setChurchUrl] = useState('')
  const [pastorName,setPastorName] = useState('')
  const [ccRep, setCcRep] = useState('')

  // get form items to populate fields on load
  useEffect(() => {
    async function fetchProfile() {
      const docRef = doc(db, "Users", currentUser.uid);
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()) {
        console.log('Loading profile')
        setFirstName(docSnap.data().first_name)
        setLastName(docSnap.data().last_name)

        if (docSnap.data().church_state !== undefined) {
          setChurchState(docSnap.data().church_state)
        }
        if (docSnap.data().church_name !== undefined) {
          setChurchName(docSnap.data().church_name)
        }
        if (docSnap.data().church_city !== undefined) {
          setChurchCity(docSnap.data().church_city)
        }
        if (docSnap.data().pastor_name !== undefined) {
          setPastorName(docSnap.data().pastor_name)
        }
        if (docSnap.data().church_phone !== undefined) {
          setChurchPhone(docSnap.data().church_phone)
        }
        if (docSnap.data().curch_website !== undefined) {
          setChurchUrl(docSnap.data().church_website)
        }
        if (docSnap.data().compacare_rep !== undefined) {
          setCcRep(docSnap.data().compacare_rep)
        }

      } else {
        console.log('no profile found')
      }
    }

      try {
        fetchProfile()
      } catch (error) {
        console.log(error);
        setError(`Mr Stark, I don't feel so good. ${error}`);
      }
  }, []); //eslint-disable-line

 // SAVING PROFILE INFO CODE //
 const SendData = async (e) => {
  setLoading(true);
  e.preventDefault();
  const docRef = doc(db, "Users", currentUser.uid)
  await setDoc(docRef, {
      email: currentUser.email,
      uid: currentUser.uid,
      first_name: firstName,
      last_name: lastName,
      church_name: churchName,
      church_city: churchCity,
      church_state: churchState,
      church_phone: churchPhone,
      church_website: churchUrl,
      cc_training_enrolled: 'yes',
      compacare_rep: ccRep,
      pastor_name: pastorName,
  }, {merge:true});
  setLoading(false)
  navigate('/compacare-training')
}
// END SAVING PROFILE INFO CODE //

  return (
    <>
    {loading && <Alert variant="info">Loading</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

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
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </Col>

            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                id="last_name"
                type="text"
                placeholder="Last Name"
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Label>Your church information:</Form.Label>
          <br />
          <Form.Label>
            Church Name:<small> *required</small>
          </Form.Label>
          <Form.Control
            required
            id="church_name"
            type="text"
            placeholder="Name of your local church"
            className="form-control m-2"
            onChange={(e) => setChurchName(e.target.value)}
            defaultValue={churchName}
          />

          <Row>
            <Col>
          <Form.Label>
            Church City:<small> *required</small>
          </Form.Label>
          <Form.Control
            required
            id="church_city"
            type="text"
            placeholder="Church City"
            className="form-control m-2"
            onChange={(e) => setChurchCity(e.target.value)}
            defaultValue={churchCity}
          />
            </Col>
            <Col>
          <Form.Label>
            Church State:<small> *required</small>
          </Form.Label>
          <Form.Control
            required
            id="church_state"
            as="select"
            placeholder="Church State"
            className="form-control m-2"
            onChange={(e) => setChurchState(e.target.value)}
            value={churchState}
          >
            {/* <option value="NONE">None Selected</option> */}

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

          </Row>


          <Form.Label>Church Phone:</Form.Label>
          <Form.Control
            id="church_phone"
            type="tel"
            placeholder="Church Phone Number"
            className="form-control m-2"
            onChange={(e) => setChurchPhone(e.target.value)}
            defaultValue={churchPhone}
          />

          <Form.Label>Church Website URL:</Form.Label>
          <Form.Control
            id="church_website"
            type="text"
            placeholder="Church Website URL(if available)"
            className="form-control m-2"
            onChange={(e) => setChurchUrl(e.target.value)}
            defaultValue={churchUrl}
          />

          <Form.Label>Pastor Name:</Form.Label>
          <Form.Control
            id="pastor_name"
            type="text"
            placeholder="Lead Pastor's Name"
            onChange={(e) => setPastorName(e.target.value)}
            defaultValue={pastorName}
            className="form-control m-2"
          />
        </Form.Group>


        <Form.Group className="mt-3 bg-light p-3 border">
          <Form.Control
            id="compacare_rep"
            as="select"
            className="form-control m-2"
            value={ccRep}
            onChange={(e) => setCcRep(e.target.value)}
          >
            <option value="">Select Your CompaCare Representative</option>
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

        <Button className="btn m-2" type="submit">
          Register/Update Profile
        </Button>
      </Form>
    </>
  );
}
