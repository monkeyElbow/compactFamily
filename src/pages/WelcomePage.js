import { Container } from "react-bootstrap";
import NumberFormat from "react-number-format";
import Continuum from "../components/Continuum";


const WelcomePage = () => {
  document.title = "Welcome to COMPACT"

  let monthNumber = new Date().getMonth();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthNames[monthNumber];

  return (
    <>
       <Container className="my-4">
        <p className="display-4 blue">
          {new Date().getFullYear() - 1944} {""}
          Years and growing
        </p>

        <p className="lead">
          {monthName} {""}
          {new Date().getDate()}
          {", "}
          {new Date().getFullYear()} marks {new Date().getFullYear() - 1944}{" "}
          {""}
          years of continuous, uninterrupted, around-the-clock ministry to
          vulnerable children and families from this ministry first known as
          National Children’s Home of the Assemblies of God and later as
          Hillcrest Children’s Home.
        </p>
        <h2 className="blue text-center py-3">
          That is {""}
          <strong>
            <NumberFormat
              value={(new Date().getFullYear() - 1944) * 8760}
              displayType={"text"}
              thousandSeparator={true}
            />
          </strong>{" "}
          hours of nonstop ministry!
        </h2>

        <p>
          That first mission has grown into a broad continuum of ministries
          today known as COMP<strong>ACT</strong>. COMP<strong>ACT</strong> is a
          compound word representing compassionate action. COMP
          <strong>ACT</strong> is passionately committed to redeeming vulnerable
          children and families, including some of today’s most vulnerable. We
          are committed to grow as far as the Holy Spirit leads and provides to
          meet the need.
        </p>

        <Continuum />

        <p>
          Since 1944, over{" "}
          <NumberFormat
            value={(new Date().getFullYear() - 1944) * 120}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
          children and youth have received the Christ-centered redeeming love of
          this ministry, many for years on end. More than 3,000 children have
          been adopted. Each has a name. Each is precious to God. Many have
          their names written in the Lambs Book of Life. (Rev. 21:27)
        </p>

        <p>
          Every act of compassionate action unto the Lord for one of these is
          not an end in itself. Each story grows. Some transcending from
          generation to generation. Good seed in good soil can grow a
          hundred-fold. (Mt. 13:8) It is true of God’s Word, the sincerest of
          gifts and the people of this ministry. (John 4:34-38) One sows,
          another waters and God brings the increase! (1 Cor. 3:6)
        </p>
        <h5>
          The next decade is pivotal. I invite you to believe and partner with
          us to the glory of God!
        </h5>
        {/* <p className="h4">Grow With Us</p> */}
        <h3>Jay Mooney</h3>
        <h4 className="lead">Executive Director</h4>
      </Container>
    </>
  );
};

export default WelcomePage;
