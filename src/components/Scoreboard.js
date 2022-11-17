import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
// import CompactLogo from "../graphics/CompactLogo";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const Scoreboard = () => {
  const client = new ApolloClient({
    uri: "https://www.compact.family/wpapi/graphql/",
    cache: new InMemoryCache(),
  });

  const GET_SCORES = gql`
    query scoreboard {
      page(id: "scoreboard", idType: URI) {
        databaseId
        title
        content
        scores {
          compacare
          fostercare
          highlands
          hillcrest
          safecare
          total
        }
      }
    }
  `;

  const Scores = () => {
    const { loading, error, data: scores } = useQuery(GET_SCORES);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    const scoreContent = [
      {
        dept: "Hillcrest",
        header: "Hillcrest Children’s Home",
        lead: "kids served in residential programs in 2022!",
        body: "Hillcrest rests on a 52-acre campus with 8 cottages and a 24-apartment center for foster youth preparing for adult living.",
        bg: "bg-green p-5",
        score: scores.page.scores.hillcrest,
        link: "/hillcrest",
      },
      {
        dept: "Highlands",
        header: "Highlands Maternity Home",
        lead: "mothers and babies served in Highlands Maternity Home and adoptions facilitated in 2022!",
        body: "Bringing hope and healing to women facing unplanned pregnancies and services to families looking to expand through adoption.",
        bg: "bg-pink p-5",
        score: scores.page.scores.highlands,
        link: "/highlands",
      },
      {
        dept: "fosterCare",
        header: "Foster Care",
        lead: "kids served in Foster Care programs in 2022!",
        body: "COMP<strong><em>ACT</em></strong> is your partner for serving vulnerable children and families in the foster care system.",
        bg: "bg-orange p-5",
        score: scores.page.scores.fostercare,
        link: "/fostercare",
      },
      {
        dept: "safecare",
        header: "SafeCare",
        lead: "children and parents served in 2022!",
        body: "SafeCare serves at risk children and their families to help prevent those children from entering the foster care system and experiencing separation from family.",
        bg: "bg-purple p-5",
        score: scores.page.scores.safecare,
        link: "/safecare",
      },
      {
        dept: "compacare",
        header: "CompaCare",
        lead: "churches, families, and children served in 2022!",
        body: "CompaCare Helps churches minister to vulnerable children and families mobilizes, trains, certifies, and organizes caring Christian people in the church to redeem and empower people in need.",
        bg: "bg-red p-5",
        score: scores.page.scores.compacare,
        link: "/compacare",
      },
      {
        dept: "Compact",
        header: "COMP<strong><em>ACT</em></strong>",
        lead: `Clients served in Hillcrest, Highlands, Foster Care, SafeCare and CompaCare in 2022!`,
        body: `<Link to="/hillcrest">Hillcrest</Link>,
        <Link to="/highlands">Highlands</Link>,
        <Link to="/fostercare">Foster Care</Link>,
        <Link to="/safecare">SafeCare</Link> and
        <Link to="/compacare">CompaCare</Link>`,
        bg: "bg-blue p-5",
        score: scores.page.scores.total,
        link: "/mission",
      },
    ];

    function ScoreCard({ dept, header, body, bg, score, link, lead }) {
      return (
        <Col
          md={6}
          lg={4}
          className={`${bg} m-0 p-5 text-white position-relative clickable`}
        >
          <Row className="mb-2" style={{ minHeight: "10rem" }}>
            <Col>
              <h1
                style={{
                  fontWeight: 800,
                  fontSize: "14rem",
                  left: -10,
                  top: -50,
                  opacity: "15%",
                  letterSpacing: -15,
                }}
                className="
largeNumber 
position-absolute 
text-white"
              >
                {score.toLocaleString()}
                {/* {score} */}
              </h1>
            </Col>

            <Col
              sm={12}
              md={12}
              lg={10}
              className="d-flex flex-column justify-content-center"
            >
              <h4>
                <strong>{score.toLocaleString()}</strong> {parse(lead)}
              </h4>
            </Col>
          </Row>
          <h1
            style={{ fontSize: "3rem", lineHeight: ".9em", letterSpacing: -1 }}
          >
            {parse(header)}
          </h1>
          <p>{parse(body)}</p>

          <Link
            to={link}
            className="btn btn-light text-dark mt-3 stretched-link"
            role="button"
          >
            Learn more about {dept}
          </Link>
        </Col>
      );
    }

    return (
      <>
        {scores &&
          scoreContent.map((sc) => (
            <ScoreCard
              key={sc.dept}
              dept={sc.dept}
              header={sc.header}
              body={sc.body}
              lead={sc.lead}
              bg={sc.bg}
              score={sc.score}
              link={sc.link}
            />
          ))}

        <Container fluid className="text-center bg-light py-3">
          <p>
            {" "}
            <small>
              The COMP
              <strong>
                <em>ACT</em>
              </strong>{" "}
              Scoreboard is a measurement of its redeeming compassionate action
              for vulnerable children and families.
            </small>
          </p>
          <p style={{ fontSize: ".65em" }}>
            <em>
              Foster child placements made in Private License Placement Agency
              (PLPA) and Specialized Private Licensed Placement Agency (SPLPA)
              programs in Arkansas, number of foster parents trained in
              Arkansas, number of <strong>FIND</strong> kinship connections
              served in Arkansas and number of foster parents licensed{" "}
              <strong>(and their foster children)</strong> or trained in
              Missouri.
            </em>
          </p>

          <p style={{ fontSize: ".65em" }}>
            <em>
              CompaCare churches (defined as at least one delegated leader
              trained in the CompaCare Compassion Care System through the
              CompaCare Church Leaders’ Training course), number of foster
              families served by CompaCare churches, number of foster children
              served by CompaCare churches, and number of children diverted
              (prevented) from entering the foster care system by a CompaCare
              church or CompaCare Representative.
            </em>
          </p>
        </Container>
      </>
    );
  };

  return (
    <>
      <ApolloProvider client={client}>
        <Row>
          <Scores />
        </Row>
      </ApolloProvider>
    </>
  );
};
export default Scoreboard;
