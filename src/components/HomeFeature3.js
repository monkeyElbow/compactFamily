import {Row, Col, Container} from "react-bootstrap"
import { Link } from "react-router-dom";
import parse from "html-react-parser";



export default function HomeFeature3() {

    
const scoreContent = [
    {
      dept: "Hillcrest",
      header: "Hillcrest Children’s Home",
      lead: "kids served in residential programs in 2022!",
      body: "Hillcrest rests on a 52-acre campus with 8 cottages and a 24-apartment center for foster youth preparing for adult living.",
      bg: "bg-green p-5",
      link: "/hillcrest",
    },
    {
      dept: "Highlands",
      header: "Highlands Maternity Home",
      lead: "mothers and babies served in Highlands Maternity Home and adoptions facilitated in 2022!",
      body: "Bringing hope and healing to women facing unplanned pregnancies and services to families looking to expand through adoption.",
      bg: "bg-pink p-5",
      link: "/highlands",
    },
    {
      dept: "fosterCare",
      header: "Foster Care",
      lead: "kids served in Foster Care programs in 2022!",
      body: "COMP<strong><em>ACT</em></strong> is your partner for serving vulnerable children and families in the foster care system.",
      bg: "bg-orange p-5",
      link: "/fostercare",
    },
    {
      dept: "safecare",
      header: "SafeCare",
      lead: "children and parents served in 2022!",
      body: "SafeCare serves at risk children and their families to help prevent those children from entering the foster care system and experiencing separation from family.",
      bg: "bg-purple p-5",
      link: "/safecare",
    },
    {
      dept: "compacare",
      header: "CompaCare",
      lead: "churches, families, and children served in 2022!",
      body: "CompaCare Helps churches minister to vulnerable children and families mobilizes, trains, certifies, and organizes caring Christian people in the church to redeem and empower people in need.",
      bg: "bg-red p-5",
      link: "/compacare",
    },
    {
      dept: "FIND",
      header: "FIND",
      lead: `Clients served in Hillcrest, Highlands, Foster Care, SafeCare and CompaCare in 2022!`,
      body: `Finding lost family for foster youth.`,
      bg: "bg-yellow p-5",
      link: "/find",
    },
  ];


  function ScoreCard({ dept, header, body, bg, link }) {
    return (
      <Col
        md={6}
        lg={4}
        className={`${bg} m-0 p-5 text-white position-relative clickable`}
      >
        <Row className="mb-2" style={{ minHeight: "2rem" }}>
          <Col>
            <h1
              style={{
                fontWeight: 800,
                fontSize: "14rem",
                left: -10,
                top: -50,
                opacity: "15%",
                letterSpacing: -15,
              }}
              className="
largeNumber 
position-absolute 
text-white"
            >

            </h1>
          </Col>

          <Col
            sm={12}
            md={12}
            lg={10}
            className="d-flex flex-column justify-content-center"
          >

          </Col>
        </Row>
        <h1
          style={{ fontSize: "3rem", lineHeight: ".9em", letterSpacing: -1 }}
        >
          {parse(header)}
        </h1>
        <p>{parse(body)}</p>

        <Link
          to={link}
          className="btn btn-light text-dark mt-3 stretched-link"
          role="button"
        >
          Learn more about {dept}
        </Link>
      </Col>
    );
  }



  return (
    <Container fluid>
    <Row>

 
         { scoreContent.map((sc) => (
             <ScoreCard
             key={sc.dept}
             dept={sc.dept}
             header={sc.header}
             body={sc.body}
             lead={sc.lead}
             bg={sc.bg}
             link={sc.link}
             />
             ))}
             </Row>
    
    
    </Container>
  )
}


