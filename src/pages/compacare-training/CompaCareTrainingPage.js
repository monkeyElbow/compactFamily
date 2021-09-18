import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";
import { useAuth } from "../../util/AuthContext";
import { db } from "../../util/firebase";

import { FaCheck, FaLock } from "react-icons/fa";

const CompaCareTrainingPage = () => {
  document.title = "CompaCare Training";
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");

  const [progress, setProgress] = useState(0)


  useEffect(() => {
    async function fetchUser() {
      var userRef = db.collection("Users").doc(currentUser.uid);

      try {
        var doc = await userRef.get();
        const data = await doc.data();
        setProfile(data);
        setProgress(data.cc_training_progress)
          
        return data.profile;
      } catch (error) {
        console.log(error);
        setError("Mr Stark, I don't feel so good.");
      }
    }
    if (currentUser) {
      fetchUser();
    } else {
      return null;
    }
  }, []);

  return (
    <>
      <BannerCompaCareTraining />

      {error && (
        <Alert variant="danger" className="mb-4 text-center">
          {error}
        </Alert>
      )}

      {profile.cc_training_enrolled !== "yes" && (
        <Container className="py-5">
          <p>
            This Church Leaders’ Training Course will equip you to lead your
            local church to support foster families with our faith-based,
            evidence-supported wraparound program! For several years now, we
            have been aggregating a solid supply of evidence to show that
            churches can make the difference in building capacity, stability,
            and quality in foster care! We are proud that you have chosen to
            join our team to change the way foster care is done in our nation!
          </p>
        </Container>
      )}

      {/* User is not logged in and needs to */}
      {!currentUser && (
        <Container className="py-1 d-flex justify-content-center">
          <Card style={{ maxWidth: "600px" }} className="p-5 text-center">
            <h5>Sign in to register for CompaCare Training</h5>
            <Button href="/signin">Sign in</Button>
            <br />
            <Link to="/signup">Need an account? Click here</Link>
          </Card>
        </Container>
      )}

      {/* User is logged in. show register */}
      {currentUser && profile.cc_training_enrolled !== "yes" && (
        <Container className="pb-5 d-flex justify-content-center">
          <Card style={{ maxWidth: "600px" }} className="p-5">
            <h5>Register for training access</h5>
            <Button href="/compacare-training-register">Register here</Button>
          </Card>
        </Container>
      )}

      {/* Materials!!! User is registered.  */}
      {profile.cc_training_enrolled === "yes" && (
        <Container className="py-1 d-flex justify-content-center">
          <Row className="py-2">
            <Col md={7}>
              <Card className="p-3">
                <h4>Training materials needed for this course</h4>
                <p className="ml-0">
                  <strong>CompaCare Compassion Care System Manual</strong>
                </p>
                <p className="ml-0">
                  <strong>CompaCare Family Advocate Manual</strong>
                </p>
                <p className="ml-0">
                  <strong>CompaCare Volunteer Manual</strong>
                </p>
                <p>
                  You will need a System Manual for each person who is doing the
                  Church Leaders’ Training. Depending on the size of your church
                  and the number of foster families that you will serve, you
                  will need one Family Advocate Manual to train one Family
                  Advocate for every two or three foster families that you will
                  serve. Volunteers who will have direct contact with foster
                  children (Level 2 volunteers) should each have their own
                  Manual when you train them for their roles.
                </p>
                <p>
                  You can order more supplies at any time from My Healthy
                  Church. Here is the link for these supplies:
                </p>
                <div className="text-center">
                  <a
                    className="btn btn-primary my-4"
                    href="https://myhealthychurch.com/store/searchresults.cfm?Criteria=compacare&image.x=22&image.y=18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Purchase at MyHealthyChurch
                  </a>
                </div>
              </Card>
            </Col>


            <Col className="card">
              <Container id="videos" className="d-flex flex-column my-3">
                <h5>Video courses</h5>
                <small>
                  Click completed on each course to unlock the next session.
                </small>

                <Button
                  href="/compacare-training-session-1"
                  className="btn btn-Primary m-2"
                >
                  {profile.cc_training_progress > 0 && (
                    <FaCheck className="mr-3" />
                  )}
                  Video 1: Introduction to CompaCare (49:30)
                </Button>

                {/* button two */}
                {progress > 0 ? (
                  <Button
                    href="/compacare-training-session-2"
                    className="btn btn-primary m-2"
                  >
                    {progress > 1 && (
                      <FaCheck className="mr-3" />
                    )}
                    Video 2: The Problem in Foster Care (36:43)
                  </Button>
                ): (
     <Button
                    disabled
                    href="/compacare-training-session-2"
                    className="btn btn-secondary m-2"
                  >
                    <FaLock className="mr-3" />
                    Video 2: The Problem in Foster Care (36:43)
                  </Button>
                )}

              
                {/* button 3 */}
                {progress > 1 ?
               ( <Button
                 href="/compacare-training-session-3"
                className="btn btn-primary m-2"
                >
 {progress > 2 && (
                      <FaCheck className="mr-3" />
                    )}                  
                  Video 3: The CompaCare Solution (36:43)
                </Button>) : 
                (
                <Button
                disabled
                href="/compacare-training-session-3"
                className="btn btn-secondary m-2"
                >
                    <FaLock className="mr-3" />
                  
                  Video 3: The CompaCare Solution (36:43)
                </Button>
                )
                }


                {/* button 4 */}
                {progress > 2 ?
                (
                <Button
                href="/compacare-training-session-4"
                className="btn btn-primary m-2"
                >
                  {progress > 3 && (
                    <FaCheck className="mr-3" />
                    )}
                  Video 4: The CompaCare Plan (38:26)
                </Button>
                ) : (
                <Button
                disabled
                href="/compacare-training-session-4"
                className="btn btn-secondary m-2"
                >
                    <FaLock className="mr-3" />
                  Video 4: The CompaCare Plan (38:26)
                </Button>
                )
                  }
                 

                <br />
                <h5>Course Certificate</h5>
{progress > 3 ?
(
                <Button
                  href="/compacare-training-certificate"
                  className="btn btn-primary m-2"
                >
                  Print my certificate
                </Button>

) : (
                <Button
                disabled
                  href="/compacare-training-certificate"
                  className="btn btn-secondary m-2"
                >
                    <FaLock className="mr-3" />
                  Print my certificate
                </Button>

)}

                <br />
                <h5>Update your training profile</h5>
                <Button
                  className="btn btn-primary m-2"
                  href="/compacare-training-register"
                >
                  Update Training Profile
                </Button>
              </Container>
            </Col>
          </Row>
        </Container>
      )}

      {/* <Row className="text-white">
<Col lg={4} className="p-5 bg-dark d-flex align-items-center">
            <Link to="/compacare-training-register">
              <h4 className="m-2 stretched-link">
                Register my church with CompaCare 
              </h4>
               
            </Link>
</Col>
<Col lg={4} className="p-5 d-flex align-items-center" style={{backgroundColor:"#666"}}>
            <Link to="/compacare-training-materials">
              <h4 className="m-2 stretched-link">
                I have registered our church and I am ready to order training
                materials
              </h4>
            </Link>
</Col>
<Col className="p-5 d-flex align-items-center" style={{backgroundColor:"var(--red)"}}>
            <Link to="/compacare-training-sessions">
              <h4 className="m-2 stretched-link">
                Access training videos
              </h4>
            </Link>
</Col>
           
          </Row> */}
    </>
  );
};

export default CompaCareTrainingPage;
