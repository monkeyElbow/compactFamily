import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";

const CompaCareTrainingPage = () => {
  document.title = "CompaCare Training"

    return(
        <>
<BannerCompaCareTraining />

        <Container className="my-5">
          <p>
            Welcome! You have been invited to participate in the CompaCare
            Church Leaders’ Certificate Training. This course will equip you to
            lead your local church to support foster families with our
            faith-based, evidence-supported wraparound program! For several
            years now, we have been aggregating a solid supply of evidence to
            show that churches can make the difference in building capacity,
            stability, and quality in foster care! We are proud that you have
            chosen to join our team to change the way foster care is done in our
            nation!
          </p>

          <div className="d-flex flex-column">
            <h5>Your next steps</h5>

            <Link to="/compacare-training-register">
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
            </Link>
          </div>
        </Container>
        </>
    )
}

export default CompaCareTrainingPage;