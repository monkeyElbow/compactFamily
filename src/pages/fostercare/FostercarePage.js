import { Image, Container, Row, Col } from "react-bootstrap";
import ArkansasShape from "../../graphics/ArkansasShape";
import ResponsiveEmbed from "react-responsive-embed";
import FosterCareLogo from "../../graphics/FosterCareLogo";
import { Link } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";

const FostercarePage = () => {
  document.title = "COMPACT Foster Care";

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
      <Container fluid className="photoblue p-0 border-0 m-0">
        <Row>
          <Col
            lg={6}
            className="text-center d-flex justify-content-center align-items-center p-5"
          >
            <div className="my-3">
              <animated.h1 className="fw-bold" style={titleOne}>
                A Redemptive Revolution <br />
                is in Progress.
              </animated.h1>
              <animated.p className="fs-5" style={titleTwo}>
                It only takes a little compassion in action in each church to
                redeem children.
              </animated.p>

              {/* <h2 className="fw-bold">A redemptive revolution is in progress.</h2>
                <h3 className="fs-5">
                  With approximately 100 million Christians and thousands of churches, it only takes a little compassion in action in each church to redeem fatherless and fragmented children. Put compassion in action now.{" "}
                </h3> */}
            </div>
          </Col>
          <Col>
            <Image
              fluid
              src="https://compact.family/images/1622.jpg"
              // width="600"
              // height="733"
              // layout="intrinsic"
            />
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="text-center mb-0 pt-5 pb-2 bg-orange text-white"
      >
        <div className="container mb-5 col-lg-6 col-md-12 text-center offset-lg-3">
          <p className="fs-4">
            There are more than 400,000 U.S. children in foster care every day.
            Foster children and families are in every community and God has
            called the Church to them. Every church can have an effective
            ministry to America&#39;s foster care community.
          </p>
        </div>
      </Container>

      {/* <div className="bg-warning">FIX LINK TO FORM</div>
      <Container fluid className="text-md-center p-4 bg-orange">
        <Container>
          <h3>
            <a href="../foster-care-training-sign-up.html">
              Click here to register for an upcoming training/informational
              meeting
            </a>
          </h3>
        </Container>
      </Container> */}

      <Container className="p-5">
        <h3 className="fs-2 orange my-5">
          COMP
          <span className="act">ACT</span> is your partner in mission for
          serving vulnerable children and families in the foster care system.
        </h3>
        <p className="fs-5 mb-3">
          COMP
          <strong>ACT</strong>’s evidence-based compassion care system,
          CompaCare, for churches provides better stability and quality
          outcomes.
        </p>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 d-flex justify-content-center align-items-center bg-orange text-white p-5 rounded-3">
            <div>
              <p className="small">One of our teenagers *David</p>
              <p className="fs-3">
                “Thank you COMP
                <span className="act">ACT</span> for taking me in and giving me
                a second chance.”
              </p>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 col-md-12 p-5">
            <p>
              It is important to note that the American foster care system,
              although federally connected, operates uniquely by state. Each
              state operates its own system. Thereby, the process in one state
              may be much different in another.
            </p>
            <p>
              A redemptive revolution is emerging. With approximately 100
              million Christians and thousands of churches, it only takes a
              little compassion in action in each church to redeem fatherless
              and fragmented children. Put compassion in action now.
            </p>
            <p>
              The primary purpose of foster care aims to restore children back
              to their biological families, although approximately 20% of foster
              youth are eligible for adoption.
            </p>{" "}
            <p>We believe foster families do strategic mission work.</p>
          </div>
        </div>
      </Container>

      <ResponsiveEmbed
        src="https://www.youtube.com/embed/gjPsQLnQ9Fw"
        allowFullScreen
      />

      <Container fluid className="bg-orange py-5">
        <h2 className="text-white text-center">STATISTICS</h2>

        <Row className="row-cols-lg-3 row-cols-md-1 d-flex justify-content-center">
          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              There are more than 400,000 U.S. children in foster care every
              day. Foster children and families are in every community and God
              has called the Church to them. Every church can have an effective
              ministry to America’s foster care community.
            </p>
            <a
              href="https://jlc.org/news/what-foster-care-prison-pipeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              90% of youth with five or more placements will enter the justice
              system.
            </p>
            <a
              href="https://jlc.org/news/what-foster-care-prison-pipeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              Approximately 60% of sex trafficking victims were from foster care
              or group homes.
            </p>
            {/* <a href="Source:" target="_blank"
              rel="noopener noreferrer"
            
            >
              Source
            </a> */}
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              One research report estimates that 86% of the children in foster
              care had experienced sexual abuse.
            </p>
            <a
              href="https://www.acf.hhs.gov/sites/default/files/opre/oyfc_report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              PTSD was diagnosed in 60% of sexually abused children and in 42%
              of physically abused children.
            </p>
            <a
              href="https://www.prevention.org/Resources/2992b683-0c31-4b80-8f23-397cf7553894/PTSD_and_grief_guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col md={2} className="p-2" style={{ maxWidth: "200px" }}>
            <ArkansasShape color="#F26322" />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <h2 className="orange fs-2 fw-bold p-3">
              FOSTER CARE PLACEMENT SERVICES IN ARKANSAS
            </h2>
          </Col>
        </Row>
        <p className="orange h4 my-5">
          In Arkansas alone, there are over 5,000 children in the foster care
          system due to abuse, neglect or abandonment. There are also over 6,500
          churches in Arkansas.{" "}
        </p>

        <p className="lead">
          In 2017, the agency extended its continuum of ministry as a Private
          Licensed Placement Agency (PLPA) for foster care in Arkansas; COMP
          <strong>ACT</strong> was awarded one of the first PLPA agreements for
          foster care in the state.
        </p>
        <p>
          Our strategy is built on evidence that improves three important
          outcomes – capacity, stability and quality. Thus, our strategy differs
          from many agencies. First, we plant CompaCare in a partnering church,
          then recruit foster families within, and then placements are made. The
          result is better outcomes with faster permanency. The program is
          succeeding and expanding.
        </p>
        <p>
          COMP
          <span className="act">ACT</span>
          ’s home-opening process is streamlined, comprehensive, and helps
          foster families get on mission quickly and competently. The agency
          provides a new generation of the state required foster parent training
          through a Christian lens. It consists of five in-person sessions
          taught by qualified staff and four online sessions that can be
          completed in the comfort of home.
        </p>
        <p>
          COMP
          <span className="act">ACT</span> succeeds with a Home Study of the
          prospective foster family. The process can be completed in
          approximately 90 days, which is often comparatively faster. The family
          can then receive their necessary government-agency provided foster
          license.
        </p>
        <p>
          COMP
          <span className="act">ACT</span> in Arkansas receives placement
          referrals from the state but makes the placement in one of its
          fitting, trained and licensed foster homes.
        </p>
        <p>
          COMP
          <span className="act">ACT</span> provides essential support to foster
          families.
        </p>

        <p>
          • Family Consultant – COMP
          <span className="act">ACT</span> PLPA foster families receive an
          assigned Family Consultant who provides a substantial layer of support
          for the mission journey.
        </p>
        <p>
          • Prayer – As a Christian agency, the staff regularly pray with the
          foster families.
        </p>
        <p>
          • Partnership – COMP
          <span className="act">ACT</span> works directly in partnership with
          the church of its foster families to deploy the CompaCare wrap-around
          support.
        </p>
        <p>
          • Family Advocate – The CompaCare system provides a competently
          trained volunteer to be a Family Advocate for the foster family. The
          Family Advocate is there to pray, encourage and support with the
          church.
        </p>
        <p>
          The overall service provides 24/7 access to one of COMP
          <strong>ACT</strong>'s trained professionals. Additional Hillcrest
          resources, including on-campus licensed counselors and warehouse goods
          benefit nearby foster families. In Arkansas, you can choose to open
          your foster home through a nationally accredited, Christ-centered
          professional agency. COMP
          <span className="act">ACT</span> is that agency.
        </p>
<Row>
  <Col className="d-flex justify-content-center align-items-center"><h5>Member of <a href="https://www.everychildarkansas.org"
   target="_blank"
   rel="noopener noreferrer">everychildarkansas.org</a></h5></Col>
  <Col>
        <Image style={{maxWidth:"20vw"}} src={require("../../img/ECA.png")} fluid /></Col>
</Row>


      </Container>

      <Container fluid className="py-5 bg-orange text-white">
        <div className="row">
          <div className="col-md-6 col-sm-12 offset-md-1 offset-sm-0 text-center">
            <h3>Do you live in Arkansas?</h3>
            <h3>
              FOSTER WITH COMP
              <strong>
                <em>ACT</em>
              </strong>
              ®
            </h3>
            <p>
              {" "}
              COMP
              <strong>
                <em>ACT</em>
              </strong>{" "}
              is now able to open foster homes in Arkansas. If God has called
              you to foster, consider fostering through COMP
              <strong>
                <em>ACT</em>
              </strong>{" "}
              - where you get all the support you need. Fill out the contact
              form below and a member of our Foster Care Department will contact
              you with more information.{" "}
            </p>
            <Link
              to="/fostercareinfo"
              className="btn btn-dark btn-lg"
              role="button"
            >
              Go to form
            </Link>
          </div>

          <Container className="col-md-5 col-sm-12 d-flex justify-content-center w-25">
            <ArkansasShape color="#fff" />
          </Container>
        </div>
      </Container>

      <Container fluid className="p-5 my-5">
        <h3 className="orange fw-bold text-center fs-2 mb-4">
          FOSTER CARE SERVICES BEYOND
        </h3>
        <p className="lead">
          COMP
          <span className="act">ACT</span>
          ’s strategy is to expand foster care ministry services into additional
          states over the next decade.{" "}
        </p>
        <p>
          Missouri is first and underway. The strategy is similar to our
          Arkansas work with one very important difference. In Missouri, rather
          than COMP
          <span className="act">ACT</span> being the placement agency, it will
          be the licensing agency. In Arkansas, the only licensing agency is the
          state.{" "}
        </p>
        <p>
          COMP
          <span className="act">ACT</span> will recruit, train, license and
          support foster families in the Missouri strategy.
        </p>
        <p>
          As COMP
          <span className="act">ACT</span> foster services expand into other
          states, it will likely deploy a form of the Arkansas or Missouri
          foster care agency strategies, since one or the other is apt to serve.
        </p>
        <p className="fw-bold text-center fs-4 px-5">
          Remember, it is the excellent CompaCare resource that empowers better
          outcomes in the foster care journey.
        </p>

        <Container
          className="mt-5 d-flex align-content-center"
          style={{ maxWidth: "40vw" }}
        >
          {/* <Image src={FosterCareLogo} fluid /> */}
          <FosterCareLogo color="var(--orange)" />
        </Container>
      </Container>

      <Container fluid>
        <h3 className="text-center">Frequently asked questions</h3>

        <Row className="row-cols-lg-3 row-cols-md-1 d-flex justify-content-center">
          <div className="p-4 bg-white rounded m-2 border">
            <h4>Q: What does it mean to be a foster parent?</h4>
            <p>
              A: Foster parents invite children to join their families on a
              temporary basis when they are not able to live with their
              caregivers due to abuse, neglect, or abandonment.
            </p>
          </div>
          <div className="p-4 bg-white rounded m-2 border">
            <h4>Q: How long will a foster child be in my home?</h4>
            <p>
              A: There is no “typical” case. While children are living in a
              foster home, their parents are given an opportunity to correct the
              issues that brought about the need for foster care. This can take
              from a few months to over a year.
            </p>
          </div>
          <div className="p-4 bg-white rounded m-2 border">
            <h4>Q: Is foster care and adoption the same thing?</h4>
            <p>
              A: No! Foster children are “in the system” because their parents
              need time to make some changes in their lives. About 20% of the
              time, foster children become adoptable. Foster parents are often
              given the option to adopt these children, and often they do so,
              but this is not expected of them.
            </p>
          </div>
          <div className="p-4 bg-white rounded m-2 border">
            <h4>Q: How long does it take to become a foster parent?</h4>
            <p>
              A: COMP
              <strong>
                <em>ACT</em>
              </strong>{" "}
              has the most efficient, coherent, and streamlined approval process
              in the state. We can often take you from application to opened for
              placements in just 75 days!
            </p>
          </div>
          <div className="p-4 bg-white rounded m-2 border">
            <h4>Q: Do foster families get paid?</h4>
            <p>
              A: Foster families receive a modest stipend monthly to help offset
              the costs involved with fostering. The amount is based on the age
              of the child, and ranges from $410-$500 per month per child.
            </p>
          </div>
          <div className="p-4 bg-white rounded m-2 border">
            <h4>Q: Is there an age limit for foster care?</h4>
            <p>
              A: Foster families must be at least 21 years old. There is no
              maximum age.
            </p>
          </div>
          <div className="p-4 bg-white rounded m-2 border">
            <h4>Q: Who will be there to help me if I foster?</h4>
            <p>
              A: COMP
              <strong>
                <em>ACT</em>
              </strong>{" "}
              works with your church to build a strong support ministry. Also,
              every COMP
              <strong>
                <em>ACT</em>
              </strong>{" "}
              foster family is assigned a professional Family Consultant who
              will serve as your go-to resource. You’ll even receive a 24-hour
              on-call number for after-hours concerns. You’ll never foster
              alone!
            </p>
          </div>
        </Row>
      </Container>

      <Container fluid className="my-0 bg-orange text-white text-center p-5">
        <h3>
          Looking to donate to COMP<b>ACT</b> Foster Care?
        </h3>

        <div className="text-center my-4">
          <a
            className="btn btn-dark me-1"
            href="https://giving.ag.org/donate/compact-foster-care?fundid=83274"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Here
          </a>
        </div>
      </Container>
    </>
  );
};

export default FostercarePage;
