import { Container, Row, Col } from "react-bootstrap";
import CompactLogo from "../graphics/CompactLogo";

const HomeBrandBanner = () => {

    // https://developers.google.com/youtube/iframe_api_reference
   

    return(
        <>
             <Container fluid className="bg-blue compactHome text-white text-center p-5">

          <Row className="p-2 m-0">

            <Col xs={12} sm={12} md={12} lg={6} xl={5}>
              <CompactLogo />
            </Col>

            <Col className="d-flex justify-content-center text-center align-self-center">
              <div>
                <p className="h3">FAMILY SERVICES</p>
                <p className="h5">
                  Redeeming vulnerable children and families since 1944
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        </>
    )
}

export default HomeBrandBanner;

