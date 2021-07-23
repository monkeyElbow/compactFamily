import Scoreboard from "../components/Scoreboard";
import HomeFeature from "../components/HomeFeature";
import HomeBrandBanner from "../components/HomeBrandBanner";
import YouTubeEmbed from "../components/youTubeEmbed";

const HomePage = () => {
  document.title = "COMPACT Family"

  return (
    <>
<HomeBrandBanner />
      <Scoreboard />
<YouTubeEmbed embedId="K7X6xwBmEDY" />

<HomeFeature />

    </>
  );
};

export default HomePage;
