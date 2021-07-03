import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import CompactLogo from "../graphics/CompactLogo";


const ScoreboardMini = () => {

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
            className="p-5 d-flex justify-content-center"
          >

<h1>THIS IS NOT FINISHED</h1>

              <div className="text-center">

              <h1 
              className="display-4 mb-3" 
              style={{lineHeight: "1em"}}>
                <strong>

                Hillcrest Children's Home
                </strong>
                </h1>

              <h5 className="my-4">Hillcrest Children’s Home rests on a 52-acre campus with 8 cottages and a 24-apartment center for foster youth preparing for adult living.</h5>
             
              <h2>
              <strong>
                {scores.page.scores.hillcrest} kids served in residential
                programs since January!
              </strong>
              </h2>

              <Link to="hillcrest">
                <a className="btn btn-dark m-3"  role="button">
                  Learn more about Hillcrest
                </a>
              </Link>
       
            </div>

          </Container>


            {/* {scores.post.scores.highlandsScore} */}

            {/* <div className={styles.scoreCircle}>
                {scores.page.scores.hillcrest}
              </div> */}


                <small>
                The COMP<strong>ACT</strong> Scoreboard is a measurement of its
                redeeming compassionate action for vulnerable children and
                families
              </small>
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
export default ScoreboardMini;
