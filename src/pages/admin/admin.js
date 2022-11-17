import { useState, useEffect } from "react";
import { Container, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";
import { getDoc, doc, 
  // collection, deleteDoc, onSnapshot
 } from "firebase/firestore";
// import { connectStorageEmulator } from "@firebase/storage";

// import { FaRegTrashAlt,
//   FaCopy
//  } from "react-icons/fa";

export default function AdminHome() {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  // const [contactMessages, setContactMessages] = useState([])

  const [isAdmin, setIsAdmin] = useState(false);

  function dismissError(e) {
    e.preventDefault();
    setError("");
  }

  //admin check
  useEffect(() => {
    async function adminCheck() {
      const userRef = doc(db, "Admin", currentUser.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists) {
        console.log("no doc found");
      }
      if (docSnap.exists) {
        console.log("doc found");
        setIsAdmin(true);
      } else {
        console.log("check failed");
      }
    }

    // async function fetchMessages() {
    //   return onSnapshot(collection(db, "Contact"), (snapshot) => {
    //     setContactMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   });
    // }

    try {
      
      if (!isAdmin) {
        adminCheck();        
      } else {
        console.log("is admin")
        // fetchMessages()
      }

    } catch (error) {
      setError("Failed admin check");
    }
  }, []); // eslint-disable-line

  return (
    <>
      {error && (
        <Alert variant="danger">
          {error}
          <br />
          <a onClick={dismissError} href="#/">
            {" "}
            dismiss error
          </a>
        </Alert>
      )}
      {isAdmin && (
        <>
        

          <Container className="p-md-5">
            <Card className="p-5 m-1">
              <h5>Admin</h5>
{/* {contactMessages && contactMessages.map((msg) => {
  return msg.form === 'contactus' ? (
<Msg key={msg.id} {...msg} />
  ) : null;
})} */}
              <Link to="/admin-contact">COMPACT Contact Us Form Messages</Link>
              <br />
              <h5>CompaCare</h5>
              <Link to="/admin-compacare">
                CompaCare Interest Form Messages
              </Link>
              <Link to="/admin-compacare-training">
                CompaCare Training Users
              </Link>
            </Card>
          </Container>
        </>
      )}

      {!isAdmin && (
        <Container
          fluid
          className="d-flex justify-content-center align-items-center blue"
          style={{ minHeight: "90vh" }}
        >
          <p>no peeking</p>
        </Container>
      )}
    </>
  );
}


// function Msg({ id, message, name, date }) {
//   const deleteMsg = async (e) => {
//   e.preventDefault()
//       await deleteDoc(doc(db, 'Contact', id));
//   }
  
//   return (
//     <div key={id} className="d-flex flex-column align-items-center">
//       <Card style={{width:"20rem"}} className="bg-blue p-3 my-2 text-light">
//         <p>
//             <small>
//                 {date.toDate().toDateString()}
//             </small>
//         </p>
//         <h5>{name}</h5>
//         {/* <p>id: {id}</p> */}
//         <p>{message}</p>
//         <Button variant="danger" onClick={deleteMsg}>
//           <i className="bi bi-file-x"></i> Delete
//         </Button>
//       </Card>
//     </div>
//   );
//   }
  