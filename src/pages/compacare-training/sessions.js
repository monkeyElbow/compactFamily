import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";


const compaCareTrainingSessions = () => {
  document.title = "CompaCare Sessions"

    return(
        <>
<BannerCompaCareTraining />

        <Container id="videos" className="d-flex flex-column my-5">
          <Link href="/#" to="/compacare-training-session-1" className="btn btn-secondary m-2">
              Video 1: Introduction to CompaCare (49:30)
          </Link>
          <Link href="/#" to="/compacare-training-session-2" className="btn btn-secondary m-2">
              Video 2: The Problem in Foster Care (36:43)
          </Link>
          <Link href="/#" to="/compacare-training-session-3" className="btn btn-secondary m-2">
          
              Video 3: The CompaCare Solution (36:43)
            
          </Link>
          <Link href="/#" to="/compacare-training-session-4" className="btn btn-secondary m-2">
            
              Video 4: The CompaCare Plan (38:26)
            
          </Link>
        </Container>
        </>
    )
}

export default compaCareTrainingSessions;