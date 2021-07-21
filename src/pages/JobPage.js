// import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import Moment from 'react-moment';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import JobApplyButton from "../components/JobApplyButton";
import JobHomeButton from "../components/JobHomeButton";

const JobPage = (props) => {
  document.title = "COMPACT Employment"


  const client = new ApolloClient({
    uri: 'https://www.compact.family/wpapi/graphql/',
    cache: new InMemoryCache()
  });
  
  const QUERY_JOB = gql`
  query SinglePost {
    post(id: 69, idType: DATABASE_ID) {
      date
      title
      id
      content
      databaseId
    }
  }
  `;

  const ShowJob = () => {
    
    const { loading, error, data: job } = useQuery(QUERY_JOB);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
console.log(job)
    return(
      <>
      <Container className="my-5">
<p>
<Moment format="MM/DD/YYYY">

      {job.post.date}
      </Moment>

</p>
<h4>

      {job.post.title}
</h4>
      <div dangerouslySetInnerHTML={{__html:job.post.content}}></div>

      <JobApplyButton />
      <JobHomeButton />
      </Container>
      
      </>
    )
  }


  return (
    <>
    <ApolloProvider client={client}>

<ShowJob />
    </ApolloProvider>
  </>
  );
};

export default JobPage;
