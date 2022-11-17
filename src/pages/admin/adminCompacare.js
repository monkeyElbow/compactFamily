import { useState, useEffect } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { 
  Link,
   } from "react-router-dom";
// import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";
// import { FaRegTrashAlt, 
//   FaCopy
//  } from "react-icons/fa";
import {onSnapshot, doc, deleteDoc, collection} from 'firebase/firestore'
 
 export default function AdminCompacare() {
    // const { currentUser  } = useAuth();
    const [error, setError] = useState("");
    const [compacareMessages, setCompacareMessages] = useState([]);


// load all msgs
useEffect(() => {
  try{
    return onSnapshot(collection(db, "Contact"), (snapshot) => {
      setCompacareMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

  } catch (e) {
    setError(e)
  }
}, []); // eslint-disable-this-line



    return (
        <>
              {error && <Alert variant="danger">{error}</Alert>} 
      <Container className="py-3">
      <Link to="/admin">Back to Admin Home</Link>

        <h4>CompaCare Interest Form Messages:</h4>

        {compacareMessages && compacareMessages.map((msg) => 
            {return msg.form === 'compacare' ? (

                <Msg key={msg.id} {...msg} />
            ): null;
        })}

{/* {compacareMessages.length < 1 && 
    <h5>No messages currently from contact us form</h5>
} */}
      </Container>
        </>
    )
}



function Msg({ id, message, name, date, 
  church_address,
church_name,
lead_pastor,
email,
phone
}) {
  const deleteMsg = async (e) => {
  e.preventDefault()
      await deleteDoc(doc(db, 'Contact', id));
  }
  
  return (
    <div key={id} className="d-flex flex-column align-items-center">
      <Card style={{width:"30rem"}} className="bg-light p-3 my-2">
        <p>
            <small>
                {date.toDate().toDateString()}
            </small>
        </p>
        <h5>{name}</h5>
        <p>{email}</p>
        <p>phone: {phone}</p>
        {/* <p>id: {id}</p> */}
        <p>Church name: {church_name}</p>
        <p>Pastor name: {lead_pastor}</p>
        <p>Church address: {church_address}</p>
        <p>Message/How did you hear about us: {message}</p>
        <Button variant="danger" onClick={deleteMsg}>
          <i className="bi bi-file-x"></i> Delete
        </Button>
      </Card>
    </div>
  );
  }
  