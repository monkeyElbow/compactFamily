import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { SocialLineup } from "./SocialLineup";
// import { MenuOne, MenuTwo, MenuThree, MenuFour, MenuFive } from './MenuPanels'

const MenuMain = () => {
  return (

    <>
    {/* <Navbar className='menu bg-dark text-light p-2 d-flex align-content-center justify-content-between'>
    <Link to="/">
               <a>COMP<strong>ACT</strong></a>
    </Link>
             
    <SocialLineup />
            </Navbar>

            <div className="bg-light p-4">
              <div className="row text-center d-flex justify-content-center">
                <div className="col-lg-2 col-md-4 p-2 d-flex flex-column">
<MenuOne />
                </div>
                <div className="col-lg-2 col-md-4 p-2 d-flex flex-column">
<MenuTwo />
                </div>
                <div className="col-lg-2 col-md-4 p-2 d-flex flex-column">
<MenuThree />
                </div>
                <div className="col-lg-2 col-md-4 p-2 d-flex flex-column">
<MenuFour />
                </div>
                <div className="col-lg-2 col-md-4 p-2 d-flex flex-column">
<MenuFive />
                </div>


              </div>
            </div> */}

    <Navbar id="reverse" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        COMP<strong>ACT</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activekey="/home" className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="welcome">
              Welcome
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="mission">
              COMP<strong>ACT</strong> Mission
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="leadership">
              Leadership
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="campus">
              The Campus
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="history-and-future">
              COMP<strong>ACT</strong> History and Future
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Ministries" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="hillcrest">
              Hillcrest Children's Home
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="highlands">
              Highlands Adoption and Maternity
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="fostercare">
              Foster Care
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="compacare">
              CompaCare
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="find">
              FIND Kinship navigator
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="safecare">
              SAFECARE
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Get Involved" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="pray">
              Pray
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="give">
              Give
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="serve">
              Serve
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Resources" id="basic-nav-dropdown">

            {/* <NavDropdown.Item as={Link} to="articles">
              Resource Articles
            </NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/announcements">
              Announcements
            </NavDropdown.Item>
            {/* <NavDropdown.Item as={Link} to="/newsletter">
              Newsletter
            </NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/products">
              Products
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/partners">
              Partners
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/employment">
              Employment
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="contact-us">
            Contact Us
          </Nav.Link>

          <SocialLineup className="pt-1" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

// hilite active read:
// https://reactrouter.com/web/api/withRouter
//  https://stackoverflow.com/questions/54610510/how-to-set-active-link-in-navbar-using-nav-link-and-react-router
// https://codesandbox.io/s/718p1ovkm1?file=/src/index.js:357-392



export default MenuMain;
