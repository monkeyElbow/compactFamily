import { Container, Image } from "react-bootstrap";
import { useSpring, animated, easings } from "react-spring";

const SafecarePage = () => {
  document.title = "COMPACT SafeCare";

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
      <Container fluid className="text-center mb-0 photoblue py-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div>
                <animated.h1 className="fw-bold" style={titleOne}>
                  Foster Care Prevention
                  <br /> Through Intervention.
                </animated.h1>
                <animated.p className="fs-5" style={titleTwo}>
                  Strategic care and support to redeem families.
                  <br />
                  {/* That is strategic redemption. */}
                </animated.p>

                {/* <p className="lead p-3">
                SafeCare is more than just a professional service offering of
                COMP<strong><em>ACT</em></strong>. Because of our deployment of CompaCare
                in the state, we are able to bring competent care and support to
                those families in partnership with CompaCare churches. That is
                strategic redemptive mission.
              </p> */}
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <Image
                fluid
                src="https://compact.family/images/0638.jpg"
                alt="Child reprentative"
                width="500"
                height="503"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container fluid className="bg-purple my-0 p-5">
        <div className="container">
          <p className="h5 text-white lh-lg">
            In 2019, COMP
            <strong>
              <em>ACT</em>
            </strong>{" "}
            began a partnership with Arkansas Children’s Hospital to provide
            SafeCare for a number of southern Arkansas counties. The educational
            intervention program serves at risk children and their families to
            help prevent those children from entering the foster care system and
            experiencing separation from family.
          </p>
        </div>
      </Container>

      <Container fluid className="text-center photoblue my-0 py-0">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <Image
              fluid
              src="https://compact.family/images/1664.jpg"
              alt="Child representative"
              layout="intrinsic"
              width="608"
              height="600"
            />
          </div>

          <div className="col-md-12 col-lg-7 text-center d-flex align-items-center text-black">
            <div>
              <p className="lead">
                SafeCare is COMP
                <strong>
                  <em>ACT</em>
                </strong>
                ’S latest offering in the growing continuum of services to
                enable a broader export of competencies that equips the church
                and advances its vision to redeem vulnerable children and
                families across the nation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SafecarePage;
