import { Link } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import CompaCarePhilosophy from "../components/CompaCarePhilosophy";
import CompaCarePractice from "../components/CompaCarePractice";
import CompaCarePlan from "../components/CompaCarePlan";
import CompaCareInterestForm from "../components/CompaCareInterestForm";

const CompaCarePage = () => {
  document.title = "CompaCare by COMPACT";

  return (
    <>
      {/* <a href="compacare-training">compacare training</a> */}

      <Container fluid className="text-center my-0 py-0 mt-0 photoblue">
        <Row>
          <div className="col-sm-12 col-md-6 col-lg-7 p-5 text-center d-flex justify-content-center align-items-center">
            {/* <p className="h2">
                What is <strong>CompaCare</strong>?
              </p> */}
            <h4>
              CompaCare® is a program that helps churches respond to the foster
              care crisis with knowledge, compassion, and skills.
            </h4>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-content-end justify-content-center">
            <Image
              fluid
              src="https://compact.family/images/1945.jpg"
              width="600"
              height="532"
              layout="intrinsic"
            />
          </div>
        </Row>
      </Container>

      <Container fluid className="p-5 text-center bg-blue text-white lead">
        <h3>The crisis in our foster care system is one of</h3>
<br />
        <Row>
          <Col md={4} sm={12}>
        <h1>capacity</h1>
        <small>(we don’t have enough foster parents)</small>
          </Col>
          <Col md={4} sm={12}>
        <h1>stability</h1>
        <small>
          (too many foster parents are overwhelmed by the complexity of the
          task)
        </small>
          </Col>
          <Col md={4} sm={12}>
        <h1>and quality</h1>
        <small>(foster children suffer in the process).</small>
          </Col>
        </Row>

        <br />
        <h4>
          CompaCare® is an evidence-based Compassion Care System that addresses{" "}
          <strong>ALL THREE</strong> of these issues.
        </h4>
      </Container>

      <Container fluid>
        <Row>
          <Col
            lg={6}
            className="p-5 text-center text-white d-flex flex-column justify-content-around bg-red"
          >
            <h4>
              For CompaCare® Church Leaders’ online training
            </h4>
              <Link className="stretched-link btn btn-light text-black-50" to="/compacare-training">
                <strong>
                Click Here
                </strong>
              </Link>
          </Col>
          <Col className="p-5 text-center text-white d-flex flex-column justify-content-around bg-dark">
            <h4 className="text-center">
              To order training manuals from my healthy church
              </h4>

              <a
                className="stretched-link btn btn-light text-black-50"
                target="_blank"
                rel="noopener noreferrer"
                href="https://myhealthychurch.com/store/searchresults.cfm?Criteria=compacare&image.x=22&image.y=18"
              >
                <strong>
                Click Here
                </strong>
              </a>
          </Col>
        </Row>
      </Container>

      <br />
      <Container className="pt-5 text-center">
        <h1>
          The <span className="red">CompaCare</span>
          <sup>&reg;</sup> Practice
        </h1>

      </Container>
      <Container className="col-lg-8 col-mg-12 my-5">
        <CompaCarePractice />
      </Container>
      <Container className="text-center">
        <p>
          Foster families should never minister alone. CompaCare® creates a
          faith-based wraparound volunteer system to help foster parents be
          successful in their ministry.
          
          CompaCare® trains church leaders to implement the{" "}
          <strong>
          <a href="/compacare#compacare-plan">PLAN</a>.
          </strong>
          {" "}

          CompaCare® trains church leaders to implement the
         We train volunteer
          Family Advocates to support foster parents and to ensure that they
          have access to the myriad of volunteer services available in the
          church and the community.
        </p>
        <Link to="/compacare-practice" className="btn btn-primary">More about CompaCare® Practice</Link>
      </Container>
      <br />

      <Container className="my-5 text-center">
        <h1>The CompaCare<sup>&reg;</sup> Philosophy</h1>
        <Container className="col-lg-6 col-mg-12 my-5">
          <CompaCarePhilosophy />
        </Container>
      </Container>

      <Container>
        <p className="text-center">
          CompaCare<sup>&reg;</sup> is a local-church based program that is
          energized by Biblical values of <strong>Compassion</strong> and{" "}
          <strong>Community</strong> impact.
          <strong> Competent</strong> volunteers join with professionals in the
          field to provide a<strong> Continuum</strong> of evidence-based care
          to the foster family.
        </p>
      </Container>

      <Container id="compacare-plan" className="my-5 text-center">
        <p className="h1">
          The <span className="red">CompaCare</span>
          <sup>&reg;</sup> Plan
        </p>
        <Container className="py-1 col-lg-8 col-mg-12">
          <CompaCarePlan />
        </Container>
      </Container>

      <Container>
        <p className="text-center">
          Trained CompaCare<sup>&reg;</sup> Representatives are deployed across
          the nation to help churches implement a detailed, 4-Phase, 17-Step
          plan to mobilize the church for service. These Representatives are
          Certified by CompaCare<sup>&reg;</sup> and have the approval of the AG
          District Office to serve you.
        </p>
      </Container>

      <Container className="py-5">
        <h2>CompaCare<sup>&reg;</sup> Representatives</h2>
       
       <Row className="
        row-cols-1 
        row-cols-lg-4 
        row-cols-md-3 
        text-center
        ">
         <Col className="d-flex flex-column p-3 align-items-center">
        <RepIcon />
        <h5>Florida: Steve and Sandra Hogue</h5>
         </Col>
         <Col className="d-flex flex-column p-3 align-items-center">
        <RepIcon />
         <h5>Florida: Ted and Angie Stackpole</h5>
         </Col>
         <Col className="d-flex flex-column p-3 align-items-center">
        <RepIcon />
         <h5>Arkansas: Lance Nelson</h5>
         </Col>
         <Col className="d-flex flex-column p-3 align-items-center">
        <RepIcon />
         <h5>Ohio: Parris Yanno</h5>
         </Col>
         <Col className="d-flex flex-column p-3 align-items-center">
        <RepIcon />
         <h5>Missouri: Ashley Grant</h5>
         </Col>
         <Col className="d-flex flex-column p-3 align-items-center">
        <RepIcon />
         <h5>Wisconsin: Dr. Bob Griffith</h5>
         </Col>
         <Col className="d-flex flex-column p-3 align-items-center">
        <RepIcon />
         <h5>Mississippi: Lee and Gretchen Watson</h5>
         </Col>
       </Row>
       
      </Container>
      <br />
      <br />
      <br />

      <Container fluid className="py-5 bg-blue text-white rounded-0 mb-0">
        <Container>
          <p className="h4">
            “As U.S. Missionaries working on assignment with COMP
            <strong>ACT</strong> it is a joy to serve the local church in their
            mission of compassion to care for vulnerable children and families
            that need to see the love of Jesus in such a committed way.”{" "}
          </p>
          <p className="small">
            {" "}
            – Ted Stackpole, CompaCare®<sup>&reg;</sup> Trainer
          </p>
        </Container>
      </Container>

      <Container fluid className="py-5 mt-0 bg-light">
        <Container>
          <h3 className="blue text-center">
            FIVE REASONS YOUR CHURCH SHOULD DEPLOY COMPA<strong>CARE</strong>
            <sup>&reg;</sup>
          </h3>
          <p>
            1. It is a research-based, practical way to care for the orphan and
            widow. (James 1:27)
          </p>
          <p>
            2. It helps church leaders to “equip the saints for the work of
            ministry. (Ephesians 4:11-12)
          </p>
          <p>
            3. The model is evidence-based. Research has supported a significant
            increase in foster care outcomes when our Compassion Care System is
            applied.
          </p>
          <p>
            4. It is local-church led and gives the church a voice to impact
            their community.
          </p>
          <p>
            5. It helps resolve the foster care crisis by locally increasing
            capacity, promoting placement stability, and thereby increasing
            foster care quality.
          </p>
        </Container>
      </Container>

      <Container
        fluid
        className="text-center m-0 mb-1 pt-5 p-5 bg-dark text-white"
      >
        <Row>
          <Col md={7} className="p-5 text-center d-flex align-items-center">
            <div>
              <p className="h3 mb-5">
                How do you and your church minister to vulnerable children and
                families locally? Consider CompaCare®.
              </p>

              <p className="lead">
                Are you interested in making Compa<strong>Care</strong>
                <sup>&reg;</sup> a strategic part of your church’s mission to
                vulnerable children and families? It is easy to begin by
                attending a very affordable, one-day Compa<strong>Care</strong>
                <sup>&reg;</sup> Church Leaders Certificate Training. You will
                be trained in the system and how to utilize the provided
                resources.
              </p>
            </div>
          </Col>
          <Col className="bg-light blue rounded d-flex align-items-center">
            <CompaCareInterestForm />
          </Col>
        </Row>
      </Container>

      {/* 
	  	  <div id="form" className="container text-center" style="padding-top: 60px">

          <p className="lead">
            Are you interested in making Compa<strong>Care</strong>
            <sup>&reg;</sup> a strategic part of your church’s mission to
            vulnerable children and families? It is easy to begin by attending a
            very affordable, one-day Compa<strong>Care</strong>
            <sup>&reg;</sup> Church Leaders Certificate Training. You will be
            trained in the system and how to utilize the provided resources.{" "}
          </p>



   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvy0ruifyXKLH2Wg_jgvlyXHTvp4iv9FPPcTRODzUvNjy6Rw/viewform?embedded=true" width="100%" height="1295" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
	  	  </div> */}
    </>
  );
};

export default CompaCarePage;


const RepIcon = () => {
  return(
    <>
    <div className="w-25">

<svg viewBox="0 0 115.2 115.2">
  <path d="M58.5 7.4a49.8 49.8 0 1049.8 49.8A49.8 49.8 0 0058.5 7.4zm0 11.2A14.3 14.3 0 1144 32.9a14.3 14.3 0 0114.4-14.3zM75.6 85a5 5 0 01-5 5H46.3a5 5 0 01-5-5V55.3a5 5 0 015-5h24.3a5 5 0 015 5z" fill="var(--royal)"/>
</svg>
    </div>

    </>
  )
}