// import {getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import { CopyToClipboard } from "react-copy-to-clipboard";

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


// ! load all msgs
useEffect(() => {
    try{
      return onSnapshot(collection(db, "Contact"), (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
  
    } catch (e) {
      setError(e)
    }
  }, []); // eslint-disable-this-line


  // ! start copy to clipboard

  function handleCopy(id, name, email, message, date) {
    const textToCopy = `${date.toDate().toLocaleDateString("en-US", { dateStyle: "long" })}\n${name}\n${email}\n${message}`;
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, copied: true } : msg
      )
    );
    setTimeout(() => {
      setMessages(
        messages.map((msg) =>
          msg.id === id ? { ...msg, copied: false } : msg
        )
      );
    }, 2000);
    navigator.clipboard.writeText(textToCopy);
  }
  // ! end copy to clipboard

  // function handleDelete(id) {
  //   deleteDoc(doc(db, "Contact", id));
  // }

    return (
        <>
    {error && <Alert variant="warning">{error}</Alert>}
        <Container className="py-3">
            <Link to="/admin">Back to Admin Home</Link>
            <h5>Contact Us Form Responses</h5>
            {messages && messages.map((msg) => 
            {return msg.form === 'contactus' ? (

                <Msg key={msg.id} {...msg} onCopy={handleCopy} />
            ): null;
        })}

{messages.length < 1 &&
<Alert>
    <h5>No messages currently from contact us form</h5>
</Alert> 
}
</Container>

        </>
    )
}



function Msg({ id, message, name, date, email, onCopy, onDelete, copied }) {
    const deleteMsg = async (e) => {
    e.preventDefault()
        await deleteDoc(doc(db, 'Contact', id));
    }
    
    return (
      <div key={id} className="d-flex flex-column align-items-center">
        <Card style={{width:"30rem"}} className="border border-3 p-3 my-2">


  
          <p>
              <small>
               
                  {date.toDate().toDateString()}
              </small>
          </p>
          <h5>{name}</h5>
          {/* <h5>'mailto:${email}'</h5> */}
          <a href="'mailto:${email}'">{email}</a>
          {/* <p>id: {id}</p> */}
          <p>{message}</p>

          <div className="d-flex justify-content-evenly">
          <CopyToClipboard text={`${name}\n${email}\n${date.toDate().toLocaleDateString("en-US", { dateStyle: "long" })}\n${message}`} onCopy={() => onCopy(name, email, date, message)}>
            <Button>Copy Message</Button>
          </CopyToClipboard>
          {/* <Button variant="danger" onClick={() => onDelete(id)}>
            <i className="bi bi-file-x"></i> Delete
          </Button> */}
          {copied && <span style={{ color: "green" }}>Copied!</span>}


          <Button variant="danger" onClick={deleteMsg}>
            <i className="bi bi-file-x"></i> Delete
          </Button>
          </div>
        </Card>
      </div>
    );
    }
    