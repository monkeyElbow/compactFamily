import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import "pure-react-carousel/dist/react-carousel.es.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


//  https://www.npmjs.com/package/pure-react-carousel#examples

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


    
    const HomeCarousel = () => {

      const Scores = () => {
        const { loading, error, data: scores } = useQuery(GET_SCORES);
        
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        
        
        return(
          
          <>
          {scores.page.scores.hillcrest}
            
                   {scores.page.scores.hillcrest} kids served in residential
                   {scores.page.scores.compacare} compacare               
                   {scores.page.scores.fostercare} fostercare               
                   {scores.page.scores.highlands} highlands               
                   {scores.page.scores.safecare} safecare               
                 {scores.page.scores.total} total               
   
             </>
        )
       }

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={5}
        interval={4000}
        isPlaying={false}
        touchEnabled={true}
      >
        <Slider>
          <Slide index={0}>
            <Container
              fluid
              className="bg-green h-100 text-center text-white d-flex align-items-center justify-content-center"
            >
              <div>
                <h1>Hillcrest Children's Home</h1>
                <h5>
                  Care for vulnerable children and youth hillcrest since 1944
                  safe home for maltreated and orphaned children
                </h5>



                <ApolloProvider client={client}>
<Scores />
</ApolloProvider>
                {/* {scores.page.scores.hillcrest} */}
                
              </div>
            </Container>
          </Slide>



          <Slide index={1}>
            <Container fluid className="bg-pink h-100">
              Highlands 
              {/* {scores.page.scores.highlands}  */}
              <p>
                bringing hope and healing to women facing unplanned pregnancies
                and services to families looking to expand through adoption
              </p>
            </Container>
          </Slide>

          <Slide index={2}>
            <Container fluid className="bg-orange h-100">
              FosterCare
              <p>
                There are more than 400,000 U.S. children in foster care every
                day COMPACT wants to empower, network, and resource individuals
                and churches to provide compassion in action to America's foster
                care children and families. COMPACT is your partner in mission
                for serving vulnerable children and families in the foster care
                system.
              </p>
            </Container>
          </Slide>

          <Slide index={3}>
            <Container fluid className="bg-blue h-100">
              SafeCare
              <p>
                The educational intervention program serves at risk children and
                their families to help prevent those children from entering the
                foster care system and experiencing separation from family.
              </p>
            </Container>
          </Slide>

          <Slide index={5}>
            <Container fluid className="bg-red h-100">
              CompaCare
              <p>
                COMPASSION CARE SYSTEM by COMPACT Helping churches minister to
                vulnerable children and families mobilizes, trains, certifies,
                and organizes caring Christian people in the church to redeem
                and empower people in need. American foster care system is in
                crisis
              </p>
            </Container>
          </Slide>
        </Slider>

        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>

      
    </>
  );
};

export default HomeCarousel;
