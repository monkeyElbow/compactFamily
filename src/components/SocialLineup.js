// import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {FaHome} from "react-icons/fa"
import { Link } from "react-router-dom";

import "../compact.css";

export const SocialLineup = () => {

  return (
    <div className="p-1">
      <a
        className="SocialStyle"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/COMPACTFamilyServices/"
      >
        <FaFacebook />
      </a>

      <a
        rel="noopener noreferrer"
        className="SocialStyle ms-1 me-1"
        target="_blank"
        href="https://www.instagram.com/compactfamilyservices/"
      >
        <FaInstagram />
      </a>

      <a
        rel="noopener noreferrer"
        className="SocialStyle me-1"
        target="_blank"
        href="https://twitter.com/COMPACTfamily"
      >
        <FaTwitter />
      </a>

      <a
        rel="noopener noreferrer"
        className="SocialStyle me-3"
        target="_blank"
        href="https://www.youtube.com/channel/UC7LHU70Uou3e8DsrNj6CnNA/"
      >
        <FaYoutube />
      </a>
      <Link to="/dashboard">
     <FaHome />
      </Link>


     
    </div>
  );
};
export default SocialLineup;

//   https://stackoverflow.com/questions/57200956/add-link-to-font-awesome-icon-in-reactjs

// fix out links and style
