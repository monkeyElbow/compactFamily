import {Link} from "react-router-dom";

export default function fosterform() {
  document.title = "COMPACT Foster Care Placements"

  return (
      <>
      <div className="text-center my-3">
        <Link to="/fostercare" className="btn btn-primary btn-sm" role="button">
          
            Back to Foster Home
          
        </Link>
      </div>

      <div className="text-center">
        <iframe
          title="1a"
          frameBorder="0"
          width="100%"
          height="1000"
          src="https://arfc.extendedreach.com/Clients/Arkansas/arfc.nsf/F_PUBLIC_REFERRAL?OpenForm&unid=1769FA44D2F39E50852586E800574229"
        ></iframe>
      </div>
      </>
  );
}
