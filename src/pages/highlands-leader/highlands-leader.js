import BannerHighlandsLeader from './components/BannerHighlandsLeader';

import { Link } from "react-router-dom";
import { Container, Image, Col, Row } from "react-bootstrap";

const highlandsLeader = () => {
    return(
        <>
<BannerHighlandsLeader />

<Container>
          <div className="container py-3">
            <p className="lead">
              <strong>
                Thank you for your heart and willingness to reach and mentor
                single, pregnant moms!
              </strong>
            </p>
            <p>
              Titus 2 encourages older women to mentor younger women. The
              Highlands Connect training lays a foundation for mentoring and
              helping expecting or single moms!
            </p>
            <p>
              As a leader, please consider this: you will have 12 precious weeks
              to foster a relationship of trust that we pray leads to a lifetime
              of friendship and coaching for those girls/women who need care and
              support in thier current season of life.{" "}
            </p>
            <p>
              At any time, please feel free to email Ashley at{" "}
              <a href="mailto:HighlandsConnect@Compact.Family">
                HighlandsConnect@Compact.Family
              </a>{" "}
              with any questions. She would also love to hear any stories of how
              you and the Lord brought health and healing to a single mom or
              mommy-to-be.{" "}
            </p>

            <p className="h4">Your Journey Begins…</p>
            <ul className="fa-ul">
              <li>
                <i className="fa-li fa fa-check-circle"></i>
                <p>
                  Pray that God would open doors and lead you to young, single
                  moms whom He wants you to mentor.
                </p>
              </li>
              <li>
                <i className="fa-li fa fa-check-circle"></i>
                <p>
                  Inform your pastor of the journey you are about to take. Let
                  him/her know of your desire to reach and minister to this
                  vulnerable population.
                </p>
              </li>
              <li>
                <i className="fa-li fa fa-check-circle"></i>
                <p>
                  Invite a single mom(s) to go on the journey with you. We
                  suggest one-on-one mentoring, but you may also want to
                  consider a small group instead.
                </p>
              </li>
              <li>
                <i className="fa-li fa fa-check-circle"></i>
                <p>
                  Establish a time to meet together. Remember to choose a place
                  that feels warm, inviting, and without distractions.
                </p>
              </li>
              <li>
                <i className="fa-li fa fa-check-circle"></i>
                <p>
                  <a href="https://compactfamily.square.site/" target="_blank" rel="noopener noreferrer">  
                    Purchase
                  </a>{" "}
                  a full color, spiral version of our Highlands Connect Workbook
                  Leader's Guide and Participant Workbook OR download and print
                  your free copy from our training home page.
                </p>
              </li>

              <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-2">
                  <Image fluid
                    src="https://compact.family/images/HighlandsConnect_Leader2020_COVERlowres.png"
                    width="165"
                    height="200"
                    layout="intrinsic"
                    alt="Highlands Connect Workbook Leader's Guide"
                  />
                </div>
                <div className="col-md-3">
                  <p>
                    {" "}
                    <a
                      className="btn btn-primary"
                      href="https://compactfamily.square.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Purchase Workbook
                    </a>
                  </p>
                </div>
              </div>

              <li>
                <i className="fa-li fa fa-check-circle"></i>
                <p>
                  Call and remind those in your group of the first gathering and
                  meeting place.
                </p>
              </li>

              <li>
                <i className="fa-li fa fa-check-circle"></i>{" "}
                <p>
                  CELEBRATE at the conclusion of your formal time together!
                  We've included a certificate to print for the girls/women upon
                  completion of the curriculum.
                </p>
              </li>

              <div className="row d-flex justify-content-center">
                <div className="col-md-2">
                  <Image fluid 
                    src="https://compact.family/images/highlandsconnect_certificate.png"
                    width="400"
                    height="309"
                    layout="intrinsic"
                    alt="Certificate example"
                  />
                </div>
                <div className="col-md-3">
                  <p>
                    <a
                      className="btn btn-primary"
                      href="https://compact.family/download/highlandsconnect_certificate.pdf"
                      target="_blank" rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </p>
                </div>
              </div>
            </ul>

            <p className="h4">Before Your First Gathering…</p>
            <p>
              We encourage you to familiarize yourself with the Leader’s Guide
              to get a taste of what the girls will encounter. This will help
              you with questions they may have, and preparation needed prior to
              each week of meeting.
            </p>

            <p className="text-center">
              <Link to="/highlands-training">
                <a className="btn btn-primary">Back to the lessons</a>
              </Link>
            </p>
          </div>
        </Container>

        <Container fluid className="bg-secondary">
          <Row>
            <Col
              md={8}
              className="text-white text-center d-flex align-items-center"
            >
              <div>
                {" "}
                <p className="h2">Highlands Connect Leader's Guide</p>
                <p className="h4">
                  Follow along with the download printable PDF or purchase full
                  color spiral version.
                </p>
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-center">
                <div className="m-2">
                  <Image fluid
                    src="https://compact.family/images/HighlandsConnect_LeaderCover.png"
                    width="155"
                    height="200"
                    layout="intrinsic"
                    alt="Highlands Connect printable PDF leader cover"
                  />
                  <p className="text-center">
                    <a
                      className="btn btn-dark"
                      href="https://compact.family/download/HighlandsConnect_LeaderGuide2020Printable.pdf"
                      target="_blank"   rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </p>
                </div>

                <div className="m-2">
                  <Image fluid
                    src="https://compact.family/images/HighlandsConnect_LeaderGuide.png"
                    width="155"
                    height="200"
                    layout="intrinsic"
                    alt=""
                  />
                  <p className="text-center">
                    <a
                      className="btn btn-dark"
                      href="https://compactfamily.square.site/"
                      target="_blank"   rel="noopener noreferrer"
                    >
                      Purchase Workbook
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        </>
    )
}

export default highlandsLeader;