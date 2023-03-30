import {Image, Container, Row, Col} from "react-bootstrap";
import { useSpring, animated, easings } from "react-spring";


export default function Internships() {
  document.title = "COMPACT Internships"
  
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
<Container fluid className="photoblue mb-5">

<div className="row">
<div className="col-sm-12 col-md-7 col-lg-6 d-flex flex-column justify-content-center align-items-center px-4">

<animated.h1 style={titleOne} className="blue text-center">Welcome to COMP
                  <span className="act">ACT</span>'s Internship Program</animated.h1>
    <animated.p style={titleTwo}>Thank you for your interest in the COMP
                  <span className="act">ACT</span>(<b>COMP</b>assionate <b>ACT</b>ion) internship program. </animated.p>
  </div>

  <div className="col-sm-12 col-md-5 col-lg-6">
              <Image
                src="https://compact.family/images/0758.jpg"
                alt="Child representative"
                fluid
              />
            </div>
</div>
    </Container>
    <Container>
      <h3>Each summer we welcome college-aged students to spend eight weeks with us developing their leadership skills, challenging them in leadership positions, and equipping them for their next steps in life and ministry.</h3>
    <p>We’ve put together this page to answer some of your questions and help you get started. Don’t hesitate to contact us with questions and to learn more. We look forward to having you join the COMP
                  <span className="act">ACT</span> Family, for a summer you will not forget.</p>

    <h2>Testimonies</h2>
    <blockquote className="px-4 blockquote">
      <p>“In March of 2019 I went to Real Life Children’s Ranch, a foster home in Okeechobee, FL. Here I learned administrative skills working in an office setting and communication through state conferences and weekly staff meetings. In addition to serving foster parents, I led humanitarian programs with churches and other groups to help benefit The Ranch. My internship allowed me to receive hands-on experience running an organization with many moving pieces.</p>
      <p>I learned how to care for victims of abuse and neglect. I developed time management and organization skills, to keep vital records of children updated to state requirements. God definitely stretched me and opened my eyes first-hand to understanding ministry within the foster care community.</p>
      <p>In 2022 I stepped into my role as the Administrative Coordinator for COMP
                  <span className="act">ACT</span> Family Services, Arkansas Director. This position gives me the opportunity to grow in my leadership and be part of the National Assemblies of God Child Welfare Agency. I now find myself serving in a healthy work environment that revolves around healing for the hurting and broken.”</p>
      <figcaption className="blockquote-footer mb-4">Lauren Pollock</figcaption>
    </blockquote>
    <blockquote className="px-4 blockquote">
      <p>“During my internship I was able to interact with the children and teens on campus, work in a great environment, and develop relationships with the staff! I especially enjoyed working in the kitchens, helping prepare and serve meals to the kids!”</p>
      <figcaption className="blockquote-footer mb-4">Grace English</figcaption>
    </blockquote>
    </Container>

    <Container>

    <h2>What Type of Internship Opportunities Exist?</h2>
    <ul>
      <li>Communication and digital arts or information technology students with our IT Department.</li>
      <li>Physical Education or Kinesiology students to work directly with our residents in our large, newly remodeled gym.</li>
      <li>Interaction with staff in each of our departments, giving you insight into multiple ministry opportunities within the social work area.</li>
      <li>Youth and Kids ministry students to work directly with our residents in direct care.</li>
      <li>Help coordinate church mission teams.</li>
      <li>Chapel services with staff and students.</li>
      <li>Recreational activities with the residents.</li>
      <li>Help with various campus projects.</li>
      <li>Plan and engage in events.</li>
      <li>Administrative duties.</li>
      <li>Participate in donor mailings.</li>
      <li>Light maintenance and landscaping on campus.</li>
      <li>Enjoy meals with staff and residents.</li>
      <li>Memories that will last a lifetime.</li>
    </ul>
    </Container>

    <Container>

    <h2>What Will I Need?</h2>
    <p>
      Church and office, recreational, and casual clothing, as well as sports and swim gear.
      </p>
    <p>Spending money.
      
       There are several coffee and dessert shops, water park, and community events.</p>
       <p>It is suggested that you have a vehicle, although not necessary.</p>
 
    <p>We provide a newly remodeled apartment for up to three interns. This on-campus apartment has a kitchen area, private bath, bedroom, and dining area. Our campus has an indoor gym, outdoor basketball court, pond, pavilion, and large field for sporting events.</p>

    <p>We also have single studio apartments. These on-campus apartments have a kitchen area, private bath, bedroom, and dining area.  We provide most dinners and $150 a week stipend.</p>
 

<Row md={4} sm={2} xs={1} className="m-0">
  <Col>
  <Image src={require("../img/internBedroom.jpg")} fluid />
  </Col>
  <Col>
  <Image src={require("../img/internBathroom.jpg")} fluid />
  </Col>
  <Col>
  <Image src={require("../img/internDining-Table.jpg")} fluid />
  </Col>
  <Col>
  <Image src={require("../img/internKitchen.jpg")} fluid />
  </Col>

  
  <Col>
  <Image src={require("../img/internGym.jpg")} fluid />
  </Col>
  <Col>
  <Image src={require("../img/internApt.jpg")} fluid />
  </Col>
  <Col>
  <Image src={require("../img/internApt2.jpg")} fluid />
  </Col>
  <Col>
  <Image src={require("../img/internPool.jpg")} fluid />
  </Col>
</Row>

    </Container>

    <Container className="mt-5">

    <h2>What’s Hot Springs, Arkansas Like?</h2>
    <ul>
      <li>Home of the first General Council of the AG back in 1914.</li>
      <li>Birthplace of Hillcrest Children’s Home (currently COMP
                  <span className="act">ACT</span>) in 1944.</li>
      <li>Temperatures can reach 100 degrees in the Summer.</li>
      <li>Located in a National Park, with opportunities for mountain biking, 26 miles of hiking trails.</li>
      <li>Lake Ouachita offering, fishing, swimming and lake activities.</li>
      <li>Magic Springs theme and water park.</li>
      <li>Hot mineral springs.</li>
      <li>Tourist destination as summers are busy with several recreational activities.</li>
 
    </ul>
    </Container>

    <Container>

    <h2>What’s My Next Step?</h2>
    <p>Complete the application and/or contact Lauren Pollock at lpollock@compact.family or by calling 501.262.1660.</p>


    <p className="lead text-center">
          <a
            href="https://compact.family/download/Application_for_Internship_Program_7_19_21.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg text-center mt-5"
            role="button"
          >
            Internship Application PDF
          </a>
        </p>


    </Container>
    </>
  )
}
