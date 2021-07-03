const AboutPage = () => {
  const addNums = (num1 = 1, num2 = 2) => num1 + num2;
  // or {return(num1 + num2)}

  return (
    <>
      <div className="container mt-5 bg-light">
        <p className="h1">about</p>
      </div>

      <h3>Adding vanilla js in react? {addNums(10, 10)}</h3>

      <div className="container">
        <p>this is aboutPage.js</p>
      </div>
    </>
  );
};

export default AboutPage;
