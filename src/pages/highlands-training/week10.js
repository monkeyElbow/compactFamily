import YoutubeEmbed from "../../components/youTubeEmbed";

import { Container } from "react-bootstrap";
// import {Link} from "react-router-dom";

import BannerHighlandsTraining from "./components/bannerHighlandsTraining";
import HighlandsTrainingLink from "./components/HighlandsTrainingLink";
import HighlandsWorkBookBlock from "./components/HighlandsWorkbookBlock";

const week10 = () => {
    return(
        <>

<BannerHighlandsTraining />
      <HighlandsTrainingLink />

      <Container className="my-5">
        <p className="h3">Week 10</p>
        <p className="lead">
          Setting healthy boundaries can be hard. Learning what healthy
          boundaries look like and how to implement them in our lives helps us
          from experiencing unnecessary stress and anxiety in our personal and
          parenting journey.
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

export default week10;