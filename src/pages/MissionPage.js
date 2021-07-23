import { Container, Row, Col, Image } from "react-bootstrap";
// import NumberFormat from "react-number-format";
// import { Link } from "react-router-dom";
import "../svg.css";

const MissionPage = () => {
  document.title = "COMPACT Mission"


  return (
    <>
      <Container fluid className="photoblue m-0">
        <Container>
          <Row className="text-center">
            <Col md={6} className="mt-3 d-flex align-items-center">
              <div>
                <p
                  className="h1"
                  style={{ letterSpacing: "-.09rem", lineHeight: "2rem" }}
                >
                  COMP<strong>ACT</strong> MISSION
                </p>

                <p className="lead" style={{ lineHeight: "2rem" }}>
                  COMP<strong>ACT</strong> is a Christ-centered ministry to
                  redeem vulnerable children and families through compassionate
                  action
                  <br /> to the glory of God.
                </p>
              </div>
            </Col>

            <Col md={6}>
            <Image fluid
              alt="Child representative"
              src="https://compact.family/images/0534.jpg"
              width="563"
              height="600"
              layout="intrinsic"
            />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-dark text-white p-5 text-center">
        <h>
          COMP<strong>ACT</strong> operates licensed, professional Christian
          family services.
        </h>
        <p>
          COMP<strong>ACT</strong> is a nationally accredited child welfare and
          family services agency through the New York-based Council on
          Accreditation (COA), a nonprofit accreditor of human services since
          1977.
        </p>

        {/* <h4>
            Go to{" "}
            <a href="announcements">
              COMP<strong>ACT</strong> Announcements
            </a>{" "}
            for a downloadable brief history and current programming
            descriptions we offer.
          </h4> */}
      </Container>

      <Container fluid className="bg-blue m-0 p-5 text-white text-center">
        <p className="h2">
          COMP<strong>ACT</strong> VISION
        </p>

        <p className="lead">
          COMP<strong>ACT</strong> aims to provide services and resources that
          help churches and others redeem vulnerable children and families.
        </p>

        <p className="lead">
          COMP<strong>ACT</strong> envisions extending its continuum of
          Christ-centered family services including, community, residential,
          placement and prevention services such as foster homes, group homes,
          treatment services, training services, intervention services,
          adoptions and church empowerment as far as the will of God leads and
          provides.
        </p>

        <p className="lead">
          COMP<strong>ACT</strong> endeavors to equip and resource the Church
          over the next decade to reach and redeem at least 3% (13,000) of the
          daily modern orphan need in the United States.
        </p>
      </Container>

      <Container fluid>
        <Container className="py-5">
          <h3 className="blue">The Modern American Foster Care Crisis</h3>
          <h2 className="lead">
            America’s children are increasingly at risk due to the breakdown of
            the American family over the past six decades. It has negatively
            affected the nation morally, socially, educationally, behaviorally,
            and economically.
          </h2>

          <svg
            id="prefix__usmap"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1685.11 1080"
          >
            <style>
              {".prefix__st1{fill:#fff}.prefix__st3{font-size:68.307px}"}
            </style>
            <path
              className="svgblue usmap"
              id="usmap"
              d="M1657.11 170.24c-5.84-.93-7.25 4.06-11.13 0 1.48-6.45-2.76-7.15-1.85-13.02-4.92-.02-10.59.7-12.98-1.86-3.08-19.85-10.94-34.91-14.83-53.95-7.33-.09-10.75-4.1-16.69-5.59-4.57 4.1-8.13 9.2-14.83 11.17-5.23-.34-2.32-8.85-9.27-7.44-7.3 17.96-20.29 46.34-11.13 68.83-4.76 7.63-9.73 15.05-9.27 27.91-6.65-1.54-8.97 4.2-12.98 0-1.84 5.6-1.37 13.51-7.42 14.88-19.22 3.41-40.7 12.07-61.19 16.74-9.81 2.24-20.03.6-27.81 5.58-8.99 5.75-12.11 19.02-18.55 27.9-4.47 6.17-13.68 7.12-11.12 16.74 8.56 2.98 6.95 12.95 7.42 18.61-17.49 25.29-50.04 12.97-77.88 26.04.53 8.78 6.11 12.47 9.27 18.6-23.9 32.45-58.35 54.32-96.42 72.56-5.88-7.74-24.51-2.69-27.81-13.03 9.64-9.26 7.78-34.61 22.25-33.49-1.79-24.25-4.96-47.11-20.39-57.67-12.15 1.45-10.49 16.76-20.4 20.46-7.39 1.22-5.31-7.07-5.56-13.02 21.24-5.5 7-38.39 11.13-48.37-4.89.56-4.78-3.89-5.56-7.44-19.98-.09-37.07-22.34-48.21-1.86-1.63 5.98 6.11 2.55 5.56 7.44-6.41-1.47-7.83 2.07-11.13 3.72-1.4 11.32 5.05 18.97-5.56 20.47-2.83-8.93 7.88-15.95 0-18.61-17.03 18.7-17.94 38.6-20.39 70.69 20.67 20.05 14.52 70.25-12.98 78.13-38.83-35.02-17.06-107.08-7.42-146.96-7.53 9.2-15.3 28.03-24.1 29.77 6.24-17.93 17.53-30.78 22.25-50.23 15.89 4.06 24.92-7.95 44.5-13.02 16.48 2.73 31.04-.15 42.65-1.86-8.39-1.5-10.67-9.14-9.27-20.47-9.9.28-17.29 7.76-25.96 3.72v-11.16c-27 3.01-40.99 20.48-64.9 16.74-3.13-15.08-24.36-18.16-29.67-11.16 2.85-12.03 12.54-17.19 18.54-26.05-18.32.23-24.77 12.35-33.38 22.33-12.68 7.12-27.42 12.17-38.94 20.47-1.99-7.03-11 .07-12.98-3.72 1.65-3.93 5.64-5.5 5.56-11.16-9.5-3.52-21.71 15.09-35.23 7.44 13.52-7.53 19.04-24.43 31.52-33.49 10.48-7.61 25.73-6.12 33.38-18.61-10.92-2.16-28.33-.77-35.23-7.44-9.58 9.9-28.96 8.87-31.52-3.73-15.94 4.92-29.4-17.89-44.5-3.72-7.68-2.83-13.39-7.65-24.11-7.44-8.08-5.53-.49-26.8-14.83-26.05-4.25 1.93.88 13.28-3.71 14.88C607.44 145.59 375.6 97.9 166.32 43.7c8.62 13.63.81 30.09 3.71 40.93-8.83-7.05-4.44-12.91-3.71-18.61-7.47-1.28-4.55 7.84-11.13 7.44-19.07-3.19-29.56-14.99-44.5-22.32-1.34 17.34-2.92 46.34 5.56 59.53-3.23-.14-5.77.42-7.42 1.86-1.98 6.95 4.6 5.31 3.71 11.16-7.66 4.88-10.42 14.48-1.86 18.6-5.96-1.63-3.85 4.82-7.42 5.58-12.86 42.32-27.89 82.43-51.9 113.53.5 11.05-2.02 19.06-3.71 27.91 11.11 28.84-13.5 51.5-22.25 72.56 20.92 13.33 1.47 37.85 3.71 55.81.97 7.77 14.22 19.52 14.84 31.62.6 11.82 1.72 15.49 9.27 22.33-9.81 15.94-.23 36.61 11.13 42.79-1.02 6.41-8.52 6.33-9.27 13.02.76 24.44 24.38 43.84 25.96 65.12.73 9.81-8.88 16.91-1.86 26.04 32.44-.93 35.96 27.17 59.34 35.35 1.1 5.93-3.48 5.75 0 9.3 21.59 5 29.27 23.96 27.81 52.09 22.74 8.2 54.02 7.82 79.73 13.03-.02 3.69-5.06 2.36-3.71 7.44 29.15 14.43 56.6 34.37 83.44 50.23 34.59 20.44 75.44 25.41 127.94 31.63.94-6.5.83-14.05 3.71-18.6 18.11 2.92 35.84 6.21 55.63 7.44 12.84 16.26 22.63 35.59 42.65 44.65 10.47 11.24 7.16 23.45 11.13 39.07 5.25 20.66 31.34 25.5 48.21 37.21 13.25-8.41 11.57-31.8 31.52-33.48 39.27 4.63 58.46 29.4 64.9 66.97 13.36 7.05 16.78 24.08 29.67 31.62-8.18 46.81 44.39 58.24 76.02 65.11-5.85-24.77-4.56-49.26-1.85-76.27 31.29-21.31 69.42-35.77 94.56-63.25 26.4-22.14 72.87-5.74 100.13-5.59-1.05-10.46-12.4-.32-14.83-7.44 11.62-10.8 20.88 7.34 31.52 9.31.42 3.51-2.09 4.1-1.85 7.44 6.45 2.83 11.5 7.06 20.4 7.44 4.59-3.45 6.97-9.13 14.83-9.3 6.12 3.7-4.59 7.94 0 9.3 14.7-4.58 3.3-14.18 14.84-18.6 2.79 8.85 27.75 20.64 29.67 7.44-5.2-7.19-20.57-4.17-24.11-13.03 5.82-4.9 13.15-6.54 9.27-20.46-8.23-.82-4.59 10.28-14.84 7.44 8.26-22.15 27.59-19.35 53.77-20.47 3.66-3.15.7-12.95 7.42-13.03 3.89 3.07 8.97 13.62 1.85 16.74 30.65-10.04 75.28-18.28 90.85 11.16 16.43-1.37 31.4-8.18 33.38-18.6 31.74-3.32 29.7 27.25 55.63 29.77 15.53 12.7-2.16 47.34 12.98 59.53 4.54-5.19-1.42-12.53 0-13.02 2.77.32 6.84-.67 7.42 1.86.77 8.83-7 9.1-7.42 16.74 9.64 10.78 17.44 23.42 24.1 37.21 5.24 1.54 4.81-2.62 9.27-1.86 3.79 6.12 5.77 14.05 9.27 20.47 16.29-3.74 23.23 14.12 27.82 27.9 7.04-2.29 19.18-9.2 24.1-7.44-2.47 11.19-21.03 16.07-20.4 24.18 12.92-9.37 24.78-19.79 27.82-39.06-6.59-2.9-1.12 6.32-5.56 5.58 14.01-48.76-12.77-82.16-29.67-111.62.02-3.7 5.06-2.37 3.71-7.44-28.05-25.22-57.67-75.7-40.79-124.64 3.92-11.38 16.46-17.76 16.69-29.77 17.66-5.85 22.26-24.8 37.09-33.48-1.06-24.62 12.29-34.8 33.37-37.21-1.65-36.84 45.26-29.82 46.36-53.95-1.45 3.27-16.05 5.54-18.54 0 7.74 6.2 12.93-9.98 5.56-13.02 11.99 3.46 24.84-1.94 25.96-14.88-2.96-5.08-11.31 4.35-14.84-1.86 6.6.42 11.11-1.25 12.98-5.58l-.93-2.79 2.78.93c-7.88-11.94-14.17-25.47-20.4-39.07-4.21.02-8.95-.49-11.73.96 7.37-6.15-8.51-13.37-4.96-17.7 1.86-.01 2.21 1.51 3.71 1.86-1.07-13.81-5.2-24.55-14.83-29.77 4.98 1.28 3.58-3.84 5.56-5.58-12.88-8.28-14.88-42.78-1.85-44.65-8.41 7.78 5.37 17.08-3.71 26.05 8.31.11 3.06 2.64 3.71 13.02 9.87.64 7.84 13.22 14.83 16.74 2.72-6.62-5.96-11.15-1.85-13.02 19.46 6.87-3.56 34.08 11.13 44.65 3.69-24 20.86-46.53 11.13-72.56-13-3.7-14.86-18.58-22.25-27.9 5.03 7.35 12.14 12.62 24.1 13.02.76 4.48-3.38 4.04-1.85 9.3 13.93-13.21 24.93-37.53 18.54-65.11-2.19-4.58-7 3.81-9.27-1.86 3.78-.55 3.64-5.03 7.42-5.58l-.93-5.03 2.78-4.28c13.1-26.55 51.3-27.91 74.17-44.65 2.32-5.58-.89-9.3 7.42-11.16 1.06 6.02-.56 9.36-3.71 11.16 8.42-4.57 12.47-13.54 24.11-14.88-.28-9.64-2.88-16.96-12.98-16.75.88 5.94 9.51 4.11 9.27 11.17-16.05 14.25-19.31-17.31-31.52-13.02 1.14-16.41-.96-38.88 7.42-63.25 10.32 1.78 17.27-9.54 25.96-14.88 1.36-6.45-2.03-17.65 0-18.61 2.17 2.78 7.7 2.19 7.42 7.44-4.39 2.81-6.85 2.83-3.71 9.3 9.34-2.23 5.02-14.99 11.13-20.46-.52 4.86-.63 9.31 5.56 7.44 3.51-10.96-2.25-5.2-3.71-11.16 13.94 6.9 41.23-21.45 24.06-35.38"
            />
            <text
              fontFamily="arial, arial black"
              transform="translate(351.619 516.041)"
            >
              <tspan
                x={0}
                y={0}
                className="prefix__st1 prefix__st2 prefix__st3 prefix__usmaptext"
              >
                {"LAST NIGHT, "}
              </tspan>
              <tspan
                x={431.56}
                y={0}
                className="prefix__st2 prefix__st3 prefix__usmaptext"
              >
                {"MORE THAN HALF"}
              </tspan>
              <tspan
                x={100.96}
                y={81.97}
                className="prefix__st1 prefix__st2 prefix__st3 prefix__usmaptext"
              >
                {"OF AMERICA\u2019S CHILDREN"}
              </tspan>
              <tspan
                x={50.79}
                y={163.94}
                className="prefix__st2 prefix__st3 prefix__usmaptext"
              >
                {"DID NOT SAY \u201CGOOD NIGHT\u201D"}
              </tspan>
              <tspan
                x={0.58}
                y={245.91}
                className="prefix__st1 prefix__st2 prefix__st3 prefix__usmaptext"
              >
                {"TO THEIR BIOLOGICAL FATHER."}
              </tspan>
            </text>
          </svg>

          <p>
            Annually more than 670,000 children pass through the modern orphan
            system known as foster care in America. A daily average of 435,000
            are in the foster care system. Children are growing up without
            healthy homes and family. In part, here is why.
          </p>
          <p>
            In his detailed research report book, Families Without Fathers,
            David Popenoe explains that the U.S. divorce rate has exploded by
            1000% in the past Century. He continues that according to U.S.
            Census statistics since 1960, the out-of-wedlock birth rate in
            America has exploded by over 800%.
          </p>
          <p>
            Since the cultural revolution in the 1960’s, immoral social
            experimentation has eroded human and family health. Unsurprisingly,
            an American modern orphan crisis (foster care) has evolved; unlike
            previous lesser orphan problems caused by war or epidemic diseases.
            Based on the 2010 U.S. Census, it is estimated more than half of
            America’s children went to bed last night without saying good night
            to their biological father.
          </p>
          <p>
            Last year, according to the U.S. Department of Health and Human
            Services, 61% of all children removed from their homes and placed
            into the foster care system was the result of parental neglect and
            34% due to parental drug abuse: 47% were white, 21% were black or
            African American, and 20% were Hispanic (of any race). Several
            studies show that 50 to more than 90 percent of children who were
            victims of child sex trafficking had been involved with child
            welfare services (HHS, ACF, 2013). More than 100,000 persons are
            sexually trafficked in America.
          </p>
        </Container>
      </Container>

      <Container fluid className="bg-light">
        <Container className="py-4">
          <h3 className="blue">A Biblical Response</h3>
          <p>
            America has a family crisis robbing the souls and future of
            children. A self- indulgent generation brought it. A sacrificial
            generation can redeem it.{" "}
          </p>
          <p>
            The Church and its resources must lead. America has tried to
            intervene this crisis by increasing government taxed services.
            Simultaneously, a large part of the Church abdicated its biblical
            mandate to lead.
          </p>
          <p>
            We either redeem this generation of family brokenness for children
            or risk their loss and potentially a nation that has spawned the
            greatest Christian world mission endeavor in history.{" "}
          </p>
          <p>
            COMP<strong>ACT</strong> is strategically committed to turn the tide
            for the glory of God and the betterment of vulnerable children and
            families.
          </p>
          <Container className="my-5">
            <p>
              Deuteronomy 10:18 (NLT) declares that God “ensures that orphans
              and widows receive justice. He shows love to the foreigners living
              among you and gives them food and clothing.” Matthew 28:19 (ESV)
              announces, “And Jesus came and said to them, “‘Go therefore and
              make disciples of all nations…’” The term nations is literally the
              Greek word for ethnicity. In other words, all types of people
              groups, including the orphaned, widowed, impoverished and
              homeless.
            </p>
            <p>
              James 1:27 (NLT) asserts that “Pure and genuine religion in the
              sight of God the Father means caring for orphans and widows in
              their distress…”
            </p>
            <p>
              Galatians 4:4-5 (ESV) proclaims, “God sent forth his Son…to
              redeem…so that we might receive adoption as sons.”{" "}
            </p>
          </Container>
          <p>
            Each occurrence of the word compassion in the New Testament is
            accompanied by some surrounding action. The apostle declared in
            James 2:20 (KJV) that “faith without works is dead.” If faith
            without works is dead, then compassion without action is dead.
          </p>
          <p>
            God has given compassion ministry to the Church. Your support of
            COMP<strong>ACT</strong> ministries is compassionate action.
          </p>
        </Container>
      </Container>
    </>
  );
};

export default MissionPage;
