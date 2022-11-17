import {Image, Container, Row, Col} from "react-bootstrap";

export default function hostFamilies() {
  document.title = "COMPACT Host Families"

  return (
    <>
      <Container className="py-4">
            <h1 className="text-center">Host Families</h1>
        <Row className="mt-5">
          <Col md={4} className="">
            <Image fluid
              src="https://compact.family/images/host_family.jpg"
              layout="intrinsic"
              width="600"
              height="609"
              alt="Host family walking"
            />
          </Col>
          <Col className="d-flex p-md-5 py-sm-4 flex-column justify-content-center">
            <h2 className="fs-4 fw-bold">
  
                On occasion, families will choose to take a child or children
                out on a host visit. These visits can be built around your
                family’s desires.
    
            </h2>

           
          </Col>
        </Row>
      </Container>

<Container className="d-flex justify-content-center">
  <Col lg={6} md={8} sm={12}>
<p className="lead">
              Hosting can include various activities such as:
            </p>

            <ul>
              <li>Taking a resident for a day of fun</li>
              <li>
                Taking a resident out to eat for a birthday or special occasion
              </li>
              <li>Having the resident for the weekend </li>
              <li>
                Taking the resident to do activities they may not have the
                chance to do with their cottage
              </li>
              <li>
                Providing support and guidance to the resident as they grow
              </li>
            </ul>
  </Col>
</Container>

      <Container className="my-5">
      
        <p className="fw-bold fs-5">
          Host Families are people like you in the community who wrap around our
          residents and provide extra support that they may desperately need.
        </p>
        <p className="text-center lead">
          These are experiences and memories that children cherish forever.
        </p>
        <p className="text-center">
          If you are interested in becoming a host family, you can fill out this
          application:
        </p>

        <p className="lead text-center py-5">
          <a
            href="https://compact.family/download/HostFamilyApplication.pdf"
            target="_blank"
            className="btn btn-primary btn-lg"
            role="button"
            rel="noopener noreferrer"
          >
            Download Host Application
          </a>
        </p>

        <p>
          If you have any questions about hosting, please feel free to contact
          us: info@compact.family or 501-262-1660.
        </p>
      </Container>
    </>
  );
}
