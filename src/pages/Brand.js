import { Container, Row, Col, Card } from "react-bootstrap";
import BrandPalette from "../components/BrandPalette";
import CompactLogo from "../graphics/CompactLogo";
import HillcrestLogo from "../graphics/HillcrestLogo";
import HighlandsLogo from "../graphics/HighlandsLogo";
import FosterCareLogo from "../graphics/FosterCareLogo";
import CompaCareLogo from "../graphics/CompaCareLogo";
import FindLogo from "../graphics/FindLogo";
import SafeCareLogo from "../graphics/SafeCareLogo";
import CompassionActionLogo from "../graphics/CompassionActionLogo";

const Brand = () => {
  document.title = "COMPACT Brand";

  return (
    <>
      <Container fluid className="bg-blue text-white py-3">
        <h2>
          COMP
          <span className="act">ACT</span> Brand Resources
        </h2>
      </Container>

      <Container className="my-5">
        <Row>
          <Col lg={6} md={12} className="d-flex align-items-center">
            <div>
              <h3>
                COMP
                <span className="act">ACT</span> Logos
              </h3>

              <h4>
                Please respect the whitespace around our logos and find download
                able art below.
              </h4>
              <p className="lead">
                Use 50% of the height of the logo to measure how much white
                space around the logo.
              </p>
            </div>
          </Col>
          <Col className="col-lg-6 col-md-12 bg-dark p-5">
            {/* <brandLogoWhiteSpace /> */}
            <CompactLogo />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row
          className="
        row-cols-1 
        row-cols-lg-4 
        row-cols-md-3 
        "
        >
          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <CompassionActionLogo color="#000" secondary="var(--blue)" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  Compassion LOGO RGB COLOR for screen use
                </Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_Color_RGB.png"
                  download="download/logos/COMPACT_COMPASSION_LOGO_Color_RGB.png"
                >
                  PNG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_Color_RGB.svgg"
                  download="download/logos/COMPACT_COMPASSION_LOGO_Color_RGB.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_Color_RGB.ai"
                  download="download/logos/COMPACT_COMPASSION_LOGO_Color_RGB.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <CompassionActionLogo color="#000" secondary="var(--blue)" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  Compassion LOGO CMYK COLOR for print use
                </Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_Color_CMYK.png"
                  download="download/logos/COMPACT_COMPASSION_LOGO_Color_CMYK.png"
                >
                  PNG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_Color_CMYK.svg"
                  download="download/logos/COMPACT_COMPASSION_LOGO_Color_CMYK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_Color_CMYK.ai"
                  download="download/logos/COMPACT_COMPASSION_LOGO_Color_CMYK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <CompassionActionLogo color="#000" secondary="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  Compassion LOGO <br /> 1 COLOR
                </Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_1C.png"
                  download="download/logos/COMPACT_COMPASSION_LOGO_1C.png"
                >
                  PNG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_1C.svg"
                  download="download/logos/COMPACT_COMPASSION_LOGO_1C.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_COMPASSION_LOGO_1C.ai"
                  download="download/logos/COMPACT_COMPASSION_LOGO_1C.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <CompactLogo color="#777" secondary="var(--blue)" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  LOGO RGB COLOR for screen use
                </Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoColorRGB.png"
                  download="download/logos/compactLogoColorRGB.png"
                >
                  PNG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoColorRGB.svg"
                  download="download/logos/compactLogoColorRGB.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoColorRGB.ai"
                  download="download/logos/compactLogoColorRGB.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="card card-body m-0 p-3">
              <Card.Body>
                <CompactLogo color="#777" secondary="var(--blue)" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  LOGO CMYK COLOR
                </Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoColorCMYK.png"
                  download="download/logos/compactLogoColorCMYK.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoColorCMYK.svg"
                  download="download/logos/compactLogoColorCMYK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoColorCMYK.eps"
                  download="download/logos/compactLogoColorCMYK.eps"
                >
                  EPS Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoColorCMYK.ai"
                  download="download/logos/compactLogoColorCMYK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <CompactLogo color="#000" secondary="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  LOGO 1C
                </Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoK.png"
                  download="download/logos/compactLogoK.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoK.svg"
                  download="download/logos/compactLogoK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoK.eps"
                  download="download/logos/compactLogoK.eps"
                >
                  EPS Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoK.ai"
                  download="download/logos/compactLogoK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3 text-white bg-dark">
              <Card.Body>
                <CompactLogo color="#fff" secondary="#fff" />
              </Card.Body>
              <Card.Body>
                <Card.Title>
                  COMP
                  <strong>
                    <em>ACT</em>
                  </strong>{" "}
                  LOGO REVERSED
                </Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoReversed.png"
                  download="download/logos/compactLogoReversed.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoReversed.svg"
                  download="download/logos/compactLogoReversed.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoReversed.eps"
                  download="download/logos/compactLogoReversed.eps"
                >
                  EPS Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactLogoReversed.ai"
                  download="download/logos/compactLogoReversed.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <HillcrestLogo color="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>HILLCREST LOGO 1C</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactHillcrestLogoK.png"
                  download="download/logos/compactHillcrestLogoK.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHillcrestLogoK.svg"
                  download="download/logos/compactHillcrestLogoK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHillcrestLogoK.ai"
                  download="download/logos/compactHillcrestLogoK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3 text-white bg-green">
              <Card.Body>
                <HillcrestLogo color="#fff" />
              </Card.Body>
              <Card.Body>
                <Card.Title>HILLCREST LOGO REVERSED</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactHillcrestLogoReversed.png"
                  download="download/logos/compactHillcrestLogoReversed.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHillcrestLogoReversed.svg"
                  download="download/logos/compactHillcrestLogoReversed.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHillcrestLogoReversed.ai"
                  download="download/logos/compactHillcrestLogoReversed.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <HighlandsLogo color="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>HIGHLANDS LOGO 1C</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactHighlandsLogoK.png"
                  download="download/logos/compactHighlandsLogoK.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHighlandsLogoK.svg"
                  download="download/logos/compactHighlandsLogoK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHighlandsLogoK.ai"
                  download="download/logos/compactHighlandsLogoK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3 text-white bg-pink">
              <Card.Body>
                <HighlandsLogo color="#fff" />
              </Card.Body>
              <Card.Body>
                <Card.Title>HIGHLANDS LOGO REVERSED</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactHighlandsLogoReversed.png"
                  download="download/logos/compactHighlandsLogoReversed.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHighlandsLogoReversed.svg"
                  download="download/logos/compactHighlandsLogoReversed.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactHighlandsLogoReversed.ai"
                  download="download/logos/compactHighlandsLogoReversed.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <FosterCareLogo color="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>FOSTER CARE LOGO 1C</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactFosterCareLogoK.png"
                  download="download/logos/compactFosterCareLogoK.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFosterCareLogoK.svg"
                  download="download/logos/compactFosterCareLogoK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFosterCareLogoK.ai"
                  download="download/logos/compactFosterCareLogoK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3 text-white bg-orange">
              <Card.Body>
                <FosterCareLogo color="#fff" />
              </Card.Body>
              <Card.Body>
                <Card.Title>FOSTER CARE LOGO REVERSED</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactFosterCareLogoReversed.png"
                  download="download/logos/compactFosterCareLogoReversed.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFosterCareLogoReversed.svg"
                  download="download/logos/compactFosterCareLogoReversed.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFosterCareLogoReversed.ai"
                  download="download/logos/compactFosterCareLogoReversed.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <CompaCareLogo color="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>COMPACARE LOGO 1C</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactCompaCareLogoK.png"
                  download="download/logos/compactCompaCareLogoK.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactCompaCareLogoK.svg"
                  download="download/logos/compactCompaCareLogoK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactCompaCareLogoK.ai"
                  download="download/logos/compactCompaCareLogoK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3 text-white bg-red">
              <Card.Body>
                <CompaCareLogo color="#fff" />
              </Card.Body>
              <Card.Body>
                <Card.Title>COMPACARE LOGO REVERSED</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactCompaCareLogoReversed.png"
                  download="download/logos/compactCompaCareLogoReversed.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactCompaCareLogoReversed.svg"
                  download="download/logos/compactCompaCareLogoReversed.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactCompaCareLogoReversed.ai"
                  download="download/logos/compactCompaCareLogoReversed.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <FindLogo color="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>FIND LOGO 1C</Card.Title>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFindLogoK.png"
                  download="download/logos/compactFindLogoK.png"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFindLogoK.svg"
                  download="download/logos/compactFindLogoK.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFindLogoK.ai"
                  download="download/logos/compactFindLogoK.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3 text-white bg-blue">
              <Card.Body>
                <FindLogo color="#fff" />
              </Card.Body>
              <Card.Body>
                <Card.Title>FIND LOGO Reveresed</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/compactFindLogoReversed.png"
                  download="download/logos/compactFindLogoReversed.pngg"
                >
                  PNG Download
                </Card.Link>{" "}
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFindLogoReversed.svg"
                  download="download/logos/compactFindLogoReversed.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/compactFindLogoReversed.ai"
                  download="download/logos/compactFindLogoReversed.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3">
              <Card.Body>
                <SafeCareLogo color="#000" />
              </Card.Body>
              <Card.Body>
                <Card.Title>SAFECARE LOGO 1C</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.png"
                  download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.png"
                >
                  PNG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.svg"
                  download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.ai"
                  download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col className="p-2">
            <Card className="m-0 p-3 text-white bg-purple">
              <Card.Body>
                <SafeCareLogo color="#fff" />
              </Card.Body>
              <Card.Body>
                <Card.Title>SAFECARE LOGO Reversed</Card.Title>
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.png"
                  download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.png"
                >
                  PNG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.svg"
                  download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.svg"
                >
                  SVG Download
                </Card.Link>
                <br />
                <Card.Link
                  href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.ai"
                  download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.ai"
                >
                  AI Download
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="my-5">
        <h4>
          COMP
          <span className="act">ACT</span> Brand Colors
        </h4>
        <Row className="gx-1">
          <BrandPalette
            area="COMPACT BLUE"
            color="#2D81C4"
            rgb="r20 g131 b213"
            cmyk="c80 m25"
          />
          <BrandPalette
            area="COMPACARE RED"
            color="#C80000"
            rgb="r200"
            cmyk="m100 y70"
          />
          <BrandPalette
            area="HILLCREST GREEN"
            color="#00B473"
            rgb="g180 b115"
            cmyk="c70 y35"
          />
          <BrandPalette
            area="HIGHLANDS PINK"
            color="#EC2079"
            rgb="r236 g32 b121"
            cmyk="m85"
          />
          <BrandPalette
            area="FOSTER CARE"
            color="#F26322"
            rgb="r236 g32 b121"
            cmyk="m70 y80"
          />
          <BrandPalette
            area="SAFECARE"
            color="#684e9d"
            rgb="r104 g78 b157"
            cmyk="c60 m70"
          />
          <BrandPalette
            area="FIND KINDSHIP NAVIGATOR"
            color="#FBAE17"
            rgb="r251 g174 b23"
            cmyk="m35 y100"
          />
        </Row>
      </Container>
    </>
  );
};

export default Brand;
