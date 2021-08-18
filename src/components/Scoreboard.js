import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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

    return (
      <>
        <Container fluid>
          <Row>
            <Col
              md={6}
              lg={4}
              className="p-5 d-flex flex-column justify-content-center align-content-around bg-green text-white text-center clickable"
            >
              <h2 className="mb-3" style={{ lineHeight: "1em" }}>
                <strong>Hillcrest Children's Home</strong>
              </h2>

              {scores && (
                <div>
                  <h5>
                      <span style={{fontSize:"2rem"}}>
                        <strong>
                        {scores.page.scores.hillcrest} {" "}
                        </strong>
                        </span>
                      kids served in residential programs since January!
                  </h5>
                </div>
              )}

              <p className="my-3">
                Hillcrest Children’s Home rests on a 52-acre campus with 8
                cottages and a 24-apartment center for foster youth preparing
                for adult living.
              </p>

              <Link to="/hillcrest" className="btn btn-dark m-3 stretched-link" role="button">
                Learn more about Hillcrest
              </Link>
            </Col>

            <Col
              md={6}
              lg={4}
              className="p-5 d-flex flex-column justify-content-center bg-pink text-white text-center align-content-around clickable"
            >
              <h2 className="mb-3" style={{ lineHeight: "1em" }}>
                <strong>Highlands Maternity Home</strong>
              </h2>

              {scores && (
                <div>
                  <h5>
                   
                      <span style={{fontSize:"2rem"}}>
                        <strong>
                        {scores.page.scores.highlands} {" "}
                        </strong>
                        </span>
                      mothers and babies served in Highlands Maternity Home cottage and adoptions facilitated since January!
                    
                  </h5>
                </div>
              )}

              <p className="my-3">
                Bringing hope and healing to women facing unplanned pregnancies
                and services to families looking to expand through adoption.
              </p>

              <Link to="/highlands" className="btn btn-dark m-3 stretched-link" role="button">
                Learn more about Highlands
              </Link>
            </Col>


            <Col
              md={6}
              lg={4}
              className="p-5 d-flex flex-column justify-content-center align-content-around bg-orange text-white text-center clickable"
            >
              <h2 className="mb-3" style={{ lineHeight: "1em" }}>
                <strong>Foster Care</strong>
              </h2>

              {scores && (
                <div>
                  <h5>
                      <span style={{fontSize:"2rem"}}>
                    <strong>
                        {scores.page.scores.fostercare} {" "}
                    </strong>
                        </span>
                      kids served in Foster Care programs since January!
                  </h5>
                </div>
              )}

              <p className="my-3">
                {/* There are more than 400,000 U.S. children in foster care every day  */}
                {/* COMPACT wants to empower, network, and resource individuals
                and churches to provide compassion in action to America's foster
                care children and families.  */}
                COMP<strong>ACT</strong> is your partner for serving vulnerable children and
                families in the foster care system.
              </p>

              <Link to="/fostercare" className="btn btn-dark m-3 stretched-link" role="button">
                Learn more about Foster Care
              </Link>
            </Col>

            <Col
              md={6}
              lg={4}
              className="p-5 d-flex flex-column justify-content-center bg-purple text-white text-center align-content-around clickable"
            >
              <h2 className="mb-3" style={{ lineHeight: "1em" }}>
                <strong>SafeCare</strong>
              </h2>

              {scores && (
                <div>
                  <h5>
                      <span style={{fontSize:"2rem"}}>
                        <strong>
                        {scores.page.scores.safecare} {" "}
                        </strong>
                        </span>
                      children and parents served since January!
                  </h5>
                </div>
              )}

              <p className="my-3">
              SafeCare serves at risk children and their families to help prevent those children from entering the foster care system and experiencing separation from family.
              </p>

              {/* to sustain the biological family and prevent removal of the children from parental care and into foster care  */}

              <Link to="/safecare" className="btn btn-dark m-3 stretched-link" role="button">
                Learn more about SafeCare
              </Link>
            </Col>


            <Col
              md={6}
              lg={4}
              className="p-5 d-flex flex-column justify-content-center bg-red text-white text-center align-content-around clickable"
            >
              <h2 className="mb-3" style={{ lineHeight: "1em" }}>
                <strong>CompaCare</strong>
              </h2>

              {scores && (
                <div>
                  <h5>
                      <span style={{fontSize:"2rem"}}>
                        <strong>
                        {scores.page.scores.compacare} {" "}
                        </strong>
                        </span>
                      churches, families, and children served since January!
                  </h5>
                </div>
              )}

              <p className="my-3">
              CompaCare Helps churches minister to
                vulnerable children and families mobilizes, trains, certifies,
                and organizes caring Christian people in the church to redeem
                and empower people in need.
              </p>

              <Link to="/compacare" className="btn btn-dark m-3 stretched-link" role="button">
                Learn more about CompaCare
              </Link>
            </Col>

            <Col
              md={6}
              lg={4}
              className="p-5 d-flex flex-column justify-content-center bg-blue text-white text-center align-content-around"
            >
              <h2 className="mb-3" style={{ lineHeight: "1em" }}>
                <strong>COMPACT TOTAL</strong>
              </h2>


              <h4 style={{lineHeight:"2.5rem"}}>
                {scores && (
                  <>
                  <span style={{fontSize:"2rem"}}>
                   <strong>
                          {scores.page.scores.total.toLocaleString()} 
                   </strong>
                  </span>
                   {" "}Clients served
                    in{" "}
                </>
                )}
                <Link to="/hillcrest">Hillcrest</Link>,{" "}
                <Link to="/highlands">Highlands</Link>,{" "}
                <Link to="/fostercare">Foster Care</Link>,{" "}
                <Link to="/safecare">SafeCare</Link> and{" "}
                <Link to="/compacare">CompaCare</Link>
              
              </h4>
              
              <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: scores.page.content }}
              ></p>
              
<small>
  The COMP<strong>ACT</strong> Scoreboard is a measurement of
  its redeeming compassionate action for vulnerable children and
  families.
</small>
            </Col>
            
            
            </Row>
            </Container>
            
<Container className="text-center py-3">



<small>
<em>
Foster child placements made in Private License Placement Agency (PLPA) and Specialized Private Licensed Placement Agency (SPLPA) programs in Arkansas, number of foster parents trained in Arkansas, number of <strong>FIND</strong> kinship connections served in Arkansas and number of foster parents licensed <strong>(and their foster children)</strong> or trained in Missouri.
</em>
</small>
<br />

<small>
  <em>
  CompaCare churches (defined as at least one delegated leader trained in the CompaCare Compassion Care System through the CompaCare Church Leaders’ Training course), number of foster families served by CompaCare churches, number of foster children served by CompaCare churches, and number of children diverted (prevented) from entering the foster care system by a CompaCare church or CompaCare Representative.
  </em>
  </small>


</Container>


{/* <Container className="text-center mb-5">
<Row>
<Col md={6}>
<div className="p-5">
<CompactLogo color="#666" />
</div>
</Col>

<Col className="d-flex align-items-center">
<h2 className="font-weight-bold blue">
{scores && (
  <span>
  {" "}
  {scores.page.scores.total.toLocaleString()} Clients served
  in{" "}
  </span>
  )}
  <Link to="/hillcrest">Hillcrest</Link>,{" "}
  <Link to="/highlands">Highlands</Link>,{" "}
  <Link to="/fostercare">Foster Care</Link>,{" "}
  <Link to="/safecare">SafeCare</Link> and{" "}
  <Link to="/compacare">CompaCare</Link>
  </h2>
  </Col>
  </Row>
  
  {scores && (
    <div>
    <p
    className="text-center"
    dangerouslySetInnerHTML={{ __html: scores.page.content }}
    ></p>
    
    
    
    </div>
    )}
  </Container> */}
  </>
  );
};

  return (
    <>
      <ApolloProvider client={client}>
        <Scores />
      </ApolloProvider>

      {/* {scores && setTally(scores.reduce((acc,{score}) => acc + score, 0))} */}

      {/* {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <Container fluid className="bg-dark pb-2">
        <Row className="d-flex justify-content-center">
          {scores &&
            scores.map((score) => (
              <div
                className={`pt-3 text-white text-center card m-2 col-lg-2 col-md-3 
                ${score.area === "Hillcrest" && "bg-green"}
                ${score.area === "Highlands" && "bg-pink"}
                ${score.area === "Foster Care" && "bg-orange"}
                ${score.area === "SafeCare" && "bg-blue"}
                ${score.area === "CompaCare" && "bg-red"}
                
                `}
                // <div className={styleArray}
                key={score.id}
              >
                <h5> {score.area} </h5>
                <h1 className="display-4">
                  <strong>{score.score}</strong>
                </h1>
                <p className="lead" style={{ lineHeight: 0.95 }}>
                  {score.body}
                </p>

              </div>
            ))}
        </Row>
        <Container className="text-white bg-blue p-3 rounded text-center">
          {tally !== null && (
            <h5>
              <strong>{tally}</strong> clients served in Hillcrest, Highlands,
              Foster Care, SafeCare and CompaCare since January.
            </h5>
          )}
        </Container>
      </Container> */}
    </>
  );
};
export default Scoreboard;
