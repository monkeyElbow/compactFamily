// import BG1 from '../images/bg1.jpg';
import FindLogo from '../graphics/FindLogo';
import { Row, Col, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import HillcrestLogo from '../graphics/HillcrestLogo';
import HighlandsLogo from '../graphics/HighlandsLogo'
import FosterCareLogo from '../graphics/FosterCareLogo'
import SafeCareLogo from '../graphics/SafeCareLogo'
import CompactLogo from '../graphics/CompactLogo';


export function Banner () {
  

    let location = useLocation();
    
    return(

<>
{/* {location.pathname.substring(1)} */}

{/* { location.pathname !== '/' && <div>everything not home</div> } */}
{/* <h4>{location.pathname.substring(1)}</h4> */}

{location.pathname === "/removeforsec" && (
        <Container fluid className="bg-blue text-white text-center p-3">
          <Row className="p-2 m-0">
            <Col xs={12} sm={12} md={5} lg={3} xl={2}>
              <CompactLogo color="#fff" />
            </Col>
            <Col className="d-flex justify-content-center text-center align-self-center">
              <div>
                <p className="h4">FAMILY SERVICES</p>
                <p className="h5">
                  Redeeming vulnerable children and families since 1944
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}




{ location.pathname === '/find' && <div> 
    <Container fluid className="m-0 p-0">
 <Row className="p-3 m-0 bg-yellow text-white" >
 
<Col xs={12} sm={5} lg={3} xl={2}>

<FindLogo color="#fff" />
 
 </Col>

 <Col className="d-flex justify-content-center text-center align-self-center">
<div>

<h1 className='fw-bold'>FIND</h1>
{/* <h4>FRIENDS. INDIVIDUALS. NEIGHBORS. DEVOTEES.</h4> */}
<h4>Finding Lost Family for Foster Youth.</h4>
</div>

</Col>

    </Row>
  
</Container></div> 

    }



{ location.pathname === '/compacare' && <div> 
    <Container fluid className="m-0 p-0 bg-red text-center py-3 text-white">


<p className="h1">COMPA<strong>CARE</strong><sup>&reg;</sup></p>
              {/* <p className="h4"><strong>COMPASSION CARE</strong></p> */}
              <p className="h5">Equipping Churches to Reach Vulnerable Families and Children in Surrounding Communities.</p>

</Container></div> 
    }
    

{/* hillcrest */}
{ location.pathname === '/hillcrest' && <div> 
    <Container fluid className="m-0 p-0">
 <Row className="p-3 m-0 bg-green text-white" >
 
<Col xs={12} sm={5} lg={3} xl={2}>
<HillcrestLogo color="#fff" />
 </Col>

 <Col className="d-flex justify-content-center text-center align-self-center">
<div>

<p className="h1 fw-bold">Hillcrest Children's Home</p>
<p className='lead'>Family Style Cottages for Foster Children and Youth, including kids with Developmental Disabilities.</p>
        {/* <p className="lead">Hillcrest Children’s Home rests on a 52-acre campus with 
          8 cottages and a 24-apartment center for foster youth preparing for adult living. </p> */}
</div>

</Col>

    </Row>
  
</Container></div> 

    }



{/* highlands */}
{ location.pathname === '/highlands' && <div> 
    <Container fluid className="m-0 p-0">
 <Row className="p-3 m-0 bg-pink text-white" >
 
<Col xs={12} sm={5} lg={3} xl={2}>
 <HighlandsLogo color="#fff" />
 </Col>

 <Col className="d-flex justify-content-center text-center align-self-center">
<div>

<p className="h1">Highlands Adoption</p>
        <p className="lead"> Adoption Services and Maternity Home for Teens.</p>
</div>

</Col>

    </Row>
  
</Container></div> 

    }


{/* foster care */}
{ location.pathname === '/fostercare' && <div> 
    <Container fluid className="m-0 p-0">
 <Row className="m-0 bg-orange text-white" >
 
<Col xs={12} sm={5} md={3} xl={2} className="p-2 d-flex align-items-center justify-content-center">
 <FosterCareLogo color="#fff" />
 </Col>

 <Col className="d-flex justify-content-center  align-self-center p-5 ms-5">
<div>

<p className="h1 text-center">Foster Care</p>
        <p className="h5 text-center">Placement, Licensing, Case Management, Training and Prevention Services.</p>
</div>

</Col>

    </Row>
  
</Container></div> 

    }



{ location.pathname === '/safecare' && <div> 
    <Container fluid className="m-0 p-0">
 <Row className="m-0 bg-purple text-white" >
 
<Col xs={12} sm={5} md={3} xl={2} className="p-2 d-flex align-items-center justify-content-center">
 <SafeCareLogo color="#fff" />
 </Col>

 <Col className="d-flex justify-content-center  align-self-center p-5">
<div>

<p className="h1 text-center">SafeCare</p>
        <p className="h5">Prevention Services for At-risk Children and Families.</p>
</div>

</Col>

    </Row>
  
</Container></div> 

    }





</>
    )
}

export default Banner
