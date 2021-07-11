import "./home.css";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import {useSpring, animated} from 'react-spring';
// import { useState, useEffect } from 'react';

import Scoreboard from "../components/Scoreboard";
// import { Link } from "react-router-dom";

import HomeFeature from "../components/HomeFeature";

// import HomeBrandBanner from "../components/HomeBrandBanner";

import YouTubeEmbed from "../components/youTubeEmbed";



const HomePage = () => {


  return (
    <>
{/* <HomeBrandBanner /> */}
      {/* <HomeCarousel /> */}
      <Scoreboard />
<YouTubeEmbed embedId="K7X6xwBmEDY" />

<HomeFeature />

    </>
  );
};

export default HomePage;
