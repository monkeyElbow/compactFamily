import { Container } from "react-bootstrap";
// import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
// import useFetch from "../components/useFetch";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const SpecialProjects = () => {


  const client = new ApolloClient({
    uri: 'https://www.compact.family/wpapi/graphql/',
    cache: new InMemoryCache()
  });
  
  const GET_PROJECTS = gql`
  query Projects {
    page(id: "special-projects", idType: URI) {
      databaseId
      title
      content
 
    }
       }
   `;

  const Projects = () => {
  document.title = "COMPACT Special Projects"

    const { loading, error, data: projects } = useQuery(GET_PROJECTS);
  
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
  
     return(
         <>
            <div
              className="text-center"
              dangerouslySetInnerHTML={{ __html: projects.page.content }}
            ></div>

  
         </>
     )
  }



  // pulling from json
  // const {
  //   data: projects,
  //   isLoading,
  //   error,
  // } = useFetch("http://localhost:8001/projects");

  return (
    <>
      <Container className="text-center py-3">
        <h1 className="display-4 blue">Special Projects</h1>

        <p>
          When you give to a project, you are giving to a specific need. It may
          be a project on our campus such as a new roof or renovating a cottage
          or it could be an emergent need such as diapers for our babies or new
          furniture for a cottage.
        </p>

        <a
          className="btn btn-primary"
          href="https://giving.ag.org/Give/Details/890063-999289?MinistryName=compact&Page=2"
          target="_new"
        >
          Click here to donate to COMP<strong>ACT</strong> Special Projects
        </a>
      </Container>
      <Container>
        <p className="lead mt-5">
          Here is a list of our current campus projects. Please consider
          providing funds or bringing a team to help us accomplish one or more
          of these projects:
        </p>
        <Container className="col-lg-10 col-md-12 my-4">


<ApolloProvider client={client}>
  <Projects />
</ApolloProvider>

{/*         
          {isLoading && <div>Loading...</div>}

          {projects &&
            projects.map((project) => (
              <div key={projects.id}>
                {project.completed && (
                  <div className="card px-4 py-3 my-2 bg-light">
                    <h5>
                      <FaClipboardCheck /> <s>{project.project}</s>
                    </h5>
                  </div>
                )}
                {!project.completed && (
                  <div className="card px-4 py-3 my-2">
                    <h5>
                      <FaClipboard /> {project.project}
                    </h5>
                  </div>
                )}
              </div>
            ))} */}
        </Container>
      </Container>
    </>
  );
};

export default SpecialProjects;
