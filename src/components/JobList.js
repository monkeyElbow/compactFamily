// import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const JobList = () => {




  const client = new ApolloClient({
    uri: 'https://www.compact.family/wpapi/graphql/',
    cache: new InMemoryCache()
  });

  const QUERY_JOBS = gql`
  query AllJobs {
      posts(where: {orderby: {field: DATE, order: DESC}, categoryName: "jobs"}) {
        edges {
          node {
            slug
            title
            excerpt
            content
            databaseId
          }
        }
      }
    }
    
  `;

  const Jobs = () => {
    const { loading, error, data: jobs } = useQuery(QUERY_JOBS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
// console.log(jobs)
    return(
      <>

      {jobs.posts.edges.map(({ node }) => (
          <div className="" key={node.databaseId}>
<Link to={`/employment/${node.databaseId}`}>
            <p>{node.title}</p>
</Link>

          </div>
        ))}
              
        </>
        )
      };


  return (
    <>


  <ApolloProvider client={client}>
  <Jobs />
</ApolloProvider>   

     

    </>
  );
};

export default JobList;
