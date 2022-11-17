import { NavLink } from "react-router-dom";
import { Col, Row, Container, Image } from "react-bootstrap";
import { useSpring, animated, easings } from "react-spring";

const PrayPage = () => {
  document.title = "COMPACT Pray";

  const titleOne = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -50 },
    pause: 2000,
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
    pause: 2000,
    // loop: true,
    delay: 2500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });
  const titleThree = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: 2000,
    // loop: true,
    delay: 3500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });

  return (
    <>
      <Container fluid className="photoblue m-0">
        <Container>
          <Row className="text-center">
            <Col lg={6} md={12} className="mt-3 d-flex align-items-center">
              <div>
                <animated.h1 style={titleOne} className="display-4">
                  PRAY
                </animated.h1>

                <animated.p style={titleTwo} className="lead">
                  Your prayers and financial support make it possible to
                  continue the mission of COMP
                  <strong>
                    <em>ACT</em>
                  </strong>
                  .{" "}
                </animated.p>
                <animated.p style={titleThree} className="lead">
                  Prayer is vital to the redeeming services we provide on a
                  daily basis for every child, teen, and young adult that steps
                  foot on our campus.
                </animated.p>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <Image
                fluid
                src="https://compact.family/images/0758.jpg"
                alt="Child representative"
                layout="intrinsic"
                width="600"
                height="519"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-blue text-white p-3">
        <Container>
          <p className="lead my-4">
            Your prayers play a significant role in redeeming the lives of these
            vulnerable children. We invite you to be a prayer partner. A few
            things constantly on our prayer list are student and staff health,
            students opening their heart to the Lord, salvation, family
            restoration, rest for staff, smooth school days, and so much more.{" "}
          </p>

          <Row>
            <Col sm={12} md={6} className="text-center">
              <p>
                <strong>Use the 30-day Prayer Guide below as a guide:</strong>
              </p>
              <p className="lead">
                <NavLink to="/thirty-days-of-prayer">
                  <button className="btn btn-secondary btn-lg">
                    Prayer Guide
                  </button>
                </NavLink>
              </p>
            </Col>
            <Col sm={12} md={6} className="text-center">
              <p>
                <strong>
                  Use the Pray the Promises Calendar with us for 2021
                </strong>
              </p>
              <p className="lead">
                <NavLink to="/pray-the-promises-calendar">
                  <button className="btn btn-secondary btn-lg">
                    Pray the Promises Calendar
                  </button>
                </NavLink>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default PrayPage;
