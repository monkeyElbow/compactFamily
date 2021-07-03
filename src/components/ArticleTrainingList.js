import { Link } from "react-router-dom";
import useFetch from "../components/useFetch";

const ArticleTrainingList = () => {
  const {
    data: training,
    isLoading,
    error,
  } = useFetch("http://localhost:8001/training");
  return (
    <>
      {error && <div>error</div>}
      {isLoading && <div>Loading...</div>}

      {training && (
        <>
          <h3>Training</h3>

          {training.map((trainingArticle, key) => (
            <div key={key}>
              <Link to={`/training/${trainingArticle.id}`}>
                <h4>{trainingArticle.title}</h4>
              </Link>
              {trainingArticle.date}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ArticleTrainingList;
