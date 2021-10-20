import { useState } from "react";
import { Container, Card, Button, Alert, 
  // Form, Image 
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../util/AuthContext";
// import { storage } from "../../util/firebase";
// import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
// import ProfileImage from "./components/ProfileImage";
// import ProfileImageUpdater from "./components/ProfileImage";

// import { db } from "../../util/firebase";


export default function Dashboard() {
  
  const { currentUser, signout } = useAuth();
  document.title = `COMPACT ${currentUser.email} Dashboard`
  const [error, setError] = useState("");
  const history = useHistory();

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

// upload profile pic:

//   const [image, setImage] = useState('')
// const upload = (e)=>{
//   e.preventDefault()
//   if(image == null)
//   return;
//   const storageRef = ref(storage, `/users/${currentUser.uid}`);
//   uploadBytes(storageRef, image).then((snapshot) =>{
//     console.log('uploaded file')
//   });

// }

// load currentUser's profile pic. replace placement on load

// getDownloadURL(
//   ref(storage, `/users/${currentUser.uid}`)
//   ).then((url) =>{
//     const img = document.getElementById('myPic');
//     img.setAttribute('src', url)
//   })
//   .catch((error) => {
//     console.log(error)
//   })



  return (
    <>
{/* <Container className="p-5 m-5" style={{width:"300px"}}>
<ProfileImageUpdater />
</Container> */}

      <Container
        className="my-3 d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "64vh" }}
      >
        <Card style={{ maxWidth: "600px" }}>
          <Card.Body className="text-center mb-4">
            
    {/* <Link to="/update-profile-pic">
<Image
fluid
// roundedCircle
id="myPic"
src="https://compact.family/images/profileIcon.png"
width="200"
// height="200"
alt="Profile Pic"
/>
</Link>         */}
            
            <h3>Dashboard</h3>
            <br />

            {/* {loading && <div>Loading...</div>} */}
            {error && <Alert variant="danger">{error}</Alert>}

            {currentUser && (
              <div>
                <h5>{currentUser.email}</h5>
              </div>
            )}
            <br />


{/* <Form.Group controlId="formFile" className="mb-3 p-3 border border-5">
  <Form.Label>Update your profile image</Form.Label>
  <Form.Control className="my-2 border" type="file"  onChange={(e)=>{setImage(e.target.files[0])}} />
      <Button onClick={upload}>Upload</Button>
</Form.Group> */}


            {/* <Link className="btn btn-primary w-100 mt-3" to="/admin">Admin</Link> */}

            <Link to="/compacare-training" className="btn btn-primary w-100 mt-3">
              CompaCare Training
            </Link>
            <Link to="/create-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
            <Link to="/update-password" className="btn btn-primary w-100 mt-3">
              Update Email or Password
            </Link>

          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" className="link" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </Container>

    </>
  );
}
