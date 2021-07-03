import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomeAnnouncements from "./HomeAnnouncements";
import JobList from "./JobList";

const HomeFeature = () => {
    return(
        <>

<Container fluid>
<Row>
    <Col lg={6} md={6} className="bg-blue clickable text-center text-white p-5 d-flex justify-content-center align-items-center">
       <div>

        <h4>
        Your giving is vital to COMP<strong>ACT</strong>'s mission.
        </h4>
    <Link to="/give">
        <button className="btn btn-dark stretched-link">Find out ways you can give.</button>
    </Link>
       </div>
        </Col>


    <Col lg={6} md={6} className="bg-pink clickable text-center p-5 px-md-3 px-lg-5 d-flex justify-content-center align-items-center text-white">
    <div className="newtagwrap">
    <p className="newtag">NEW!</p>

        <h4>
            Highlands Connect Training
            </h4>
            <h5>A new series to equip single moms with a whole-person approach.</h5>
<Link to="/highlands-training">
            <button className="btn btn-dark stretched-link">Check it out</button>
</Link>
    </div>
    </Col>




    



    <Col lg={6} md={6} className="bg-secondary text-white clickable p-5 text-center">

        <h4>Announcements</h4>

<HomeAnnouncements />


<Link to="/announcements">
<button className="btn btn-dark">Announcements Page</button>
        </Link>

        </Col>



{/* <Link to="/employment"> */}

<Col lg={6} md={6} className="bg-blue text-white p-5 text-center">

<h4>Employment Oppurtunities</h4>
<JobList />
<br />
<Link to="/employment">
<button className="btn btn-light">More careers</button>
</Link>

</Col>
{/* </Link> */}

</Row>

</Container>


        </>
    )
}

export default HomeFeature;