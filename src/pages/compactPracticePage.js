import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CompaCarePractice from "../components/CompaCarePractice";

export default function compactPracticePage() {
  document.title = "CompaCare Practice";

  return (
    <>
      <Container fluid className="p-5 bg-red text-white">

        <h4>
          The CompaCare<sup>&reg;</sup> Practice is an evidence-informed
          wraparound model that puts the foster family in the center, with
          different levels of volunteer support.
        </h4>
      </Container>

<div className="ml-4">
        <Link to="/compacare">
          <p>Back to CompaCare<sup>&reg;</sup> Home</p>
        </Link>
</div>


        <Container className="col-lg-8 col-mg-12 my-5">
      <p className="lead py-5">
          The secret of the success of the CompaCare<sup>&reg;</sup> Practice Model is the role
          of the Family Advocate. They provide the emotional, spiritual, and
          tangible support resources that help the foster parents feel that they
          are not alone in their ministry. Trained CompaCare<sup>&reg;</sup> Representatives are
          deployed throughout the country to provide technical support and help
          in the training of Family Advocates for local churches.
        </p>
        <div className="p-3">
          <CompaCarePractice />
        </div>
        </Container>


      <Container fluid>
      <Row className="p-5">
          <Col sm={3}>
            <RedCircle />
          </Col>
          <Col className="d-flex align-items-center">
            <h5>
              The CompaCare<sup>&reg;</sup> Church Leader and a number of Family Advocates who
              coordinate the needs of the family with the various services
              available in the church (the volunteers) and the community.
              {/* (red circle). */}
            </h5>
          </Col>
        </Row>


        <Row>
          <Col
            md={4}
            className="bg-dark d-flex flex-column justify-content-around p-5 text-white text-center"
          >
          <div className="p-m-5">
            <GreyCircles />
            </div>
            <h5>
              Some volunteers will provide goods and services and would not have
              direct contact with foster children.
              {/* (grey circles).   */}
            </h5>
          </Col>
          <Col
            md={4}
            className="d-flex flex-column justify-content-around p-5 text-white text-center bg-purple"
          >
          <div className="p-m-5">
            <PurpleCircles />
            </div>
            <h5>
              Some volunteers provide valuable direct services, especially
              critical support services such as respite, transport, and
              baby-sitting services.
              {/* (purple circles). */}
            </h5>
          </Col>
          <Col
            md={4}
            className="d-flex flex-column justify-content-around p-5 text-white text-center bg-royal"
          >
            <div className="p-m-5">
            <BlueCircles />
            </div>
            <h5>
              Two types of volunteers are tasked with operations management.
              {/* (blue circles),  */}
            </h5>
          </Col>
        </Row>

       



<br />
        <Link to="/compacare">
          <p>Back to CompaCare<sup>&reg;</sup> Home</p>
        </Link>
      </Container>
    </>
  );
}

const GreyCircles = () => {
  return (
    <svg viewBox="0 0 305.82 302.53">
      <circle cx="78.12" cy="175.54" r="49.82" className="svgwhite" />
      <circle cx="180.2" cy="85.76" r="49.82" className="svgwhite" />
      <circle cx="216.9" cy="191.33" r="65.64" className="svgwhite" />

      <text
        className="h2"
        style={{ textAlign: "center", fontSize: "1.25rem" }}
        transform="matrix(1 0 0 1 167 200)"
      >
        PROJECTS
      </text>
      <text
        className="h2"
        style={{ textAlign: "center", fontSize: "1.25rem" }}
        transform="matrix(1 0 0 1 145 93)"
      >
        GOODS
      </text>
      <text
        className="h2"
        style={{ textAlign: "center", fontSize: "1.25rem" }}
        transform="matrix(1 0 0 1 50 183)"
      >
        FOOD
      </text>
    </svg>
  );
};

const PurpleCircles = () => {
  return (
    <>
      <svg viewBox="0 0 474.79 302.08">
        <g className="svgwhite">
          <circle cx="279.77" cy="168.06" r="49.82" />
          <circle cx="372.7" cy="126.41" r="60.02" />
          <circle cx="414.62" cy="220.42" r="49.82" />
          <circle cx="177.64" cy="105.06" r="49.82" />
          <circle cx="66.62" cy="173.68" r="49.82" />
          <circle cx="169.03" cy="226.06" r="65.95" />
          <circle cx="265.93" cy="62.92" r="49.82" />
        </g>

        <g className="h2">
          <text
            style={{ fontSize: "1.25rem" }}
            transform="matrix(1 0 0 1 31 183)"
          >
            FRIEND
          </text>
          <text
            style={{ fontSize: ".95rem" }}
            transform="matrix(1 0 0 1 136 113)"
          >
            BIO FAMILY
          </text>
          <text
            style={{ fontSize: "1.45rem" }}
            transform="matrix(1 0 0 1 124 233)"
          >
            RESPITE
          </text>
          <text
            style={{ fontSize: "1.25rem" }}
            transform="matrix(1 0 0 1 246 177)"
          >
            TUTOR
          </text>
          <text
            style={{ fontSize: "1.25rem" }}
            transform="matrix(1 0 0 1 330 137)"
          >
            MENTOR
          </text>
          <text
            style={{ fontSize: "1.25rem" }}
            transform="matrix(1 0 0 1 380 230)"
          >
            DRIVER
          </text>
          <text
            style={{ fontSize: "1.25rem" }}
            transform="matrix(1 0 0 1 233 70)"
          >
            SITTER
          </text>
        </g>
      </svg>
    </>
  );
};

const BlueCircles = () => {
  return (
    <svg viewBox="0 0 222.1 208.8">
      <g className="svgwhite">
        <circle cx="58.5" cy="152.3" r="49.8" />
        <circle cx="143.8" cy="75.3" r="67.7" />
      </g>

      <g className="h2">
        <text
          style={{ fontSize: "1.25rem" }}
          transform="matrix(1 0 0 1 21 162)"
        >
          LEADER
        </text>
        <text
          style={{ fontSize: "1.25rem" }}
          transform="matrix(1 0 0 1 110 70)"
        >
          FAMILY
        </text>
        <text style={{ fontSize: "1.25rem" }} transform="matrix(1 0 0 1 90 90)">
          ADVOCATE
        </text>
      </g>
    </svg>
  );
};

const RedCircle = () => {
  return (
    <>
      <svg viewBox="0 0 307.9 303.2">
        <circle className="svgred" cx="154" cy="151.6" r="139.7" />

        <g className="h2 svgwhite">
          <text
            style={{ fontSize: "1.75rem" }}
            transform="matrix(1 0 0 1 73 130)"
          >
            COMPACT &
          </text>
          <text
            style={{ fontSize: "1.75rem" }}
            transform="matrix(1 0 0 1 65 160)"
          >
            COMMUNITY
          </text>
          <text
            style={{ fontSize: "1.75rem" }}
            transform="matrix(1 0 0 1 89 190)"
          >
            SERVICES
          </text>
        </g>
      </svg>
    </>
  );
};
