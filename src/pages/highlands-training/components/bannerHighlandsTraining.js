import HighlandsConnectLogo from '../../../graphics/HighlandsConnectLogo';
import { Container, Row, Col } from "react-bootstrap";

const BannerHighlandsTraining = () => {
    return(
        <>
        <Container fluid className="bg-pink p-3">
          <Row>
            <Col xs={12} sm={12} md={5} lg={3} xl={2}>
              <HighlandsConnectLogo />
            </Col>
            <Col className="d-flex justify-content-center text-center align-self-center text-white">
              <h3>Highlands Connect Training</h3>
            </Col>
          </Row>
        </Container>  
        </>
    )
}

export default BannerHighlandsTraining