import { Container, Row, Col, Button } from "react-bootstrap";

export default function YearEndGiving() {
  return (
    <>

    <Container fluid className="bg-blue text-white p-5">
        <h1 className="display-5 fw-bold">
          2022 has been a year of extraordinary impact in this redeeming
          ministry on many fronts!
        </h1>

    </Container>
      <Container className="">

        <Row className="">
          <Col className="d-flex flex-column justify-content-center">

        <p className="lead fs-3">
          This year saw an increase in those served through the multiple
          ministries of the COMP
          <span className="act">ACT</span> Family Services Agency. Thank you for
          your faithfulness and sincere love for <strong>COMP</strong>assionate <span className="act">ACT</span>ion!
        </p>
            <p>
              Your continual support saw 750 parents and children served in our{" "}
              <strong>SafeCare</strong> prevention program. This program assists vulnerable
              families with the tools to stay safe, intact, educated, and
              united. <strong>Foster Care</strong> services saw 73 Hillcrest children served with the love of Jesus! Our foster parents, AKA family missionaries,
              also served 105 foster children in their homes! <strong>CompaCare</strong> saw an
              additional 600 children and families served as we empowered the
              local church in their community.
            </p>

            <p>
              <small>
               Scan the QR code for click to go to: {" "}
                <a rel="noopener noreferrer" href="https://giving.ag.org/donate/compact-family-services?fundid=38231">
                  https://giving.ag.org/donate/compact-family-services?fundid=38231
                </a>
              </small>
            </p>
          </Col>
          <Col md={3} sm={12} className="flex-column text-center p-5">
            <p>Scan the code for the giving page </p>
            {giveQR()}

            <Button rel="noopener noreferrer" href="https://giving.ag.org/donate/compact-family-services?fundid=38231">
              Or click here
            </Button>
            
            <p>
            </p>
          </Col>
        </Row>

        <p><strong>
          Highlands</strong> had eighteen adoptive consultations in Missouri alone and sixteen adoptions. Fifteen more adoptions are to take place in the next six months. Jesus was brought to the forefront in all these situations through the prayer and support of many people.There were
          countless salvations in 2022, over 15 public water baptisms, and two teen moms dedicated their children to Jesus in our residents&#39;
          local church!
        </p>

        <p className="p-5 fs-4 text-center">
          &quot;The LORD watches over the sojourners; he upholds the widow and
          the fatherless.&quot; (Psalm 146:9a)
        </p>

        <p>
          Our <strong>FIND</strong> team was able to find 161 connections for a teen boy and
          reconnect him with the biological mother, who had been released from
          jail and doing very well. What more valuable gift can one give a lost
          family member than his own family? Thank you for sharing in the gift
          of family and Jesus!
        </p>

        <p className="fw-bold fs-4">
          Please consider a special end-of-year tax-deductible donation to help
          us reach vulnerable children, youth, and families and expand this
          ministry to every state.
        </p>

        <p>
          In addition to Arkansas and Missouri, COMP
          <span className="act">ACT</span> recently incorporated in Oklahoma and
          applied as a Child Placement Agency to expand our efforts. More states
          are in the works! Any amount is greatly appreciated and needed to move
          this ministry forward! Perhaps God has blessed you to give
          significantly, as this is a worthy cause producing Kingdom fruit and
          can expand with your help!
        </p>

        <p>
          On behalf of the children and families ministered to through our many
          programs, thank you for a year-end gift! Click                 <a className="fw-bold" rel="noopener noreferrer" href="https://giving.ag.org/donate/compact-family-services?fundid=38231">
                  here
                </a> {" "}
           to give your secure, online,
          tax-deductible donation. All contributions should be dated and
          postmarked by December 31, 2022. Mail to:
        </p>

        <p className="p-5 text-center fs-4">
          COMP
          <span className="act">ACT</span> Family Services <br />2325 Malvern Avenue
          Hot Springs, <br />AR 71901
        </p>

        <p className="display-5 text-center pb-5 blue">Together We Make A Difference</p>
      </Container>

      {/* <Container>
        <Row className="flex-column text-center">
          <Col></Col>
          <Col md={3}>
            {giveQR()}
            <Button href="https://giving.ag.org/donate/compact-family-services?fundid=38231">
              Click here now
            </Button>
            <p>
              <small>
                Or go to{" "}
                <a href="https://giving.ag.org/donate/compact-family-services?fundid=38231">
                  https://giving.ag.org/donate/compact-family-services?fundid=38231
                </a>
              </small>
            </p>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

function giveQR() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.55 79.55">
        <path d="M5.18 27.71h1.86v7.44H5.18zm3.72-9.3h9.3V5.39H5.18v13.02H8.9ZM7.04 7.25h9.3v9.3h-9.3v-9.3ZM8.9 46.31v-1.86H5.18v1.86H8.9zm-1.86 5.58v-1.86H5.18v9.3h1.86v-5.58H8.9v-1.86H7.04zm3.72-1.86v-1.86H7.04v1.86h3.72zM8.9 57.47h1.86v1.86H8.9z" />
        <path d="M12.62 14.69h1.86V9.11H8.9v5.58h3.72zm0 29.76v-1.86h1.86v-3.72h-1.86v1.86H8.9v3.72h3.72zm-1.86 20.46H8.9v5.58h5.58v-5.58h-3.72z" />
        <path d="M14.48 61.19h-9.3v13.02H18.2V61.19h-3.72Zm1.86 11.16h-9.3v-9.3h9.3v9.3Zm0-40.92h1.86v1.86h-1.86z" />
        <path d="M16.34 35.15v-1.86h-1.86v-1.86h-1.86v-1.86h1.86v1.86h1.86v-1.86h1.86v1.86h1.86v-3.72h-3.72v-1.86h1.86v-1.86h-1.86v-1.86h1.86v-1.86H8.9v1.86H7.04v-1.86H5.18v3.72h7.44v-1.86h1.86v1.86h-1.86v1.86h-1.86v1.86H8.9v5.58h1.86v1.86H8.9v1.86h3.72v-1.86h1.86v1.86h5.58v-1.86h-3.72zm0 3.72h1.86v1.86h-1.86zm0 11.16h1.86v1.86h-1.86z" />
        <path d="M20.06 23.99h1.86v-1.86H18.2v1.86h1.86zm0 18.6h-3.72v1.86h1.86v1.86h1.86v-3.72zm0-5.58h1.86v3.72h-1.86zm1.86 26.04h-1.86v7.44h3.72v-1.86h-1.86v-5.58zm-1.86 9.3v1.86h3.72v-1.86h-3.72zm3.72-57.66h3.72v3.72h1.86v-1.86h1.86v1.86h1.86v-1.86h1.86v-1.86h1.86v1.86h1.86v-1.86h5.58v1.86h1.86v-3.72h-7.44v-1.86H36.8v1.86h-9.3V7.25h1.86v3.72h1.86V7.25h5.58V5.39H23.78v1.86h1.86v1.86h-1.86v3.72h-1.86V9.11h-1.86v11.16h1.86v-5.58h1.86z" />
        <path d="M23.78 23.99h3.72v-1.86h-1.86v-1.86h1.86v-1.86h-1.86v-1.86h-1.86v3.72h-1.86v1.86h1.86v1.86zm0 5.58h-1.86v1.86h-1.86v3.72h1.86v-1.86h1.86v-1.86h1.86v-1.86h-1.86zm0 9.3h1.86v1.86h-1.86zm0 3.72v3.72h-1.86v1.86h5.58v1.86h1.86v-5.58H27.5v1.86h-1.86v-1.86h1.86v-1.86h-3.72zm1.86-11.16h1.86v1.86h-1.86zm0 35.34h-1.86v1.86h3.72v-1.86h-1.86zm1.86-37.2h1.86v1.86H27.5zm1.86 20.46h1.86v1.86h-1.86zm1.86 5.58v-1.86H27.5v-1.86h-1.86v-1.86h-1.86v1.86h-1.86v-1.86h-1.86v1.86H18.2v1.86h-1.86v-1.86h-1.86v-3.72h3.72v-1.86h-5.58v3.72h-1.86v3.72H8.9v1.86h3.72v3.72h5.58v-1.86h-1.86v-1.86h3.72v-1.86h1.86v3.72h1.86v1.86h-3.72v1.86h3.72v1.86h1.86v-3.72h1.86v-1.86h-1.86v-1.86h1.86v1.86h1.86v-1.86h1.86zm0-26.04h1.86v1.86h-1.86zm1.86 27.9v1.86h1.86v-3.72h1.86v-1.86h-1.86v-1.86h-1.86v3.72h-1.86v1.86h1.86z" />
        <path d="M31.22 59.33v-1.86h-1.86v3.72h3.72v-1.86h-1.86zm0 11.16h-1.86v-1.86H27.5v3.72h-1.86v1.86h7.44v-5.58h-1.86v1.86zm3.72-31.62h1.86v-1.86h-5.58v3.72h-1.86v-3.72h1.86v-1.86h3.72v-1.86h1.86v-3.72h-1.86v1.86h-1.86v1.86H27.5v1.86h-1.86v3.72h1.86v3.72h3.72v3.72h1.86v-7.44h1.86zm0-29.76h1.86v1.86h-1.86z" />
        <path d="M34.94 40.73h1.86v1.86h-1.86zm0 20.46h-1.86v1.86h-3.72v1.86h3.72v3.72h3.72v-1.86h-1.86v-3.72h1.86v-3.72h-1.86v1.86zm0 9.3h1.86v1.86h-1.86zm1.86-42.78h1.86v1.86H36.8zm1.86 26.04h1.86v-1.86H36.8v1.86h1.86zm-1.86 3.72h1.86v1.86H36.8zm0 11.16h1.86v1.86H36.8zm0 3.72h1.86v1.86H36.8zm1.86-65.1h1.86v1.86h-1.86zm0 24.18h1.86v1.86h-1.86zm0 33.48h1.86v1.86h-1.86zm0 5.58h1.86v1.86h-1.86zm1.86-7.44h1.86v1.86h-1.86zm1.86-55.8h1.86v1.86h-1.86zm0 9.3h1.86v1.86h-1.86zm0 52.08h1.86v1.86h-1.86zm1.86-59.52h1.86v1.86h-1.86z" />
        <path d="M44.24 18.41v3.72h-1.86v1.86h1.86v1.86h-1.86v-1.86h-1.86v-1.86h-1.86v1.86h-3.72v-1.86h1.86v-1.86h3.72v-3.72h-1.86v1.86H36.8v-1.86h-1.86v3.72H27.5v1.86h3.72v1.86H27.5v1.86h-5.58v1.86h3.72v1.86h1.86v-1.86h1.86v-1.86h1.86v1.86h1.86v1.86h1.86v-3.72h5.58v5.58h1.86v3.72h-3.72v1.86h5.58v1.86h-1.86v1.86h1.86v1.86h1.86v-1.86h1.86v1.86H46.1v1.86h1.86v1.86h1.86v-1.86h5.58v-1.86h-5.58v-1.86h7.44v-1.86H55.4v-1.86h-3.72v1.86H46.1v-1.86h1.86v-1.86h-3.72v-7.44h1.86v5.58h1.86v-1.86h1.86v-1.86h-1.86v-3.72H46.1v-1.86h1.86v-1.86H46.1v-1.86h1.86v1.86h1.86v-3.72h-1.86v-1.86H46.1v1.86h-1.86zm1.86 42.78h1.86v1.86H46.1zm0 3.72h-3.72v1.86h5.58v-1.86H46.1zm1.86 3.72H46.1v1.86h-1.86v1.86h1.86v1.86h9.3v-1.86h-5.58v-1.86h-1.86v-1.86zm0-53.94h1.86v-1.86h5.58v-1.86h1.86V9.11h1.86V5.39h-1.86v1.86H55.4v1.86h-1.86v1.86h-3.72V9.11h1.86V7.25H46.1v1.86h1.86v1.86H46.1v1.86h1.86v1.86zm0 48.36h1.86v1.86h-1.86zm1.86-46.5h1.86v1.86h-1.86z" />
        <path d="M49.82 22.13h1.86v1.86h-1.86zm0 9.3h1.86v1.86h-1.86zm0 3.72h1.86v1.86h-1.86zm1.86 31.62h-3.72v1.86h1.86v1.86h3.72v-1.86h-1.86v-1.86zm0-46.5h1.86v1.86h-1.86z" />
        <path d="M51.68 23.99v1.86h1.86v1.86h1.86v1.86h1.86v-1.86h1.86v1.86h3.72v-1.86h-1.86v-1.86h1.86v1.86h1.86v-5.58h1.86v1.86h1.86v-1.86h1.86v-1.86h-9.3v1.86h1.86v1.86h-1.86v-1.86h-3.72v1.86h1.86v1.86h-1.86v-1.86H55.4v-1.86h-1.86v1.86h-1.86zm0 7.44h1.86v-3.72h-1.86v-1.86h-1.86v3.72h1.86v1.86zm3.72-16.74h-1.86v3.72h1.86v-1.86h1.86v-1.86H55.4zm0 20.46h1.86v1.86H55.4zm0 11.16h1.86v1.86H55.4zm0 22.32v1.86h1.86v1.86h5.58v-1.86h-3.72v-1.86H55.4zm1.86-55.8h1.86v1.86h-1.86zm0 3.72h1.86v3.72h-1.86zm1.86 14.88h-5.58v3.72h1.86v-1.86h1.86v1.86h3.72v-1.86h-1.86v-1.86zm-1.86 5.58v1.86h3.72v-1.86h-3.72zm1.86 3.72h-1.86v1.86h1.86v1.86h-1.86v1.86h1.86v1.86h-1.86v1.86h1.86v1.86h3.72v-1.86h-1.86v-5.58h1.86v-3.72h-3.72zm1.86-5.58h1.86v1.86h-1.86zm0 26.04h1.86v1.86h-1.86zm1.86-29.76h-1.86v1.86h1.86v1.86h1.86v1.86h1.86v-3.72h1.86v-1.86H64.7v-1.86h-1.86v1.86zm0 9.3h3.72v-1.86H64.7v-1.86h-1.86v3.72zm1.86 1.86h1.86v1.86H64.7zm0 9.3h1.86v-3.72h1.86v-3.72h-1.86v1.86h-3.72v3.72h1.86v1.86zm1.86-42.78H64.7v5.58h5.58V9.11h-3.72zm1.86 46.5h3.72v1.86H74v-3.72h-5.58v-1.86h-1.86v3.72h1.86z" />
        <path d="M68.42 64.91v-1.86h-1.86v-1.86h1.86v-1.86h-1.86v-3.72H64.7v1.86h-5.58v-1.86h5.58v-3.72h-1.86v1.86h-3.72v-1.86h-1.86v1.86H55.4v-1.86h-3.72v-1.86h-1.86v-1.86H46.1v-3.72h-5.58v-3.72h-1.86v1.86H36.8v1.86h-1.86v1.86h-1.86v3.72h1.86v1.86h1.86v-1.86h3.72v1.86h1.86v-1.86h1.86v1.86h-1.86v1.86h1.86v1.86h-1.86v-1.86h-1.86v5.58h-1.86v3.72h1.86v-1.86h1.86v1.86h1.86v-3.72h-1.86v-1.86h5.58v3.72h3.72v-1.86h1.86v5.58h-1.86v1.86h1.86v1.86h1.86v-1.86h3.72v1.86h3.72v-1.86h1.86v1.86h1.86v-3.72h1.86ZM42.38 48.17h-3.72v-1.86h3.72v1.86Zm11.16 9.3h-3.72v-1.86h-1.86v-3.72H46.1v-1.86h1.86v1.86h1.86v3.72h3.72v1.86Zm3.72 7.44H55.4v-3.72h1.86v3.72Zm7.44 0h-5.58v-5.58h5.58v5.58Zm3.72-22.32h1.86v1.86h-1.86zm0 7.44h1.86v1.86h-1.86zm0 7.44v1.86h1.86v1.86h-1.86v1.86h3.72v1.86H74v-3.72h-1.86v-3.72h-3.72zm0 7.44v1.86h1.86v1.86h1.86v-3.72h-3.72zm1.86 5.58v-1.86h-3.72v1.86h3.72zm1.86-48.36h-1.86v1.86h-1.86v1.86h3.72v1.86H64.7v1.86h5.58v5.58h-1.86v1.86h1.86v3.72h1.86v1.86H74v-3.72h-1.86v-3.72H74v-3.72h-1.86v-1.86H74v-5.58h-1.86v-1.86z" />
        <path d="M70.28 72.35h-3.72v-1.86H64.7v3.72H74v-5.58h-1.86v3.72h-1.86zm1.86-66.96H60.98v13.02H74V5.39h-1.86Zm0 11.16h-9.3v-9.3h9.3v9.3ZM74 50.03v-3.72h-1.86v1.86h-1.86v1.86H74z" />
      </svg>
    </>
  );
}
