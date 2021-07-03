import { Container, Row, Col } from "react-bootstrap"

const ContactAddress = () => {
    return(
        <>
        <Container className="my-5 text-center d-flex justify-content-center text-center">
        <Row className="d-flex justify-content-center">
          <Col lg={5} md={4} sm={12} className="py-3">
            <p className="lead text-center mb-0">Arkansas Services</p>
            <p className="text-center small">
              Including Hillcrest Children’s Home and Highlands Residential
              Program for Minors:
            </p>

            <p className="text-center">
              2325 Malvern Avenue Hot Springs, AR 71901
              <br />
              (501) 262-1660
              <br />
              info@compact.family
            </p>
          </Col>

          <Col lg={5} md={6} sm={12} className="py-3">
            <p className="lead text-center mb-0">Missouri Services</p>
            <p className="text-center small">
              Including Highlands Adoption Services, CompaCare and
              <strong> FIND</strong>:
            </p>
            <p className="text-center">
              521 W. Lynn Street
              <br />
              Springfield, MO 65802
              <br />
              (417) 319-4070
              <br />
              missouri@compact.family
            </p>
          </Col>
        <h5>
          <a href="mailto:info@compact.family">info@compact.family</a>
        </h5>
        </Row>
      </Container>
        </>
    )
}

export default ContactAddress;