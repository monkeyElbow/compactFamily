import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
// import HomeAnnouncements from "./HomeAnnouncements";
import JobList from "./JobList";

export default function HomeFeatures2() {
    return (
        <>



         <Container fluid>
<Row>
  



    {/* <Col lg={6} md={6} className="bg-secondary text-white clickable p-5 text-center">

        <h4>Announcements</h4>

<HomeAnnouncements />


<Link to="/announcements">
<button className="btn btn-dark">Announcements Page</button>
        </Link>

        </Col> */}




<Col lg={12} md={12} className="bg-blue text-white p-5 text-center">

<p className="lh-1 fw-bold fs-2 mb-4">Employment Opportunities</p>
<JobList />
<br />
<Link to="/employment">
<button className="btn btn-light">Click for More</button>
</Link>

</Col>


</Row>

</Container>



        </>
    )
}
