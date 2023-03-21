import { Container } from "react-bootstrap";
// import CompactLogo from "../graphics/CompactLogo";
import CompassionActionLogo from "../graphics/CompassionActionLogo";

// import { Link } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";

const HomeBrandBanner = () => {
  // https://developers.google.com/youtube/iframe_api_reference

  const logoEnter = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -50 },
    // pause:2000,
    // loop: true,
    delay: 500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });
  const titleTwo = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    // pause:2000,
    // loop: true,
    delay: 2500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });
  // const titleThree = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   // pause:2000,
  //   // loop: true,
  //   delay: 4500,
  //   config: {
  //     duration: 2000,
  //     mass: 500,
  //     friction: 500,
  //     easing: easings.easeInOutQuad,
  //   },
  // });

  return (
    <>
      <Container
        fluid
        className="bg-blue compactHome text-white text-center py-5 d-flex flex-column align-items-center"
      >
        {/* <animated.p style={titleThree} className="fs-2 lh-1 fw-bold text-uppercase fw-light">
                Compassionate Action
                </animated.p> */}

        <div style={{ width: "60vw" }} className="my-3">
          <animated.div style={logoEnter}>
            <CompassionActionLogo />
          </animated.div>
        </div>

        <div>
          {/* <animated.p style={titleTwo} className="fs-1 fw-bold lh-1">FAMILY SERVICES</animated.p> */}

          <animated.p style={titleTwo} className="fs-2 lh-1 fw-light">
            Redeeming Family Since 1944
          </animated.p>
        </div>
        <br />

        {/* <animated.div style={titleThree}> */}
        <div>
          <a href="https://giving.ag.org/donate/compact-family-services?fundid=38231"
              target="_blank"
              rel="noopener noreferrer">
            <button
              
              className="btn btn-dark btn-sm"
            >
              Donate
            </button>
          </a>

          {/* <p className="small mt-3">Online donations must be made by midnight on December 31 to be eligible for a 2022 tax deduction.</p> */}
        </div>

        {/* <Row className="p-2 m-0">

            <Col xs={12} sm={12} md={12} lg={6} xl={5}>
              <CompactLogo />
            </Col>

            <Col className="d-flex justify-content-center text-center align-self-center">
              <div>
                <p className="h2">FAMILY SERVICES</p>
                <p className="h5">
                Redeeming Family Since 1944
                </p>
                <br />
                <Link to="/give">
                <button className="btn btn-dark btn-sm stretched-link">
                  Donate
                </button>
              </Link>
              </div>
            </Col>
          </Row> */}
      </Container>
    </>
  );
};

export default HomeBrandBanner;
