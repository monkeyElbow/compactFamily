// import Scoreboard from "../components/Scoreboard";
import HomeFeature from "../components/HomeFeature";
import HomeFeatures2 from "../components/HomeFeatures2";
import HomeBrandBanner from "../components/HomeBrandBanner";
import HomeFeature3 from "../components/HomeFeature3";
// import YouTubeEmbed from "../components/youTubeEmbed";

// import ScoreboardFirebase from "../components/ScoreboardFirebase";

const HomePage = () => {
  document.title = "COMPACT Family"

  return (
    <>
<HomeBrandBanner />
<HomeFeature />

    {/* <ScoreboardFirebase /> */}
<HomeFeature3 />
      {/* <Scoreboard /> */}

{/* <YouTubeEmbed embedId="gjPsQLnQ9Fw" /> */}

<HomeFeatures2 />

    </>
  );
};

export default HomePage;
