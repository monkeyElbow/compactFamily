import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";

const CompaCareTrainingPage = () => {
  document.title = "CompaCare Training"

    return(
        <>
<BannerCompaCareTraining />

        <Container className="my-5">
            <h2>
            Welcome!
            </h2>
            
            <h3>
            You have been invited to participate in the CompaCare
            Church Leaders’ Certificate Training. 

            </h3>
          <p>
            This course will equip you to
            lead your local church to support foster families with our
            faith-based, evidence-supported wraparound program! For several
            years now, we have been aggregating a solid supply of evidence to
            show that churches can make the difference in building capacity,
            stability, and quality in foster care! We are proud that you have
            chosen to join our team to change the way foster care is done in our
            nation!
          </p>

            <h4>Your next steps</h4>
          <Row className="text-white">
<Col lg={4} className="p-5 bg-dark d-flex align-items-center">
            <Link to="/compacare-training-register">
              <h4 className="m-2 stretched-link">
                Register my church with CompaCare 
              </h4>
                <p>
                (this is the first, necessary
                step)
                </p>
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
            {/* <Link to="/compacare-training-register">
              <button className="btn btn-secondary m-2">
                Register my church with CompaCare (this is the first, necessary
                step)
              </button>
            </Link>
            <Link to="/compacare-training-materials">
              <button className="btn btn-secondary m-2">
                I have registered our church and I am ready to order training
                materials
              </button>
            </Link>
            <Link to="/compacare-training-sessions">
              <button className="btn btn-secondary m-2">
                Access training videos
              </button>
            </Link> */}
          </Row>
        </Container>
        </>
    )
}

export default CompaCareTrainingPage;