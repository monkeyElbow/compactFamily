import { useState, useEffect } from "react";
import { Container, Card, Alert, Col, Row } from "react-bootstrap";
import { 
  Link,
  } from "react-router-dom";
import { db } from "../../util/firebase";
import {
  collection,
  getDocs
} from "firebase/firestore";

 
 export default function AdminCompacareTraining() {
    const [error, setError] = useState("");
    const [ccTrainingUsers, setCcTrainingUsers] = useState([]);


        // get contact us data 
        useEffect(() => {
          async function fetchProfiles() {
           
            const usersRef = collection(db, "Users")
            const usersSnap = await getDocs(usersRef)
            const tempProfs = []
            usersSnap.forEach(doc => {
              tempProfs.push({
                ...doc.data(),
                key: doc.data()
              })

            })
           
            setCcTrainingUsers(tempProfs)
          
          }
            try {
           if (ccTrainingUsers.length < 1) {
             fetchProfiles()
           } else {
             console.log('check')
           }

            } catch (error) {
              setError("Trouble fetching contact data");
            }
          }, []); // eslint-disable-line



    return (
        <>
              {error && <Alert variant="danger">{error}</Alert>} 
      <Container className="py-3">
      <Link to="/admin">Back to Admin Home</Link>

        <h4>CompaCare Training Enrolled Users:{ccTrainingUsers.length}</h4>

        {ccTrainingUsers.map(user => 
        {
          return user.cc_training_enrolled === 'yes' ? (
            <ProfileCard key={user.id} {...user} />
          ) :(null)
        })}
      </Container>
        </>
    )
}




function ProfileCard({ 
  first_name,
last_name,
cc_training_progress,
email,
pastor_name,
compacare_rep,
church_name,
church_city,
church_phone,
church_state,
church_website}) {
  return(
    <Card className="m-3">
    {/* <p><small>{user.uid}</small></p> */}
    <Card.Header className="pt-3 d-flex justify-content-between">
    <h5>{first_name} {last_name}</h5>
   <p>{' '}{email}</p>
    </Card.Header>
    <Card.Body>

  
   <p>
     CompaCare Training Progress Level: 
     <strong> {cc_training_progress}
     </strong>
     </p>
   <p>CompaCare Rep: 
     <strong>             {compacare_rep}
     </strong>
     </p>

<Row>
<Col md={4} className="p-3">
   <small>Church Name: </small>
   <h5>
     <strong>             {church_name}
     </strong>
     </h5>
</Col>
<Col md={4} className="p-3">
   <small>Pastor Name:
       </small> 
     <h5>
     <strong>             {pastor_name}
     </strong>
   </h5>
</Col>
<Col md={4} className="p-3">
   <small>Church Phone: 
     </small>
     <h5>
       
     <strong>       {church_phone}
     </strong>
     </h5>
</Col>
   </Row>

   <Row>
     <Col md={4} className="p-3">
   <small>Church City: </small>
   <h5><strong>{church_city}</strong></h5>
     </Col>
     <Col md={4} className="p-3">
   <small>Church State: </small>
   <h5><strong>{church_state}</strong></h5>
     </Col>
     <Col md={4} className="p-3">
   <small>Church Website:</small> 
   <h5><strong>
   <a
rel="noopener noreferrer"
target="_blank"
href={`//${church_website.replace(/^\/\/|^.*?:(\/\/)?/, '')}`}
>
{church_website.replace(/^\/\/|^.*?:(\/\/)?/, '')}
</a>
</strong></h5>
     </Col>
   </Row>


  
  
</Card.Body>
  </Card>
  )
}