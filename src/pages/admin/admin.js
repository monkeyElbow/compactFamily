import { useState, useEffect } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { 
  Link,
   useHistory } from "react-router-dom";
import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";
// import { FaRegTrashAlt, 
//   FaCopy
//  } from "react-icons/fa";


export default function AdminHome() {
    const { currentUser, signout  } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    const [isAdmin, setIsAdmin] = useState(false)

    function dismissError(e) {
      e.preventDefault()
      setError("")
    }
  
    //admin check
    useEffect(() => {
try{
  const adminCheck = db.collection("Admin").doc(currentUser.uid)
  return adminCheck.get()
  .then((docData) => {
    if (!docData.exists) {
      console.log('no doc found')
    } 
    if (docData.exists) {
      console.log("doc found")
      setIsAdmin(true)
    } else {
      console.log('check failed')
    }
  })

} catch (error) {
setError("Failed admin check")
}

    },[currentUser])


      

    return (
        <>
             {error && <Alert variant="danger">{error}
             <br />
             <a onClick={dismissError} href="#/"> dismiss error</a>
             </Alert>} 

{isAdmin && (
<>
<Container className="p-md-5">
<Card className="p-5 m-1">

  <h5>Admin</h5>
<Link to="admin-contact">COMPACT Contact Us Form Messages</Link>
<br />
<h5>CompaCare</h5>
<Link to="/admin-compacare">CompaCare Interest Form Messages</Link>
<Link to="/admin-compacare-training">CompaCare Training Users</Link>

</Card>
</Container>

</>
)}


{!isAdmin && (
<Container fluid className="d-flex justify-content-center align-items-center blue" style={{minHeight:"90vh"}}>

<p>no peeking</p>

</Container>
)}




        </>
    )
}
