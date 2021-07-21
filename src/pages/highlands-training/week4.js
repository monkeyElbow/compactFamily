import YoutubeEmbed from "../../components/youTubeEmbed";

import { Container } from "react-bootstrap";
// import {Link} from "react-router-dom";

import BannerHighlandsTraining from "./components/bannerHighlandsTraining";
import HighlandsTrainingLink from "./components/HighlandsTrainingLink";
import HighlandsWorkBookBlock from "./components/HighlandsWorkbookBlock";

const week4 = () => {
  document.title = "Highlands Training Week 4"

    return(
        <>
<BannerHighlandsTraining />
      <HighlandsTrainingLink />

      <Container className="my-5">
        <p className="h3">Week 4</p>
        <p className="lead">
          Insulating our kids from trauma can be a daunting, seemingly
          impossible task…especially in today’s world. Looking at how our
          Heavenly Father insulates us from trauma, gives us hope in helping
          shield our kids from developing painful scars in life.{" "}
        </p>

        <YoutubeEmbed embedId="zOBWLt44TQ8" />
      </Container>

      <HighlandsWorkBookBlock />
      <HighlandsTrainingLink />
        
        </>
    )
}

export default week4;