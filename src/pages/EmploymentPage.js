import { Container } from "react-bootstrap";
import JobApplyButton from "../components/JobApplyButton";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const EmploymentPage = () => {


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
          <div className="card p-4 my-4" key={node.databaseId}>
            {/* <Link to={`/post/${node.slug}`}>{node.title}</Link> */}
            <h4>{node.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: node.content }}></div>
            {/* {`/post/${node.slug}`} */}

            <JobApplyButton />
          </div>
        ))}
              
        </>
        )
      };


  return (
    <>
      <Container fluid className="bg-blue text-white text-center py-2">
        <Container>
          <p className="h2">Employment and Internship Opportunities</p>
          <p className="lead text-left">
            Join our outstanding team of child care professionals in a licensed,
            progressive program built upon biblical values with natural and
            logical consequences. If you are a married couple or qualified
            single, live according to high moral standards, love children/youth
            and can lead by example, this may be the ministry for you. Must be
            willing to relocate to Hot Springs, Arkansas.
          </p>

         
        </Container>

 </Container>

 <Container>

  <ApolloProvider client={client}>
  <Jobs />
</ApolloProvider>   

 </Container>
     

      <Container>
        
        <p>Contact HR@Compact.family for further information</p>

        <p>
          <em>
            We are an equal opportunity employer, dedicated to a policy of
            nondiscrimination in employment on the basis of age, sex, color,
            race, national origin, or disability, as required by law.
          </em>
        </p>
      </Container>
    </>
  );
};

export default EmploymentPage;
