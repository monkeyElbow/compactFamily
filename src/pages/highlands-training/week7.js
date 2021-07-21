import YoutubeEmbed from "../../components/youTubeEmbed";

import { Container } from "react-bootstrap";
// import {Link} from "react-router-dom";

import BannerHighlandsTraining from "./components/bannerHighlandsTraining";
import HighlandsTrainingLink from "./components/HighlandsTrainingLink";
import HighlandsWorkBookBlock from "./components/HighlandsWorkbookBlock";

const week7 = () => {
  document.title = "Highlands Training Week 7"

    return(
        <>
<BannerHighlandsTraining />
      <HighlandsTrainingLink />

      <Container className="my-5">
        <p className="h3">Week 7</p>
        <p className="lead">
          Why did God create us? Before we set our own goals, it is important to
          discover what goals GOD has for us.
        </p>
      </Container>

      <Container className="my-5">
        <YoutubeEmbed embedId="SRkCvfDgvQg" />
      </Container>

      <HighlandsWorkBookBlock />
      <HighlandsTrainingLink />
        
        </>
    )
}

export default week7;