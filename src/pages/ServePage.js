import { Container, Image } from "react-bootstrap";
// import Navarre from "../images/Navarre-FL-Team.jpg";
// import HostFamily from "../images/host_family.jpg";
// import Vanguard from "../images/Vanguard-Team-Serving-Dinner.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";

const ServePage = () => {
  document.title = "COMPACT Serve";

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
      <Container fluid className="photoblue">
        <Container>
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-6 d-flex justify-content-center align-items-center">
              <div>
                <animated.h1 style={titleOne} className="display-4 text-center">
                  SERVE
                </animated.h1>

                <animated.p style={titleTwo} className="lead text-left">
                  Looking to join the COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  Family or volunteer? We offer several opportunities to engage
                  in hands on ministry through mission teams, host family,
                  volunteering and internship.{" "}
                </animated.p>
              </div>
            </div>

            <div className="col-sm-12 col-md-5 col-lg-6">
              <Image
                src="https://compact.family/images/0517.jpg"
                alt="Child representative"
                fluid
              />
            </div>
          </div>
        </Container>
      </Container>

      <Container
        fluid
        className="text-center py-1 mt-0 d-flex justify-content-center"
      >
        <div className="row">
          <div className="card col-md-12 col-lg-3 border-white clickable bg-blue text-white">
            <div className="card-body d-flex flex-column">
              <h4>
                <strong>Employment</strong>
              </h4>
              <p className="card-text">
                COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                Family Services is looking for compassionate adults/couples who
                have a heart for ministry to children and youth (ages 5-18) who
                are also interested in full-time employment.
              </p>
              <Link
                className="btn btn-dark mt-auto stretched-link"
                to="/employment"
                role="button"
              >
                Go to Employment
              </Link>
            </div>
          </div>

          <div className="card col-md-12 col-lg-3 border-white clickable bg-blue text-white">
            <div className="card-body d-flex flex-column">
              <h4>
                <strong>Mission Team</strong>
              </h4>
              <p className="card-text">
                Get involved with COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                firsthand by bringing a mission team from your church or
                organization to our campus, for box and remove this text from
                page.
              </p>
              <Link
                className="btn btn-dark mt-auto stretched-link"
                to="/teams"
                role="button"
              >
                Go to Mission Teams
              </Link>
            </div>
          </div>

          <div className="card col-md-12 col-lg-3 border-white clickable bg-blue text-white">
            <div className="card-body d-flex flex-column">
              <h4>
                <strong>Host Families</strong>
              </h4>
              <p>
                There are several ways you and your family can host in order to
                create a lasting memory for one of our residents.
              </p>
              <Link
                className="btn btn-dark mt-auto stretched-link"
                to="/host-families"
                role="button"
              >
                Go to Host Families
              </Link>
            </div>
          </div>

          <div className="card col-lg-3 col-md-12 col-sm-12 border-white clickable bg-blue text-white">
            <div className="card-body d-flex flex-column">
              <h4>
                <strong>Volunteer</strong>
              </h4>
              <p>
                Serve on the COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                Family as a volunteer. We are always looking for individuals
                willing to use their gifts on our campus, as either a volunteer
                or in an internship capacity.
              </p>
              <Link
                className="btn btn-dark mt-auto stretched-link"
                to="/volunteer"
                role="button"
              >
                Go to Volunteer
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ServePage;
