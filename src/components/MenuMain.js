import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { SocialLineup } from "./SocialLineup";

const MenuMain = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        id="reverse"
        bg="dark"
        variant="dark"
        expand="lg"
        className="px-2"
      >
        <Navbar.Brand style={{ letterSpacing: "-.05rem" }} as={Link} to="/">
          COMP
          <strong style={{ position: "relative", left: "-.15rem" }}>
            <em>ACT</em>
          </strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activekey="/home" className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/welcome">
                Welcome
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mission">
                COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                Mission
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leadership">
                Leadership
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/campus">
                The Campus
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/history-and-future">
                COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                History and Future
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ministries" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/hillcrest">
                Hillcrest Children's Home
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/highlands">
                Highlands Adoption
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fostercare">
                Foster Care
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/compacare">
                CompaCare
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/find">
                FIND Kinship navigator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/safecare">
                SAFECARE
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Get Involved" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/pray">
                Pray
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/give">
                Give
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/serve">
                Serve
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://agfostercare.network"
                rel="noopener noreferrer"
                target="_blank"
              >
                AG Foster Care Network
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="basic-nav-dropdown">
              {/* <NavDropdown.Item as={Link} to="articles">
              Resource Articles
            </NavDropdown.Item> */}
            
              {/* <NavDropdown.Item as={Link} to="/announcements">
                Announcements
              </NavDropdown.Item> */}

              <NavDropdown.Item as={Link} to="/newsletter">
                Newsletter
              </NavDropdown.Item>
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

            <Nav.Link as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SocialLineup className="pt-1" />

        {/* <Nav.Link as={Link} to="/dashboard">
     <FaHome />
     </Nav.Link>  */}
      </Navbar>
    </>
  );
};

// hilite active read:
// https://reactrouter.com/web/api/withRouter
//  https://stackoverflow.com/questions/54610510/how-to-set-active-link-in-navbar-using-nav-link-and-react-router
// https://codesandbox.io/s/718p1ovkm1?file=/src/index.js:357-392

export default MenuMain;
