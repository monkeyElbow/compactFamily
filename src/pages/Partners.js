import { Container } from "react-bootstrap";

const Partners = () => {
  return (
    <>
      <Container fluid className="text-center my-0 bg-light py-3">
        <h2 align="center">Partners</h2>

       
        <div className="card-group">
          <div className="card whiteborder">
            {" "}
            <a href="https://ag.org/" target="new">
              {/* <img className="card-img-top" src="images-partners/ag.png" alt="Card image cap" style="width:150px"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="https://ag.org/" target="new"
                rel="noopener noreferrer">
                  Assemblies of God
                </a>
              </h4>
            </div>
          </div>

          <div className="card whiteborder">
            {" "}
            <a href="https://www.convoyofhope.org/" target="new"
            rel="noopener noreferrer">
              {/* <img className="card-img-top" src="images-partners/coh.jpeg" alt="Card image cap" style="width:170px"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="https://www.convoyofhope.org/" target="new"
                rel="noopener noreferrer">
                  Convoy of Hope
                </a>
              </h4>
            </div>
          </div>

          <div className="card whiteborder">
            <a href="https://bgmc.ag.org/" target="new"
            rel="noopener noreferrer">
              {/* <img className="card-img-top" src="images-partners/bgmc.jpeg" alt="Card image cap" style="width:150px"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="https://bgmc.ag.org/" target="new">
                  BGMC
                </a>
              </h4>
            </div>
          </div>

          <div className="card whiteborder">
            <a
              href="https://youth.ag.org/Participate/Speed-the-Light"
              target="new"
              rel="noopener noreferrer"
            >
              {/* <img className="card-img-top" src="images-partners/stl.png" alt="Card image cap" style="width:150px"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a
                  href="https://youth.ag.org/Participate/Speed-the-Light"
                  target="new"
                  rel="noopener noreferrer"
                >
                  Speed the Light
                </a>
              </h4>
            </div>
          </div>

          <div className="w-100"></div>

          <div className="card whiteborder">
            <a href="http://lftl.ag.org/" target="new">
              {/* <img className="card-img-top" src="images-partners/lotl.png" alt="Card image cap" style="width:200px"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="http://lftl.ag.org/" target="new" rel="noopener noreferrer">
                  Light for the Lost
                </a>
              </h4>
            </div>
          </div>

          <div className="card whiteborder">
            <a href="http://usmaps.ag.org/About/RVers" target="new">
              {/* <img className="card-img-top" src="images-partners/usmaps.jpg" alt="Card image cap" style="width:200px"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="http://usmaps.ag.org/About/RVers" target="new" rel="noopener noreferrer">
                  US Maps/RV Maps
                </a>
              </h4>
            </div>
          </div>

          <div className="card whiteborder">
            <a href="https://accakids.org/" target="new">
              {/* <img className="card-img-top" src="images-partners/acca.png" alt="Card image cap" style="width:200px"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="https://accakids.org/" target="new" rel="noopener noreferrer">
                  ACCA
                </a>
              </h4>
            </div>
          </div>

          <div className="card whiteborder">
            <a href="https://ngm.ag.org/" target="new">
              {/* <img className="card-img-top w-75" src="images-partners/CFK-Logo.png" alt="Card image cap"> */}
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="https://ngm.ag.org/" target="new" rel="noopener noreferrer">
                  Coins For Kids
                </a>
              </h4>
            </div>
          </div>
        </div>
      </Container>

      <Container fluid className="my-5 py-4 mb-0 text-center">
        <h2>CompaCare Representatives</h2>

        <h3 align="center">Colorado</h3>

        <p align="center">Bob and Shirleen Cillo</p>
        <h3 align="center">Florida</h3>
        <p align="center">
          <a href="http://hoguecrew.org" target="_blank"
          rel="noopener noreferrer">
            Steve and Sandra Hogue
          </a>
        </p>
        <p align="center">
          <a href="http://fosterhope.today" target="_blank"
          rel="noopener noreferrer">
            Ted and Angie Stackpole
          </a>
        </p>
        <h3 align="center">Minnesota</h3>
        <p align="center">Pamela Breit</p>
        <h3 align="center">Mississippi</h3>
        <p align="center">
          <a href="https://instantlargefamily.com" target="_blank"
          rel="noopener noreferrer">
            Lee and Gretchen Watson
          </a>
        </p>
        <h3 align="center">Ohio</h3>
        <p align="center">Paris Yanno</p>
        <h3 align="center">Wisconsin</h3>
        <p align="center">Bob Griffiths</p>
      </Container>
    </>
  );
};

export default Partners;
