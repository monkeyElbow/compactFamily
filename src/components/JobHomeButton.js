import { Link } from "react-router-dom";

const JobHomeButton = () => {
    return(
        <>
         
      <p align="center">
    
    <Link
      to="/employment"
      className="btn btn-dark btn-lg"
      role="button"
      >
      Employment Home
    </Link>
  </p>
    
        </>
    )
}

export default JobHomeButton;