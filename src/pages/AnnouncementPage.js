import { Container } from "react-bootstrap";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { node } from "prop-types";

import { useParams } from "react-router-dom";

const AnnouncementPage = (id) => {
  document.title = "COMPACT Announcements"

  const params = useParams();

  const client = new ApolloClient({
    uri: 'https://www.compact.family/wpapi/graphql/',
    cache: new InMemoryCache()
  });

  // const id = 22
  const QUERY_ANNOUNCEMENT = gql`
  query SinglePost {
    post(id: ${params.id}, idType: DATABASE_ID) {
      date
      title
      id
      content
    }
  }
  `;

  const ShowAnnouncement = () => {
    const { loading, error, data: announcement } = useQuery(QUERY_ANNOUNCEMENT);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
// console.log(announcement)
    return(
      <>
    {node.databaseId}

      <Container className="my-5">

      {announcement.post.date.toLocaleString('en-gb',
                 {
                   year:'numeric',
                   month: 'long',
                   day:'numeric',
                  
                 }
                 ).split('T')[0]}




<h4>{announcement.post.title}</h4>
     
      <div dangerouslySetInnerHTML={{__html:announcement.post.content}}></div>


      </Container>
      
      </>
    )
  }



  return (
    <>

    <ApolloProvider client={client}>

<ShowAnnouncement />
    </ApolloProvider>

  
        </>
  );
};

export default AnnouncementPage;
