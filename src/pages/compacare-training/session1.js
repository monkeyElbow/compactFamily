// import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";

import YoutubeEmbed from "../../components/youTubeEmbed";


const compaCareTrainingSession1 = () => {
  document.title = "CompaCare Session 1"

    return(
        <>
<BannerCompaCareTraining />

<YoutubeEmbed embedId="T7pbeO3i9RI" />


        </>
    )
}

export default compaCareTrainingSession1;