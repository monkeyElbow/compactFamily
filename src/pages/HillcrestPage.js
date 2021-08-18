import ResponsiveEmbed from "react-responsive-embed";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const HillcrestPage = () => {
  document.title = "Hillcrest"

  return (
    <>
          <Container fluid className="photoblue py-0 my-0 text-center rounded-0">
        <Row>
          <Col
            sm={12}
            md={6}
            lg={5}
            xl={4}
            className="d-flex align-content-end"
          >
                          {/* <Image src={Child} fluid /> */}

            <Image fluid
              alt="Hillcrest Child"
              src="https://compact.family/images/1675.jpg"
              width="600"
              height="555"
              layout="intrinsic"
              // objectFit="cover"
            />
          </Col>

          <Col className="text-center mt-md-4 py-0 d-flex justify-content-center align-items-center">
            <div>
              <p className="lead">
                The residential programs care for approximately 40-50 children
                and youth at a time. Abused, neglected and otherwise vulnerable
                children come to us for redeeming care from state, court, church
                and other referrals.
              </p>
              <p>
                The facilities are equipped with state-of-the-art, audio-visual
                surveillance equipment in public areas to provide safer quality
                care. No matter the origin, we provide the professional
                Christian redemptive care they need and deserve.
              </p>
            </div>
          </Col>
        </Row>
      </Container>




      <Container
        fluid
        className="text-center pt-5 pb-1 my-0 bg-green text-white"
      >
        <Container className="mb-5 col-lg-6 col-md-12 text-center offset-lg-3 offset-md-0">
          <p className="lead">
            Aside from living in a family-style cottage with living
            Houseparents, our campus also has multiple activities and amenities
            for residents to enjoy.{" "}
          </p>
          <p className="lead">
            These include a stocked pond for fishing, paved roads for biking,
            grassy areas for soccer and other games, basketball hoops, an indoor
            swimming pool, a large gymnasium and more! Children and youth at
            Hillcrest are also able to participate in other extracurricular
            activities through school and church.
          </p>
        </Container>
      </Container>



      <Container className="text-center pt-3 pb-0">
        <div className="mb-5 col-lg-6 col-md-12 text-center offset-lg-3 offset-md-0">
          <p className="lead">Hillcrest programs include:</p>

          <p className="h5">Developmental Disabilities Services (DDS)</p>
          <p className="h5">Qualified Residential Treatment (QRTP)</p>
          <p className="h5">Transitional Living (TLC)</p>
        </div>
      </Container>

     


      <ResponsiveEmbed
        src="https://www.youtube.com/embed/N7NxAE_iYPQ"
        allowfullscreen
      />

      <Container className="my-5 my-4">
        <Container>
          <h2 className="green">Development Disabilities Service </h2>
          <p className="lead">
            The program serves children and adolescents with developmental
            disabilities who have been removed from abusive and neglectful
            circumstances.
          </p>
          <div className="col-md-5 col-sm-12 float-right mb-md-3 ms-md-3">
            {/* <Image src={Gilliam} fluid /> */}
            <Image fluid
            alt="Gilliam Cottage"
            src="https://compact.family/images/Gilliam-Cottage.jpg"
            width="500"
            height="333"
            // layout="intrinsic"
            //  objectFit="cover"
          />
          </div>
          <p>
            The Specialized Developmental Disability Emergency Program
            established on COMPACT’s Hillcrest Campus in Hot Springs, Arkansas
            opened October 1 st of 2020. This program serves children and
            adolescents with developmental disabilities.
          </p>

          <p>
            These children and adolescents have any number of developmental
            and/or mental health conditions such as, Intellectual Developmental
            Disorders, Communication Disorders (Language and Speech Disorders),
            Autism Spectrum Disorders, Specific Learning Disorders,
            Attention-Deficit/Hyperactivity Disorders, Motor Disorders (such as
            Tourette’s), and an array of other mental health conditions as a
            result of trauma and environmental factors they have experienced.
            Our program receives these children and adolescents as they are and
            then provides them with a sensory rich environment meant to
            captivate their minds and meet their sensory needs.
          </p>

          <p>
            Our Developmental Disability Services Cottage is equipped with rooms
            designed to meet the myriad of needs the children and adolescents
            have. A crash and bump room allows them opportunity to play,
            exercise, and laugh which helps with self-regulation. A sensory room
            provides activities that satisfy needs involving vision, smell,
            sound and touch with a primary goal of encouraging motor skill
            development.
          </p>

          <p>
            The calming room includes items to calm the senses, such as cozy
            chairs that hug and bubble tubes, mirrors, and sound projectors to
            create wonder and calm the mind. Bedrooms contain weighted stuffed
            animals, compression sheets, noise canceling headphones, Cozy Caves,
            and hanging hammock chairs designed to provide each child and
            adolescent with a sanctuary to which they can retreat, when they
            find themselves over stimulated or simply ready for a good night of
            rest.
          </p>

          <p>
            This home is staffed with 24-hour awake staff trained to address
            specific needs and providing the nourishment and nurturance they
            need. Professional and clinical staff work to accurately assess the
            conditions of these children and adolescents and provide needed
            treatment to help them achieve the highest degree of independence
            possible.
          </p>
        </Container>
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


      <Container className="my-3">
        <h2 className="green">
          HILLCREST QUALIFIED RESIDENTIAL TREATMENT Program (QRTP)
        </h2>

          <div className="float-left m-lg-4 m-md-0 col-lg-6 col-md-12 text-center">
            {/* <img src="../images/garrison900.jpg" className="img-fluid" alt=""> */}
            {/* <Image src={Garrison} fluid /> */}
            <Image fluid
            alt="Garrison Cottage"
            src="https://compact.family/images/garrison900.jpg"
            layout="intrinsic"
            width="600"
            height="400"
          />
              </div>
          <p>
              Where do vulnerable children and youth from harder places and more
              severe maltreatment go for help and healing? COMP<strong>ACT</strong> is a proven, nationally accredited Qualified Residential Treatment Provider.
              These precious but hurting children and youth are given a
              family-style, Christ-centered path to redemptive living. We
              believe that “there are no throw-away children in this world,” and
              our QRTP is helping heal deep hurts in some of the most precious,
              but maltreated, youth. The QRTP gives them the extra care they
              need.
            </p>
            <p>
              Our QRTP is practiced in four family-style cottage homes with
              houseparents and surrounding clinical professionals. Together they
              work on behalf of a child’s physical, emotional, mental, and
              spiritual need to deliver a subsequent fitting family foster
              placement leading to permanency reunification or adoption.
            </p>
      
        </Container>


      <Container className="my-5">
        <h2 className="green">HILLCREST TRANSITIONAL LIVING CENTER</h2>


          <div className="col-sm-12 col-md-12 col-lg-6 mb-3 float-left">
          <Image
            fluid
            alt="TLC Building"
            src="https://compact.family/images/tlc.jpg"
            layout="intrinsic"
            width="600"
            height="400"
            // objectFit="cover"
          />
          </div>
            <p>
              Approximately 20,000-25,000 children will age out of foster care
              every year, with 20% of them instantly becoming homeless. Less
              than 4% of those who age out will earn a college degree. Nearly
              70% of girls who age out become pregnant by the time they reach 21
              years of age. 25% of those who age out will continue to suffer
              with PTSD. However, transitional living programs can be extremely
              helpful to launch emancipating foster youth to a better and
              brighter future!
            </p>
            <p>
              Our Transitional Living Center (TLC) is a 24-apartment building on
              the Hillcrest campus that provides a beautiful furnished apartment
              in a Christian community. The program provides Hillcrest
              emancipating residents 18-21 years of age an excellent growth
              environment toward independence. These youths are ministered to
              and mentored by experienced staff as they endeavor trade school,
              college education or an apprenticing career.
            </p>
            <p>
              The TLC program provides classes on independence, budgeting,
              job-seeking and more. They hold Bible studies, small groups and
              have multiple opportunities each week to fellowship as a
              community.
            </p>
        
    
      </Container>

      <Container fluid className="my-0 bg-green text-white text-center p-5">
          <h2>Hillcrest Sponsorship and Partnership</h2>
          <p>
            Our Hillcrest ministry cannot exist without our generous sponsors
            and partners. Sponsoring a child or cottage is one of the greatest
            ways an individual, church, or business can show love and care for
            the modern orphan in America.
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
            <h3>
              Or you can give to one of our Hillcrest Children’s Home Funds
            </h3>

            <a
              className="btn btn-dark mr-1"
              href="https://giving.ag.org/Give/Details/886056?MinistryName=886056&Page=1"
              target="_blank" rel="noopener noreferrer"
            >
              Summer Camp
            </a>

            <a
              className="btn btn-dark mr-1 my-2"
              href="https://giving.ag.org/Give/Details/886057?MinistryName=886057&Page=1"
              target="_blank" rel="noopener noreferrer"
            >
              School Supplies
            </a>

            <a
              className="btn btn-dark mr-1 my-2"
              href="https://giving.ag.org/Give/Details/890061?MinistryName=890061&Page=1"
              target="_blank" rel="noopener noreferrer"
            >
              Vehicle Fund
            </a>

            <a
              className="btn btn-dark mr-1 my-2"
              href="https://giving.ag.org/Give/Details/890056?MinistryName=890056&Page=1"
              target="_blank" rel="noopener noreferrer"
            >
              Medical Fund
            </a>

            <a
              className="btn btn-dark my-2"
              href="https://giving.ag.org/Give/Details/890059?MinistryName=8900590&Page=1"
              target="_blank" rel="noopener noreferrer"
            >
              College Scholarship Fund
            </a>
          </div>
        </Container>
    </>
  );
};

export default HillcrestPage;
