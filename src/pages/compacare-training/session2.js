import { Container, Col, Row, Button, Alert } from "react-bootstrap";
import BannerCompaCareTraining from "./components/BannerCompaCareTraining";
import { useState, useEffect } from "react";

import YoutubeEmbed from "../../components/youTubeEmbed";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../util/AuthContext";

import { db } from "../../util/firebase";

import { FaCheck } from "react-icons/fa";


const CompaCareTrainingSession2 = () => {
  document.title = "CompaCare Training Session 2"
  const { currentUser } = useAuth();
  // const [profile, setProfile] = useState([]);
  const history = useHistory();
  const [error, setError] = useState('')
  const [progress, setProgress] = useState(0)

  
  useEffect(() => {
    async function fetchUser() {
      var userRef = db.collection("Users").doc(currentUser.uid);
  
      try {
        var doc = await userRef.get();
        const data = await doc.data();
        // setProfile(data)
        setProgress(data.cc_training_progress)

        return data.profile

  
      } catch (error) {
        console.log(error)
        setError("Mr Stark, I don't feel so good.")
      }
  
    }
    if(currentUser) {
      fetchUser()
    } else { return null}
  
  }, [currentUser])



  const SendData = async (e) => {
    e.preventDefault();

            const unsubscribe = db.collection('Users').doc(currentUser.uid).update({
              "cc_training_progress" : 2
            })
        history.push("/compacare-training")

    return unsubscribe

  };

    return(
        <><BannerCompaCareTraining />
        {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}
        
        <Container>
          <Row className="d-flex justify-content-between py-2">
        <Col md={6} sm={12} className="pt-2 d-flex justify-content-md-start justify-content-sm-center">
          <h5>CompaCare® Training Session 2</h5>
        </Col>
        <Col md={6} sm={12} className="d-flex justify-content-md-end justify-content-sm-center">

        {progress > 1 ?
(
<div className="d-flex flex-row pt-2">
<FaCheck className="mt-1 me-2" /> <h5>Completed</h5>
</div>
) : (
<Button to="/#" onClick={SendData}>I've completed this session</Button>
)}
        
        </Col>
          </Row>
<YoutubeEmbed embedId="0dJzFlxA0D8" />

</Container>
        </>
    )
}

export default CompaCareTrainingSession2;