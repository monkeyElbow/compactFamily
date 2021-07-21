import { Image, Container, Row, Col, Card } from "react-bootstrap";
import ArkansasShape from "../graphics/ArkansasShape";
import ResponsiveEmbed from "react-responsive-embed";
import FosterCareLogo from "../graphics/FosterCareLogo";
import {Link} from 'react-router-dom';

const FostercarePage = () => {
  document.title = "COMPACT Foster Care"

  return (
    <>
    
      <Container fluid className="photoblue py-0 border-0 mb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-8 text-center d-flex justify-content-center align-items-center">
              <div className="my-3">
                <h3>A redemptive revolution is in progress.</h3>
                <p>
                  {" "}
                  With approximately 100 million Christians and thousands of
                  churches, it only takes a little compassion in action in each
                  church to redeem fatherless and fragmented children. Put
                  compassion in action now.{" "}
                </p>
                <p>
                  In Arkansas alone, there are over 5,000 children in the foster
                  care system due to abuse, neglect or abandonment. There are
                  also over 6,500 churches in Arkansas.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            <Image fluid
                src="https://compact.family/images/0679.jpg"
                width="600"
                height="733"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </Container>


      <Container fluid className="text-center mb-0 pt-5 pb-2 bg-orange text-white">
        <div className="container mb-5 col-lg-6 col-md-12 text-center offset-lg-3">
          <p className="h5">
            Consider foster care ministry. COMP<strong>ACT</strong> wants to
            empower, network, and resource individuals and churches to provide
            compassion in action to America&#39;s foster care children and
            families.
          </p>
        </div>
      </Container>


      {/* <div className="bg-warning">FIX LINK TO FORM</div>
      <Container fluid className="text-md-center p-4 bg-orange">
        <Container>
          <h3>
            <a href="../foster-care-training-sign-up.html">
              Click here to register for an upcoming training/informational
              meeting
            </a>
          </h3>
        </Container>
      </Container> */}

      <div className="jumbotron mb-0">
        <div className="container">
          <p className="h2 orange text-center">FOSTER CARE</p>
          <p className="lead">
            COMP<strong>ACT</strong> is your partner in mission for serving
            vulnerable children and families in the foster care system. COMP
            <strong>ACT</strong>’s evidence-based compassion care system,
            CompaCare, for churches provides better stability and quality
            outcomes.
          </p>

          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 d-flex justify-content-center align-items-center orange">
              <div>
                <h4 className="small">
                  One of our teenagers *David, right before being water
                  baptized,{" "}
                </h4>
                <p className="h2">
                  “Thank you COMP<strong>ACT</strong> for taking me in and
                  giving me a second chance.”
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-12">
              <p>
                It is important to note that the American foster care system,
                although federally connected, operates uniquely by state. Each
                state operates its own system. Thereby, the process in one state
                may be much different in another.
              </p>
              <p>
                A redemptive revolution is emerging. With approximately 100
                million Christians and thousands of churches, it only takes a
                little compassion in action in each church to redeem fatherless
                and fragmented children. Put compassion in action now.{" "}
              </p>{" "}
              <p>
                The primary purpose of foster care aims to restore children back
                to their biological families, although approximately 20% of
                foster youth are eligible for adoption.
              </p>{" "}
              <p>We believe foster families do strategic mission work.</p>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveEmbed
        src="https://www.youtube.com/embed/gjPsQLnQ9Fw"
        allowfullscreen
      />

<Container fluid className="bg-orange py-5">
        <h2 className="text-white text-center">STATISTICS</h2>

        <Row className="row-cols-lg-3 row-cols-md-1 d-flex justify-content-center">
          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              There are more than 400,000 U.S. children in foster care every
              day. Foster children and families are in every community and God
              has called the Church to them. Every church can have an effective
              ministry to America’s foster care community.
            </p>
            <a
              href="https://jlc.org/news/what-foster-care-prison-pipeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              90% of youth with five or more placements will enter the justice
              system.
            </p>
            <a
              href="https://jlc.org/news/what-foster-care-prison-pipeline"
              target="_blank"
              rel="noopener noreferrer"

            >
              Source
            </a>
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              Approximately 60% of sex trafficking victims were from foster care or group homes.
            </p>
            {/* <a href="Source:" target="_blank"
              rel="noopener noreferrer"
            
            >
              Source
            </a> */}
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              One research report estimates that 86% of the children in foster
              care had experienced sexual abuse.
            </p>
            <a
              href="https://www.acf.hhs.gov/sites/default/files/opre/oyfc_report.pdf"
              target="_blank"
              rel="noopener noreferrer"

            >
              Source
            </a>
          </div>

          <div className="p-4 bg-white rounded m-2">
            <p className="lead">
              PTSD was diagnosed in 60% of sexually abused children and in 42%
              of physically abused children.
            </p>
            <a
              href="https://www.prevention.org/Resources/2992b683-0c31-4b80-8f23-397cf7553894/PTSD_and_grief_guide.pdf"
              target="_blank"
              rel="noopener noreferrer"

            >
              Source
            </a>
          </div>
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="orange">FOSTER CARE PLACEMENT SERVICES IN ARKANSAS</h2>

        <div className="col-lg-3 col-md-4 float-left">
        <ArkansasShape color="#F26322" />

        </div>

        <p>
          In 2017, the agency extended its continuum of ministry as a Private
          Licensed Placement Agency (PLPA) for foster care in Arkansas; COMP
          <strong>ACT</strong> was awarded one of the first PLPA agreements for
          foster care in the state. Our strategy is built on evidence that
          improves three important outcomes – capacity, stability and quality.
          Thus, our strategy differs from many agencies. First, we plant
          CompaCare in a partnering church, then recruit foster families within,
          and then placements are made. The result is better outcomes with
          faster permanency. The program is succeeding and expanding.
        </p>
        <p>
          COMP<strong>ACT</strong>’s home-opening process is streamlined,
          comprehensive, and helps foster families get on mission quickly and
          competently. The agency provides a new generation of the state
          required foster parent training through a Christian lens. It consists
          of five in-person sessions taught by qualified staff and four online
          sessions that can be completed in the comfort of home.
        </p>
        <p>
          COMP<strong>ACT</strong> succeeds with a Home Study of the prospective
          foster family. The process can be completed in approximately 90 days,
          which is often comparatively faster. The family can then receive their
          necessary government-agency provided foster license.
        </p>
        <p>
          COMP<strong>ACT</strong> in Arkansas receives placement referrals from
          the state but makes the placement in one of its fitting, trained and
          licensed foster homes.
        </p>
        <p>
          COMP<strong>ACT</strong> provides essential support to foster
          families.
        </p>

        <p>
          • Family Consultant – COMP<strong>ACT</strong> PLPA foster families
          receive an assigned Family Consultant who provides a substantial layer
          of support for the mission journey.
        </p>
        <p>
          • Prayer – As a Christian agency, the staff regularly pray with the
          foster families.
        </p>
        <p>
          • Partnership – COMP<strong>ACT</strong> works directly in partnership
          with the church of its foster families to deploy the CompaCare
          wrap-around support.
        </p>
        <p>
          • Family Advocate – The CompaCare system provides a competently
          trained volunteer to be a Family Advocate for the foster family. The
          Family Advocate is there to pray, encourage and support with the
          church.
        </p>
        <p>
          The overall service provides 24/7 access to one of COMP
          <strong>ACT</strong>'s trained professionals. Additional Hillcrest
          resources, including on-campus licensed counselors and warehouse goods
          benefit nearby foster families. In Arkansas, you can choose to open
          your foster home through a nationally accredited, Christ-centered
          professional agency. COMP<strong>ACT</strong> is that agency.
        </p>
      </Container>

      <Container fluid className="bg-orange text-white py-4 text-center">
        <div className="container">
          <p className="h2">FOSTER CARE SERVICES BEYOND</p>
          <p className="lead">
            COMP<strong>ACT</strong>’s strategy is to expand foster care
            ministry services into additional states over the next decade.{" "}
          </p>
          <p className="lead">
            Missouri is first and underway. The strategy is similar to our
            Arkansas work with one very important difference. In Missouri,
            rather than COMP<strong>ACT</strong> being the placement agency, it
            will be the licensing agency. In Arkansas, the only licensing agency
            is the state.{" "}
          </p>
          <p className="lead">
            COMP<strong>ACT</strong> will recruit, train, license and support
            foster families in the Missouri strategy.
          </p>
          <p className="lead">
            As COMP<strong>ACT</strong> foster services expand into other
            states, it will likely deploy a form of the Arkansas or Missouri
            foster care agency strategies, since one or the other is apt to
            serve.
          </p>
          <p className="lead">
            Remember, it is the excellent CompaCare resource that empowers
            better outcomes in the foster care journey.
          </p>

          <Container className="mt-5 w-25 d-flex align-content-center">
            {/* <Image src={FosterCareLogo} fluid /> */}
            <FosterCareLogo color="#fff"/>
          </Container>


        </div>
      </Container>

      <Container fluid className="my-5">
        <Container>
          <p className="h2 text-center">BIOLOGICAL MOTHER SAVED ON EASTER</p>

          <p>
            On Easter weekend, while worshippers all over the world were
            gathered to celebrate the risen Savior, one mother began her new
            life in Christ. Just 12 months earlier, this mother was in the
            throes of addiction, living a chaotic and unstable life. Her two
            children had just been removed from her care and placed by the state
            in a COMP<strong>ACT</strong> foster home. Their father had been
            arrested, and she had virtually no support.
          </p>
          <p>
            God began using the foster family in an intentionally missional way,
            demonstrating God’s love towards these two beautiful children. In
            time, the family reached out to the children’s mother, offering
            prayer, encouragement and support. Soon, the foster family and their
            CompaCare church was completely wrapping around this struggling
            family. The foster family’s small group at church helped connect
            this mother with safe housing and provided her with needed
            appliances.
          </p>
          <p>
            A few weeks prior to Easter, the judge began to talk about
            reunification. He asked this mother pointedly, “How will you manage
            to care for these kids if I return them you?” Just then, the COMP
            <strong>ACT</strong> foster mother stood up and offered her support:
            “Your honor, my family has committed to helping her in any way she
            needs it.”{" "}
          </p>
          <p>
            With reunification looming just a few weeks away, the foster parents
            invited the mother to join them and her children in services on
            Easter weekend. She accepted their offer and attended a Saturday
            night service. At the conclusion of that service, she responded to
            the invitation to receive Jesus as her Savior. She’s now been united
            with Christ and reunited with her children!
          </p>
        </Container>
      </Container>

      <Container fluid className="py-5 bg-orange text-white">
        <div className="row">
          <div className="col-md-6 col-sm-12 offset-md-1 offset-sm-0 text-center">
            <h3>Do you live in Arkansas?</h3>
            <h3>
              FOSTER WITH COMP<strong>ACT</strong>®
            </h3>
            <p>
              {" "}
              COMP<strong>ACT</strong> is now able to open foster homes in
              Arkansas. If God has called you to foster, consider fostering
              through COMP<strong>ACT</strong> - where you get all the support
              you need. Fill out the contact form below and a member of our
              Foster Care Department will contact you with more information.{" "}
            </p>
            <Link to="/fosterform"
              className="btn btn-dark btn-lg"
              role="button">
               Go to form
              </Link>
          </div>

          <Container className="col-md-5 col-sm-12 d-flex justify-content-center w-25">
          <ArkansasShape color="#fff" />

          </Container>
        </div>
      </Container>

      <Container className="my-4 text-center">
        <h3>Frequently asked questions</h3>
        <Row className="mt-4">
          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: What does it mean to be a foster parent?</h4>
                <p>
                  A: Foster parents invite children to join their families on a
                  temporary basis when they are not able to live with their
                  caregivers due to abuse, neglect, or abandonment.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: How long will a foster child be in my home?</h4>
                <p>
                  A: There is no “typical” case. While children are living in a
                  foster home, their parents are given an opportunity to correct
                  the issues that brought about the need for foster care. This
                  can take from a few months to over a year.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: Is foster care and adoption the same thing?</h4>
                <p>
                  A: No! Foster children are “in the system” because their
                  parents need time to make some changes in their lives. About
                  20% of the time, foster children become adoptable. Foster
                  parents are often given the option to adopt these children,
                  and often they do so, but this is not expected of them.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: How long does it take to become a foster parent?</h4>
                <p>
                  A: Comp<strong>act</strong> has the most efficient, coherent,
                  and streamlined approval process in the state. We can often
                  take you from application to opened for placements in just 75
                  days!
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: Do foster families get paid?</h4>
                <p>
                  A: Foster families receive a modest stipend monthly to help
                  offset the costs involved with fostering. The amount is based
                  on the age of the child, and ranges from $410-$500 per month
                  per child.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: Is there an age limit for foster care?</h4>
                <p>
                  A: Foster families must be at least 21 years old. There is no
                  maximum age.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: Who will be there to help me if I foster?</h4>
                <p>
                  A: Comp<strong>act</strong> works with your church to build a
                  strong support ministry. Also, every Comp<strong>act</strong>{" "}
                  foster family is assigned a professional Family Consultant who
                  will serve as your go-to resource. You’ll even receive a
                  24-hour on-call number for after-hours concerns. You’ll never
                  foster alone!
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="text-center border-dark">
            <Card>
              <Card.Body>
                <h4>Q: Is there an age limit for foster care?</h4>
                <p>
                  A: Foster families must be at least 21 years old. There is no
                  maximum age.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FostercarePage;
