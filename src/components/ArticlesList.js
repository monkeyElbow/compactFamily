import { Link } from "react-router-dom";
// import useFetch from "../components/useFetch";

const ArticlesList = ({ articles }) => {
  // const {
  //   data: training,
  //   isLoading,
  //   error,
  // } = useFetch("http://localhost:8001/training");
  return (
    <>
      {/* {error && <div>error</div>}
      {isLoading && <div>Loading...</div>}

      {training && (
        <>
          <h4>Training</h4>

          {training.map((trainingArticle) => (
            <div key={trainingArticle.id}>
              <Link to={`/training/${trainingArticle.id}`}>
                <h4>{trainingArticle.title}</h4>
              </Link>
              {trainingArticle.date}
            </div>
          ))}
        </>
      )} */}

      {articles.map((article, key) => (
        <Link key={key} to={`/article/${article.name}`}>
          <h5>{article.title}</h5>
          <h3 className="bg-warning">old tutorial content. non json server</h3>
          <p>{article.content[0].substring(0, 150)}</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;
