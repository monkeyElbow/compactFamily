import { useState, useEffect, useCallback } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { 
  // Link,
   useHistory } from "react-router-dom";
import { useAuth } from "../../util/AuthContext";
import { db, auth } from "../../util/firebase";
import { FaRegTrashAlt, 
  // FaCopy
 } from "react-icons/fa";
 
 export default function adminCompacare() {
    const { currentUser, signout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();
    const [compacareMessages, setCompacareMessages] = useState([]);
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
        <h4>CompaCare Interest Form Messages:{compacareMessages.length}</h4>

        {compacareMessages.map((message) => (
          <Card className="m-3 p-3" key={message.key}>
            {/* <p><small>Message Key:
            {message.key}
              </small></p> */}
<small>
              {message.date}
</small>
            
            <h5>{message.name}</h5>
           <p>
            {message.email}
           {/* <FaCopy /> */}
           </p>
          
           <p>
Phone:
            {message.phone}
           </p>
           <p>
Church Name:
            {message.churchName}
           </p>
           <p>
Lead Pastor:
            {message.leadPastor}
           </p>
           <p>
Church Address:
            {message.churchAddress}
           </p>
            {message.HearAboutUs}
            <p>Message:        </p>
            <p>
            {message.message}
            </p>
            <Button variant="danger" onClick={() => db.collection('CompacareContact').doc(message.key).delete()} >
              <FaRegTrashAlt /> Delete Message
            </Button>
          </Card>
        ))}
      </Container>
        </>
    )
}
