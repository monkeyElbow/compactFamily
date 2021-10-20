import { useState, useEffect } from "react";
import { Container, Card, Alert } from "react-bootstrap";
import { 
  Link,
  //  useHistory 
  } from "react-router-dom";
// import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";

 
 export default function AdminCompacareTraining() {
    // const { currentUser  } = useAuth();
    const [error, setError] = useState("");
    // const history = useHistory();
    const [ccTrainingUsers, setCcTrainingUsers] = useState([]);


        // get contact us data 
        useEffect(() => {
            const trainingEnrolled = [];
            try {
              const unsubscribe = db
                .collection("Users")
                .where("cc_training_enrolled", "==", "yes")
                .get()
                .then((querySnapshot) => {
                  querySnapshot.forEach(doc => {
                      trainingEnrolled.push({
                        ...doc.data(),
                        key: doc.id,
                      });

                    });
                    setCcTrainingUsers(trainingEnrolled);
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

        <h4>CompaCare Training Enrolled Users:{ccTrainingUsers.length}</h4>

        {ccTrainingUsers.map((user) => (
          <Card className="m-3 p-3" key={user.key}>
            {/* <p><small>{user.uid}</small></p> */}
            <h5>{user.first_name} {user.last_name}</h5>
            
           <p>{user.email}
           {/* <FaCopy /> */}
           </p>
          
           <p>Training Progress Level: {user.cc_training_progress}</p>
           <p>CompaCare Rep: {user.compacare_rep}</p>
           <p>Church Name: {user.church_name}</p>
           <p>Pastor Name: {user.pastor_name}</p>
           <p>Church Phone: {user.church_phone}</p>
           <p>Church City: {user.church_city}</p>
           <p>Church State: {user.church_state}</p>
           <p>Church Website: <a
      rel="noopener noreferrer"
      target="_blank"
      href={`//${user.church_website.replace(/^\/\/|^.*?:(\/\/)?/, '')}`}
      >
      {user.church_website.replace(/^\/\/|^.*?:(\/\/)?/, '')}
    </a></p>


          
          
          </Card>
        ))}
      </Container>
        </>
    )
}
