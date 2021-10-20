// import {getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import {Link} from 'react-router-dom'
import { Card, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaRegTrashAlt, 
    // FaCopy
   } from "react-icons/fa";

// import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { useAuth } from "../../util/AuthContext";

import { db } from "../../util/firebase";


export default function AdminContact() {
    document.title = "CompaCare Admin"
    const { currentUser } = useAuth();
    const [messages, setMessages] = useState([])


    useEffect(() => {
        const allMessages = []
       async function fetchMessages() {
    }
    try{
    var messagesRef = db.collection("Contact")
    messagesRef.get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            allMessages.push({
                ...doc.data(),
                key: doc.id,})
        })
        setMessages(allMessages)

    })
    if(currentUser) {
        fetchMessages()
    } else {return null}

} catch (error) {
    console.log(error)
}
    }, [])

    return (
        <>

        <Container className="py-3">
            <Link to="/admin">Back to Admin Home</Link>
            <h5>Contact Us Form Responses</h5>
            <small>*Currently need to refresh page after deleting</small>
{messages && <>
{messages.map((msg) => (
    <Card style={{borderWidth:"2px"}} key={msg.key} className="p-4 m-4 bg-light">
    
    {/* {msg.key} */}
    <small>
    {msg.date}
    </small>
    <h5>
    {msg.name}
    </h5>
    <p>{msg.email}</p>
    <p className="my-1 border p-3 bg-white">
    {msg.message}
    </p>


    <Button variant="danger" 
    onClick={() => db.collection('Contact').doc(msg.key).delete()} >
              <FaRegTrashAlt /> Delete Message
            </Button>
    </Card>
))}

</>}

{messages.length < 1 && 
    <h5>No messages currently from contact us form</h5>
}
</Container>

        </>
    )
}
