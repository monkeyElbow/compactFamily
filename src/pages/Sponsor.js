import { Container, Image } from "react-bootstrap";

const Sponsor = () => {
  document.title = "COMPACT Sponsor";

  return (
    <>
      <div className="jumbotron-fluid photoblue">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="display-5 text-center">Sponsorship</h1>

                <p className="lead text-left">
                  One of the best ways to ensure that every child is receiving
                  continual care is by becoming a monthly sponsor. Your gifts
                  are used to meet the physical, emotional and spiritual needs
                  of the children on campus.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-7">
              <Image
                fluid
                alt="Child respresentative"
                src="https://compact.family/images/0551.jpg"
                width="600"
                height="613"
                layout="intrinsic"
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-0 bg-white py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5 d-flex align-items-center">
              <div>
                <p className="h2 blue">
                  <strong>Cottage Sponsorship</strong>
                </p>
                <p className="h4">
                  Help redeem a group of 6-8 vulnerable boys or girls in one of
                  nine Hillcrest Children’s Home cottages.
                </p>
                <p className="lead">
                  <strong>OR,</strong>
                  <br /> help redeem pregnant teen girls and their babies at
                  Highlands Maternity Home. Any monthly amount is valuable!
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-7">
              <p>
                <Image
                  fluid
                  className="rounded"
                  alt="Anderson building"
                  src="https://compact.family/images/Anderson600.jpg"
                  width="600"
                  height="400"
                  // layout="intrinsic"
                />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container fluid className="my-5 text-white p-5 bg-blue rounded-0">
        <p className="h4" style={{ lineHeight: 1.75 }}>
          Many sponsors give <strong>$30</strong> (a dollar a day),{" "}
          <strong>$50</strong>, <strong>$100</strong> or some other monthly
          amount that helps provide daily essentials and redeeming ministry for
          COMP
          <span className="act">ACT</span> children and youth until a permanent
          family solution is complete.
        </p>
        <p>
          Your contributions help provide daily essentials and redeeming
          ministry such as: bedding, clothing, meals, Christian education,
          activities and hobbies, weekly allowance, 24/7 Christian care and
          therapy and so much more.
        </p>
      </Container>

      <div className="jumbotron-fluid mt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Garrison cottage"
                  src="https://compact.family/images/garrison300.jpg"
                />
                <div className="card-body">
                  <p className="card-text">Garrison Cottage</p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999402?MinistryName=garrison&Page=1"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>{" "}
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Gilliam cottage"
                  src="https://compact.family/images/Gilliam300.jpg"
                />

                <div className="card-body">
                  <p className="card-text">Gilliam Cottage</p>
                  <p>Developmental Disability</p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999406?MinistryName=gilliam&Page=0"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>{" "}
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  alt="Hardcastle cottage"
                  src="https://compact.family/images/hardcastle300.jpg"
                />

                <div className="card-body">
                  <p className="card-text">Hardcastle Cottage</p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999412?MinistryName=9994120&Page=0"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Anthony cottage"
                  src="https://compact.family/images/anthony300.jpg"
                />

                <div className="card-body">
                  <p className="card-text">Anthony Cottage</p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999407?MinistryName=anthony&Page=1"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Netwzel cottage"
                  src="https://compact.family/images/netzel300.jpg"
                />

                <div className="card-body">
                  <p className="card-text">Netzel Cottage</p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999408?MinistryName=Netzel&Page=0"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Newby cottage"
                  src="https://compact.family/images/Newby300.jpg"
                />

                <div className="card-body">
                  <p className="card-text">Newby Cottage</p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999411?MinistryName=newby&Page=1"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Anderson building"
                  src="https://compact.family/images/Anderson300.jpg"
                />

                <div className="card-body">
                  <p className="card-text">Anderson Cottage I & II</p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999404?MinistryName=anderson&Page=2"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Transitional Living Center Apartments"
                  src="https://compact.family/images/tlc300.jpg"
                />

                <div className="card-body">
                  <p className="card-text">
                    Transitional Living Center apartments
                  </p>
                  <a
                    className="btn btn-primary mt-auto stretched-link"
                    href="https://giving.ag.org/Give/Details/886003-999410?MinistryName=tlc&Page=0"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 py-2">
              <div className="card text-center h-100">
                <Image
                  fluid
                  alt="Wilmouth cottage"
                  src="https://compact.family/images/wilmoth300.jpg"
                />
                <div className="card-body">
                  <p className="card-text">
                    Highlands Maternity Home in Wilmoth Cottage for pregnant
                    teen girls and their babies.
                  </p>
                  <a
                    className="btn btn-primary mt-auto stretched-link text-center"
                    href="https://giving.ag.org/Give/Details/886003-999409?MinistryName=highlands&Page=1"
                    target="new"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h4 className="bg-warning">fix form</h4> */}

      {/* <div className="d-flex justify-content-center">		
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8WfpWKN_IjTaavH-KM-zK3VNT35PqshkbIi0VsQAhPdEOSw/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
				
				</div>	
		</div></div> */}

      <Container className="my-5 blue">
        <h5 className="d-flex justify-content-center">
          Jesus said, “Truly, I say to you, as you did it to one of the least of
          these my brothers, you did it to me.”
        </h5>
        <h5 className="d-flex justify-content-center small">
          {" "}
          Matthew 25:40, (ESV)
        </h5>
      </Container>
    </>
  );
};

export default Sponsor;
