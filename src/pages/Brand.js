import { Container, Row } from "react-bootstrap";
import BrandPalette from "../components/BrandPalette";
import CompactLogo from "../graphics/CompactLogo";

const Brand = () => {
  return (
    <>
      <Container fluid className="bg-blue text-center text-white py-3">
        <h1>
          COMP<strong>ACT</strong> Brand Resources
        </h1>
      </Container>

      <Container className="my-5">
        <Row>
          <div className="col-lg-6 col-md-12">
            <h4>
              COMP<strong>ACT</strong> Logo
            </h4>

            <h4>
              Please respect the whitespace around our logos and find download
              able art below.
            </h4>
            <p className="lead">
              Use 50% of the height of the logo to measure how much white space
              around the logo.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 bg-dark p-5">
            {/* <brandLogoWhiteSpace /> */}
            <CompactLogo />
          </div>
        </Row>
      </Container>

      <Container>
        <Row className="row-cols-1 row-cols-md-3 d-flex justify-content-center">
          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="https://compact.family/download/logos/compactLogoColorRGB.svg" alt="COMPACT RGB Color">
  </div> */}
            <div>
              <h5 className="card-title">
                COMP<strong>ACT</strong> LOGO RGB COLOR for screen use
              </h5>
              <a
                href="https://compact.family/download/logos/compactLogoColorRGB.png"
                download="download/logos/compactLogoColorRGB.png"
              >
                PNG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoColorRGB.svg"
                download="download/logos/compactLogoColorRGB.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoColorRGB.ai"
                download="download/logos/compactLogoColorRGB.ai"
              >
                AI Download
              </a>
            </div>
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactLogoColorRGB.svg" alt="COMPACT CMYK Color" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">
                COMP<strong>ACT</strong> LOGO CMYK COLOR for 4C printing
              </h5>
              <a
                href="https://compact.family/download/logos/compactLogoColorCMYK.png"
                download="download/logos/compactLogoColorCMYK.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoColorCMYK.svg"
                download="download/logos/compactLogoColorCMYK.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoColorCMYK.eps"
                download="download/logos/compactLogoColorCMYK.eps"
              >
                EPS Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoColorCMYK.ai"
                download="download/logos/compactLogoColorCMYK.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactLogoK.svg" alt="COMPACT 1 Color" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">
                COMP<strong>ACT</strong> LOGO 1C
              </h5>
              <a
                href="https://compact.family/download/logos/compactLogoK.png"
                download="download/logos/compactLogoK.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoK.svg"
                download="download/logos/compactLogoK.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoK.eps"
                download="download/logos/compactLogoK.eps"
              >
                EPS Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoK.ai"
                download="download/logos/compactLogoK.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top bg-blue">
    <img className="card-img-top w-75" src="../download/logos/compactLogoReversed.svg" alt="COMPACT Reversed" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">
                COMP<strong>ACT</strong> LOGO REVERSED
              </h5>
              <a
                href="https://compact.family/download/logos/compactLogoReversed.png"
                download="download/logos/compactLogoReversed.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoReversed.svg"
                download="download/logos/compactLogoReversed.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoReversed.eps"
                download="download/logos/compactLogoReversed.eps"
              >
                EPS Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactLogoReversed.ai"
                download="download/logos/compactLogoReversed.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactHillcrestLogoK.svg" alt="Hillcrest 1 Color" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">HILLCREST LOGO 1C</h5>
              <a
                href="https://compact.family/download/logos/compactHillcrestLogoK.png"
                download="download/logos/compactHillcrestLogoK.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactHillcrestLogoK.svg"
                download="download/logos/compactHillcrestLogoK.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactHillcrestLogoK.ai"
                download="download/logos/compactHillcrestLogoK.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top bg-green">
    <img className="card-img-top w-75" src="../download/logos/compactHillcrestLogoReversed.svg" alt="Hilcrest Reversed" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">HILLCREST LOGO REVERSED</h5>
              <a
                href="https://compact.family/download/logos/compactHillcrestLogoReversed.png"
                download="download/logos/compactHillcrestLogoReversed.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactHillcrestLogoReversed.svg"
                download="download/logos/compactHillcrestLogoReversed.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactHillcrestLogoReversed.ai"
                download="download/logos/compactHillcrestLogoReversed.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactHighlandsLogoK.svg" alt="Highlands 1 Color" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">HIGHLANDS LOGO 1C</h5>
              <a
                href="https://compact.family/download/logos/compactHighlandsLogoK.png"
                download="download/logos/compactHighlandsLogoK.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactHighlandsLogoK.svg"
                download="download/logos/compactHighlandsLogoK.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactHighlandsLogoK.ai"
                download="download/logos/compactHighlandsLogoK.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top bg-pink">
    <img className="card-img-top w-75" src="../download/logos/compactHighlandsLogoReversed.svg" alt="Highlands Reversed" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">HIGHLANDS LOGO REVERSED</h5>
              <a
                href="https://compact.family/download/logos/compactHighlandsLogoReversed.png"
                download="download/logos/compactHighlandsLogoReversed.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactHighlandsLogoReversed.svg"
                download="download/logos/compactHighlandsLogoReversed.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactHighlandsLogoReversed.ai"
                download="download/logos/compactHighlandsLogoReversed.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactFosterCareLogoK.svg" alt="Foster Care 1 Color" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">FOSTER CARE LOGO 1C</h5>
              <a
                href="https://compact.family/download/logos/compactFosterCareLogoK.png"
                download="download/logos/compactFosterCareLogoK.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactFosterCareLogoK.svg"
                download="download/logos/compactFosterCareLogoK.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactFosterCareLogoK.ai"
                download="download/logos/compactFosterCareLogoK.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top bg-orange">
    <img className="card-img-top w-75" src="../download/logos/compactFosterCareLogoReversed.svg" alt="Foster Care Reversed" style="padding: 30px"> 
  </div> */}
            <div>
              <h5 className="card-title">FOSTER CARE LOGO REVERSED</h5>
              <a
                href="https://compact.family/download/logos/compactFosterCareLogoReversed.png"
                download="download/logos/compactFosterCareLogoReversed.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactFosterCareLogoReversed.svg"
                download="download/logos/compactFosterCareLogoReversed.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactFosterCareLogoReversed.ai"
                download="download/logos/compactFosterCareLogoReversed.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactCompaCareLogoK.svg" alt="COMPACARE 1 Color" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">COMPACARE LOGO 1C</h5>
              <a
                href="https://compact.family/download/logos/compactCompaCareLogoK.png"
                download="download/logos/compactCompaCareLogoK.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactCompaCareLogoK.svg"
                download="download/logos/compactCompaCareLogoK.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactCompaCareLogoK.ai"
                download="download/logos/compactCompaCareLogoK.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top bg-red">
    <img className="card-img-top w-75" src="../download/logos/compactCompaCareLogoReversed.svg" alt="COMPACARE Reversed" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">COMPACARE LOGO REVERSED</h5>
              <a
                href="https://compact.family/download/logos/compactCompaCareLogoReversed.png"
                download="download/logos/compactCompaCareLogoReversed.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactCompaCareLogoReversed.svg"
                download="download/logos/compactCompaCareLogoReversed.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactCompaCareLogoReversed.ai"
                download="download/logos/compactCompaCareLogoReversed.ai"
              >
                AI Download
              </a>
            </div>{" "}
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactFindLogoK.svg" alt="COMPACT FIND 1 Color" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">FIND LOGO 1C</h5>
              <a
                href="https://compact.family/download/logos/compactFindLogoK.png"
                download="download/logos/compactFindLogoK.png"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactFindLogoK.svg"
                download="download/logos/compactFindLogoK.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactFindLogoK.ai"
                download="download/logos/compactFindLogoK.ai"
              >
                AI Download
              </a>
            </div>
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top bg-blue">
    <img className="card-img-top w-75" src="../download/logos/compactFindLogoReversed.svg" alt="COMPACT FIND Reversed" style="padding: 30px">
  </div> */}
            <div>
              <h5 className="card-title">FIND LOGO REVERSED</h5>
              <a
                href="https://compact.family/download/logos/compactFindLogoReversed.png"
                download="download/logos/compactFindLogoReversed.pngg"
              >
                PNG Download
              </a>{" "}
              <br />
              <a
                href="https://compact.family/download/logos/compactFindLogoReversed.svg"
                download="download/logos/compactFindLogoReversed.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/compactFindLogoReversed.ai"
                download="download/logos/compactFindLogoReversed.ai"
              >
                AI Download
              </a>
            </div>
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="https://compact.family/download/logos/compactLogoColorRGB.svg" alt="COMPACT RGB Color">
  </div> */}
            <div>
              <h5 className="card-title">SAFECARE LOGO 1C</h5>
              <a
                href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.png"
                download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.png"
              >
                PNG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.svg"
                download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.ai"
                download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO.ai"
              >
                AI Download
              </a>
            </div>
          </div>

          <div className="card card-body m-1 p-5">
            {/* <div className="card-img-top">
    <img className="card-img-top w-75" src="https://compact.family/download/logos/compactLogoColorRGB.svg" alt="COMPACT RGB Color">
  </div> */}
            <div>
              <h5 className="card-title">SAFECARE LOGO Reversed</h5>
              <a
                href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.png"
                download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.png"
              >
                PNG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.svg"
                download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.svg"
              >
                SVG Download
              </a>
              <br />
              <a
                href="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.ai"
                download="https://compact.family/download/logos/COMPACT_SAFECARE_LOGO_R.ai"
              >
                AI Download
              </a>
            </div>
          </div>
        </Row>
      </Container>

      <Container fluid className="my-5">
        <h4>
          COMP<strong>ACT</strong> Brand Colors
        </h4>
        <Row className="gx-1">
          <BrandPalette
            area="COMPACT BLUE"
            color="#2D81C4"
            rgb="r20 g131 b213"
            cmyk="c80 m25"
          />
          <BrandPalette
            area="COMPACARE RED"
            color="#C80000"
            rgb="r200"
            cmyk="m100 y70"
          />
          <BrandPalette
            area="HILLCREST GREEN"
            color="#00B473"
            rgb="g180 b115"
            cmyk="c70 y35"
          />
          <BrandPalette
            area="HIGHLANDS PINK"
            color="#EC2079"
            rgb="r236 g32 b121"
            cmyk="m85"
          />
          <BrandPalette
            area="FOSTER CARE"
            color="#F26322"
            rgb="r236 g32 b121"
            cmyk="m70 y80"
          />
          <BrandPalette
            area="SAFECARE"
            color="#684e9d"
            rgb="r104 g78 b157"
            cmyk="c60 m70"
          />
        </Row>
      </Container>

      {/* 
                 
                 <div className="jumbotron">
<div className="card-group">

      
    <div className="card">
          <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactLogoColorRGB.svg" alt="COMPACT RGB Color">
        </div>
    <div className="card-body">
        <h5 className="card-title">COMP<strong>ACT</strong> LOGO RGB COLOR for screen use</h5>
        <a href="https://compact.family/downloadlogos/compactLogoColorRGB.png" download="download/logos/compactLogoColorRGB.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactLogoColorRGB.svg" download="download/logos/compactLogoColorRGB.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactLogoColorRGB.ai" download="download/logos/compactLogoColorRGB.ai">AI Download</a></div>  
    </div>
        
        
    <div className="card">
          <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactLogoColorRGB.svg" alt="COMPACT CMYK Color">
        </div>
    <div className="card-body">
        <h5 className="card-title">COMP<strong>ACT</strong> LOGO CMYK COLOR for 4C printing</h5>
        <a href="https://compact.family/downloadlogos/compactLogoColorCMYK.png" download="download/logos/compactLogoColorCMYK.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactLogoColorCMYK.svg" download="download/logos/compactLogoColorCMYK.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactLogoColorCMYK.eps" download="download/logos/compactLogoColorCMYK.eps">EPS Download</a> 
        <a href="https://compact.family/downloadlogos/compactLogoColorCMYK.ai" download="download/logos/compactLogoColorCMYK.ai">AI Download</a>
        </div>  </div>
    
    
    <div className="w-md-100 w-sm-100"></div>
    
       <div className="card">
             <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactLogoK.svg" alt="COMPACT 1 Color">
           </div>
    <div className="card-body">
        <h5 className="card-title">COMP<strong>ACT</strong> LOGO 1C</h5>
        <a href="https://compact.family/downloadlogos/compactLogoK.png" download="download/logos/compactLogoK.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactLogoK.svg" download="download/logos/compactLogoK.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactLogoK.eps" download="download/logos/compactLogoK.eps">EPS Download</a>
            
        <a href="https://compact.family/downloadlogos/compactLogoK.ai" download="download/logos/compactLogoK.ai">AI Download</a></div>  </div>   
      
           <div className="card">
               <div className="card-img-top bg-blue">
    <img className="card-img-top w-75" src="../download/logos/compactLogoReversed.svg" alt="COMPACT Reversed">
               </div>
    <div className="card-body">
        <h5 className="card-title">COMP<strong>ACT</strong> LOGO REVERSED</h5>
        <a href="https://compact.family/downloadlogos/compactLogoReversed.png" download="download/logos/compactLogoReversed.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactLogoReversed.svg" download="download/logos/compactLogoReversed.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactLogoReversed.eps" download="download/logos/compactLogoReversed.eps">EPS Download</a>
                
        <a href="https://compact.family/downloadlogos/compactLogoReversed.ai" download="download/logos/compactLogoReversed.ai">AI Download</a>
               </div>  </div> 
    
    
        <div className="w-md-100 w-sm-100"></div>
    
       <div className="card">
             <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactHillcrestLogoK.svg" alt="Hillcrest 1 Color">
           </div>
    <div className="card-body">
        <h5 className="card-title">HILLCREST LOGO 1C</h5>
        <a href="https://compact.family/downloadlogos/compactHillcrestLogoK.png" download="download/logos/compactHillcrestLogoK.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactHillcrestLogoK.svg" download="download/logos/compactHillcrestLogoK.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactHillcrestLogoK.ai" download="download/logos/compactHillcrestLogoK.ai">AI Download</a></div>  </div>   
      
           <div className="card">
               <div className="card-img-top bg-green">
    <img className="card-img-top w-75" src="../download/logos/compactHillcrestLogoReversed.svg" alt="Hilcrest Reversed">
               </div>
    <div className="card-body">
        <h5 className="card-title">HILLCREST LOGO REVERSED</h5>
        <a href="https://compact.family/downloadlogos/compactHillcrestLogoReversed.png" download="download/logos/compactHillcrestLogoReversed.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactHillcrestLogoReversed.svg" download="download/logos/compactHillcrestLogoReversed.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactHillcrestLogoReversed.ai" download="download/logos/compactHillcrestLogoReversed.ai">AI Download</a>
               </div>  </div> 
    
    
    
    
            <div className="w-md-100 w-sm-100"></div>
    
       <div className="card">
             <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactHighlandsLogoK.svg" alt="Highlands 1 Color" style="padding: 30px">
           </div>
    <div className="card-body">
        <h5 className="card-title">HIGHLANDS LOGO 1C</h5>
        <a href="https://compact.family/downloadlogos/compactHighlandsLogoK.png" download="download/logos/compactHighlandsLogoK.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactHighlandsLogoK.svg" download="download/logos/compactHighlandsLogoK.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactHighlandsLogoK.ai" download="download/logos/compactHighlandsLogoK.ai">AI Download</a></div>  </div>   
      
           <div className="card">
               <div className="card-img-top bg-pink">
    <img className="card-img-top w-75" src="../download/logos/compactHighlandsLogoReversed.svg" alt="Highlands Reversed">
               </div>
    <div className="card-body">
        <h5 className="card-title">HIGHLANDS LOGO REVERSED</h5>
        <a href="https://compact.family/downloadlogos/compactHighlandsLogoReversed.png" download="download/logos/compactHighlandsLogoReversed.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactHighlandsLogoReversed.svg" download="download/logos/compactHighlandsLogoReversed.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactHighlandsLogoReversed.ai" download="download/logos/compactHighlandsLogoReversed.ai">AI Download</a>
               </div>  </div> 
    
    
    
    
                <div className="w-md-100 w-sm-100"></div>
    
       <div className="card">
             <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactFosterCareLogoK.svg" alt="Foster Care 1 Color">
           </div>
    <div className="card-body">
        <h5 className="card-title">FOSTER CARE LOGO 1C</h5>
        <a href="https://compact.family/downloadlogos/compactFosterCareLogoK.png" download="download/logos/compactFosterCareLogoK.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactFosterCareLogoK.svg" download="download/logos/compactFosterCareLogoK.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactFosterCareLogoK.ai" download="download/logos/compactFosterCareLogoK.ai">AI Download</a></div>  </div>   
      
           <div className="card">
               <div className="card-img-top bg-orange">
    <img className="card-img-top w-75" src="../download/logos/compactFosterCareLogoReversed.svg" alt="Foster Care Reversed">
               </div>
    <div className="card-body">
        <h5 className="card-title">FOSTER CARE LOGO REVERSED</h5>
        <a href="https://compact.family/downloadlogos/compactFosterCareLogoReversed.png" download="download/logos/compactFosterCareLogoReversed.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactFosterCareLogoReversed.svg" download="download/logos/compactFosterCareLogoReversed.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactFosterCareLogoReversed.ai" download="download/logos/compactFosterCareLogoReversed.ai">AI Download</a>
               </div>  </div> 
    
    
                   <div className="w-md-100 w-sm-100"></div>
    
       <div className="card">
             <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactCompaCareLogoK.svg" alt="COMPACARE 1 Color">
           </div>
    <div className="card-body">
        <h5 className="card-title">COMPACARE LOGO 1C</h5>
        <a href="https://compact.family/downloadlogos/compactCompaCareLogoK.png" download="download/logos/compactCompaCareLogoK.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactCompaCareLogoK.svg" download="download/logos/compactCompaCareLogoK.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactCompaCareLogoK.ai" download="download/logos/compactCompaCareLogoK.ai">AI Download</a></div>  </div>   
      
           <div className="card">
               <div className="card-img-top bg-red">
    <img className="card-img-top w-75" src="../download/logos/compactCompaCareLogoReversed.svg" alt="COMPACARE Reversed">
               </div>
    <div className="card-body">
        <h5 className="card-title">COMPACARE LOGO REVERSED</h5>
        <a href="https://compact.family/downloadlogos/compactCompaCareLogoReversed.png" download="download/logos/compactCompaCareLogoReversed.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactCompaCareLogoReversed.svg" download="download/logos/compactCompaCareLogoReversed.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactCompaCareLogoReversed.ai" download="download/logos/compactCompaCareLogoReversed.ai">AI Download</a>
               </div>  </div> 
    
    
    
      <div className="w-md-100 w-sm-100"></div>
    
       <div className="card">
             <div className="card-img-top">
    <img className="card-img-top w-75" src="../download/logos/compactFindLogoK.svg" alt="COMPACT FIND 1 Color">
           </div>
    <div className="card-body">
        <h5 className="card-title">FIND LOGO 1C</h5>
        <a href="https://compact.family/downloadlogos/compactFindLogoK.png" download="download/logos/compactFindLogoK.png">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactFindLogoK.svg" download="download/logos/compactFindLogoK.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactFindLogoK.ai" download="download/logos/compactFindLogoK.ai">AI Download</a></div>  </div>   
      
           <div className="card">
               <div className="card-img-top bg-blue">
    <img className="card-img-top w-75" src="../download/logos/compactFindLogoReversed.svg" alt="COMPACT FIND Reversed">
               </div>
    <div className="card-body">
        <h5 className="card-title">FIND LOGO REVERSED</h5>
        <a href="https://compact.family/downloadlogos/compactFindLogoReversed.png" download="download/logos/compactFindLogoReversed.pngg">PNG Download</a>  
        <a href="https://compact.family/downloadlogos/compactFindLogoReversed.svg" download="download/logos/compactFindLogoReversed.svg">SVG Download</a> 
        <a href="https://compact.family/downloadlogos/compactFindLogoReversed.ai" download="download/logos/compactFindLogoReversed.ai">AI Download</a>
               </div>  </div> 
    
    
    
      </div>
                 </div>

                 
<h4>COMP<strong>ACT</strong> Brand Colors</h4>

                 <div className="card-deck">
                 <div className="card">
                     <div className="card-img-top" style={{background-color: #2D81C4;min-height: 100px}}> </div>
  <div className="card-body">
    <h5 className="card-title">COMP<strong>ACT</strong> BLUE</h5>
          <p className="card-text">#2D81C4</p>

    <p className="card-text"><strong>RGB:</strong> r20 g131 b213</p>
          <p className="card-text"><strong>CMYK:</strong> c80 m25</p>
  </div> </div>
        
                     <div className="w-lg-auto w-md-100 w-sm-100"></div>
                     
<div className="card">
                     <div className="card-img-top" style={{background-color: #C80000;min-height: 100px}}> </div>        
     <div className="card-body">
    <h5 className="card-title">COMPACARE RED</h5>
          <p className="card-text">#C80000</p>

    <p className="card-text"><strong>RGB:</strong> r200</p>
          <p className="card-text"><strong>CMYK:</strong> m100 y70</p>
  </div> </div>           
                             <div className="w-lg-auto w-md-100 w-sm-100"></div>

                 

               <div className="card">
                     <div className="card-img-top" style={{background-color: #00B473;min-height: 100px}}> </div>        
     <div className="card-body">
    <h5 className="card-title">HILLCREST GREEN</h5>
          <p className="card-text">#00B473</p>

    <p className="card-text"><strong>RGB:</strong> g180 b115</p>
          <p className="card-text"><strong>CMYK:</strong> c70 735</p>
  </div> </div>      
 
                               <div className="w-lg-auto w-md-100 w-sm-100"></div>
       
                 <div className="card">
                     <div className="card-img-top" style={{background-color: #EC2079;min-height: 100px}}> </div>        
     <div className="card-body">
    <h5 className="card-title">HIGHLANDS PINK</h5>
          <p className="card-text">#EC2079</p>

    <p className="card-text"><strong>RGB:</strong> r236 g32 b121</p>
          <p className="card-text"><strong>CMYK:</strong> m85</p>
  </div> </div>  
                    
                                       <div className="w-lg-auto w-md-100 w-sm-100"></div>
   
                       <div className="card">
                     <div className="card-img-top" style={{background-color: #F26322;min-height: 100px}}></div>        
     <div className="card-body">
    <h5 className="card-title">FOSTER CARE</h5>
          <p className="card-text">#F26322</p>

    <p className="card-text"><strong>RGB:</strong>  r236 g32 b121</p>
          <p className="card-text"><strong>CMYK:</strong> m85</p>
  </div> </div>  
                     
                     
                     
                 
            </div>     
				</div></div>
           */}
    </>
  );
};

export default Brand;
