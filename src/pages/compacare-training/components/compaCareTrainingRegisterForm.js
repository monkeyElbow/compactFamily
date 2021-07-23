import { useState } from "react";
import { Link } from "react-router-dom";
import {Container, Alert} from 'react-bootstrap';

export default function CompaCareCourseRegisterForm() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const {
        ChurchName,
        ChurchAddress,
        ChurchPhone,
        ChurchWebsite,
        PastorName,
        UserName,
        UserEmail,
        UserShipping,
        Rep,
    } = formData;
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/monkeyelbow/google_sheets/ARcIFlMgbSYAzdFO?tabId=courseRegister",
        {
          method: "post",
          body: JSON.stringify([
            [
                ChurchName,
                ChurchAddress,
                ChurchPhone,
                ChurchWebsite,
                PastorName,
                UserName,
                UserEmail,
                UserShipping,
                Rep,
            ],
          ]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
    //   console.log("Success:", JSON.stringify(json));
      setMessage("Success! Thanks for your registering.");
        setSuccess(true)

    } catch (error) {
      // console.error("Error:", error);
      setMessage("Error");
    }
  };
  return (
    <div>
      <h5 className="m-3">Register for the course.</h5>
      <form
        required
        onSubmit={sendData}
        className="d-flex flex-column justify-items-center"
        name="courseRegister"
      >
        <input
          name="ChurchName"
          type="text"
          placeholder="Name of your local church"
          className="form-control m-2"
          onChange={handleInput}
        />

        <textarea
          rows="5"
          name="ChurchAddress"
          type="text"
          placeholder="Church Address"
          className="form-control m-2"
          onChange={handleInput}
        />

          <input
            name="ChurchPhone"
            type="tel"
            placeholder="Church Phone Number"
            className="form-control m-2"
            onChange={handleInput}
          />
        <textarea
          name="ChurchWebsite"
          type="url"
          placeholder="Church Website URL(if available)"
          className="form-control m-2"
          onChange={handleInput}
        />
        
        <input
          name="PastorName"
          type="text"
          placeholder="Lead Pastor's Name"
          required
          onChange={handleInput}
          className="form-control m-2"
        />

                <input
          name="UserName"
          type="text"
          placeholder="Your Name(if different than above)"
          required
          onChange={handleInput}
          className="form-control m-2"
        />

        <input
          name="UserEmail"
          type="email"
          placeholder="Your Email"
          required
          onChange={handleInput}
          className="form-control m-2"
        />

        <textarea
          rows="5"
          name="UserShipping"
          type="textarea"
          placeholder="Your shipping address"
          className="form-control m-2"
          onChange={handleInput}
        />
<select
name="Rep"
// type="select"
// placeholder="whawah"
className="form-control m-2"
onChange={handleInput}
>
    <option>Select Your CompaCare Representative</option>
    <option value="Don't who my rep is">I don't know who my CompaCare Representative is</option>
    <option value="Dr. Johan Mostert (national)">Dr. Johan Mostert (national)</option>
    <option value="Lance Nelson (Arkansas)">Lance Nelson (Arkansas)</option>
    <option value="Ashley Grant (Missouri)">Ashley Grant (Missouri)</option>
    <option value="Ted and Angie Stackpole (Florida)">Ted and Angie Stackpole (Florida)</option>
    <option value="Steve and Sandra Hogue (Florida)">Steve and Sandra Hogue (Florida)</option>
    <option value="Paris Yanno (Ohio)">Paris Yanno (Ohio)</option>
    <option value="Dr. Bob Griffith (Wisconsin)">Dr. Bob Griffith (Wisconsin)</option>
    <option value="Lee and Gretchen Watson (Mississippi)">Lee and Gretchen Watson (Mississippi)</option>
    <option value="Mark Orphan (California)">Mark Orphan (California)</option>
    <option value="Dr. Bradley Barrick (Oklahoma)">Dr. Bradley Barrick (Oklahoma)</option>
    <option value="Rachelle Carkin (Oregon)">Rachelle Carkin (Oregon)</option>
</select>



        <button
          className="btn btn-secondary m-2"
          name="submit"
          type="submit"
          value="Send"
        >
          Register
        </button>

        {success && 
        <div>
        <Container>
<Alert variant="success">
<p>
          {message}
</p>
        <Link to="/compacare-training-sessions">
          <strong>
          Go to training sessions
          </strong>
          </Link>
</Alert>
        </Container>

        </div>
        }
      </form>
    </div>
  );
}
