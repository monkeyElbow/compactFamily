import { Container, Row, Col, Image } from "react-bootstrap";
import YoutubeEmbed from "../components/youTubeEmbed";

import Isaiah58Logo from "../graphics/Isaiah58Logo";
import Isaiah58WordLogo from "../graphics/Isaiah58WordLogo.svg";
import CompactLogo from "../graphics/CompactLogo.svg";
import CompactFamilyWordLogo from "../graphics/CompactFamilyWordLogo.svg";
import { Link } from "react-router-dom";



const isaiah58offering = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4} className="d-flex justify-content-center p-2">
          <Isaiah58Logo color="#777" />
          </Col>

          <Col md={8}>
            <YoutubeEmbed embedId="GlNDTr-RwFQ" />
</Col>

        </Row>
      </Container>



<Container className="mt-5 mb-0">

<h2 class="text-center">
  Pastors! You are invited to be a part of our Pastor’s COMP<strong>ACT</strong> Golf Event?
</h2>

<div class="p-4">
  <p>
    Schedule:
  </p>
  <p>
    11 am-1 pm COMP<strong>ACT</strong> Golf and Lunch
  </p>
  <p>
    1-2 pm Prizes and Why an Isaiah 58 Offering
  </p>
  <p>
    For dates and locations email Info@Isaiah58Offering.com
  </p>
</div>
</Container>




      <Container fluid className="bg-blue text-white p-5">
        <p className="h2">WHAT IS AN ISAIAH 58 OFFERING?</p>
        <p className="lead">
          The ISAIAH 58 OFFERING is based on the teaching and call of the LORD
          as found in Isaiah 58. It’s here, followers are challenged to have the
          right focus and spirit when seeking God through fasting, prayer and
          Sabbath. God’s instruction is that the righteous heart focuses on Him
          and His business and on dependent others rather than our
          own pleasure or business.
        </p>
      </Container>
      <Container className="my-5">
        <p className="h5">WHY AN ISAIAH 58 OFFERING?</p>
        <p>
          When we prioritize God and His business and dependent others rather
          than our own pleasure, He blesses us and makes us ride on the heights
          of the earth.
        </p>

        <div className="d-flex justify-content-center">
          <Link to="/isaiah58sermon">
            <a className="btn btn-primary">
              Check out the ISAIAH 58 OFFERING SERMON TEMPLATE
            </a>
          </Link>
        </div>
      </Container>
      <Container className="mt-5">
        <h5 className="my-5">
          WHAT ARE SOME IDEAS LEADING UP TO THE ISAIAH 58 OFFERING?
        </h5>

        <h5><strong>
    1. Put Fast on Calendar
  </strong></h5>
        <p>
          Place a three, seven or 21 day fast, for the entire church to
          participate in, on the church calendar.
        </p>

        <h5><strong>
    2. Challenge Your Church
  </strong></h5>
        <p>
          Begin challenging your church three to four weeks prior to the
          fast. Challenge them that the money they would have spent on food
          during the fast will go to help serve the needs of the fatherless,
          oppressed, hungry, homeless and naked, through COMP
          <strong>ACT</strong> Family Services. Consider showing this one minute
          video sharing more about COMP<strong>ACT</strong>.
        </p>

        <YoutubeEmbed embedId="N7NxAE_iYPQ" />

        <br />


        <h5><strong>
  3. Print Prayer Card
</strong></h5>
        <p>
          Print out enough ISAIAH 58 OFFERING prayer card copies for everyone
          to have one.
        </p>
        <div className="text-center d-flex align-items-center flex-column">
          <Image
            src="https://compact.family/download/isaiah58/Isaiah58OffereingChurchResponse.png"
            className="img-fluid"
          />

          <a
            target="_blank"
            href="https://compact.family/download/isaiah58/Isaiah58OffereingChurchResponse.png"
            rel="noopener noreferrer"
          >
            Download Response Card
          </a>
        </div>

        <h5 class="mt-5"><strong>
    4. Preach Isaiah 58 Sermon
  </strong></h5>
        <p className="mt-5">
          Preach an ISAIAH 58 OFFERING sermon and hand out prayer cards the
          week prior to the fast. Let your people know that the staff, board and
          leaders will be praying for all the needs listed on the response
          cards, throughout the fast. Pastors and staff set aside 15 minutes
          each morning of the fast to pray over the needs listed.
        </p>

        <h5><strong>
  5. Hold a Prayer Gathering
</strong></h5>
        <p>
          Consider an ISAIAH 58 OFFERING prayer gathering mid-week during the
          fast. Lay out all the response cards on the altar where people can
          pick one up and pray over the requests, prior to laying it back on the
          altar in order to pray over a new list. This ensures that every
          request listed is prayed over by multiple people over the duration of
          the fast.
        </p>

        <h5><strong>
    6. Have Leadership Pray
  </strong></h5>
        <p>
          Hand out the response cards to staff, board members, ministry
          leaders and volunteers to call individuals and pray with them over the
          phone.
        </p>


        <h5><strong>
7. Pass out Response Cards
</strong></h5>
        <p>
          Hand out a response card to each individual as they enter, the
          final Sunday of the fast. Take a few moments during the Sunday service
          to pray over the needs, before receiving the ISAIAH 58 OFFERING.
        </p>
      </Container>

      <Container>
        <h3 className="mt-5">
          WHY GIVE YOUR ISAIAH 58 OFFERING TO COMP<strong>ACT</strong> FAMILY
          SERVICES?
        </h3>
        <p>
          Your ISAIAH 58 OFFERING given to your Assemblies of God COMP
          <strong>ACT</strong> Family Services, the national child welfare
          mission of the General Council of the Assemblies of God, ensures the
          needs of the fatherless, oppressed, hungry, homeless and naked are
          being met.
          <Link to="/">See our monthly ministries’ scoreboard</Link>
        </p>

        <p>
          Send the dates of your ISAIAH 58 OFFERING to
          Isaiah58Offering@COMPACT.Family. We will pray with you for spiritual
          renewal for your church!
        </p>
      </Container>

      <Container>
        <h3 className="mt-5">Resources</h3>
        <p>
          Feel free to utilize the ISAIAH 58 OFFERING logos in your additional
          promotional materials.
        </p>

        <Row className="text-center">
          <Col md={6}>
            <Isaiah58Logo />
            {/* <Image src={Isaiah58Logo} alt="Isaiah 58 logo" fluid /> */}
            <a
              href="https://compact.family/download/logos/isaiah58Logo.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </Col>

          <Col md={6}>
            <Image src={CompactLogo} fluid />
            <a
              href="https://compact.family/download/logos/compactLogoK.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </Col>

          <Col md={6}>
            <Image src={Isaiah58WordLogo} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://compact.family/download/logos/isaiah58WordLogo.png"
            >
              Download
            </a>
          </Col>

          <Col md={6}>
            <Image src={CompactFamilyWordLogo} fluid />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://compact.family/download/logos/COMPACTFAMILY_WORDLOGO.png"
            >
              Download
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="py-5"></Container>

      <Container className="text-center">
        <Image
          src="https://compact.family/download/isaiah58/Isaiah58OffereingChurchResponse.png"
          fluid
        />
      </Container>

      <Container className="text-center">
        <Isaiah58Logo />
      </Container>
      <Container>
        <p className="lead">
          Isaiah 58:6-7 God declares the kind of fast He chooses, (6) “Is not
          this the fast that I choose; to loose the bonds of wickedness, to undo
          the straps of the yoke, to let the oppressed [bruised] go free, and to
          break every yoke? (7) Is it not to share your bread with the hungry
          and bring the homeless poor into your house; when you see the naked to
          cover him and not to hide yourself from your own flesh?” Thank you for
          dedicating your fast to benefit vulnerable children and families
          through the ministries of AG COMP<strong>ACT</strong>! May the
          bountiful blessings of Isaiah 58:8-14 abound for you!
        </p>
        <h3>
          <strong>Jay Mooney</strong>
        </h3>
        <p>Executive Director</p>
      </Container>

      <Container className="py-5 text-center">
        <p>
          Feel free to reach out to our Development Director, Rod Whitlock at
          417.848.9522, with questions.
        </p>
      </Container>
    </>
  );
};

export default isaiah58offering;
