import {Link} from "react-router-dom";

export default function fosterform() {
  document.title = "COMPACT Foster Form"

  return (
      <>
      <div className="text-center my-3">
        <Link to="fostercare" className="btn btn-primary btn-lg" role="button">
          
            Back to Foster Home
          
        </Link>
      </div>

      <div className="text-center">
        <iframe
          frameborder="0"
          width="900"
          height="1000"
          src="https://arfc.extendedreach.com/85257DEB00162D05/F_INQUIRY?OpenForm&unid=0F75C7F1016FD55985257DE9000D9209&fbclid=IwAR1hFfGWq6645ISuHwlG7eQ1D09uIFFFV4Cko2vitTiuqcK-eoguDVYDWX4"
        ></iframe>
      </div>
      </>
  );
}
