import { Container } from "react-bootstrap";

const CompaCarePlan = () => {
  return (
    <>
      <Container className="my-5">
        <p className="h2">
          The <span className="red">CompaCare</span>
          <sup>&reg;</sup> Plan
        </p>
        <Container className="py-1 col-lg-8 col-mg-12">


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1221.2 784">
          <style>
            {
              ".planpath{fill:none;stroke-width:67;stroke-linecap:round;strokeMiterlimit:10;}"
            }
          </style>
          <g>
            <path
              id="planstroke1"
              className="planpath svggreystroke"
              d="M515.8,460.7c10.5-19.3,16.4-41.4,16.4-64.8c0-75.2-60.9-136.1-136.1-136.1S260,320.7,260,395.8
              S320.9,532,396.1,532h597.6"
              />
            <path
              id="planstroke2"
              className="planpath svgpurplestroke"
              d="M587.2,461.1c7-20.5,10.8-42.4,10.8-65.3C598,284.3,507.6,194,396.1,194s-201.9,90.4-201.9,201.9
              s90.4,201.9,201.9,201.9h651"
              />
            <path
              id="planstroke3"
              className="planpath svgroyalbluestroke"
              d="M656.2,460.6c5.2-20.7,7.9-42.5,7.9-64.8c0-148-120-268-268-268s-268,120-268,268s120,268,268,268h703.5"
              />
            <path
              id="planstroke4"
              className="planpath svgredstroke"
              d="M723.3,461.8c4.3-21.3,6.5-43.3,6.5-65.9c0-184.3-149.4-333.6-333.6-333.6S62.5,211.6,62.5,395.9
              s149.4,333.6,333.6,333.6h768.3"
              />
            <circle
              id="planstart"
              className="svgblue"
              cx="396.1"
              cy="395.8"
              r="95.7"
              />

            <g>
              <text
                className="chartfamily"
                transform="matrix(1 0 0 1 315.418 412.2686)"
                >
                FAMILY
              </text>
            </g>
          </g>

          <g className="phasesTitles">
            <text
              transform="matrix(1.0187 0 0 1 356 543.142)"
              className="planphase"
              >
              Phase 1 - Steps 1-3
            </text>
            <text
              transform="matrix(1.0187 0 0 1 750 543.142)"
              className="plansub"
              >
              Pastoral Endorsement
            </text>

            <text
              transform="matrix(1.0187 0 0 1 375 610.1261)"
              className="planphase"
              >
              Phase 2 - Steps 4-8
            </text>
            <text transform="matrix(1 0 0 1 800 607.0323)" className="plansub">
              TEAM Development
            </text>

            <text
              transform="matrix(1.0187 0 0 1 420 675.7341)"
              className="planphase"
              >
              Phase 3 - Steps 9-12
            </text>
            <text transform="matrix(1 0 0 1 825 672.6404)" className="plansub">
              Church Launch
            </text>

            <text
              transform="matrix(1.0187 0 0 1 450 741.3452)"
              className="planphase"
              >
              Phase 4 - Steps 13-17
            </text>
            <text transform="matrix(1 0 0 1 875 738.1362)" className="plansub">
              Ministry Management
            </text>
          </g>
        </svg>

      </Container>
      <p className="lead">
        Trained CompaCare<sup>&reg;</sup> Representatives are being deployed across the nation. Their mission assignment is to competently equip and support churches in CompaCare<sup>&reg;</sup>.
      </p>
              </Container>
    </>
  );
};
export default CompaCarePlan;
