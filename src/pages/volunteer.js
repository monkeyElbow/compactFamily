import { Image, Container, Row, Col } from "react-bootstrap";

export default function volunteer() {
  document.title = "COMPACT Volunteer";

  return (
    <>
      <Container className="py-5">
        <h1 className="text-center">Volunteer</h1>
        <h2 className="p-4 fs-4 text-center">
          Our ministry could not run if it were not for our amazing volunteers.
        </h2>
        <Row className="">
          <Col
            md={6}
            className="p-5 d-flex flex-column align-content-center justify-content-center"
          >
            <h3>We have volunteers in every aspect of our ministry:</h3>
            <p>maintenance, tutoring residents and office duties.</p>
          </Col>
          <Col>
            <Image
              fluid
              src="https://compact.family/images/Vanguard-Team-Serving-Dinner.jpg"
              // layout="intrinsic"
              // width="600"
              // height="400"
              alt="Vanguard team service dinner"
            />
          </Col>
        </Row>
      </Container>
      <Container className="">
        <p className="lead">
          Whatever your skill-set, if you are interested in volunteering, please
          contact us.
        </p>

        <p className="mt-3">
          Our biggest need is office assistants. These volunteers work at the
          front desk, answering phones and being a helpful guide to those coming
          to COMP
          <span className="act">ACT</span>. All necessary training is provided.
          Sometimes these office assistants will help with stuffing envelopes
          for mail outs or help with cleaning.
        </p>
        <p className="lead text-center">
          <a
            href="https://compact.family/download/CompactVolunteerApplication.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg text-center mt-5"
            role="button"
          >
            Volunteer Application
          </a>
        </p>
      </Container>

      <Container fluid className="text-white text-center my-5 bg-blue p-5 mb-0">
        <h3 className="">COMPACT INTERNSHIPS</h3>
        <p>
          If you are interested in completing an internship through COMP
          <span className="act">ACT</span> Family Services, please contact us at
          info@compact.family with any questions you may have.
        </p>
      </Container>
    </>
  );
}
