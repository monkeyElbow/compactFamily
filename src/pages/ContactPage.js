import {
  Row,
  Col,
  Container,
  Image,
  Fade,
} from "react-bootstrap";
import ContactForm from "../components/ContactForm";

import ContactAddress from "../components/ContactAddress"

const ContactUs = () => {
  document.title = "COMPACT Contact Us"

  return (
    <>
      <Container fluid className="photoblue px-2 mt-0 pt-4">
        <h2 className="text-center">
          
          <strong>CONTACT US</strong>
        </h2>
        <Row>
          <Col sm={12} md={6} className="d-none d-lg-block">
            <Fade in>
            <Image fluid
              src="https://compact.family/images/2024.jpg"
              alt="Child representative"
            />
            </Fade>
          </Col>

          <Col className="text-center pb-4 d-flex align-items-center justify-content-center">
            <ContactForm />
          </Col>
        </Row>
      </Container>

<Container>

      <ContactAddress />
</Container>

    </>
  );
};

export default ContactUs;
