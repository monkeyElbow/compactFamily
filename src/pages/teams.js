import { Col, Container, Image, Row } from "react-bootstrap";

import gen1 from "../img/Generations-Church-Playground.jpg";

import gen2 from "../img/Generations-Church-Team.jpg";

export default function teams() {
  document.title = "COMPACT Teams";

  return (
    <>
      <Container fluid className="bg-blue m-0 p-2">
        <h1 className="fs-2 text-uppercase my-5 text-center text-white">
          <strong>Mission Teams</strong>
        </h1>
      </Container>

      <Container fluid className="m-0 p-0">
        <Row className="row">
          <Col className="text-center d-flex align-items-center p-5">
            <div>
              <p className="lead text-center fs-4">
                Get involved with COMP
                <strong>
                  <em>ACT</em>
                </strong>{" "}
                first hand by bringing a mission team from your church or
                organization to our campus.
              </p>
            </div>
          </Col>
          <Col md={5} className="p-0 d-flex justify-content-center">
            <Image
              fluid
              src="https://compact.family/images/Navarre-FL-Team.jpg"
              layout="intrinsic"
              width="600"
              height="400"
              alt="Navarre Florida Team"
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="my-0 bg-blue p-5 text-white">
        <p className="lead">
          Mission Teams are one of our biggest assets to advance COMP
          <strong>ACT</strong>’s care, ministry, facilities and outreach.
          Mission Teams are welcome throughout the year, but most come during
          summer or other school breaks.
        </p>

        <p>
          Mission Teams do a variety of things from maintenance
          projects/cleaning/painting, putting together activities for kids and
          helping with events we have on campus. Teams also bring a variety of
          people: pastors, painters, carpenters, photographers, teachers, and so
          many more. Know that whoever you bring on your team will be an asset
          to us!
        </p>
      </Container>

      <Container fluid className="p-0 m-0 bg-dark text-light">
        <Row>
          <Col lg={5} md={5}>
            <Image fluid src={gen1} />
            <Image fluid src={gen2} />
          </Col>
          <Col className="px-4 d-flex flex-column justify-content-center">
            <p className="">
              “June of 2021, we at Generations Church in Tallahassee, Florida,
              were honored to take two teams to partner with COMP
              <strong>
                <em>ACT</em>
              </strong>{" "}
              Family Services. We had one team that raised funds and helped
              construct a playground for the developmental disabilities
              residents. We had another team that engaged residents in Mega
              Sports Camp/VBS each day. We came away with gratitude and
              appreciation for the team and ministry at COMP
              <strong>
                <em>ACT</em>
              </strong>
              . We were touched by the foster care need in our nation and
              started a ministry to foster families when we returned home. I
              would encourage Pastors to consider investing in this great
              ministry by taking construction/maintenance teams or Youth and
              Children's pastors to minister. I promise it will be a great
              blessing to you and your church!”
            </p>
            <p className="fw-bold h4">Brian Neugent</p>
            <p className="lh-1">Lead Pastor</p>
            <p className="lh-1 fst-italic">Generations Church </p>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <p className="fw-bold fs-2">2023 Mission Team Info</p>

        <p className="fs-5 fw-bold">2023 Projects</p>

        <p className="">Painting (fences, parking lot, stairs, bunk room)</p>

        <p className="">
          Landscaping (weeding, flowerbeds, trimming, planting, gardening)
        </p>

        <p className="">
          General maintenance and repairs, clean-up (equipment, gutters, campus
          grounds, power wash)
        </p>

        <p className="">
          Refurbish (great room/TLC apartments, bunk rooms, bathrooms, flooring,
          kitchen, signage)
        </p>
        <p className="">
          Replace (air conditioner units, window seals, ceiling tiles)
        </p>

        <p className="fs-5 fw-bold pt-4">Ministry Opportunities</p>
        <p className="">
          There will be many moments for your team to engage on our campus. Many
          teams will hold a service or devotional for the kids. Kickball,
          basketball, volleyball, swimming, paint wars, sport camp, VBS and
          music camp, are some of the activities teams participate in. In
          addition, opportunity to eat meals with the entire campus on Tuesday
          evening and in cottages with the kids on Thursday evenings.
        </p>

        <p className="fs-5 fw-bold pt-4">Housing & Meals</p>
        <p className="">
          Our gymnasium houses our teams as an option. We have four bunk style
          rooms, each with 8 beds. Each bathroom has two showers. Choosing to
          stay in nearby hotels in also an option for some teams.
        </p>

        <p className="">
          Breakfast each day is on your own. We have a full kitchen for
          preparation, or you may choose a nearby breakfast cafes. Lunch
          (Tuesday-Thursday) and dinner (Monday-Thursday) are provided for the
          team, if we receive a count two weeks ahead of your trip. Many teams
          bring snacks as well.
        </p>

        <p className="fs-5 fw-bold pt-4">Cost</p>
        <p className="">
          We value each team who makes sacrifices to improve the physical and
          spiritual environment for our kids. We also do all we can to limit the
          cost to $25 per person, per day. Typically, teams arrive on Sunday
          evening and depart Friday or Saturday morning. To help, we ask that
          each team do their best to cover costs for the projects they will
          handle during the trip. Project costs can range from $2500-$10,000.
        </p>

        <p className="fs-5 fw-bold pt-4">Age Range</p>
        <p className="">
          We are happy to give teens 14 years through adults a wonderful
          mission’s experience. We do ask that there is a minimum of one adult
          for every five teens (ages 14-18). Additionally, this adventure is a
          great one for the first-time mission participant through the seasoned
          one.
        </p>

        <p className="fs-5 fw-bold pt-4">Location</p>
        <p className="">
          The COMP
          <span className="act">ACT</span> residential campus is in beautiful
          Hot Springs National Park, Arkansas.
        </p>

        <p className="fs-5 fw-bold pt-4">Testimonies</p>

        <p className="">
          “We’ve been coming to COMP
          <span className="act">ACT</span> for years and to see our young
          students work, connect with residents and replace the floors in Netzel
          Cottage is a very touching experience.”
        </p>
        <p className="fw-bold pb-4">-Pastor Mike Hale, Cornerstone Church</p>

        <p className="">
          “Honestly, there were so many amazing things about the trip. Getting
          to meet the kids, knowing that we helped so much. The biggest take
          away and thing that students talk about is how blessed we were by the
          staff. We got to see people operate like true family and be so
          welcoming. It blessed us tremendously.”
        </p>
        <p className="fw-bold pb-4">-Arkansas Tech Chi Alpha</p>

        <p className="">
          “I came to COMP
          <span className="act">ACT</span> eight years ago on my first missions’
          trip. It was here that God called me into ministry, and it changed
          everything in my life.”
        </p>
        <p className="fw-bold pb-4">
          –Kasper Ball, Youth Pastor, Eagle Creek Church
        </p>
      </Container>

      <Container className="p-5 bg-blue text-white" fluid>
        <p className="fs-5">
          If you are interested in providing project funds, supplying resources
          or would like to bring your team to help complete a project, please
          contact our office. We can help you to reserve your spot or provide
          more information.{" "}
        </p>
        <p className="lead">
          Contact us by phone at (501) 262-1660 or email at info@compact.family.
        </p>
      </Container>
    </>
  );
}
