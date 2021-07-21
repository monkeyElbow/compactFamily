// import useFetch from "../components/useFetch";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";

const ArticlePage = () => {
  document.title = "COMPACT"

  // const { id, title, body } = useParams();
  // const {
  //   data: training,
  //   isLoading,
  //   error,
  // } = useFetch("http://localhost:8001/training/" + id);

  return (
    <>
      {/* {training && <div>is present!!!!</div>}
      {!training && <div>training not loading</div>} */}

      <div className="container bg-light my-5">
        {/* <h1>{training.title}</h1> */}
      </div>
      {/* <h5>{training.date}</h5>
      <p>By {training.author}</p>
      <p>{training.body}</p> */}

      {/* <h3>other articles:</h3> */}
      {/* <ArticlesList articles={otherArticles} /> */}
    </>
  );
};

export default ArticlePage;
