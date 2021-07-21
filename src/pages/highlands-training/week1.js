import { Container } from "react-bootstrap";
// import {Link} from "react-router-dom";

import YoutubeEmbed from "../../components/youTubeEmbed";
import HighlandsTrainingLink from "./components/HighlandsTrainingLink";
import HighlandsWorkBookBlock from "./components/HighlandsWorkbookBlock";


import BannerHighlandsTraining from "./components/bannerHighlandsTraining";

const week1 = () => {
  document.title = "Highlands Training Week 1"

    return(
        <>
    <BannerHighlandsTraining />
      <HighlandsTrainingLink />

      <Container className="my-5">
        <p className="h3">Week 1</p>
        <p className="lead">
          The healthier we are, the healthier our children will be. It is
          important to learn to care for yourself. This lesson introduces the
          idea of Helping Yourself and highlights the importance of taking time
          for self-care.
        </p>
      </Container>

      <Container className="my-5">
        <YoutubeEmbed embedId="0lhY2OWQwX4" />
      </Container>

      <Container className="my-5">
        <p>
          Remember, we are here to partner with you during this journey. Please
          never hesitate to reach out to Ashley Grant with any questions,
          concerns, or just to chat about parenting! She can be reached via
          email at Highlands@Compact.Family or via text/phone at 417.319.4070.
        </p>
      </Container>

      <HighlandsWorkBookBlock />
      <HighlandsTrainingLink />

        </>
    )
}

export default week1;