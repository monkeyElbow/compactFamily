import YoutubeEmbed from "../../components/youTubeEmbed";

import { Container, Row, Col, Image } from "react-bootstrap";
import {Link} from "react-router-dom";

import BannerHighlandsTraining from "./components/bannerHighlandsTraining";

export default function highandsConnect() {
  return (
    <>
    <BannerHighlandsTraining />
      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0">
          <Col lg={9} md={12} className="p-5">
            <p className="lead">
              Welcome to Highlands Connect, a course series that is focused on
              equipping and empowering single moms with a whole-person approach.
              Throughout this course, you will be given tools to bring healing
              and support to your body, your mind, and your spirit. This course
              will also provide you with practical parenting skills to raise
              healthy, happy children.
            </p>
          </Col>
          <Col className="bg-dark p-0 d-flex align-items-center justify-content-center">
            <div className="p-3 text-white rounded-3 text-center">
              <p className="h5">
                <strong>Are you a leader?</strong>
              </p>
              <p>We have tools available to you here:</p>
              <a href="/highlands-leader/">
                <button className="btn btn-light stretched-link">
                  Leader Resources
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <YoutubeEmbed embedId="VTSTJdF5b7s" />
      

      <Container className="my-5">
        <p className="h3">Course Description:</p>
        <p className="lead">
          Unexpected pregnancies stir a great many emotions. Single parenting is
          challenging.
        </p>
        <p>
          We understand and want to help you walk through this time in your life. Thus the reason we’ve provided this for you. Over the next couple of weeks, you will learn to walk in your God-given identity, set healthy boundaries for you and for your child, create a Life Plan, and gain helpful information when it comes to keeping your children
          healthy and safe.
        </p>

        <div className="bg-light p-4 rounded-3 text-center">
          <p className="lead">
            We’ve provided this <strong>FREE</strong> to you, consisting of 12
            life-giving lessons. We look forward to walking with you.
          </p>
          <p className="h4">
            <strong>You are not alone!</strong>
          </p>
        </div>
      </Container>

      <Container>
        <Col md={8} className="p-3 offset-md-2">
          <p className="lead">
            At the end of this 12-week course, we pray that you feel equipped
            with knowledge for helping your children thrive and empowered to
            take on this incredibly brave journey as a single parent
          </p>
        </Col>
      </Container>

      <Container className="my-5">
        <div className="card">
          <p className="card-header bg-pink text-white">
            <strong>Format:</strong>
          </p>
          <p className="card-body">
            
            This course is designed to be completed entirely online. However, it
            does lend itself to being presented in a group format. This course
            utilizes Power Point presentations, PDFs, video links, web articles,
            and a printable workbook.
          </p>
        </div>
      </Container>

      <Container className="my-5">
        <div className="card-group gap-md-3">
          <div className="card">
            <p className="card-header bg-pink text-white">
              <strong>Course Materials:</strong>
            </p>
            <p className="card-body">
              
              For this course, you will need a computer or tablet, access to the
              internet, a printer (for printing the workbook), a Bible, and a
              pen/pencil.
            </p>
          </div>

          <div className="card">
            <p className="card-header bg-pink text-white">
              <strong>Time to complete:</strong>
            </p>
            <p className="card-body">
              Plan for 45 minutes to get the most of each lesson.
            </p>
          </div>
        </div>
      </Container>

      <Container className="py-3 my-5">
        <p className="h2 text-center">Highlands Connect Workbook</p>
        <p className="lead">
          The Highlands Connect workbook is a beautiful, fun, and interactive
          place to take notes and make journal entries each week. The Highlands
          Connect workbook keeps you organized as you complete this course and
          makes creating your Life Plan (in weeks 8 & 9) simple.
        </p>
        <Row className="text-center">
          <Col lg={6} className="d-flex align-items-center">
            <Image fluid
              src="https://compact.family/images/HighlandsConnect_Partricipant2020_inside_lowres.jpg"
              layout="intrinsic"
              width="600"
              height="405"
              alt="Highlands workbook inside pages"
            />
          </Col>
          <Col>
            <Image fluid
              src="https://compact.family/images/HC_Partricipantworkbook.png"
              layout="intrinsic"
              width="334"
              height="405"
              alt="Highlands Connect Workbook cover"
            />
          </Col>
        </Row>
        <p className="text-center mb-5">
          <a
            className="btn btn-primary"
            href="https://compactfamily.square.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy full color workbook here
          </a>
        </p>

        <p className="h4 text-center">
          You can also download the printable PDF.
        </p>
        <p className="text-center">
          {" "}
          <a
            className="btn btn-primary"
            href="https://compact.family/download/HighlandsConnect_PartricipantWorkbook_printable.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Printable PDF
          </a>
        </p>
      </Container>

      <Container id="lessons" className="p-0 bg-light">
        <div className="jumbotron border border-dark p-3">
          <Row>
            <div className="col-md-9">
              <p className="display-3 d-inline pink">
                <strong>H.</strong>
              </p>

              <p className="d-inline h1">Helping Ourselves</p>
              <p>
                This unit stresses the importance of learning to walk in your
                God-given identity and blossom into the amazing woman of God you
                have been called to be.
              </p>
              <p>
                Learn the importance of walking with God and how he created you
                to blossom into the amazing woman you don’t yet know exists.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <div>
                <p>
                  <Link href="/#" to="/highlands-training-week-1" className="btn btn-secondary">
                    Week 1
                  </Link>
                </p>
                <p>
                  <Link href="/#" to="/highlands-training-week-2" className="btn btn-secondary">
                    Week 2
                  </Link>
                </p>
                <p>
                  <Link href="/#" to="/highlands-training-week-3" className="btn btn-secondary">
                    Week 3
                  </Link>
                </p>
              </div>
            </div>
          </Row>
        </div>

        <div className="jumbotron border border-dark p-3">
          <div className="row">
            <div className="col-md-9">
              <p className="display-3 d-inline pink">
                <strong>I.</strong>
              </p>

              <p className="d-inline h1"> Insulating Kids from Trauma</p>
              <p>
                In today’s world, insulating kids from trauma is key to building
                resilience. Although we can’t isolate kids from trauma, we can
                equip them to navigate life’s adversities with as little lasting
                damage as possible.
              </p>
              <p>
                Insulating kids from trauma is key to building resilience. Learn
                how to equip your children to navigate through life’s difficult
                moments.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <div>
                <p>
                  <Link href="/#" to="/highlands-training-week-4" className="btn btn-secondary">
                    Week 4
                  </Link>
                </p>
                <p>
                  <Link href="/#" to="/highlands-training-week-5" className="btn btn-secondary">
                    Week 5
                  </Link>
                </p>
                <p>
                  <Link href="/#" to="/highlands-training-week-6" className="btn btn-secondary">
                    Week 6
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron border border-dark p-3">
          <div className="row">
            <div className="col-md-9">
              <p className="display-3 d-inline pink">
                <strong>G.</strong>
              </p>

              <p className="d-inline h1">Goals</p>
              <p>
                Knowing where you’re going keeps you from wandering aimlessly.
                This unit will walk you through creating a life plan to guide
                you in reaching your life goals.
              </p>
              <p>
                Knowing where you’re going keeps you from wandering aimlessly.
                Learn how to create a life plan to help you reach your goals.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <div>
                <p>
                  <Link href="/#" to="/highlands-training-week-7"a className="btn btn-secondary">
                    Week 7
                  </Link>
                </p>
                <p>
                  <Link href="/#" to="/highlands-training-week-8" className="btn btn-secondary">
                    Week 8 & 9
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron border border-dark p-3">
          <div className="row">
            <div className="col-md-9">
              <p className="display-3 d-inline pink">
                <strong>H.</strong>
              </p>

              <p className="d-inline h1"> Healthy Living</p>
              <p>
                Learning to set boundaries can be hard. But this unit will walk
                you through the importance of setting healthy, godly boundaries
                and how to create boundaries that will protect both you and your
                child(ten).
              </p>
              <p>
                Learning to set boundaries can be a challenge. Learn the
                importance of setting healthy boundaries to protect both you and
                your children.
              </p>
            </div>

            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <div>
                <p>
                  <Link href="/#" to="/highlands-training-week-10" className="btn btn-secondary">
                    Week 10
                  </Link>
                </p>
                <p>
                  <Link href="/#" to="/highlands-training-week-11" className="btn btn-secondary">
                    Week 11
                  </Link>
                </p>
                <p>
                  <Link href="/#" to="/highlands-training-week-12" className="btn btn-secondary">
                  Week 12
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
