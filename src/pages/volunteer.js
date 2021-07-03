import {Image} from "react-bootstrap";

export default function volunteer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-lg-5">
            <h3 className="text-center">Volunteer</h3>
            <p className="lead">
              Our ministry could not run if it were not for our amazing
              volunteers. We have volunteers in every aspect of our ministry:
              maintenance, tutoring residents and office duties. Whatever your
              skill-set, if you are interested in volunteering, please contact
              us.
            </p>
          </div>
          <div className="col-md-6">
            <Image fluid
              src="https://compact.family/images/Vanguard-Team-Serving-Dinner.jpg"
              layout="intrinsic"
              width="600"
              height="400"
              alt="Vanguard team service dinner"
            />
          </div>
        </div>
        <div className="container">
          <p>
            Our biggest need is office assistants. These volunteers work at the
            front desk, answering phones and being a helpful guide to those
            coming to COMP<strong>ACT</strong>. All necessary training is
            provided. Sometimes these office assistants will help with stuffing
            envelopes for mail outs or help with cleaning.
          </p>
          <p className="lead text-center">
            <a
              href="https://compact.family/download/CompactVolunteerApplication.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg text-center"
              role="button"
            >
              Volunteer Application
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
