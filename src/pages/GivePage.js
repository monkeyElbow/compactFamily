import { NavLink } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useSpring, animated, easings } from "react-spring";

const GivePage = () => {
  document.title = "COMPACT Give";

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

  return (
    <>
      <Container fluid className="photoblue m-0">
        <Container>
          <Row className="text-center">
            <Col lg={6} md={12} className="mt-3 d-flex align-items-center">
              <div>
                <animated.h1 style={titleOne} className="display-4">
                  GIVE
                </animated.h1>

                <animated.p style={titleTwo} className="lead text-left">
                  We offer several options for you when it comes to your giving.
                  Our hope is that you feel a passion for the area(s) you give
                  toward.{" "}
                </animated.p>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <Image
                fluid
                src="https://compact.family/images/0542.jpg"
                alt="Child respresentative"
                width="600"
                height="602"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-blue text-white py-5 text-center">
        <Container>
          <h4 className="col-lg-6 col-md-12 text-center offset-lg-3 offset-md-0 mb-5">
            Your gift is vital to us fulfilling mission, but as one of our
            donors <strong>YOU</strong>, and where you desire to give are{" "}
            <strong>VERY</strong> important.
          </h4>

          <p className="h3">
            <strong>
              Can I Be Confident My Gift Will Be Used As Intended?
            </strong>
          </p>
          <p>
            It is our promise to you to maintain the highest ethical standards
            of financial accountability and reporting consistent with
            responsible Christian faith and practice. To maintain your trust and
            support, an external audit of our financial records is conducted
            annually.
          </p>

          <p className="h3">
            <strong>Is My Information Secure Using Online Giving?</strong>
          </p>
          <p>Yes.</p>
        </Container>
      </Container>

      <Container fluid className="p-2 m-0">
        <Row>
          <div className="card col-md-6 col-lg-3 col-sm-12 clickable bg-blue text-white border-white">
            <div className="card-body d-flex flex-column">
              <p className="h4 text-center">
                <strong>Gift</strong>
              </p>
              <p className="card-text">
                Our COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                Partners help us care for these vulnerable children and families
                by providing an open gift to our ministry. These undesignated
                offerings allow us to use your gift where it is most needed for
                our ministry.
              </p>

              <NavLink to="/give-gifts" className="text-center">
                <button className="btn btn-dark mt-auto stretched-link">
                  Go to gifts
                </button>
              </NavLink>
            </div>
          </div>

          <div className="card col-md-6 col-lg-3 col-sm-12 clickable bg-blue text-white border-white">
            <div className="card-body d-flex flex-column">
              <p className="h4 text-center">
                <strong>Sponsor</strong>
              </p>
              <p className="card-text">
                One of the most personal ways to give to COMP
                <strong>ACT</strong> is through our monthly sponsorship program.
                Becoming a sponsor allows you to build a relationship with the
                cottage or child you give towards every month.
              </p>

              <NavLink to="/sponsor" className="text-center">
                <button className="btn btn-dark mt-auto stretched-link">
                  Go to Sponsorship
                </button>
              </NavLink>
            </div>
          </div>

          <div className="card col-md-6 col-lg-3 col-sm-12 clickable bg-blue text-white border-white">
            <div className="card-body d-flex flex-column">
              <p className="h4 text-center">
                <strong>Special Projects</strong>
              </p>
              <p>
                When you give to a project, you are giving to a specific need.
                It may be a project on our campus such as a new roof or
                renovating a cottage or it could be an emergent need such as
                diapers for our babies or new furniture for a cottage.
              </p>

              <NavLink to="/special-projects" className="text-center">
                <button className="btn btn-dark mt-auto stretched-link">
                  Go to Projects
                </button>
              </NavLink>
            </div>
          </div>

          <div className="card col-lg-3 col-md-6 col-sm-12 clickable bg-blue text-white border-white">
            <div className="card-body d-flex flex-column">
              <p className="h4 text-center">
                <strong>Planned Giving</strong>
              </p>
              <p>
                A planned gift, estate gift or endowment ensures that your
                legacy is continued and helps secure the future to see the
                mission of COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                continue. You will have peace of mind knowing that your gifts
                are given as you intended.
              </p>
              <NavLink to="/planned-giving" className="text-center">
                <button className="btn btn-dark mt-auto stretched-link">
                  Go to Planned Giving
                </button>
              </NavLink>
            </div>{" "}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default GivePage;
