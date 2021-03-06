import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomeFeature = () => {
    return(
        <>

<Container fluid className="py-3 bg-dark">
<Row>
    <Col lg={4} md={4}>
       <Card className="position-relative bg-blue clickable text-center text-white p-5 d-flex justify-content-center align-items-center" style={{minHeight:"310px", background:"#BD0019"}}>

        <h4>
        Give a gift to help the children and teens celebrate Christmas.
        </h4>
    <Link to="/christmas">
        <button className="btn btn-dark stretched-link">CHRISTMAS</button>
    </Link>
       </Card>
        </Col>


    <Col lg={4} md={4}>
       <Card className="position-relative bg-blue clickable text-center text-white p-5 d-flex justify-content-center align-items-center" style={{minHeight:"310px"}}>

        <h4>
        Your giving is vital to COMP<strong>ACT</strong>'s mission.
        </h4>
    <Link to="/give">
        <button className="btn btn-dark stretched-link">Find out ways you can give</button>
    </Link>
       </Card>
        </Col>


    <Col lg={4} md={4}>
        <Card className="bg-pink clickable text-center p-5 px-md-3 px-lg-5 d-flex justify-content-center align-items-center text-white" style={{minHeight:"310px"}}>

    <div className="newtagwrap">
    {/* <p className="newtag">NEW!</p> */}

        <h4>
            Highlands Connect Training
            </h4>
            <p>A new series to equip single moms with a whole-person approach.</p>
<Link to="/highlands-training">
            <button className="btn btn-dark stretched-link">Check it out</button>
</Link>
    </div>
        </Card>
    </Col>




    

</Row>

</Container>


        </>
    )
}

export default HomeFeature;