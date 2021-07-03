import { Container, Image } from "react-bootstrap";

const FindPage = () => {
  return (
    <>
      <Container
        fluid
        className="text-center mb-0 pt-5 pb-2 bg-dark text-white"
      >
        <Container className="mb-5 col-lg-6 col-md-12 text-center offset-lg-3 offset-md-0">
          <p className="h4 ">
            COMP<strong>ACT</strong> <strong>FIND</strong> is a Kinship
            Navigating service of COMP<strong>ACT</strong>. It is an acronym for
            Friends, Individuals, Neighbors, and Devotees.
          </p>
        </Container>
      </Container>

      <Container fluid className="my-0 py-0 photoblue">
        <Container className="text-center">
          <div className="row">
            <div className="col-md-12 col-lg-5">
            <Image
            fluid
                src="https:compact.family/images/0622.jpg"
                width="560"
                height="553"
                Layout="intrinsic"
              />            </div>

            <div className="col-md-12 col-lg-7 d-flex justify-content-center align-items-center pt-3">
              <div>
                <p>
                  <strong>FIND</strong> is based from the COMP
                  <strong>ACT</strong> Springfield, MO office. Because FIND is a
                  research services work, it can theoretically serve needs
                  across the nation. Services were successfully piloted in
                  Missouri and now serves Arkansas too.{" "}
                </p>
                <p>
                  COMP<strong>ACT</strong> <strong>FIND</strong> (Family,
                  Individuals, Neighbors, and Devotees) is a service to assist
                  child placement agencies in their search for a foster child’s
                  relatives and non-blood relatives. Although the goal is to
                  locate relative placement options for the child, other
                  benefits of the program include locating and initiating
                  potential life-long relationships and supports through a
                  genogram and a kinship support network.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>

      <Container className="px-5 py-4">
        <p>
          COMP<strong>ACT</strong> <strong>FIND</strong> service supports the
          Five Domains of Wellbeing by providing a means for social
          connectedness, enhancing safety of the child, increasing placement
          stability, achieving mastery of practice, and providing meaningful
          access to relational resources in the life of a child.
        </p>

        <p>
          COMP<strong>ACT</strong> <strong>FIND</strong> fulfills state statutes
          requiring due diligence be made in order to place children in care
          first, with a grandparent or relative, and second with a trusted adult
          that has a preexisting relationship with the child such as a
          godparent, teacher, neighbor, or fellow parishioner who voluntarily
          agrees to care for the child.
        </p>
        <p>
          COMP<strong>ACT</strong> <strong>FIND</strong> estimates that the
          building of a full genogram and the construction of a comprehensive
          kinship network takes an approximated minimum of 20 hours of work. Due
          to high caseloads and lack of resources, case managers simply do not
          have time to do due diligence in locating and building this support
          network for every child that comes into care.
        </p>
        <p>
          The value for the child is inherent, whether or not the child returns
          home. If the child is reunited with his/her biological family, the
          family will be able to see their support network on paper. This
          network is one which they can call up for help/support and is
          something that will empower them to continue to be a healthy,
          functional, and safe family.
        </p>
        <p>
          If the child is not returned to the biological family, the child will
          be able to maintain connections with his/her roots and community.
        </p>
        <p>
          Additionally, if a child must come back into care, the case manager
          will already have contacts, supports, and a family genogram to work
          from, saving time and money with the reentry of the case.
        </p>
        <p>
          COMP<strong>ACT</strong> <strong>FIND</strong> is finding family for
          foster youth.
        </p>
      </Container>

      <Container className="py-4 my-0">
        <div className="container">
          <p className="lead">
            COMP<strong>ACT</strong> <strong>FIND</strong> researched cases
            include the following completed deliverables:
          </p>
          <ul className="list-inline-item">
            <li>
              A copy of every contact log recorded during the life of the case
            </li>
            <li>
              A copy of all records discovered/made during diligent search
              efforts
            </li>
            <li>A complete genogram</li>
            <li>
              A natural support network for the child, made up of kinship
              relationships who have committed to seeing the child succeed.
            </li>
          </ul>
        </div>
      </Container>

      <Container fluid className="bg-blue text-white py-5 px-5">
        <p className="h3 text-center">Genogram Building Service</p>
        <p>
          COMP<strong>ACT</strong> <strong>FIND</strong> (Families, Individuals,
          Neighbors, and Devotees) also provides case managers with built
          genograms that include the last known contact information for family
          members listed. Although the goal is to locate relative placement
          options for the child, other benefits of genogram include having a
          document that can follow the child and eventually be given to the
          child so that family connections and family history are not lost.
        </p>

        <p>
          COMP<strong>ACT</strong> <strong>FIND</strong> service supports the
          Five Domains of Wellbeing by providing a means for social
          connectedness, enhancing safety of the child, increasing placement
          stability, achieving mastery of practice, and providing meaningful
          access to relational resources in the life of a child.
        </p>

        <p className="lead text-center">
          If you would like more information about COMP<strong>ACT</strong>{" "}
          <strong>FIND</strong>, please call{" "}
          <strong>
            <a href="tel:417-319-4070">(417) 319-4070</a>
          </strong>
          .
        </p>
      </Container>
    </>
  );
};

export default FindPage;
