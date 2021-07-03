import {Image} from "react-bootstrap";

export default function teams() {
  return (
      <>
      <div className="jumbotron m-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 text-center d-flex align-items-center">
              <div>
                <p className="h4">
                  <strong>Mission Team</strong>
                </p>
                <p className="lead text-center">
                  Get involved with COMP<strong>ACT</strong> first hand by
                  bringing a mission team from your church or organization to
                  our campus.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <Image fluid
                src="https://compact.family/images/Navarre-FL-Team.jpg"
                layout="intrinsic"
                width="600"
                height="400"
                alt="Navarre Florida Team"
              />
            </div>
          </div>
        </div>

        <div className="jumbotron mt-2 mb-0 pb-0">
          <div className="container text-center">
            <p>
              Mission Teams are one of our biggest assets to advance COMP
              <strong>ACT</strong>’s care, ministry, facilities and outreach.
              Mission Teams are welcome throughout the year, but most come
              during summer or other school breaks. Mission Teams do a variety
              of things from maintenance projects/cleaning/painting, putting
              together activities for kids and helping with events we have on
              campus. Teams also bring a variety of people: pastors, painters,
              carpenters, photographers, teachers, and so many more. Know that
              whoever you bring on your team will be an asset to us!
            </p>
            <p>
              If you are interested in providing project funds, supplying
              resources or would like to bring your team to help complete a
              project, please contact our office. We can help you to reserve
              your spot or provide more information.{" "}
            </p>
            <p className="lead">
              Contact us by phone at (501) 262-1660 or email at
              info@compact.family.
            </p>
          </div>
        </div>
      </div>
      </>
  );
}
