import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SocialLineup } from "../components/SocialLineup";
import { Link } from "react-router-dom";

const PlannedGiving = () => {
  return (
    <>
      <Container fluid className="photoblue m-0">
        <Container>
          <Row className="text-center">
            <Col lg={6} md={12} className="mt-3 d-flex align-items-center">
              <div>
                <h1 className="display-4">Planned Giving</h1>

                <p className="lead text-left">
                  A planned gift, estate gift or endowment ensures that your
                  legacy is continued and helps secure the future to see the
                  mission of COMP<strong>ACT</strong> continue. You will have
                  peace of mind knowing that your gifts are given as you
                  intended.{" "}
                </p>
              </div>
            </Col>

            <Col lg={6} md={12}>
            <Image fluid
                src="https://compact.family/images/0590.jpg"
                alt="Child representative"
                layout="intrinsic"
                width="600"
                height="519"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="text-center">
        <Container className="bg-light border my-4 p-5">
          <p className="h3">
            What Is The Best Way To Give To COMP<strong>ACT</strong> Family Via
            Planned Giving (Estate, Will, Grant, Annuities, Trusts, etc)?
          </p>

          <p>
            Email{" "}
            <a href="mailto:PlannedGiving@COMPACT.Family">
              PlannedGiving@COMPACT.Family
            </a>{" "}
            to learn more.
          </p>
        </Container>

        <Container className="bg-light border my-4 p-5">
          <p className="h3">
            Can I Donate A Non-Cash Item (Vehicle, Property, Stocks, vehicle) To
            COMP<strong>ACT</strong>?
          </p>

          <p>
            Yes. Email{" "}
            <a href="mailto:PlannedGiving@COMPACT.Family">
              PlannedGiving@COMPACT.Family
            </a>{" "}
            for more information.
          </p>
        </Container>

        <Container className="bg-light border my-4 p-5">
          <p className="h3">How Can I Give an Estate Gift?</p>
          <p>Give an immediate Estate Gift by clicking here.</p>

          <p>
            <a
              className="btn btn-primary"
              href="https://giving.ag.org/Give/Details/886055?MinistryName=886055&Page=0"
              target="_new"
            >
              GO TO ESTATE GIFT
            </a>{" "}
          </p>

          <p>
            You can also work with one of our financial advisors or one of your
            own, designating COMP<strong>ACT</strong> Family Services as a
            recipient. COMP<strong>ACT</strong> works alongside an expert
            financial institution to help ensure that you are receiving advice
            that will help support COMPACT, while providing significant benefits
            for your family. Email{" "}
            <a href="mailto:PlannedGiving@COMPACT.Family">
              PlannedGiving@COMPACT.Family
            </a>
            .
          </p>
        </Container>

        <Container className="bg-light border my-4 p-5">
          <p className="h3">
            What Are The Benefits Of Working With A Financial Advisor?
          </p>

          <p>
            Annuities, trusts and endowments offer you and your spouse regular
            income for life while possibly creating a charitable deduction
            opportunity. Various planned giving options are available each
            offering potential capital gains tax savings, immediate income tax
            deductions while allowing you flexible giving options to give to the
            ministry of your choice.
          </p>
        </Container>

        <Container className="bg-light border my-4 p-5 text-left">
          <h4 className="h3 text-center">
            What Are the Benefits of Estate or Will Planning?
          </h4>
          <p className="lead">
            There are several planned giving options available. These include
            Annuities, Trusts, Estates, Endowments, Will Planning, Property,
            Charitable Rollovers, Stocks and Bonds and Life Insurance.{" "}
          </p>

          <p>
            Estate planning ensures assets you have accumulated over your
            lifetime go exactly where you want them to go and when. Not having a
            will or living trust, may mean the state will determine a
            distribution plan for you, which may not be according to your
            wishes.
          </p>

          <p>
            You’ll have a plan to be followed in case you become incapacitated
            and are unable to make decisions
          </p>

          <p>
            Designates who will handle your affairs when you are gone. This
            includes appointing guardianship for minor-aged children. Minimizes
            any estate taxes and costs.
          </p>

          <p>
            Gives direction for the type of funeral arrangements you would like.
          </p>

          <p>
            Remember and provides for ministries and organizations that line up
            with your passions and commitments.
          </p>

          <p>
            Planning makes things much easier for family who would otherwise
            have to make several quick decisions that may not line up with your
            desires.
          </p>

          <p>
            Preparing ahead of time gives you confidence knowing that you have
            taken right measures to plan and provide for yourself and loved
            ones, as well as support the causes you care about.
          </p>
        </Container>

        <Container className="bg-light border my-4 p-5 text-left">
          <p className="h3 text-center">
            How Do I Go About Including COMP<strong>ACT</strong> in My Will?
          </p>

          <p className="lead text-center">
            Following is a sample bequest to consider for making COMP
            <strong>ACT</strong> Family Services a recipient in your will or
            estate planning. For expert advice regarding your unique situation
            we suggest you contact a qualified professional advisor.{" "}
          </p>

          <p>
            I hereby give, devise and bequeath $_______ to Assemblies of God
            Family Services Agency, dba COMP<strong>ACT</strong> Family
            Services, 2325 Malvern Ave, Hot Springs, AR 71901, a non-profit
            ministry, Federal Tax ID #20-5112679 to be used by COMP
            <strong>ACT</strong> Family Services’ general use and ministry
            purpose <em>(or ministry purpose of your choice)</em>.
          </p>
          <p>
            I hereby give, devise and bequeath $_______ percent (____%) to
            Assemblies of God Family Services Agency, dba COMP
            <strong>ACT</strong> Family Services, 2325 Malvern Ave, Hot Springs,
            AR 71901, a non-profit ministry, Federal Tax ID #20-5112679 to be
            used by COMP<strong>ACT</strong> Family Services’ general use and
            ministry purpose <em>(or ministry purpose of your choice)</em>.
          </p>
          <p>
            I hereby give, devise and bequeath all or _____% of the rest,
            residue and remainder of my estate to be used by Assemblies of God
            Family Services Agency, dba COMP<strong>ACT</strong> Family
            Services, located at 2325 Malvern Ave, Hot Springs, AR 71901, a
            non-profit ministry, Federal Tax ID # 20-5112679 to be used by COMP
            <strong>ACT</strong> Family Services’ general use and ministry
            purpose<em> (or ministry purpose of your choice)</em>.
          </p>
          <p>
            If primary beneficiary does not survive me, then I hereby give,
            devise and bequeath to Assemblies of God Family Services Agency, dba
            COMP<strong>ACT</strong> Family Services, 2325 Malvern Ave, Hot
            Springs, AR 71901, a non-profit ministry, Federal Tax ID #20-5112679
            (description of property) to be used for COMP<strong>ACT</strong>{" "}
            Family Services’ general use and purpose{" "}
            <em>(or ministry purpose of your choice)</em>.
          </p>
        </Container>
        <Container className="bg-light border my-4 p-5">
          <p className="h4">
            How Can I Learn More About the History, Leadership, Mission And
            Vision of COMP<strong>ACT</strong>?
          </p>

          <p>
            {" "}
            More about COMP<strong>ACT</strong> can be found at
            <NavLink to="history-and-future"> History, </NavLink>
            <NavLink to="leadership">Leadership, </NavLink>
            <NavLink to="mission">and Mission and Vision.</NavLink>
          </p>
        </Container>
        <Container className="bg-light border my-4 p-5">
          <p className="h4">
            How Can I Remain Connected to What’s Taking Place at COMP
            <strong>ACT</strong>?
          </p>

     
          <p>
            <Link to="/newsletter">
              Subscribe to our monthly newsletter at COMPACT.Family/Newsletter
            </Link>
          </p>
          <p>Follow us on Social Media</p>

          <h4 className="red bg-warning p-3">FIX SOCIAL CONDITIONAL STLYE</h4>
          <SocialLineup className="vanilla" />

          <div className="d-flex justify-content-center">
            <a className="fa fa-phone mr-1 h4" href="tel:501-262-1660">501-262-1660</a>
      
          </div>
        </Container>
      </Container>
    </>
  );
};

export default PlannedGiving;
