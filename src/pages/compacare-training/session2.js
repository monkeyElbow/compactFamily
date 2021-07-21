// import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";

import YoutubeEmbed from "../../components/youTubeEmbed";


const compaCareTrainingSession2 = () => {
  document.title = "CompaCare Session 2"

    return(
        <>
<BannerCompaCareTraining />

<YoutubeEmbed embedId="0dJzFlxA0D8" />


        </>
    )
}

export default compaCareTrainingSession2;