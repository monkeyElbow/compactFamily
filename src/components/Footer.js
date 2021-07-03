import { SocialLineup } from "./SocialLineup";
import { Container} from "react-bootstrap";
import AgLogo from "../graphics/AgLogo"
import CoaLogo from "../graphics/CoaLogo";
// import { Link } from "react-router-dom";
import { MenuOne, MenuTwo, MenuThree, MenuFour, MenuFive } from './MenuPanels'
import ContactAddress from "./ContactAddress";


const Footer = () => {
  return (
    <>

<Container fluid className="bg-dark p-0 mt-0">
      </Container>

      <Container fluid id="footer" className="bg-dark py-2">
<div className="d-flex justify-content-center">

        <SocialLineup />
</div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-3 col-sm-6 text-center py-4 d-flex flex-column">
          <MenuOne />

          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 text-center py-4 d-flex flex-column">
          <MenuTwo />

          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 text-center py-4 d-flex flex-column">
          <MenuThree />

          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 text-center py-4 d-flex flex-column">
          <MenuFour />

          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 text-center py-5 d-flex flex-column">
          <MenuFive />

          </div>

          <div className="w-100"></div>
          <ContactAddress />

        </div>

        <p className="small text-center py-4">
          &copy;{new Date().getFullYear()} COMP<strong>ACT</strong> Family
          Services
        </p>
        <p className="small text-center" style={{lineHeight:"1rem"}}>
          Assemblies of God Family Services Agency, Inc. d/b/a COMP<strong>ACT</strong> Family Services began as National Children’s Home in 1944. 
          <br />
          COMP<strong>ACT</strong> Family Services is a licensed child welfare agency and is nationally accredited through Council on
          Accreditation.
        </p>

      </Container>


      <Container className="small text-center py-3">


        <div style={{height:"50px"}} className="col-md-auto d-flex justify-content-around" align="center">

              <AgLogo />

                <CoaLogo />

        </div>
      </Container>
    </>
  );
};

export default Footer;
