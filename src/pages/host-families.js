import {Image} from "react-bootstrap";

export default function hostFamilies() {
  document.title = "COMPACT Host Families"

  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <Image fluid
              src="https://compact.family/images/host_family.jpg"
              layout="intrinsic"
              width="600"
              height="609"
              alt="Host family walking"
            />
          </div>
          <div className="col-lg-7 col-sm-12">
            <h3>Host Families</h3>
            <p>
              <strong>
                On occasion, families will choose to take a child or children
                out on a host visit. These visits can be built around your
                family’s desires.
              </strong>
            </p>

            <p className="lead">
              Hosting can include various activities such as:
            </p>

            <ul>
              <li>Taking a resident for a day of fun</li>
              <li>
                Taking a resident out to eat for a birthday or special occasion
              </li>
              <li>Having the resident for the weekend </li>
              <li>
                Taking the resident to do activities they may not have the
                chance to do with their cottage
              </li>
              <li>
                Providing support and guidance to the resident as they grow
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <p>
          Host Families are people like you in the community who wrap around our
          residents and provide extra support that they may desperately need.
        </p>
        <p className="text-center">
          These are experiences and memories that children cherish forever.
        </p>
        <p className="text-center">
          If you are interested in becoming a host family, you can fill out this
          application:
        </p>

        <p className="lead text-center">
          <a
            href="https://compact.family/download/HostFamilyApplication.pdf"
            target="_blank"
            className="btn btn-primary btn-lg"
            role="button"
            rel="noopener noreferrer"
          >
            Download Host Application
          </a>
        </p>

        <p>
          If you have any questions about hosting, please feel free to contact
          us: info@compact.family or 501-262-1660.
        </p>
      </div>
    </>
  );
}
