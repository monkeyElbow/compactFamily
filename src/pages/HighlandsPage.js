import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const HighlandsPage = () => {
  document.title = "Highlands"

  return (
    <>
      <Container fluid className="my-0 photoblue">
        <Row className="text-center">
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center p-4"
          >
            <div>
              <p className="h3">Highlands Maternity Home for Minors</p>
              <p>
                Highlands Maternity Home for minors provides residential
                services in Hot Springs, Arkansas. Highlands Maternity Home
                offers prenatal care, new-parent coaching and training to teen
                moms, and an atmosphere of healing on the Hillcrest campus of
                COMP<strong>ACT</strong> Family Services Agency. Highlands
                Maternity Home has helped more than 3,000 young women across the
                country by providing a loving Christian home and program that
                leads them through brokenness and towards a bright future. Our
                Christian living environment offers the remedy to fear and
                anxiety. At Highlands, young women are given the love and
                support needed for a new start.
              </p>
            </div>
          </Col>
          <Col lg={6} md={12}>
          <Image fluid
              src="https://compact.family/images/1777.jpg"
              layout="intrinsic"
              width="600"
              height="517"
            />          </Col>
        </Row>
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

      <Container fluid className="p-5 bg-light">
        <div className="col-md-6 float-left p-3">
        <Image fluid
            src="https://compact.family/images/highlands-living-room.jpg"
            width="600"
            height="400"
            layout="intrinsic"
          />        </div>
        <p>
          COMP<strong>ACT</strong>’s Highlands Adoption and Maternity Services
          established in 1966, is a Christ-centered ministry dedicated to
          bringing hope and healing to women facing unplanned pregnancies. It
          serves families looking to expand through adoption.
        </p>
        <p>
          Highlands has facilitated more than 3,000 adoptions in its existence
          and continues to advance its services for 21st Century culture and
          needs.
        </p>
        <p>
          Highlands originated and operated in Kansas City until 2006 when it
          relocated to Hot Springs, Arkansas on the Hillcrest campus. In October
          2018, Highlands reopened adoption and maternity services in
          Springfield, Missouri. It continues the important residential
          Highlands Maternity Home for Minors on the Hillcrest campus.
        </p>

        <p>
          Based from COMP<strong>ACT</strong>’s Springfield, MO office,
          Highlands Adoption and Maternity Services has a growth plan for
          comprehensive adoptive services and Christ-centered wrap-around care
          to young ladies and women facing unplanned pregnancies. Today,
          Highlands Adoption and Maternity Services offers matching and
          consultation services to adoptive couples and birth mothers who are
          considering making an adoption plan.
        </p>
        <p>
          Subsequently, Highlands Adoption and Maternity Services will expand to
          offer a la carte services and full-service adoption packages to
          adoptive couples to include home studies and post placement visits.
        </p>
        <p>
          As part of its commitment to bringing hope and healing to young ladies
          and women facing unplanned pregnancies, Highlands Adoption and
          Maternity Services will also offer CompaCare wrap-around services to
          birth mothers in community-based homes.
        </p>
      </Container>

      <Container className="p-5 my-3">
        <h2 className="blue">
          HIGHLANDS MATERNITY HOME for MINORS at HILLCREST
        </h2>
        <p>
          Highlands Maternity Home for minors provides residential services in
          Hot Springs, Arkansas. Highlands Maternity Home offers prenatal care,
          new-parent coaching and training to teen moms, and an atmosphere of
          healing on the Hillcrest campus of COMP<strong>ACT</strong> Family
          Services Agency.{" "}
        </p>
        <p>
          Highlands Maternity Home provides a loving Christian home and program
          for young ladies in need. Highlands helps lead them beyond brokenness
          and towards a bright future.{" "}
        </p>
        <p>
          The Christian living environment offers remedy to fear and anxiety and
          continues to advance services to serve 21st century needs. At
          Highlands, young women are given the love and support needed for a new
          start.
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

      <Container fluid className="py-4">
        <div className="container">
          <h3 className="blue">Highlands Adoption and Maternity Services</h3>
          <p>
            Highlands Adoption and Maternity Services has a growth plan for
            comprehensive adoptive services and Christ-centered wrap-around care
            to young ladies and women facing unplanned pregnancies.
          </p>
          <p>
            Today, Highlands Adoption and Maternity Services offers matching and
            consultation services to adoptive couples and birth mothers who are
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
          </p>
          <p>
            If you would like more information about Highlands Adoption and
            Maternity Services, please call our Missouri office at{" "}
            <strong>(417) 319-4070</strong>.
          </p>
        </div>
      </Container>

      <Container fluid className="bg-light text-center py-4 m-0">
        <h4>
          If you would like to financially support Highlands, please consider
          giving to one of the following funds:
        </h4>

        <a
          className="btn btn-primary m-3"
          href="https://giving.ag.org/Give/Details/860051?MinistryName=highlands&Page=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maternity Home General Fund(860051)
        </a>

        <a
          className="btn btn-primary"
          href="https://giving.ag.org/Give/Details/860056?MinistryName=860056&Page=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baby Bootie (860056)
        </a>
      </Container>

      <Container
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
      </Container>

      <Container className="my-3">
        <h3>Adoption FAQ</h3>

     
                <div className="card card-body my-2">
                  <h3>Q: Looking To Adopt?</h3>
                  <p>
                    A: Highlands Adoption and Maternity Services offers
                    nationwide matching and consultation services for “home
                    study ready” adoptive couples. To be home study ready means
                    to have a completed a privately contracted domestic home
                    study (for those wishing to adopt privately) or a state
                    issued home study (for those wishing to adopt from foster
                    care). To learn more about our matching and consultation
                    services, please see “How can COMP<strong>ACT</strong>
                    help me to adopt?” All matching and consultation services
                    are offered free of charge pending acceptance into the
                    program. To obtain an application, please contact the
                    Highlands Placement Director, Ashley Grant, at AGrant @
                    Compact.Family
                  </p>
                </div>

                <div className="card card-body my-2">
                  <h3>Q: Pregnant And Need Help?</h3>
                  <p>
                    A: Highlands Adoption and Maternity Services offers birth
                    mothers a range of services. If you are considering making a
                    parenting plan for your child, online curriculum is
                    available to help you obtain information about having a
                    healthy pregnancy, developing skills and resources to parent
                    your new baby, and to assist in personal and spiritual
                    development. If you are considering making an adoption plan
                    for your child, Highlands has several adoptive couples whom
                    you can prayerfully consider as placement options for your
                    baby. If an adoptive couple is chosen via Highlands,
                    Highlands can help walk you through the entire placement
                    process free of charge (no matter where you live).
                  </p>
                </div>
  

                <div className="card card-body my-2">
                  <h3>Q: How Can Highlands Help Me To Adopt?</h3>
                  <p>
                    A: Highlands offers free matching and consultation services
                    to home study ready adoptive couples who have completed an
                    application and been accepted into the program. Once
                    Highlands receives a copy of your application, your home
                    study, and the supporting documents, you will be notified if
                    you are accepted. If you are accepted into the program,
                    Highlands will match adoptive couples with potential
                    adoption possibilities from around the United States. If the
                    birth mother chooses an adoptive couple from our Highlands
                    approved adoptive couples list, consultation services will
                    be offered for the duration of the adoption process to
                    ensure as smooth a process as possible.
                  </p>
                </div>

                <div className="card card-body my-2">
                  <h3>
                    Q: I Have Applied To Adopt; How Can I Increase My Chances Of
                    Being Chosen As An Adoptive Parent By A Birthmother?
                  </h3>
                  <p>
                    A: At Highlands, our first priority is the newborn child and
                    we want to find the best family to wrap around the child.
                    But in order to decrease your wait time, you should
                    prayerfully consider adopting a child who may have special
                    needs or adverse background experiences. Additionally, there
                    is a far greater need for adoptive couples who are willing
                    to adopt children out of foster care than there is in the
                    world of private domestic adoption. Highlands is able to
                    offer its matching and consultation services for couples who
                    are willing to adopt a child from foster care free of
                    charge.
                  </p>
                </div>


                <div className="card card-body my-2">
                  <h3>
                    Q: Can I Choose To Adopt One Of The Thousands Of Children In
                    The Foster Care System?
                  </h3>
                  <p>
                    A: Yes! This is a huge need. Highlands is able to help
                    connect you with children from around the United States who
                    are anxiously waiting for a forever family.
                  </p>
                </div>
 
                <div className="card card-body my-2">
                  <h3>Q: Can I Adopt A Child From Overseas?</h3>
                  <p>
                    A: Highlands does not currently perform international
                    adoptions, but it is our intention to upgrade our licensing
                    in the near future to be able to be approved as a Hague
                    Convention placement agency! Please continue to check back
                    for updates in the future.
                  </p>
                </div>
 
                <div className="card card-body my-2">
                  <h3>Q: What Kind Of Home Study Do I Need?</h3>
                  <p>
                    A: The type of home study required is dependent on the type
                    of adoption in which you wish to participate. For private
                    domestic adoptions, you will need a private domestic home
                    study completed by an agency or other professional in your
                    area. For adoptions from foster care, you will need to
                    contact your local Children’s Division office (or its local
                    equivalent) for them to complete your adoption home study.
                    Training hours will be required.
                  </p>
                </div>

                <div className="card card-body my-2">
                  <h3>Q: What Is The Average Cost Of An Adoption?</h3>
                  <p>
                    A: Private domestic adoptions vary in price but will range
                    between $25,000-$50,000. The most expensive costs incurred
                    will come from the home study completion, legal fees, travel
                    expenses, and birthmother expenses. Many grants, loans, and
                    fundraising options are available to prospective adoptive
                    parents and are readily available to research via the
                    internet. When adopting from foster care, there is no cost.
                    Training hours will be required before your home study is
                    completed, and potential costs could be incurred if you must
                    travel or obtain legal counsel for cross-state
                    transportation of children.
                  </p>
                </div>

                <div className="card card-body my-2">
                  <h3>
                    Q: What Is The Average Wait Time To Be Matched With An
                    Adoptable Child?
                  </h3>
                  <p>
                    A: There is no “average wait time” for being matched as an
                    adoptive couple. The more open you are to take in minority
                    children, older children or children with special needs, the
                    more options you will have for matching. In all matching
                    situations, placement is not guaranteed. In the case of
                    private adoptions, birth mothers will have a say in
                    selecting the adoptive couple with whom they choose to place
                    their child. In the foster care realm, there is often a team
                    of professionals who screen applications and select an
                    adoptive couple from a pool of applicants. However, when
                    adopting from foster care, you can expect to be matched much
                    sooner than when awaiting a match for a private domestic
                    adoption.
                  </p>
                </div>

                <div className="card card-body my-2">
                  <h3>Q: Who Do I Contact To Begin The Process?</h3>
                  <p>
                    A: For more information, please contact Ashley Grant at{" "}
                    <a href="mailto:AGrant@Compact.Family">
                      AGrant@Compact.Family
                    </a>
                    .
                  </p>
                </div>
              
      </Container>
    </>
  );
};

export default HighlandsPage;
