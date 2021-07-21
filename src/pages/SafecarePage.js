import { Container, Image } from "react-bootstrap";

const SafecarePage = () => {
  document.title = "COMPACT SafeCare"

  return (
    <>
      <Container fluid className="text-center mb-0 photoblue py-0 purple">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
              <p className="h2 display-4">SAFECARE</p>
            </div>
            <div className="col-md-12 col-lg-5">
              <Image fluid
                src="https://compact.family/images/0638.jpg"
                alt="Child reprentative"
                width="500"
                height="503"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container fluid className="bg-purple my-0 p-4">
        <div className="container">
          <p className="h5 text-white">
            In 2019, COMP<strong>ACT</strong> began a partnership with Arkansas
            Children’s Hospital to provide SafeCare for a number of southern
            Arkansas counties. The educational intervention program serves at
            risk children and their families to help prevent those children from
            entering the foster care system and experiencing separation from
            family.
          </p>
        </div>
      </Container>

      <Container fluid className="text-center photoblue my-0 py-0">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <Image fluid
              src="https://compact.family/images/1664.jpg"
              alt="Child representative"
              layout="intrinsic"
              width="608"
              height="600"
            />
          </div>

          <div className="col-md-12 col-lg-7 text-center d-flex align-items-center">
            <div>
              <p className="lead">
                SafeCare is more than just a professional service offering of
                COMP<strong>ACT</strong>. Because of our deployment of CompaCare
                in the state, we are able to bring competent care and support to
                those families in partnership with CompaCare churches. That is
                strategic redemptive mission.
              </p>
              <p>
                SafeCare is COMP<strong>ACT</strong>’S latest offering in the
                growing continuum of services to enable a broader export of
                competencies that equips the church and advances its vision to
                redeem vulnerable children and families across the nation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SafecarePage;
