import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Moment from 'react-moment';

const HomeAnnouncements = () => {


  const client = new ApolloClient({
    uri: 'https://www.compact.family/wpapi/graphql/',
    cache: new InMemoryCache()
  });

  const QUERY_ANNOUNCEMENTS = gql`
  query AllAnnouncements {
    posts(first:4, where: {orderby: {field: DATE, order: DESC}, categoryName: "announcements"}) {
      edges {
        node {
          featuredImage {
            node {
              srcSet
              sourceUrl(size: THUMBNAIL)
            }
          }
          slug
          title
          databaseId
          date
          id
        }
      }
    }
  }
  
  `;

const AnnouncementList = () => {
  const { loading, error, data: announcements } = useQuery(QUERY_ANNOUNCEMENTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  
  return(
    <>
     {announcements.posts.edges.map(({ node }) => (
          <div className="p-1 my-4" key={node.databaseId}>
            <Link to={`/announcements/${node.databaseId}`}>
             {/* <p>id: {node.id}</p>
             <p>databaseId:{node.databaseId}</p> */}
                  
           <Moment format="MM/DD/YYYY">
              <p>{node.date}</p>
           </Moment>
              <h5>{node.title}</h5>
            {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div> */}
              </Link>
          
          </div>
        ))}
    </>
  )
}


  return (
    <>
      <Container>
        <ApolloProvider client={client}>
<AnnouncementList />
        </ApolloProvider>
      </Container>

    </>
  );
};

export default HomeAnnouncements;
