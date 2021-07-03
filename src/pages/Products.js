import { Container, Image } from "react-bootstrap";

const Products = () => {
  return (
    <>
      <div className="text-white text-center p-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-1">
              <div className="jumbotron card clickable bg-red h-100 mb-1">
                <p className="h4">CompaCare Compassion Care System Manual</p>
                <a
                  className="btn btn-dark stretched-link mt-auto"
                  href="https://myhealthychurch.com/store/startitem.cfm?item=032334&amp;cat=AGMHCINDEX&amp;mastercat=&amp;path=AGMHCINDEX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For Purchase
                </a>{" "}
              </div>{" "}
            </div>

            <div className="col-lg-6 mb-1">
              <div className="jumbotron card clickable bg-blue  mb-1 h-100">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container id="The Promise Tree Book">
        <div className="jumbotron text-center bg-light mt-0 mb-0">
          <div className="container mt-0">
            <div className="row">
              <div className="col-lg-4 mb-2">
                <p className="h4 text-center">Highlands Connect Workbook</p>
                <Image
                  fluid
                  src="https://compact.family/images/HighlandsConnect_Partricipant2020_inside_lowres.jpg"
                  width="444"
                  height="300"
                  alt="Participant workbook inside pages example"
                />

                <p>
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

              <div className="col-lg-4 mb-2">
                <p className="h4">Highlands Connect Workbook Leader's Guide</p>
                <div className="col-md-6 float-start">
                  <Image
                    fluid
                    src="https://compact.family/images/HighlandsConnect_Leader2020_COVERlowres.png"
                    width="248"
                    height="300"
                    layout="intrinsic"
                    alt=""
                  />
                </div>
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
                <p>
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

              <div className="col-lg-4 mb-2">
                <p className="h4">The Promise Tree Book</p>

                <Image
                  fluid
                  src="https://compact.family/images/promisebook2.jpg"
                  className="img-fluid rounded"
                  layout="intrinsic"
                  width="354"
                  height="300"
                  alt="The Promise Tree book"
                />
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
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-blue my-0 p-5 vision rounded-0">
        <div className="container">
          <h2 className="display-4">Downloadable Brochures</h2>
          <h3 className="bg-warning">fix links</h3>
          <p>
            Downloadable brochures may be used for individual or group purposes.
            These resources provide additional information regarding each of the
            programs COMP<strong>ACT</strong> offers. Consider making them
            available for church information booths, small groups, mission
            conventions, or for individuals considering foster care or adoption.
          </p>

          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
            <div className="col p-3 card bg-transparent border-white">
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/CompactPrayThePromisesCalendar.pdf"
                  target="_new"
                >
                  Pray the Promises (PDF)
                </a>
              </p>
            </div>
            <div className="col p-3 card bg-transparent border-white">
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/compact_CompaCare2018TRI-FOLD.pdf"
                  target="new"
                >
                  CompaCare Tri-Fold (PDF)
                </a>{" "}
              </p>
            </div>
            <div className="col p-3 card bg-transparent border-white">
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/CottageSponsorship2018.pdf"
                  target="new"
                >
                  Cottage Sponsorship (PDF)
                </a>
              </p>
            </div>
            <div className="col p-3 card bg-transparent border-white">
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/compact_Familyfoster2019TRI-FOLD.pdf"
                  target="new"
                >
                  Foster Care (PDF)
                </a>{" "}
              </p>
            </div>
            <div className="col p-3 card bg-transparent border-white">
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/CompactMO2019TRI-FOLD.pdf"
                  target="new"
                >
                  Missouri Services (PDF)
                </a>{" "}
              </p>
            </div>
            <div className="col p-3 card bg-transparent border-white">
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/brochure/CompactHighlands2019TRI-FOLD.pdf"
                  target="new"
                >
                  Highlands (PDF)
                </a>
              </p>
            </div>
            <div className="col p-3 card bg-transparent border-white">
              <p>
                <a
                  className="lead stretched-link"
                  href="https://compact.family/download/CompactBrandMag2020.pdf"
                  target="new"
                >
                  COMP<strong>ACT</strong> Brand Mag 2020 (PDF)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
