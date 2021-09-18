import { useState, useEffect } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { 
  // Link,
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

    },[])


  // LOGOUT FUNCTION
  async function handleLogout() {
    setError("");

    try {
      await signout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
      

    return (
        <>
             {error && <Alert variant="danger">{error}
             <br />
             <a onClick={dismissError} href="#/"> dismiss error</a>
             </Alert>} 

{isAdmin && (
<>
<Container className="p-5">
<Card className="p-5 m-5">

  <h5>Admin</h5>
<p>link to</p>
<p>general admin with messages</p>
<p>compacare admin</p>
<Button variant="link" className="link" onClick={handleLogout}>
            Sign Out
          </Button>
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
