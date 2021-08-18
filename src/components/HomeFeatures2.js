import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import HomeAnnouncements from "./HomeAnnouncements";
import JobList from "./JobList";

export default function HomeFeatures2() {
    return (
        <>



         <Container fluid>
<Row>
  



    <Col lg={6} md={6} className="bg-secondary text-white clickable p-5 text-center">

        <h4>Announcements</h4>

<HomeAnnouncements />


<Link to="/announcements">
<button className="btn btn-dark">Announcements Page</button>
        </Link>

        </Col>




<Col lg={6} md={6} className="bg-blue text-white p-5 text-center">

<h4>Employment Opportunities</h4>
<JobList />
<br />
<Link to="/employment">
<button className="btn btn-light">More careers</button>
</Link>

</Col>


</Row>

</Container>



        </>
    )
}
