// import {Form, Text, TextArea} from 'informed'
import {useState} from 'react'




export default function CompaCareInterestForm() {

    const [postDate, setPostDate] = useState(new Date());

const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const {Date, Name, Email, Phone, ChurchName, Pastor, ChurchAddress, HearAboutUs} = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/monkeyelbow/google_sheets/ARcIFlMgbSYAzdFO?tabId=interest",
                {
                    method: "post",
                    body: JSON.stringify([[postDate, Name, Email, Phone, ChurchName, Pastor, ChurchAddress, HearAboutUs]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success! Thanks for your interest in CompaCare");
        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };
    return (
        <div>

            <h5 className="m-3">Interested in CompaCare? Let us know.</h5>
            <form
            required
            onSubmit={sendData}
            className="d-flex flex-column justify-items-center"
            name="interest"
            >


                {/* <label>Full Name:</label> */}
                    <input 
                    name="Name" 
                    type="text"
                    placeholder="Your Full Name"
                    required
                    onChange={handleInput}
                    className="form-control m-2"
                    />
                
                {/* <label>Email:</label> */}
                    <input 
                    name="Email"
                    type="email"
                    placeholder="Your Email"
                    required
                    onChange={handleInput}
                    className="form-control m-2"
                    />
                
                {/* <label>Phone:</label> */}
                    <input 
                    name="Phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    className="form-control m-2"
                    onChange={handleInput} />
                
                {/* <label>Church Name: </label> */}
                    <input 
                    name="ChurchName"
                    type="text"
                    placeholder="Your Church's Name"
                    className="form-control m-2"
                    onChange={handleInput}
                    />
   
                {/* <label> Lead Pastor's Name: </label> */}
                    <input 
                    name="Pastor"
                    type="text"
                    placeholder="Lead Pastor's Name"
                    className="form-control m-2"
                    onChange={handleInput} />
               
                {/* <label> Church Address: </label> */}
                    <textarea 
                    rows="5"
                    name="ChurchAddress"
                    type="text"
                    placeholder="Church Address"
                    className="form-control m-2"
                    onChange={handleInput} />
               
                {/* <label>How did you hear about CompaCare? </label> */}
                    <textarea 
                    rows="5"
                    name="HearAboutUs"
                    type="textarea"
                    placeholder="How did you hear about CompaCare?"
                    className="form-control m-2"
                    onChange={handleInput} />
               

                <button className="btn btn-primary m-2" name="submit" type="submit" value="Send">Express Yourself!</button>
                {message}
            </form>
        </div>
    )
}
