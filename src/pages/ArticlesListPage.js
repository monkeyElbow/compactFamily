// import { Container } from 'react-bootstrap';
// import ArticlesList from '../components/ArticlesList'
// import articleContent from './article-content';
import ArticleTrainingList from '../components/ArticleTrainingList'

const ArticleListPage = () => (
    <>



    <div className='container py-3 my-5'>
    <h1>Resource Articles</h1></div>

    <div className='container mt-3 my-5'>

<ArticleTrainingList />


{/* tutorial content below */}
 {/* <ArticlesList articles={articleContent} /> */}
 
   </div>

{/* <p> article on firebase setup: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial</p> */}


    </>
);

export default ArticleListPage;