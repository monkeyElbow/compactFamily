import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HillcrestLogo from "../graphics/HillcrestLogo";
import BoldBeginning from "../components/BoldBeginning";

const HistoryPage = () => {
    return(

        <>
<Container
        fluid
        className="bg-blue text-white py-5 d-flex flex-column align-items-center"
      >
        <div className="col-sm-10 col-md-8">
          <h5 style={{ lineHeight: "3.5rem" }}>
            A dream that started in the heart of a young lady, Gladys Hinson, in
            1944 is now a 52-acre campus of Christian homes, wonderful amenities
            and staff filled with the love of Jesus Christ. COMP
            <strong>ACT</strong> Family Services continues to redeem the life
            and future of vulnerable children through our many ministries,
            including Hillcrest Children’s Home, Highlands Maternity Home,
            CompaCare and Foster Care. Explore our ministries page to learn more
            about the individual mission and vision of these ministries.
          </h5>
        </div>

        <div className="w-25">
          <HillcrestLogo />
        </div>

        <div className="col-sm-10 col-md-8 text-center py-5">
          <h5>Psalm 82:3</h5> <h3>“Give justice to the poor and the orphan;</h3>
          <h3>uphold the rights of the oppressed and the destitute.”</h3>
          <p className="small">NLT</p>
        </div>
      </Container>

      <Container className="my-5">
        <BoldBeginning />

        <Link to="/stories">
          More Stories here
        </Link>
      </Container>
        </>
    )
}

export default HistoryPage;