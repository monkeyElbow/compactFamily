// import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";

import YoutubeEmbed from "../../components/youTubeEmbed";


const compaCareTrainingSession4 = () => {
  document.title = "CompaCare Session 4"

    return(
        <>
<BannerCompaCareTraining />

<YoutubeEmbed embedId="E6sNq2IEpUI" />


        </>
    )
}

export default compaCareTrainingSession4;