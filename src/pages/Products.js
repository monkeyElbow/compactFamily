import { Container, Image, Row, Col, Card } from "react-bootstrap";

const Products = () => {
  document.title = "COMPACT Products"

  return (
    <>
      <Container className="text-white text-center p-4">
          <Row>
            <Col lg={6} className="mb-1">
              <Card className="clickable bg-red h-100 mb-1">
<Card.Img src="https://compact.family/images/compacaremanual.jpg"/>
<Card.Body>

                <p className="h4">CompaCare Compassion Care System Manual</p>
                <a
                  className="btn btn-dark stretched-link mt-auto"
                  href="https://myhealthychurch.com/store/startitem.cfm?item=032334&amp;cat=AGMHCINDEX&amp;mastercat=&amp;path=AGMHCINDEX"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  For Purchase
                </a>{" "}
                  </Card.Body>
              </Card>{" "}
            </Col>

            <Col lg={6} className="mb-1">
              <Card className="clickable bg-blue  mb-1 h-100">
               <Card.Img  src="https://compact.family/images/compact_brandmag2020.jpg"/>
               

                <Card.Body>

                <p className="h4">
                  COMP<strong>ACT</strong> Brand Mag
                </p>
                <a
                  className="btn btn-dark stretched-link mt-auto"
                  href="https://compact.family/download/CompactBrandMag2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Download PDF
                </a>
                  </Card.Body>
              </Card>
            </Col>
          </Row>

      </Container>



        <Container className="my-4 p-3">
                <h4 className="mb-3">Highlands Connect Workbook</h4>
            <Row>
              <Col lg={5} className="p-4">

                <Image
                  fluid
                  src="https://compact.family/images/HighlandsConnect_Partricipant2020_inside_lowres.jpg"
                  width="444"
                  height="300"
                  alt="Participant workbook inside pages example"
                />

              </Col>

              <Col className="d-flex align-items-center">
              <div>

              <p className="mt-4">
                  The Highlands Connect workbook is a beautiful, fun, and
                  interactive place to take notes and make journal entries each
                  week. The Highlands Connect workbook keeps you organized as
                  you complete this course and makes creating your Life Plan (in
                  weeks 8 & 9) simple.
                </p>

                <p className="text-center">
                  <a
                    className="btn btn-primary"
                    href="https://compactfamily.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Buy here
                  </a>
                </p>
                    </div>
                </Col>

            </Row>
        </Container>


<Container className="p-3">
                <h4>Highlands Connect Workbook Leader's Guide</h4>
  <Row>
  <Col md={3} className="p-4">
                  <Image
                    fluid
                    src="https://compact.family/images/HighlandsConnect_Leader2020_COVERlowres.png"
                    width="248"
                    height="300"
                    layout="intrinsic"
                    alt=""
                  />
                  </Col>

                  <Col className="d-flex align-items-center">
                    <div>

                <p>
                  The Highlands Connect Participant Workbook and the Highlands
                  Connect Leader’s Guide are interactive tools designed to guide
                  participants and leaders through the Highlands Connect single
                  mom/single parenting course. The Participants Workbook,
                  colorful and engaging journal, provides a place to record your
                  thoughts, notes and journey, while the Leader’s Guide provides
                  valuable tips for facilitating this course in a small group
                  setting or one on one mentoring moments.
                </p>
                <p className="text-center">
                  {" "}
                  <a
                    className="btn btn-primary"
                    href="https://compactfamily.square.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Buy Here
                  </a>
                </p>
                    </div>
              </Col>
  </Row>
</Container>



<Container className="p-4">
                <h4>The Promise Tree Book</h4>
  <Row>

<Col md={4} className="mb-2">

                <Image
                  fluid
                  src="https://compact.family/images/promisebook2.jpg"
                  className="img-fluid rounded"
                  layout="intrinsic"
                  width="354"
                  height="300"
                  alt="The Promise Tree book"
                  />
               
              </Col>

<Col className="d-flex align-items-center">
  <div>

<p>
                  The Promise Tree is a metaphorical story about a real tree on
                  the Hillcrest Children’s Home campus. Although the tree
                  suffered trauma and was almost lost, competent care givers
                  were able to save the tree. The story is figurative of the
                  redeeming ministry we bring to hundreds of children and youth
                  every year.
                </p>
                <p>
                  <a
                    href="https://compactfamily.square.site/product/the-promise-tree-book/11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    role="button"
                    >
                    Buy Here
                  </a>
                </p>
                      </div>
                </Col>

                    </Row>
</Container>




      <Container fluid className="bg-blue my-0 p-5 vision rounded-0">
          <h2 className="display-4 text-white">Downloadable Brochures</h2>
          <p className="text-white">
            Downloadable brochures may be used for individual or group purposes.
            These resources provide additional information regarding each of the
            programs COMP<strong>ACT</strong> offers. Consider making them
            available for church information booths, small groups, mission
            conventions, or for individuals considering foster care or adoption.
          </p>

          <Row className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
            
            <Col className="p-2">
              <Card>

              <Card.Img
              src="https://compact.family/images/compacareBrochure.jpg" />
              <Card.Body>
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/compact_CompaCare2018TRI-FOLD.pdf"
                  target="new"
                  rel="noopener noreferrer"

                >
                  CompaCare Tri-Fold (PDF)
                </a>{" "}
              </p>

              </Card.Body>
              </Card>
            </Col>

            <Col className="p-2">
              <Card>
              <Card.Img
              src="https://compact.family/images/compactCottageBrochure.jpg" />
              <Card.Body>
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/CottageSponsorship2018.pdf"
                  target="new"
                  rel="noopener noreferrer"

                >
                  Cottage Sponsorship (PDF)
                </a>
              </p>

              </Card.Body>
              </Card>
            </Col>

            <Col className="p-2">
              <Card>
                <Card.Img
                src="https://compact.family/images/compactFosterBrochure.jpg" />
                <Card.Body>

              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/compact_Familyfoster2019TRI-FOLD.pdf"
                  target="new"
                  rel="noopener noreferrer"

                >
                  Foster Care (PDF)
                </a>{" "}
              </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-2">
              <Card>
                <Card.Img
                src="https://compact.family/images/compactMoBrochure.jpg" />
                <Card.Body>
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/CompactMO2019TRI-FOLD.pdf"
                  target="new"
                  rel="noopener noreferrer"

                >
                  Missouri Services (PDF)
                </a>{" "}
              </p>

                </Card.Body>
              </Card>
            </Col>

            <Col className="p-2">
             <Card>

             <Card.Img
             src="https://compact.family/images/highlandsTriFold.jpg" />
             <Card.Body>

              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/CompactHighlands2019TRI-FOLD.pdf"
                  target="new"
                  rel="noopener noreferrer"
                  >
                  Highlands (PDF)
                </a>
              </p>
                    </Card.Body>
                  </Card>
            </Col>


            <Col className="p-2">
              <Card>
                <Card.Img 
                src="https://compact.family/images/compact_brandmag2020.jpg" />
                <Card.Body>

              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/CompactBrandMag2020.pdf"
                  target="new"
                  rel="noopener noreferrer"

                >
                  COMP<strong>ACT</strong> Brand Mag 2020 (PDF)
                </a>
              </p>
                </Card.Body>
              </Card>
            </Col>


            <Col className="p-2">
              <Card>

              <Card.Img
              src="https://compact.family/images/prayCal.jpg" />
              <Card.Body>
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/CompactPrayThePromisesCalendar.pdf"
                  target="_new"
                  rel="noopener noreferrer"

                >
                  Pray the Promises (PDF)
                </a>
              </p>

              </Card.Body>
              </Card>
            </Col>

          </Row>
      </Container>
    </>
  );
};

export default Products;
