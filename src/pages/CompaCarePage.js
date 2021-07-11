// import { Link } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import CompaCarePhilosophy from "../components/CompaCarePhilosophy";
import CompaCarePractice from "../components/CompaCarePractice";
import CompaCarePlan from "../components/CompaCarePlan";
import CompaCareInterestForm from "../components/CompaCareInterestForm";

const CompaCarePage = () => {
  return (
    <>
      {/* <a href="compacare-training">compacare training</a> */}

  
      <Container fluid className="text-center my-0 py-0 mt-0 photoblue">
        <Row>
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-content-end justify-content-center">
          <Image fluid
              src="https://compact.family/images/1945.jpg"
              width="600"
              height="532"
              layout="intrinsic"
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-7 py-3 text-center d-flex justify-content-center align-items-center">
            <div>
              <p className="h2">
                What is <strong>CompaCare</strong>?
              </p>
              <p className="lead">
                CompaCare® is an evidence-based, compassionate care ministry
                resource from COMP<strong>ACT</strong>
                <sup>®</sup> that mobilizes, trains, certifies, and organizes
                caring Christian people in the church to redeem and empower
                people in need.
              </p>
            </div>
          </div>
        </Row>
      </Container>


      <Container fluid className="p-5 text-center bg-blue text-white rounded-0">
        <p className="lead">
          It has been broadly stated that the American foster care system is in
          crisis. The crisis can be simply understood as suffering in capacity,
          stability and quality. CompaCare<sup>&reg;</sup> helps reduce that
          stress and improve outcomes. It empowers a very important, and often
          missing element, to achieve betterment through an unequaled volunteer
          resource known as the Church.
        </p>
        <p>
          CompaCare<sup>&reg;</sup> helps churches minister to vulnerable
          children and families in their local communities. Although was built
          for the foster and adoptive families, it can be leveraged to serve
          virtually any vulnerable need.
        </p>
      </Container>


      <Container fluid className="text-center m-0 pt-5 p-5 bg-dark text-white">
        <Row>
          <Col md={7} className="p-5 text-center d-flex align-items-center">
            <div>
              <p className="h3 mb-5">
                How do you and your church minister to vulnerable children and
                families locally? Consider CompaCare<sup>®</sup>.
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
          <Col className="bg-light blue rounded">
            <CompaCareInterestForm />
          </Col>
        </Row>
      </Container>




      <CompaCarePhilosophy />

      <CompaCarePractice />

      <CompaCarePlan />

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
            – Ted Stackpole, CompaCare<sup>&reg;</sup> Trainer
          </p>
        </Container>
      </Container>

      <Container fluid className="py-4 mt-0 bg-light">
        <Container>
          <h3 className="blue text-center">
            FIVE REASONS YOUR CHURCH SHOULD DEPLOY COMPA<strong>CARE</strong>
            <sup>&reg;</sup>
          </h3>
          <p>
            • It is a practical way to care for the orphan, widow or other
            vulnerable persons. (James 1:27)
          </p>
          <p>
            • It helps church leaders to apply Ephesians 4:11-12 by providing
            practical ways to “equip the saints for the work of the ministry.”
          </p>
          <p>
            • It is evidence-based. Research has shown a significant increase in
            foster care outcomes when this system is wisely applied.
          </p>
          <p>
            • It is local-church led and gives the church a voice to impact
            their community.
          </p>
          <p>
            • It helps resolve the foster care crisis by increasing capacity,
            promoting placement stability, and thereby increasing foster care
            quality.
          </p>

        
        </Container>
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
