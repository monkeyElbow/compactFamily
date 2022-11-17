// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";

import CompaCareCourseRegisterForm from './components/compaCareTrainingRegisterForm'

export default function CompaCareRegister() {
    document.title = "CompaCare Training Register"

    return(
        <>
<BannerCompaCareTraining />

<Container>
          <CompaCareCourseRegisterForm />
        </Container>
        </>
    )
}

