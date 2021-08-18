import {Container, Row, Col} from 'react-bootstrap'

import Bball from './bball';
import Putt from './Putt'
import RingToss from './RingToss'

export const gc21 = () => {
    document.title = "GC21"


    return (
        <>
           <Container fluid className="p-5 bg-blue text-white text-center">
<h1>
    We are on MIS21ON and invite you to partner with us.
</h1>

<p className="lead">
    Our hope is that you can foster the strength and adopt the mindset of a winner!
</p>
<h4>
Stop by booth #961, as we have GOLF, GOALS AND GOODIES for the entire family.
</h4>
</Container>


<Container className="my-5">
<h2>
    Adults 
</h2>
<p className="lead">    (You know who you are). </p>

<Row className="">
<Col md={4}>
<Putt />
</Col>
<Col md={8} className="col-md-8 d-flex align-items-center justify-content-center text-center">
<p>
Swing by for a chance to putt your way into the history books! Well sort of… Stop by our par
one hole for a chance to win a $100 gift card. Simply make a
hole-in-one to be entered for a chance to win. Every contestant receives a regulation
size COMP<strong>ACT</strong> golf ball, slap on the back and a “Great Putt” by one of our team members,
(even if you miss).
</p>

</Col>
</Row>
</Container>

<Container className="my-5">
<p>
Drawing for prize to be held on Friday at 10am. Winners notified by email and text. Prize must be
claimed at our booth, between 10am - Noon on Friday.
</p>
</Container>



<Container className="my-5">
<h2>
Youth 
</h2>
<p className="lead">
(Middle and High School)
</p>
</Container>


<Container className="my-5">
<Row className="">
    <Col>
    <Bball />
</Col>
    <Col md={8}>

        <p>
        Make it your goal to try out basketball shot! Line up for a chance to win a basketball signed by #10, Tyler Johnson, guard for the Brooklyn Nets. Most points (top boy and top girl) at the end of the week wins. Entry limited
            to once per day (unless there’s not a long line and you smile big for us). Every participant
            receives an officially licensed miniature COMP<strong>ACT</strong>
            basketball, one per student. (Autographs
            upon request.)
        </p>
    </Col>
</Row>
</Container>

<Container className="my-5">
    <h5>
Winners notified via Instagram, so make sure you…
    </h5>
    <p>
Follow us on Instagram @CompactFamilyServices.
    </p>
    <p>
Post a picture with your officially licensed miniature COMP<strong>ACT</strong> basketball.
    </p>
    <h4>
Tag us.
    </h4>
    <p>
Prizes must be picked up at our booth, between 10am - Noon on Friday.
    </p>
</Container>





<Container className="my-5">

<Row>

    <Col md={4}>
        <RingToss />
    </Col>
    <Col md={8}>
         <h2>
    Children
</h2>
<p>
Come by and have fun tossing the rings playing tic-tack-toe! And YES, we do have a treat for
you!
</p>

<p>
All activities sponsored by COMP<strong>ACT</strong> Family Services. 
</p>
<p>
Why? Because Family is our middle
name.
</p>
</Col>
</Row>

</Container>



<Container className="my-5">
<h4>
    Available Resources at our Booth
</h4>
<p>
    Promise Tree Book
    Embark on the journey of the Promise Tree. A metaphorical story as told by the tree that
    overlooks the original Hinson house, where it all began, 77 years ago. Leaf through this fully
    illustrated book telling the story that tells the redemption story. Suggested donation of $20.
</p>
<h4>
Highlands Connect Workbooks
</h4>
<p>
A resource for reaching single moms and moms-to-be in your community. Comes with a leader
and participant guide for one-on-one or small group mentoring, as well as video support. Walks
single moms through their spiritual, emotional, financial and physical goals for life, enabling
them to provide a healthy environment for their children. Conference Rate for Leader and
Participant Workbook - $20.
</p>
<h4>
    CompaCare Training Manuals
</h4>
<p>
    A complete training system for the entire church. This CompaCare Compassion Care training
    resource includes a Family Advocate and Volunteer manual, four video training sessions, in
    addition to the CompaCare manual. Compacare equips a church for reaching the most
    vulnerable in their community. A certificate of completion is awarded upon completion.
</p>
    <p>

    Conference Rate for the complete training system - $35.
    </p>
</Container>



<Container className="my-5">
Scoreboard numbers

Take a look around the COMPACT.Family website to learn more about COMP<strong>ACT</strong> and how you can partner to make an
impact on vulnerable children, teens and families.
</Container>


        </>
    )
}
 export default gc21;