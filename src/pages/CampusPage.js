import { Container, Image } from "react-bootstrap";

const CampusPage = () => {
    return(
        <>

<Container>
        <div className="container pb-3 my-5">
          <p className="h2 display-4">Our Hillcrest Campus</p>
          <p>
            COMP<strong>ACT</strong> Family Services is located in the beautiful
            foothills of the Ouachita Mountains in Hot Springs, AR. What began
            in 1944 as a single home (Gladys Hinson House) has now grown into a
            52-acre property with many amenities for its guests and residents.
          </p>
          <h4>Included on the property are:</h4>
        </div>

        <div className="container">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 text-center d-flex justify-content-center">
            <div className="card p-0 m-1">
              <Image fluid
                className="card-img-top"
                src="https://compact.family/images/HinsonHouse_8410.jpg"
                alt="Hinson House"
                width="300"
                height="200"
                layout="intrinsic"
              />
              <div className="card-body">
                <h5 className="card-title">GLADYS HINSON MUSEUM</h5>
                <p className="card-text">
                  Original Children's Home purchased in 1942 and opened in 1944,
                  now serves as a museum and place of respite for staff.
                </p>
              </div>
            </div>

            <div className="card p-0 m-1">
              <Image
              fluid
                className="card-img-top"
                width="300"
                height="200"
                layout="intrinsic"
                src="https://compact.family/images/Anderson-building.jpg"
                alt="Anderson Building"
              />
              <div className="card-body">
                <h5 className="card-title">HILLCREST CHILDREN'S HOME</h5>
                <p className="card-text">
                  Eight Cottage that can care for up to sixty children at any
                  given time: Anderson I, Anderson II, Anthony, Garrison,
                  Gilliam, Hardcastle and Netzel.
                </p>
              </div>
            </div>

            <div className="card p-0 m-1">
              <Image
              fluid
                className="card-img-top"
                width="300"
                height="200"
                layout="intrinsic"
                src="https://compact.family/images/highlands-living-room.jpg"
                alt="Highlands living room"
              />
              <div className="card-body">
                <h5 className="card-title">HIGHLANDS MATERNITY HOME</h5>
                <p className="card-text">
                  Located in the Hardcastle Cottage and dedicated to bringing
                  hope and healing to young women facing unplanned pregnancies.
                </p>
              </div>
            </div>

            <div className="card p-0 m-1">
              <Image
              fluid
                className="card-img-top"
                width="300"
                height="200"
                layout="intrinsic"
                src="https://compact.family/images/tlc.jpg"
                alt="TLC"
              />
              <div className="card-body">
                <h5 className="card-title">TRANSITIONAL LIVING CENTER</h5>
                <p className="card-text">
                  24-apartment home for graduating Hillcrest residents,
                  aging-out foster care youth and transitioning young women from
                  Highlands.
                </p>
              </div>
            </div>

            <div className="card p-0 m-1">
              <Image
              fluid
                className="card-img-top"
                width="300"
                height="200"
                layout="intrinsic"
                src="https://compact.family/images/dining-hall-3.jpg"
                alt="Dining hall"
              />
              <div className="card-body">
                <h5 className="card-title">FOOD SERVICES AND DINING HALL</h5>
                <p className="card-text">
                  Serves as the food headquarters for entire campus providing
                  healthy, balanced meals, and options for food supplies.
                </p>
              </div>
            </div>

            <div className="card p-0 m-1">
              <Image fluid
                className="card-img-top"
                width="300"
                height="200"
                layout="intrinsic"
                src="https://compact.family/images/admin.jpg"
                alt="Admin building"
              />
              <div className="card-body">
                <h5 className="card-title">JAMES K. BRIDGES MINISTRY CENTER</h5>
                <p className="card-text">
                  Provides full spectrum of services for staff and residents
                  including, case management, health services, record keeping,
                  financial services, and provides office space for each.
                </p>
              </div>
            </div>

            <div className="card p-0 m-1">
              <Image fluid
                className="card-img-top"
                width="300"
                height="200"
                layout="intrinsic"
                src="https://compact.family/images/gym-wide.jpg"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">INDOOR AMENITIES</h5>
                <p className="card-text">
                  There are many indoor amenities and activities to enjoy,
                  including a large gymnasium, an indoor pool, library, tutoring
                  services, scrapbooking, sewing and more.
                </p>
              </div>
            </div>

            <div className="card p-0 m-1">
              <Image fluid
                className="card-img-top"
                width="300"
                height="200"
                layout="intrinsic"
                src="https://compact.family/images/pond.jpg"
                alt="Pond"
              />
              <div className="card-body">
                <h5 className="card-title">OUTDOOR ACTIVITIES</h5>
                <p className="card-text">
                  Our large campus provides many grassy areas to run and play as
                  well as paved areas to skateboard, ride bikes or go for a
                  walk. Our pond is stocked for residents who enjoy fishing and
                  our Belin Multi-Purpose Ball Field is a large area the whole
                  campus can play on together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
        </>
    )
}

export default CampusPage;