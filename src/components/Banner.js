// import BG1 from '../images/bg1.jpg';
import FindLogo from '../graphics/FindLogo';
import { Row, Col, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import HillcrestLogo from '../graphics/HillcrestLogo';
import HighlandsLogo from '../graphics/HighlandsLogo'
import FosterCareLogo from '../graphics/FosterCareLogo'
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
 <Row className="p-3 m-0 bg-blue text-white" >
 
<Col xs={12} sm={5} lg={3} xl={2}>

<FindLogo color="#fff" />
 
 </Col>

 <Col className="d-flex justify-content-center text-center align-self-center">
<div>

<h2>FIND</h2>
<h4>FRIENDS. INDIVIDUALS NEIGHBORS DEVOTEES.</h4>
<h4>A Kinship Navigating Service</h4>
</div>

</Col>

    </Row>
  
</Container></div> 

    }



{ location.pathname === '/compacare' && <div> 
    <Container fluid className="m-0 p-0 bg-red text-center py-3 text-white">


<p className="h1">COMPA<strong>CARE</strong><sup>&reg;</sup></p>
              <p className="h4"><strong>COMPASSION CARE SYSTEM</strong> by COMP<strong>ACT</strong><sup>&reg;</sup></p>
              <p className="h5">Helping churches minister to vulnerable children and families</p>

</Container></div> 
    }
    

{/* hillcrest */}
{ location.pathname === '/hillcrest' && <div> 
    <Container fluid className="m-0 p-0">
 <Row className="p-3 m-0 bg-green text-white" >
 
<Col xs={12} sm={5} lg={3} xl={2}>
<HillcrestLogo color="#fff" />
 {/* <Image src={HillcrestLogo} fluid /> */}
 </Col>

 <Col className="d-flex justify-content-center text-center align-self-center">
<div>

<p className="h1">Hillcrest Children's Home</p>
        <p className="lead">Hillcrest Children’s Home rests on a 52-acre campus with 
          8 cottages and a 24-apartment center for foster youth preparing for adult living. </p>
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

<p className="h1">Highlands Adoption and Maternity</p>
        <p className="lead">Highlands Adoption and Maternity Services, established in 1966, is a Christ-centered ministry dedicated to bringing hope and healing to women facing unplanned pregnancies and services to families looking to expand through adoption.</p>
</div>

</Col>

    </Row>
  
</Container></div> 

    }


{/* foster care */}
{ location.pathname === '/fostercare' && <div> 
    <Container fluid className="m-0 p-0">
 <Row className="p-3 m-0 bg-orange text-white" >
 
<Col xs={12} sm={5} lg={3} xl={2}>
 {/* <Image src={FosterCareLogo} fluid /> */}
 <FosterCareLogo color="#fff" />
 </Col>

 <Col className="d-flex justify-content-center text-center align-self-center">
<div>

<p className="h1">Foster Care</p>
        <p className="lead">There are more than 400,000 U.S. children in foster care every day. Foster children and families are in every community and God has called the Church to them. Every church can have an effective ministry to America&#39;s foster care community.</p>
</div>

</Col>

    </Row>
  
</Container></div> 

    }





</>
    )
}

export default Banner
