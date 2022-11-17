import { Container, Row, Col, Image } from "react-bootstrap";
import YoutubeEmbed from "../components/youTubeEmbed";

import Isaiah58Logo from "../graphics/Isaiah58Logo";
// import Isaiah58WordLogo from "../graphics/Isaiah58WordLogo.svg";
// import CompactLogo from "../graphics/CompactLogo.svg";
// import CompactFamilyWordLogo from "../graphics/CompactFamilyWordLogo.svg";
import { Link } from "react-router-dom";

const isaiah58offering = () => {
  document.title = "COMPACT Isaiah 58 Offering";

  return (
    <>
      <Container fluid className="m-0">
        <Row className="d-flex justify-content-center">
          <Col md={4} className="d-flex justify-content-center p-2">
            <Isaiah58Logo color="#777" />
          </Col>

          <Col md={8}>
            <YoutubeEmbed embedId="qHwFBUS84BA" />
          </Col>
        </Row>
      </Container>

      {/* <Container className="mt-5 mb-0">
        <h2 class="text-center">
          Pastors! You are invited to be a part of our Pastor’s COMP
          <span className="act">
            ACT
          </span>{" "}
          Golf Event.
        </h2>

        <div class="p-4">
          <p>Schedule:</p>
          <p>
            11 am-1 pm COMP
            <strong>
              <em>ACT</em>
            </strong>{" "}
            Golf and Lunch
          </p>
          <p>1-2 pm Prizes and Why an Isaiah 58 Offering</p>
          <p>For dates and locations email Info@Isaiah58Offering.com</p>
        </div>
      </Container> */}

      <Container fluid className="bg-blue text-white p-5">
        <Container>
          <p className="h2">WHAT IS AN ISAIAH 58 OFFERING?</p>
          <p className="lead">
            The ISAIAH 58 OFFERING is based on the teaching and call of the LORD
            as found in Isaiah 58. It’s here, followers are challenged to have
            the right focus and spirit when seeking God through fasting, prayer
            and Sabbath. God’s instruction is that the righteous heart focuses
            on Him and His business and on dependent others rather than our
            own pleasure or business.
          </p>
        </Container>
      </Container>

      <Container className="my-5">
        <p className="h5">WHY AN ISAIAH 58 OFFERING?</p>
        <p>
          When we prioritize God and His business and dependent others rather
          than our own pleasure, He blesses us and makes us ride on the heights
          of the earth.
        </p>

        <div className="d-flex justify-content-center">
          <Link to="/isaiah58sermon" className="btn btn-primary">
            Check out the ISAIAH 58 OFFERING SERMON TEMPLATE
          </Link>
        </div>
      </Container>
      {/* <Container className="mt-5">
        <h5 className="my-5">
          WHAT ARE SOME IDEAS LEADING UP TO THE ISAIAH 58 OFFERING?
        </h5>

        <h5>
          <strong>1. Put Fast on Calendar</strong>
        </h5>
        <p>
          Place a three, seven or 21 day fast, for the entire church to
          participate in, on the church calendar.
        </p>

        <h5>
          <strong>2. Challenge Your Church</strong>
        </h5>
        <p>
          Begin challenging your church three to four weeks prior to the fast.
          Challenge them that the money they would have spent on food during the
          fast will go to help serve the needs of the fatherless, oppressed,
          hungry, homeless and naked, through COMP
          <strong>ACT</strong> Family Services. Consider showing this one minute
          video sharing more about COMP
          <span className="act">
            ACT
          </span>
          .
        </p>

        <YoutubeEmbed embedId="N7NxAE_iYPQ" />

        <br />

        <h5>
          <strong>3. Print Prayer Card</strong>
        </h5>
        <p>
          Print out enough ISAIAH 58 OFFERING prayer card copies for everyone to
          have one.
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

        <h5 class="mt-5">
          <strong>4. Preach Isaiah 58 Sermon</strong>
        </h5>
        <p>
          Preach an ISAIAH 58 OFFERING sermon and hand out prayer cards the week
          prior to the fast. Let your people know that the staff, board and
          leaders will be praying for all the needs listed on the response
          cards, throughout the fast. Pastors and staff set aside 15 minutes
          each morning of the fast to pray over the needs listed.
        </p>

        <h5>
          <strong>5. Hold a Prayer Gathering</strong>
        </h5>
        <p>
          Consider an ISAIAH 58 OFFERING prayer gathering mid-week during the
          fast. Lay out all the response cards on the altar where people can
          pick one up and pray over the requests, prior to laying it back on the
          altar in order to pray over a new list. This ensures that every
          request listed is prayed over by multiple people over the duration of
          the fast.
        </p>

        <h5>
          <strong>6. Have Leadership Pray</strong>
        </h5>
        <p>
          Hand out the response cards to staff, board members, ministry leaders
          and volunteers to call individuals and pray with them over the phone.
        </p>

        <h5>
          <strong>7. Pass out Response Cards</strong>
        </h5>
        <p>
          Hand out a response card to each individual as they enter, the final
          Sunday of the fast. Take a few moments during the Sunday service to
          pray over the needs, before receiving the ISAIAH 58 OFFERING.
        </p>
      </Container> */}

      <Container className="m-5 bg-light p-5">
        <p className="lead">Pastor,</p>
        <p className="lead">
          Trust you and your church family are well and looking forward to a
          wonderful holiday season. As you may know, many of our churches hold a
          season of prayer and fasting to begin the New Year. Would you consider
          receiving an Isaiah58Offering this year, following your church fast?
        </p>
        <p>
          What is an Isaiah58Offering? An opportunity to join the entire church
          together for prayer and fasting and to see the Lord bless others and
          your people.
        </p>
        <p className="fst-italic">
          <span className="fw-bold">Isaiah 58:6-8 </span>(NLT) “No, this is the
          kind of fasting I want: Free those who are wrongly imprisoned; lighten
          the burden of those who work for you. Let the oppressed go free and
          remove the chains that bind people. 7Share your food with the hungry
          and give shelter to the homeless. Give clothes to those who need them,
          and do not hide from relatives who need your help.”
        </p>
        <ol>
          <li>
            <strong>Put Fast on Calendar</strong> - Place a three, seven or 21
            days fast on the church calendar.
          </li>
          <li>
            <strong>Send us Your Prayer Dates</strong> – Let us join with you in
            prayer. We will pray with you for spiritual renewal for your church!
            Email us at Isaiah58Offering@COMPACT.Family.
          </li>
          <li>
            <strong>Challenge Your Church</strong> – Begin challenging your
            church three to three weeks prior to the fast. The finances they
            would have spent on food during the fast will go to help serve the
            needs of the fatherless, oppressed, hungry, homeless and naked,
            through COMP
            <span className="act">ACT</span> Family Services.
          </li>
          <li>
            <strong>Print Prayer Card</strong> – Print out enough prayer card
            copies for everyone.
          </li>
          <li>
            <strong>Preach Isaiah 58 Sermon</strong> – Preach an ISAIAH 58
            OFFERING sermon and hand out prayer cards the week prior to the
            fast. Let your people know that the staff, board and leaders will be
            praying, throughout the fast for all the needs listed on the
            response cards. Go to{" "}
            <a href="https://compact.family/isaiah58offering">
              https://compact.family/isaiah58offering
            </a>{" "}
            for video support.
          </li>
          <li>
            <strong>Hold a Prayer Gathering</strong> – Consider a prayer
            gathering mid-week during the fast. Lay out all the response cards
            on the altar where people can pick one up to pray over, prior to
            laying it back on the altar in order to pray over a new request.
            This ensures that every request listed is prayed over by multiple
            people during the fast.
          </li>
          <li>
            <strong>Have Leadership Pray</strong> – Hand out the response cards
            to staff, board members, ministry leaders and volunteers to call
            individuals and pray with them over the phone.
          </li>
          <li>
            <strong>Pass out Response Cards</strong> – Hand out a response card
            to each individual as they enter, the final Sunday of the fast. Take
            a few moments during the Sunday service to pray over the needs,
            before receiving the ISAIAH 58 OFFERING.
          </li>
          <li>
            <strong>Send an Isaiah58Offering to:</strong>
            COMPACT Family Services 2325 Malvern Ave Hot Springs, AR 71901, OR
            give securely online at{" "}
            <lin href="https://www.compact.family">compact.family</lin>.
          </li>
        </ol>

        <p>
          Your ISAIAH 58 OFFERING given to Assemblies of God COMP
          <span className="act">ACT</span> Family Services, the national child
          welfare mission of the General Council, ensures the needs of the
          fatherless, oppressed, hungry, homeless and naked are being met
        </p>

        <p className="fs-3">
          Thank you for being part of a movement meant to impact thousands of
          families for generations.
        </p>

        <p>Blessings!</p>

        <h3>
          <strong>Dr. Alan Bixler</strong>
        </h3>
        <p>Executive Director</p>
      </Container>

      <Container>
        <YoutubeEmbed embedId="JHzS2jcYAzE" />
        <p>
          Pastor Mark English of Christian Life Center, Bensalem, PA shares a
          testimonial message for fellow pastors.
        </p>
      </Container>
      {/* <Container>
        <h3 className="mt-5">
          WHY GIVE YOUR ISAIAH 58 OFFERING TO COMP
          <span className="act">
            ACT
          </span>{" "}
          FAMILY SERVICES?
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
      </Container> */}

      <Container>
        <h3 className="mt-5">Resources</h3>
        <p>
          Feel free to utilize the ISAIAH 58 OFFERING logos in your additional
          promotional materials.
        </p>

        <Row className="text-center d-flex justify-content-center">
          <Col md={6}>
            <div>
              <Isaiah58Logo />
            </div>
            {/* <Image src={Isaiah58Logo} alt="Isaiah 58 logo" fluid /> */}
            <Link
              to="https://compact.family/download/logos/isaiah58Logo.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </Link>
          </Col>

          {/* <Col md={6}>
            <Image src={CompactLogo} fluid />

            <Link
              to="https://compact.family/download/logos/compactLogoK.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </Link>
          </Col> */}

          {/* <Col md={6}>
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
          </Col> */}
        </Row>
      </Container>

      <Container className="py-5"></Container>

      <Container className="text-center">
        <Image
          src="https://compact.family/download/isaiah58/Isaiah58OffereingChurchResponse.png"
          fluid
        />
      </Container>

      <Container className="d-flex justify-content-center">
        <div className="w-50">
          <Isaiah58Logo color="var(--blue)" />
        </div>
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
