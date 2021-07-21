import { Container } from "react-bootstrap";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Moment from "react-moment";
import { node } from "prop-types";



const AnnouncementPage = ({match: { params: { id } } }) => {
  document.title = "COMPACT Announcements"


  const client = new ApolloClient({
    uri: 'https://www.compact.family/wpapi/graphql/',
    cache: new InMemoryCache()
  });

  // const id = 22
  const QUERY_ANNOUNCEMENT = gql`
  query SinglePost {
    post(id: ${id}, idType: DATABASE_ID) {
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

<Moment format="MM/DD/YYYY">
<p>{announcement.post.date}</p>
</Moment>

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
