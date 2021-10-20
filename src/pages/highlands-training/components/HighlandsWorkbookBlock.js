import {Container, Row, Col, Image} from 'react-bootstrap'

export default function HighlandsWorkBookBlock() {
    return (
        <>

<Container fluid className="py-3 bg-secondary text-white text-center">
    <Row>
        <Col sm={12} md={6} lg={8} className="d-flex align-items-center justify-content-center">
        <div>
            <p className="h3">Highlands Connect Workbook</p>
            <p className="lead">Follow along with the download printable PDF or purchase full color spiral version.</p>   
       </div>
        </Col>
        
        <Col>

      <Row>
          <Col md={12} lg={6} className="position-relative">
            
            <Image fluid
            src="https://compact.family/images/HC_PartricipantWorkbook_printableCover.png" 
            layout="intrinsic"
            // objectFit="cover"
            width="220"
            height="285"
            alt="Workbook download and print cover"/>

             <Col className="text-center">
              <a className="btn btn-dark stretched-link" href="https://compact.family/download/HighlandsConnect_PartricipantWorkbook_printable.pdf" target="_blank"
              rel="noopener noreferrer"
              >Download PDF</a>
</Col>  </Col>
        
          <Col className="position-relative">
            
            <Image fluid
            src="https://compact.family/images/HC_Partricipantworkbook.png" 
            layout="intrinsic"
            // objectFit="cover"
            width="248"
            height="300"
            alt="Workbook full color cover"/>

             <div className="text-center">
              <a className="btn btn-dark stretched-link" href="https://compactfamily.square.site/" target="_blank"
              rel="noopener noreferrer"
              >Buy your copy here</a>
              </div>
          </Col>
      </Row>
        </Col>
        </Row>
    </Container>




        </>
    )
}
