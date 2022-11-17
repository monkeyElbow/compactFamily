import { useState, useEffect, useCallback } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";

import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";
import { FaRegTrashAlt, 
  // FaCopy
 } from "react-icons/fa";

export default function adminGeneral() {
    const { currentUser } = useAuth();
    const [error, setError] = useState("");

    const [contactUsMessages, setContactUsMessages] = useState([]);

    // get contact us form data 
    useEffect(() => {
        const allContactData = [];
        try {
          const unsubscribe = db
            .collection("Contact")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach(doc => {
                  allContactData.push({
                    ...doc.data(),
                    key: doc.id,
                  });
                  // console.log(allContactData)
                });
                setContactUsMessages(allContactData);
              });
            return unsubscribe
        } catch (error) {
          setError("Trouble fetching contact data");
        }
      }, []);

    return (
        <>
               {error && <Alert variant="danger">{error}</Alert>}    

               <Container>
        <h4>Contact Us Messages:{contactUsMessages.length}</h4>

        {contactUsMessages.map((message) => (
          <Card className="m-3 p-3" key={message.key}>
            {/* {message.key} */}
            {message.date}
              
            <h5>{message.name}</h5>
            <p>
            {message.email}
            </p>
            <p>Message:<br />
            {message.message}
            </p>
            <Button variant="danger" onClick={() => db.collection('Contact').doc(message.key).delete()} >
              <FaRegTrashAlt /> Delete Message
            </Button>
          </Card>
        ))}
      </Container>
        </>
    )
}
