// import {getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import {Link} from 'react-router-dom'
import { Card, Button, Container, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

import "firebase/compat/firestore"

import { db } from "../../util/firebase";
import {onSnapshot, doc, deleteDoc, collection} from 'firebase/firestore'


export default function AdminContact() {
    document.title = "CompaCare Admin"
    // const { currentUser } = useAuth();
    const [messages, setMessages] = useState([])
    const [error, setError] = useState(false)


// load all msgs
useEffect(() => {
    try{
      return onSnapshot(collection(db, "Contact"), (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  
    } catch (e) {
      setError(e)
    }
  }, []); // eslint-disable-this-line

    return (
        <>
    {error && <Alert variant="warning">{error}</Alert>}
        <Container className="py-3">
            <Link to="/admin">Back to Admin Home</Link>
            <h5>Contact Us Form Responses</h5>
            {messages && messages.map((msg) => 
            {return msg.form === 'contactus' ? (

                <Msg key={msg.id} {...msg} />
            ): null;
        })}

{/* {messages.length < 1 && 
    <h5>No messages currently from contact us form</h5>
} */}
</Container>

        </>
    )
}



function Msg({ id, message, name, date, email }) {
    const deleteMsg = async (e) => {
    e.preventDefault()
        await deleteDoc(doc(db, 'Contact', id));
    }
    
    return (
      <div key={id} className="d-flex flex-column align-items-center">
        <Card style={{width:"30rem"}} className="border border-3 p-3 my-2">
          <p>
              <small>
                {/* {date} */}
                  {date.toDate().toDateString()}
              </small>
          </p>
          <h5>{name}</h5>
          <h5>{email}</h5>
          {/* <p>id: {id}</p> */}
          <p>{message}</p>
          <Button variant="danger" onClick={deleteMsg}>
            <i className="bi bi-file-x"></i> Delete
          </Button>
        </Card>
      </div>
    );
    }
    