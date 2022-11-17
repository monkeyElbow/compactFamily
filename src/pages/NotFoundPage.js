import { Link } from 'react-router-dom';
import { Container, Col, Row, Image } from 'react-bootstrap';

const NotFoundPage = () => {
  document.title = "Page Not Found"

  return (

<>
<Container fluid className="photoblue">
          <Row>
            <Col
              sm={12}
              md={5}
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <p className="h1 display-5 text-center">Our apologies</p>

                <p className="lead text-center">
                  What you're looking for is no longer here.
                </p>
              </div>
            </Col>
            <Col className="d-flex align-items-end">
              <Image fluid
                src="https://compact.family/images/2024.jpg"
                width="400"
                height="385"
                layout="intrinsic"
                alt="Child representative"
              />
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <p className="lead text-center">
            Perhaps the links below can help find what you're looking for:
          </p>

          <div className="row d-flex h5 align-items-stretch <!-- important --> justify-content-center align-items-center text-center">
            <div className="col-lg-3 col-md-3 col-11 m-1 clickable bg-green py-5 rounded d-flex justify-content-center align-items-center text-center card border-0">
              <Link href="/#" to="/hillcrest" className="stretched-link">
                
                  Hillcrest Children's Home
              </Link>
            </div>

            <div className="col-lg-3 col-md-3 col-11 m-1 clickable bg-pink py-sm-4 py-4 rounded d-flex justify-content-center align-items-center text-center card border-0">
              <Link href="/#" to="/highlands" className="stretched-link">
               
                  Highlands Adoption and Maternity
               
              </Link>
            </div>

            <div className="col-lg-3 col-md-3 col-11 m-1 clickable bg-orange py-xl-4 py-lg-5 py-md-5 py-sm-4 py-4 rounded d-flex justify-content-center align-items-center text-center card border-0">
              <Link href="/#" to="/fostercare" className="stretched-link">
                Foster Care
              </Link>
            </div>

            <div className="col-lg-3 col-md-3 col-11 m-1 clickable bg-red py-md-5 py-4 rounded d-flex justify-content-center align-items-center text-center card border-0">
              <Link href="/#" to="/compacare" className="stretched-link">
                COMPACARE
              </Link>
            </div>

            <div className="col-lg-3 col-md-3 col-11 m-1 clickable bg-yellow py-4 rounded d-flex justify-content-center align-items-center text-center card border-0">
              <Link href="/#" to="/find" className="stretched-link">
                FIND
              </Link>
            </div>

            <div className="col-lg-3 col-md-3 col-11 m-1 clickable bg-blue py-5 rounded d-flex justify-content-center align-items-center text-center card border-0">
              <Link href="/#" to="/safecare" className="stretched-link">
                SAFECARE
              </Link>
            </div>
          </div>
        </Container>
</>
  )
}


export default NotFoundPage