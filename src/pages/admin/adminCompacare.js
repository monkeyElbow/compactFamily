import { useState, useEffect } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { 
  Link,
  //  useHistory
   } from "react-router-dom";
// import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";
import { FaRegTrashAlt, 
  // FaCopy
 } from "react-icons/fa";
 
 export default function AdminCompacare() {
    // const { currentUser  } = useAuth();
    const [error, setError] = useState("");
    // const history = useHistory();
    const [compacareMessages, setCompacareMessages] = useState([]);


        // get contact us data 
        useEffect(() => {
            const allContactData = [];
            try {
              const unsubscribe = db
                .collection("CompacareContact")
                .get()
                .then((querySnapshot) => {
                  querySnapshot.forEach(doc => {
                      allContactData.push({
                        ...doc.data(),
                        key: doc.id,
                      });

                    });
                    setCompacareMessages(allContactData);
                  });
                return unsubscribe
            } catch (error) {
              setError("Trouble fetching contact data");
            }
          }, []);



    return (
        <>
              {error && <Alert variant="danger">{error}</Alert>} 
      <Container className="py-3">
      <Link to="/admin">Back to Admin Home</Link>

        <h4>CompaCare Interest Form Messages:{compacareMessages.length}</h4>

        {compacareMessages.map((message) => (
          <Card className="m-3 p-3" key={message.key}>
            {/* <p><small>Message Key:
            {message.key}
              </small></p> */}
            <h5>{message.name}</h5>
<small>
              {message.date}
</small>
            
           <p>
            {message.email}
           {/* <FaCopy /> */}
           </p>
          
           <p>
Phone: {message.phone}
           </p>
           <p>
Church Name: {message.churchName}
           </p>
           <p>Lead Pastor: {message.leadPastor}</p>
           <p>Church Address: {message.churchAddress}</p>
            <p>Heard about us: {message.hearAboutUs}</p>
            <Button variant="danger" 
            onClick={() => (
              db.collection('CompacareContact').doc(message.key).delete()
              )} >
              <FaRegTrashAlt /> Delete Message
            </Button>
          </Card>
        ))}
      </Container>
        </>
    )
}
