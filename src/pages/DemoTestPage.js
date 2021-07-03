import { Container, Row, Col } from "react-bootstrap";

import { useState } from "react";

// https://ihatetomatoes.net/react-and-greensock-tutorial-for-beginners/

const Test = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new article title",
      body: "Lorem ipsum ...",
      author: "john",
      id: 1,
    },
    {
      title: "Maybe a different article",
      body: "Lorem ipsum ...",
      author: "john",
      id: 2,
    },
    {
      title: "How I am sane. Very sane.",
      body: "Lorem ipsum ...",
      author: "Brad Pitt",
      id: 3,
    },
  ]);

  return (
    <>
      <p>netninja </p>

      {blogs.map((blog) => (
        <div className="card w-50 p-2 m-3" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>by {blog.author}</p>
        </div>
      ))}

      <Container fluid className="bg-dark">
        <Row>
          <Col md={3} className="py-md-4">
            <animated.div className="p-5 text-center card bg-green">
              test
            </animated.div>
          </Col>
          <Col md={3} className="py-md-4">
            <div className="p-5 text-center card bg-yellow">test</div>
          </Col>
          <Col md={3} className="py-md-4">
            <div className="p-5 text-center card bg-orange">orange</div>
          </Col>
          <Col md={3} className="py-md-4">
            <div className="p-5 text-center card bg-red">test</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Test;

