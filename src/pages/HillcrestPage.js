import ResponsiveEmbed from "react-responsive-embed";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";

const HillcrestPage = () => {
  document.title = "Hillcrest";
  const titleOne = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -50 },
    pause: 2000,
    // loop: true,
    delay: 500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });
  const titleTwo = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: 2000,
    // loop: true,
    delay: 2500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });

  return (
    <>
      <Container fluid className="photoblue py-0 my-0 text-center">
        <Row>
          <Col className="text-center mt-md-4 d-flex justify-content-center align-items-center p-5">
            <div>
              <animated.h3 style={titleOne} className="fw-bold">
                Vulnerable children come to us for redeeming care from state,
                court, church and other referrals.
              </animated.h3>
              {/* <h4 className="fs-5">
                The residential programs care for approximately 40-50 children
                and youth at a time. 
              </h4> */}
              <animated.p style={titleTwo} className="fs-5 mt-4">
                Hillcrest Children’s Home rests on a 52-acre campus with 8
                cottages and a 24-apartment center for foster youth preparing
                for adult living.
              </animated.p>
            </div>
          </Col>

          <Col
            sm={12}
            md={6}
            lg={5}
            xl={4}
            className="d-flex align-content-end"
          >
            <Image
              fluid
              alt="Hillcrest Child"
              src="https://compact.family/images/1675.jpg"
              width="600"
              height="555"
              layout="intrinsic"
              // objectFit="cover"
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5 bg-green text-white">
        <h2 className="text-center">Hillcrest programs include:</h2>

        <p className="h5 text-center">Developmental Disabilities Services</p>
        <p className="h5 text-center">Qualified Residential Treatment</p>

        <p className="h5 text-center">Transitional Living</p>
      </Container>

      <Container fluid>
        <Row>
          <Col
            md={6}
            style={{
              backgroundImage: "url(https://compact.family/images/pond.jpg)",
              backdropFilter: "brightness(0.5)",
              backgroundSize: "cover",
            }}
          ></Col>
          <Col className="p-5">
            <p className="h5 green">
              Aside from living in a family-style cottage with living
              Houseparents, our campus also has multiple activities and
              amenities for residents to enjoy.
            </p>
            <p className="">
              These include a stocked pond for fishing, paved roads for biking,
              grassy areas for soccer and other games, basketball hoops, an
              indoor swimming pool, a large gymnasium and more! Children and
              youth at Hillcrest are also able to participate in other
              extracurricular activities through school and church.
            </p>
            <p>
              The facilities are equipped with state-of-the-art, audio-visual
              surveillance equipment in public areas to provide safer quality
              care. No matter the origin, we provide the professional Christian
              redemptive care they need and deserve.
            </p>
          </Col>
        </Row>
      </Container>

      <ResponsiveEmbed
        src="https://www.youtube.com/embed/N7NxAE_iYPQ"
        allowFullScreen
      />

      <Container className="my-5 my-5 pt-5">
        <h1 className="green mb-4">Development Disabilities Service </h1>
        <p className="fs-5 mb-4">
          The program serves children and adolescents with developmental
          disabilities who have been removed from abusive and neglectful
          circumstances.
        </p>
      </Container>
      <Container fluid>
        <Row className="mb-4">
          {/* <Image src={Gilliam} fluid /> */}
          <Col md={5}>
            <Image
              fluid
              alt="Gilliam Cottage"
              src="https://compact.family/images/Gilliam-Cottage.jpg"
              width="500"
              height="333"
              // layout="intrinsic"
              //  objectFit="cover"
            />
          </Col>
          <Col className="d-flex align-items-center px-5">
            <p className="fs-5 green fw-bold">
              The Specialized Developmental Disability Emergency Program
              established on COMP
              <strong>
                <em>ACT</em>
              </strong>
              ’s Hillcrest Campus in Hot Springs, Arkansas opened October 1 st
              of 2020. This program serves children and adolescents with
              developmental disabilities.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 pb-5">
        <p className="lead">
          These children and adolescents have any number of developmental and/or
          mental health conditions such as, Intellectual Developmental
          Disorders, Communication Disorders (Language and Speech Disorders),
          Autism Spectrum Disorders, Specific Learning Disorders,
          Attention-Deficit/Hyperactivity Disorders, Motor Disorders (such as
          Tourette’s), and an array of other mental health conditions as a
          result of trauma and environmental factors they have experienced. Our
          program receives these children and adolescents as they are and then
          provides them with a sensory rich environment meant to captivate their
          minds and meet their sensory needs.
        </p>

        <p>
          Our Developmental Disability Services Cottage is equipped with rooms
          designed to meet the myriad of needs the children and adolescents
          have. A crash and bump room allows them opportunity to play, exercise,
          and laugh which helps with self-regulation. A sensory room provides
          activities that satisfy needs involving vision, smell, sound and touch
          with a primary goal of encouraging motor skill development.
        </p>

        <p>
          The calming room includes items to calm the senses, such as cozy
          chairs that hug and bubble tubes, mirrors, and sound projectors to
          create wonder and calm the mind. Bedrooms contain weighted stuffed
          animals, compression sheets, noise canceling headphones, Cozy Caves,
          and hanging hammock chairs designed to provide each child and
          adolescent with a sanctuary to which they can retreat, when they find
          themselves over stimulated or simply ready for a good night of rest.
        </p>

        <p>
          This home is staffed with 24-hour awake staff trained to address
          specific needs and providing the nourishment and nurturance they need.
          Professional and clinical staff work to accurately assess the
          conditions of these children and adolescents and provide needed
          treatment to help them achieve the highest degree of independence
          possible.
        </p>
      </Container>

      {/* 
      <Container fluid className="bg-green align-items-center my-0">
        <Container className="text-center text-white">
          <h3>3-year-old *Deanna sings Jesus Loves Me</h3>
          
          <audio controls>
  <source src="https://compact.family/download/jesuslovesme.mp3" type="audio/mpeg">
           Your browser does not support the audio element.
			  </audio>
   
        </Container>
      </Container> */}

      <Container className="my-5">
        <h1 className="green my-4">
          Hillcrest Qualified Residential Treatment Program
        </h1>
        <p className="fs-5 mb-4">
          Where do vulnerable children and youth from harder places and more
          severe maltreatment go for help and healing? COMP
          <span className="act">ACT</span> is a proven, nationally accredited
          Qualified Residential Treatment Provider. These precious but hurting
          children and youth are given a family-style, Christ-centered path to
          redemptive living.
        </p>
      </Container>
      <Container fluid>
        <Row className="">
          {/* <img src="../images/garrison900.jpg" className="img-fluid" alt=""> */}
          {/* <Image src={Garrison} fluid /> */}
          <Col className="d-flex align-items-center p-5">
            <div>
              <p className="fs-5 fw-bold green">
                We believe that “there are no throw-away children in this
                world,” and our QRTP is helping heal deep hurts in some of the
                most precious, but maltreated, youth. The QRTP gives them the
                extra care they need.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Image
              fluid
              alt="Garrison Cottage"
              src="https://compact.family/images/garrison900.jpg"
              // layout="intrinsic"
              // width="500"
              // height="300"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="mt-3">
          Our QRTP is practiced in four family-style cottage homes with
          houseparents and surrounding clinical professionals. Together they
          work on behalf of a child’s physical, emotional, mental, and spiritual
          need to deliver a subsequent fitting family foster placement leading
          to permanency reunification or adoption.
        </p>
      </Container>

      <Container className="mt-5">
        <h1 className="green my-4">Hillcrest Transitional Living Center</h1>
        <p className="fs-5 mb-4">
          {" "}
          Approximately 20,000-25,000 children will age out of foster care every
          year, with 20% of them instantly becoming homeless.
        </p>
      </Container>
      <Container fluid>
        <Row>
          <Col md={5} className="">
            <Image
              fluid
              alt="TLC Building"
              src="https://compact.family/images/tlc.jpg"
              layout="intrinsic"
              width="500"
              // height="400"
              // objectFit="cover"
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-center px-5">
            <div>
              <p className="fs-5 green fw-bold">
                Less than 4% of those who age out will earn a college degree.
                Nearly 70% of girls who age out become pregnant by the time they
                reach 21 years of age.
              </p>
              <p>
                25% of those who age out will continue to suffer with PTSD.
                However, transitional living programs can be extremely helpful
                to launch emancipating foster youth to a better and brighter
                future!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <p className="my-4">
          Our Transitional Living Center (TLC) is a 24-apartment building on the
          Hillcrest campus that provides a beautiful furnished apartment in a
          Christian community. The program provides Hillcrest emancipating
          residents 18-21 years of age an excellent growth environment toward
          independence. These youths are ministered to and mentored by
          experienced staff as they endeavor trade school, college education or
          an apprenticing career.
        </p>
        <p>
          The TLC program provides classes on independence, budgeting,
          job-seeking and more. They hold Bible studies, small groups and have
          multiple opportunities each week to fellowship as a community.
        </p>
      </Container>

      <Container fluid className="py-5 my-5">
        <div className="container">
          <p className="fw-bold green h4 text-center">
            For more information about Hillcrest, please call{" "}
            <strong>(501) 262-1660</strong>.
          </p>
        </div>
      </Container>

      <Container fluid className="my-0 bg-green text-white text-center p-5">
        <h2>Hillcrest Sponsorship and Partnership</h2>
        <p>
          Our Hillcrest ministry cannot exist without our generous sponsors and
          partners. Sponsoring a child or cottage is one of the greatest ways an
          individual, church, or business can show love and care for the modern
          orphan in America.
        </p>
        <p className="h4">
          Become a sponsor today by emailing rwhitlock@compact.family
          <br />
          or calling our office <strong>501-262-1660</strong>.
        </p>
        <div className="text-center my-4">
          <Link to="/sponsor" className="btn btn-dark">
            Become a Cottage Sponsor Today
          </Link>
        </div>
        <div className="text-center">
          <h3>Or you can give to one of our Hillcrest Children’s Home Funds</h3>

          <a
            className="btn btn-dark me-1"
            href="https://giving.ag.org/Give/Details/886056?MinistryName=886056&Page=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Summer Camp
          </a>

          <a
            className="btn btn-dark me-1 my-2"
            href="https://giving.ag.org/Give/Details/886057?MinistryName=886057&Page=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            School Supplies
          </a>

          <a
            className="btn btn-dark me-1 my-2"
            href="https://giving.ag.org/Give/Details/890061?MinistryName=890061&Page=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vehicle Fund
          </a>

          <a
            className="btn btn-dark me-1 my-2"
            href="https://giving.ag.org/Give/Details/890056?MinistryName=890056&Page=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medical Fund
          </a>

          <a
            className="btn btn-dark me-1 my-2"
            href="https://giving.ag.org/Give/Details/890059?MinistryName=8900590&Page=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            College Scholarship Fund
          </a>
        </div>
      </Container>
    </>
  );
};

export default HillcrestPage;
