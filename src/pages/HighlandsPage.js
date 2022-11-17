import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";
import ResponsiveEmbed from "react-responsive-embed";

const HighlandsPage = () => {
  document.title = "Highlands";

  const titleOne = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -50 },
    pause: 2000,
    // loop: true,
    delay: 500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });
  const titleTwo = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    pause: 2000,
    // loop: true,
    delay: 2500,
    config: {
      duration: 2000,
      mass: 500,
      friction: 500,
      easing: easings.easeInOutQuad,
    },
  });

  return (
    <>
      <ResponsiveEmbed
        src="https://www.youtube.com/embed/IPWcoEhPEaA"
        allowFullScreen
      />

      <Container fluid className="my-0 photoblue">
        <Row className="text-center">
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center p-4"
          >
            <div>
              <animated.h1 className="fw-bold" style={titleOne}>
                Established in 1966
              </animated.h1>

              <animated.p style={titleTwo} className="fs-5">
                Highlands Adoption Services is a Christ-centered ministry
                dedicated to bringing hope and healing to women facing unplanned
                pregnancies and services to families looking to expand through
                adoption.
              </animated.p>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <Image
              fluid
              src="https://compact.family/images/1777.jpg"
              layout="intrinsic"
              width="600"
              height="517"
            />{" "}
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <p className="lh-lg">
          For couples starting out, Highlands provides resources on various
          kinds of adoptions, adoption laws and trends in different states. In
          addition, referrals to adoption agencies in the couple’s area can also
          be provided. (Adoptive couples in Missouri and Arkansas may be
          eligible for home study services through COMPACT.) For couples who are
          in the process of being matched, Highlands offers consultation as the
          adoptive couples raises funds and navigates each step of the placement
          process. For adoptive couples who have completed an adoption,
          Highlands provides support services to help adoptive couples gain
          insight and understanding on how to address post-placement behaviors,
          how to better understand their role as an adoptive parent, how to talk
          about adoption with their kids, and, if needed, referrals to Christian
          counselors or local church support networks in their area.
        </p>
      </Container>

      <Container fluid className="p-3 my-3 offset-lg-3 offset-md-2">
        <div className="col-lg-6 col-md-10 card text-center clickable bg-pink pt-4 pb-3 rounded text-white border-0">
          <p className="h4">
            <strong>EXPECTING AND SINGLE MOMS!</strong>
          </p>
          <p className="lead">
            Start your <strong>FREE</strong> single parenting training!
          </p>
          <div>
            <Link to="/highlands-training">
              <button
                type="button"
                className="btn btn-dark btn-lg stretched-link"
              >
                Click Here to begin
              </button>
            </Link>
          </div>
        </div>
      </Container>

      <Container className="pt-5 pb-4">
        <h1 className="pink my-4">Maternity Home for Minors</h1>
        <p className="fs-5 mb-4">
          COMP
          <span className="act">ACT</span> Maternity Home for minors provides
          residential services in Hot Springs, Arkansas, helping teen girls
          within the foster care system find hope and healing. The Maternity
          Home offers new-parent coaching for teen moms, prenatal care,
          new-parent coaching and training to teen moms, and a safe place to
          learn to be a mom.
        </p>
      </Container>

      <Container fluid className="pb-5">
        <Row>
          <Col md={6}>
            <Image
              fluid
              src="https://compact.family/images/highlands-living-room.jpg"
              // width="600"
              // height="400"
              // layout="intrinsic"
            />{" "}
          </Col>

          <Col className="d-flex align-items-center px-5">
            <div>
              <p className="fs-5 fw-bold pink">
                Our Maternity Home, located on the Hillcrest Campus, provides a
                loving Christian home and program for young ladies in need,
                helping lead them beyond brokenness and towards a bright future.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="mt-4">
          The Christian living environment offers remedy to fear and anxiety and
          continues to advance services to serve 21st century needs. The
          Maternity Home gives young women the love and support needed for a new
          start.
        </p>
      </Container>

      <Container fluid className="p-5 bg-light">
        <p>
          COMP
          <span className="act">ACT</span>
          ’s Highlands Adoption Services established in 1966, is a
          Christ-centered ministry dedicated to bringing hope and healing to
          women facing unplanned pregnancies. It serves families looking to
          expand through adoption.
        </p>
        <p>
          Highlands originated and operated in Kansas City until 2006 when it
          relocated to Hot Springs, Arkansas on the Hillcrest campus. In October
          2018, Highlands reopened adoption services in Springfield, Missouri.
          It continues the important residential Highlands Maternity Home for
          Minors on the Hillcrest campus.
        </p>

        <p>
          Based from COMP
          <span className="act">ACT</span>
          ’s Springfield, MO office, Highlands Adoption Services has a growth
          plan for comprehensive adoptive services and Christ-centered
          wrap-around care to young ladies and women facing unplanned
          pregnancies. Today, Highlands Adoption Services offers consultation
          and support services services to adoptive couples and birth mothers
          who are considering making an adoption plan.
        </p>
        <p>
          Subsequently, Highlands Adoption Services will expand to offer a la
          carte services and full-service adoption packages to adoptive couples
          to include home studies and post placement visits.
        </p>
        <p>
          As part of its commitment to bringing hope and healing to young ladies
          and women facing unplanned pregnancies, Highlands Adoption Services
          will also offer CompaCare wrap-around services to birth mothers in
          community-based homes.
        </p>
      </Container>

      <Container
        fluid
        className="text-center mb-0 pt-5 pb-2 bg-pink text-white"
      >
        <div className="container mb-5 col-lg-6 col-md-12 text-center offset-lg-3 offset-md-0">
          <p className="h4 ">
            Highlands has been a part of more than 3,000 adoptions in its
            lifetime and continues to advance its services to serve 21st century
            culture and needs.
          </p>
        </div>
      </Container>

      <Container fluid className="py-5 my-5">
        <div className="container">
          {/* <h3 className="blue">Highlands Adoption Services</h3>
          <p>
            Highlands Adoption and Maternity Services has a growth plan for
            comprehensive adoptive services and Christ-centered wrap-around care
            to young ladies and women facing unplanned pregnancies.
          </p>
          <p>
            Today, Highlands Adoption and Maternity Services offers consultation and support services services to adoptive couples and birth mothers who are
            considering making an adoption plan.
          </p>
          <p>
            Subsequently, Highlands Adoption and Maternity Services will expand
            to offer a la carte services and full-service adoption packages to
            adoptive couples to include home studies, post placement visits,
            etc.
          </p>
          <p>
            As part of its commitment to bringing hope and healing to young
            ladies and women facing unplanned pregnancies, Highlands Adoption
            and Maternity Services will also offer CompaCare wrap-around
            services to birth mothers in its community based homes.
          </p> */}
          <p className="fw-bold pink h4 text-center">
            For more information about Highlands Adoption Services, please call
            our Missouri office at <strong>(417) 319-4070</strong>.
          </p>
        </div>
      </Container>

      <Container fluid className="bg-pink text-center py-5 my-5 text-white">
        <h4>
          If you would like to financially support Highlands, please consider
          giving to one of the following funds:
        </h4>

        <a
          className="btn btn-dark me-1"
          href="https://giving.ag.org/donate/highlands-adoption-and-maternity?fundid=3710"
          target="_blank"
          rel="noopener noreferrer"
        >
          Highlands Connect
        </a>

        <a
          className="btn btn-dark mx-2"
          href="https://giving.ag.org/donate/highlands-adoption-and-maternity?fundid=3710"
          target="_blank"
          rel="noopener noreferrer"
        >
          Highlands Adoption
        </a>

        <a
          className="btn btn-dark me-2"
          href="https://giving.ag.org/Give/Details/860051?MinistryName=highlands&Page=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maternity Home General Fund(860051)
        </a>

        <a
          className="btn btn-dark me-2"
          href="https://giving.ag.org/Give/Details/860056?MinistryName=860056&Page=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baby Bootie (860056)
        </a>
        <a
          className="btn btn-dark my-3"
          href="https://giving.ag.org/donate/highlands-adoption-and-maternity?fundid=77437"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maternity Home Cottage Sponsor
        </a>
      </Container>

      {/* <Container
        fluid
        className="text-center mb-0 pt-5 pb-2 bg-pink text-white my-0"
      >
        <div className="container mb-5 col-lg-6 col-md-12 text-center offset-lg-3 offset-md-0">
          <p className="h4 ">
            If you’d like more information, or would like an application to the
            program, please call our Arkansas office at{" "}
            <strong>(501) 262-1660</strong>.
          </p>
        </div>
      </Container> */}

      <Container className="my-3">
        <h3>Adoption FAQ</h3>

        <div className="card card-body my-2">
          <h3>Q: Looking To Adopt?</h3>
          <p>
            A: Highlands Adoption Services offers nationwide consultation and
            support services services for “home study ready” adoptive couples.
            To be home study ready means to have a completed a privately
            contracted domestic home study (for those wishing to adopt
            privately) or a state issued home study (for those wishing to adopt
            from foster care). To learn more about our consultation and support
            services services, please see “How can COMP
            <strong>
              <em>ACT</em>
            </strong>
            help me to adopt?” All consultation and support services services
            are offered free of charge pending acceptance into the program. To
            obtain an application, please contact the Highlands Placement
            Director, Ashley Grant, at AGrant @ Compact.Family
          </p>
        </div>

        <div className="card card-body my-2">
          <h3>Q: Pregnant And Need Help?</h3>
          <p>
            A: Highlands Adoption Services offers birth mothers a range of
            services. If you are considering making a parenting plan for your
            child, online curriculum is available to help you obtain information
            about having a healthy pregnancy, developing skills and resources to
            parent your new baby, and to assist in personal and spiritual
            development. If you are considering making an adoption plan for your
            child, Highlands has several adoptive couples whom you can
            prayerfully consider as placement options for your baby. If an
            adoptive couple is chosen via Highlands, Highlands can help walk you
            through the entire placement process free of charge (no matter where
            you live).
          </p>
        </div>

        <div className="card card-body my-2">
          <h3>Q: How Can Highlands Help Me To Adopt?</h3>
          <p>
            A: Highlands Adoptions provides information, consultation, and
            support to adoptive couples regardless of where they are on their
            adoption journey. For couples just starting out, Highlands provides
            information on different kinds of adoptions, adoption laws and
            trends in different states, and referrals to adoption agencies in
            the couple’s area. (Adoptive couples in Missouri and Arkansas may be
            eligible for home study services through COMP
            <strong>
              <em>ACT</em>
            </strong>
            .) For couples who are in the process of being matched, Highlands
            offers consultation as the adoptive couples raises funds and
            navigates each step of the placement process. For adoptive couples
            who have completed an adoption, Highlands provides support services
            to help adoptive couples gain insight and understanding on how to
            address post-placement behaviors, how to better understand their
            role as an adoptive parent, how to talk about adoption with their
            kids, and, if needed, referrals to Christian counselors or local
            church support networks in their area.
          </p>
        </div>

        <div className="card card-body my-2">
          <h3>
            Q: Can I Choose To Adopt One Of The Thousands Of Children In The
            Foster Care System?
          </h3>
          <p>
            A: Yes! Highlands can provide information and resources to help you
            learn how to adopt a child waiting for a forever family in your
            state.
          </p>
        </div>

        <div className="card card-body my-2">
          <h3>Q: Who Do I Contact To Begin The Process?</h3>
          <p>
            A: For more information, please contact Ashley Grant at{" "}
            <a href="mailto:AGrant@Compact.Family">AGrant@Compact.Family</a>.
          </p>
        </div>
      </Container>
    </>
  );
};

export default HighlandsPage;
