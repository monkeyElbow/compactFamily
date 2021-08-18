import { Link } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import CompaCarePhilosophy from "../components/CompaCarePhilosophy";
import CompaCarePractice from "../components/CompaCarePractice";
import CompaCarePlan from "../components/CompaCarePlan";
import CompaCareInterestForm from "../components/CompaCareInterestForm";

const CompaCarePage = () => {
    document.title = "CompaCare by COMPACT"

  return (
    <>
      {/* <a href="compacare-training">compacare training</a> */}

  
      <Container fluid className="text-center my-0 py-0 mt-0 photoblue">
        <Row>

          <div className="col-sm-12 col-md-6 col-lg-7 py-3 text-center d-flex justify-content-center align-items-center">
            <div>
              {/* <p className="h2">
                What is <strong>CompaCare</strong>?
              </p> */}
              <h4>
                CompaCare® is a program that helps churches respond to the foster care crisis with knowledge, compassion, and skills.
              </h4>
            </div>
          </div>
  
              <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-content-end justify-content-center">
              <Image fluid
                  src="https://compact.family/images/1945.jpg"
                  width="600"
                  height="532"
                  layout="intrinsic"
                />
              </div>
        </Row>
      </Container>


      <Container fluid>

        <Row>
          <Col lg={6} className="p-5 text-center bg-blue text-white lead"> 
          <p>
          It has been broadly stated that the American foster care system is in
          crisis. The crisis can be simply understood as suffering in capacity,
          stability and quality. CompaCare<sup>&reg;</sup> helps reduce that
          stress and improve outcomes. It empowers a very important, and often
          missing element, to achieve betterment through an unequaled volunteer
          resource known as the Church.
        </p></Col>

          <Col className="p-5 text-center text-white d-flex flex-column justify-content-around bg-red">
          
          <h3>
            For CompaCare Church Leaders’ online training, <Link to="/compacare-training">click here.</Link>
        </h3>

        <h5 className="text-center">
            To order training manuals from my healthy church, {' '}
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://myhealthychurch.com/store/searchresults.cfm?Criteria=compacare&image.x=22&image.y=18"
            >Click here.</a> 
        </h5>
        
        </Col>
        </Row>
       
        
      </Container>


      



      <CompaCarePractice />

      <CompaCarePhilosophy />

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

      <Container fluid className="py-5 mt-0 bg-light">
        <Container>
          <h3 className="blue text-center">
            FIVE REASONS YOUR CHURCH SHOULD DEPLOY COMPA<strong>CARE</strong>
            <sup>&reg;</sup>
          </h3>
          <p>
            1.	It is a research-based, practical way to care for the orphan and widow.  (James 1:27)
          </p>
          <p>
          2.	It helps church leaders to “equip the saints for the work of ministry. (Ephesians 4:11-12)
          </p>
          <p>
          3.	The model is evidence-based.  Research has supported a significant increase in foster care outcomes when our Compassion Care System is applied.
          </p>
          <p>
          4.	It is local-church led and gives the church a voice to impact their community.
          </p>
          <p>
          5.	It helps resolve the foster care crisis by locally increasing capacity, promoting placement stability, and thereby increasing foster care quality.
          </p>

        
        </Container>
      </Container>


      <Container fluid className="text-center m-0 mb-1 pt-5 p-5 bg-dark text-white">
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
