import { Container, Col, Row, Button, Alert } from "react-bootstrap";
import BannerCompaCareTraining from "./components/BannerCompaCareTraining";
import { useState, useEffect } from "react";

import YoutubeEmbed from "../../components/youTubeEmbed";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../util/AuthContext";

import { db } from "../../util/firebase";
import {getDoc, doc, setDoc} from 'firebase/firestore'

import { FaCheck } from "react-icons/fa";

const CompaCareTrainingSession3 = () => {
  document.title = "CompaCare Training Session 3";
  const { currentUser } = useAuth();
  // const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function fetchUser() {
      const userRef = doc(db, "Users", currentUser.uid);
      const docSnap = await getDoc(userRef);
      // setProfile(docSnap.data());
      setProgress(docSnap.data().cc_training_progress)
      console.log('loaded profile')
    }

      try {
        if (currentUser) {
          fetchUser();
        } else {
          return null;
        }
      } catch (error) {
        console.log(error);
        setError("Mr Stark, I don't feel so good.");
      }
  }, []); // eslint-disable-line

  const SendData = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "Users", currentUser.uid)
    await setDoc(docRef, {
      cc_training_progress: 3,
    }, {merge:true})

    navigate("/compacare-training");

  };

  return (
    <>
      <BannerCompaCareTraining />
      {error && (
        <Alert variant="danger" className="mb-4 text-center">
          {error}
        </Alert>
      )}

      <Container>
        <Row className="d-flex justify-content-between py-2">
          <Col
            md={6}
            sm={12}
            className="pt-2 d-flex justify-content-md-start justify-content-sm-center"
          >
            <h5>CompaCare® Training Session 3</h5>
          </Col>
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-md-end justify-content-sm-center"
          >
            {progress > 2 ? (
              <div className="d-flex flex-row pt-2">
                <FaCheck className="mt-1 me-2" /> <h5>Completed</h5>
              </div>
            ) : (
              <Button to="/#" onClick={SendData}>
                I've completed this session
              </Button>
            )}
          </Col>
        </Row>

        <YoutubeEmbed embedId="s7dsP7Z2otE" />
      </Container>
    </>
  );
};

export default CompaCareTrainingSession3;
