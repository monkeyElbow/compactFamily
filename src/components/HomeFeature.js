import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeFeature() {
  // const xmasStyles = {
  //   card: {
  //     minHeight: "310px",
  //     background:
  //       "repeating-linear-gradient(90deg, #BD0019, #BD0019 60px, #E3001E 50px, #E3001E 120px)}",
  //   },
  // };

  return (
    <>
      <Container fluid className="bg-dark">
        <Row>
        {/* <Col lg={4} md={4}>
                  <Card
                    className="position-relative bg-orange clickable text-center text-white p-5 my-3 d-flex justify-content-center align-items-center"
                    style={{ minHeight: "300px" }}
                  >
                    <h2 className="fs-2 fw-bold mb-5">
                    Assemblies of God Foster Care Network
                    </h2>
                    <a href="https://giving.ag.org/donate/compact-family-services?fundid=38231"
                    target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-dark stretched-link">
                        Read More
                      </button>
                    </a>
                  </Card>
                </Col> */}


<Col lg={4} md={4}>
            <Card
              className="position-relative bg-blue clickable text-center text-white my-3 d-flex justify-content-center align-items-center"
                 style={{minHeight:"300px"}}
            >
              <div
                className="p-5"
              >
                <h3 className="text-uppercase lh-1">Employment Opportunities</h3>
                <h5 className="mb-4">
                  We're on the look out for team members.
                </h5>

                <Link to="/employment">
                  <button
                    className="btn btn-dark stretched-link"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </Card>
          </Col>

                <Col lg={4} md={4}>
            <Card
              className="position-relative bg-red clickable text-center text-white my-3 d-flex justify-content-center align-items-center"
                 style={{minHeight:"300px"}}
            >
              <div
                className="p-5"
              >
                <p className="lh-1 fs-2 fw-bold">
                  Resources
                </p>

<br />
                <Link to="/products">
                  <button
                    className="btn btn-dark stretched-link"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </Card>
          </Col>





        <Col lg={4} md={4}>
            {/* <Card
              className="bg-pink clickable text-center p-5 my-3 px-md-3 px-lg-5 d-flex justify-content-center align-items-center text-white"
              style={{ minHeight: "335px" }}
            >
              <div className="newtagwrap">

                <h2 className="fw-bold">Highlands Connect</h2>
                <p>
                  A new training series to equip single moms with a whole-person
                  approach.
                </p>
                <Link to="/highlands-training">
                  <button className="btn btn-dark stretched-link lead">
                    Check it out
                  </button>
                </Link>
              </div>
            </Card> */}

            <Card
              className="bg-green clickable text-center p-5 my-3 px-md-3 px-lg-5 d-flex justify-content-center align-items-center text-white"
              style={{ minHeight: "300px" }}
            >

                <p className="fw-bold fs-2 mb-5 lh-1">
                Ministry Partners
                </p>
                
                <Link to="/partners">
                  <button className="btn btn-dark stretched-link lead">
                    Read More
                  </button>
                </Link>
           
            </Card>


                  {/* <Card
                    className="position-relative bg-green clickable text-center text-white p-5 my-3 d-flex justify-content-center align-items-center"
                    style={{ minHeight: "300px" }}
                  >
                              <p className="fw-bold fs-2 mb-5 lh-1">
                              AG Foster Care Network
                </p>
                    <a href="https://agfostercare.network/"
                    target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-dark stretched-link">
                        Learn More
                      </button>
                    </a>
                  </Card> */}
                


          </Col>



         




{/* 
          <Col lg={4} md={4}>
            <Card
              className="position-relative bg-yellow clickable text-center text-white p-5 my-3 d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <h2 className="fs-3 mb-5">
              Learn more about our FIND Ministry.
              </h2>
              <Link to="/find">
                <button className="btn btn-dark stretched-link">
                  Read More
                </button>
              </Link>
            </Card>
          </Col> */}

        
        </Row>
      </Container>
    </>
  );
}
