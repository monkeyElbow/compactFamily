import { Row, Col, Container } from "react-bootstrap";
// import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import CompactLogo from "../graphics/CompactLogo";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const Scoreboard = () => {

  const client = new ApolloClient({
    uri: 'https://www.compact.family/wpapi/graphql/',
    cache: new InMemoryCache()
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
  
     return(
         <>
          <Container
            fluid
            className="p-5 d-flex justify-content-center bg-green text-white"
          >


              <div className="text-center">
              <h1 
              className="display-4 mb-3" 
              style={{lineHeight: "1em"}}>
                <strong>

                Hillcrest Children's Home
                </strong>
                </h1>

              <h5 className="my-4">Hillcrest Children’s Home rests on a 52-acre campus with 8 cottages and a 24-apartment center for foster youth preparing for adult living.</h5>
             
             {scores && (<div>
              <h2>
              <strong>
                <span>{scores.page.scores.hillcrest} </span> 
                 kids served in residential
                programs since January!
              </strong>
              </h2>

 </div>)}

              <Link to="hillcrest" className="btn btn-dark m-3"  role="button">
                  Learn more about Hillcrest
                
              </Link>
       
            </div>

          </Container>


            {/* {scores.post.scores.highlandsScore} */}

            {/* <div className={styles.scoreCircle}>
                {scores.page.scores.hillcrest}
              </div> */}




          <Container className="text-center mb-5">
           <Row>
<Col md={6}>
  <div className="p-5">

           <CompactLogo color="#666" />
  </div>
</Col>
<Col className="d-flex align-items-center">
           
            <h2 className="font-weight-bold blue">
              {scores && <span> {scores.page.scores.total.toLocaleString()} Clients served in{" "}</span>}
             
              <Link to="/hillcrest">Hillcrest</Link>,{" "}
              <Link to="/highlands">Highlands</Link>,{" "}
              <Link to="/fostercare">Foster Care</Link>,{" "}
              <Link to="/safecare">SafeCare</Link> and{" "}
              <Link to="/compacare">CompaCare</Link>
            </h2>
              </Col>
              </Row>

{scores && <div>
              <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: scores.page.content }}
              ></p>
            <div className="text-center">
              <small>
                The COMP<strong>ACT</strong> Scoreboard is a measurement of its
                redeeming compassionate action for vulnerable children and
                families
              </small>

            </div>
              </div>}

          </Container>
  
         </>
     )
  }


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
