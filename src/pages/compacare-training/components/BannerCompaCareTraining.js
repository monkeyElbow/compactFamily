import { Container } from "react-bootstrap";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';



const BannerCompaCareTraining = () => {
  const location = useLocation();
  return(
        <>
<Container
          fluid
          className="text-white pt-4 pb-2 bg-red d-flex flex-row"
        >

{location.pathname !== '/compacare-training' && <div style={{paddingRight:"5px",position:"relative", top:"-1px"}}> 
          <Link to="/compacare-training">
          
          <FaArrowAltCircleLeft />{" "}
          
          </Link>
</div>}
          <p className="pt-0">
            <strong>
            CHURCH LEADERS' COMPACARE® TRAINING
            </strong>
            </p>
        </Container>
        </>
    )
}

export default BannerCompaCareTraining;