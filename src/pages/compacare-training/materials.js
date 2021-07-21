// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import BannerCompaCareTraining from "./components/BannerCompaCareTraining";

const CompaCareTrainingMaterials = () => {
  document.title = "CompaCare Materials"

    return(
        <>
<BannerCompaCareTraining />
<Container id="order" className="my-5">
          <h4>Training materials consist of</h4>
          <h5 className="ml-5">
            {" "}
            • CompaCare Compassion Care System Manual ($29.95)
          </h5>
          <h5 className="ml-5">• CompaCare Family Advocate Manual ($14.99)</h5>
          <h5 className="ml-5">• CompaCare Volunteer Manual ($7.99)</h5>
          <p>
            You will need a System Manual for each person who is doing the Church Leaders’ Training. Depending on the size of your church and
            the number of foster families that you will serve, you will need one
            Family Advocate Manual to train one Family Advocate for every two or
            three foster families that you will serve. Volunteers who will have
            direct contact with foster children (Level 2 volunteers) should each
            have their own Manual when you train them for their roles.
          </p>
          You can order more supplies at any time from My Healthy Church. Here
          is the link for these supplies:
          <div className="text-center">
            <a
              className="btn btn-secondary my-4"
              href="https://myhealthychurch.com/store/searchresults.cfm?Criteria=compacare&image.x=22&image.y=18"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase at MyHealthyChurch
            </a>
          </div>
        </Container>

        </>
    )
}

export default CompaCareTrainingMaterials;