import { Button, Container, Row, Col } from "react-bootstrap";

export default function christmasPage() {
  return (
    <>
      <Container
        fluid
        className="text-center text-white py-5"
        style={{
          // backgroundColor:"#D6001C"
          background:
            "repeating-linear-gradient(90deg, #BD0019, #BD0019 60px, #E3001E 50px, #E3001E 120px)",
          // backgroundImage:`url(${Stripes})`
        }}
      >
        <Container
          className="p-3"
          style={{ width: "25em", background: "#BD0019" }}
        >
          <Container className="p-5 border border-3 border-white">
            <h1>
                <strong>
                MERRY CHRISTMAS
                </strong>
                </h1>
            <p>
              <small>FROM</small>
            </p>
            <h5>
              COMP<strong>ACT</strong> Family
            </h5>
          </Container>
        </Container>
      </Container>

      <Container className="m-5">
        <h5>
          Dear Friend of COMP
          <strong>ACT</strong>,
        </h5>
        <br />

        <p className="<strong>">
          <strong>CHRISTMAS 2021 IS COMING SOON!</strong> Each year we have the
          opportunity to bring the message of Jesus and Christmas joy to
          children and youth at{" "}
          <strong>
            Hillcrest Children’s Home and Highlands Maternity Home!
          </strong>{" "}
          Some of the kids will experience<strong> their very first Christmas.</strong>
        </p>

        <p>
         <strong>   
          Christmas giving touches these kids deeply.
         </strong>
           Last year, some reciprocated. Houseparents’ Wes &amp; Christy Lemly
reported that  <em>“There was a new boy to the cottage that didn’t have as many gifts as the others. The other boys
decided that each would give the new boy one of their unopened gifts.”</em> 
<strong>
Let us bless these kids this Christmas!
</strong>
        </p>
        
      </Container>

<Container>
<h3>
    <strong>
        3 wonderful ways to provide kids a MERRY CHRISTMAS:
    </strong>
        </h3>
</Container>

<Container>

    <Row className="p-5 my-3 bg-light border rounded">
        <Col md={8} sm={12}>
<h4>
1. PURCHASE A GIFT/GIFTS FROM THE COMP<strong>ACT</strong> RESIDENT WISHLIST
</h4>

<p>
Each of
our residents have created their own Christmas wish list, and we have compiled
those items into an Amazon Wishlist.</p><p> You can access the Amazon Wishlist by
scanning the QR code on the right with your phone camera, or by clicking on the “Amazon Wishlist” button.
</p>
<p>
    
Alternatively, if you would like a paper copy of the wish list, you may request a
list in one of the following ways:
</p>
<p className="ms-5">

a. Send an email to lhyde@COMPACT.Family requesting a paper copy of
the wish list, or
</p>
<p className="ms-5">

b. Call our Hillcrest office, Monday through Friday from 8AM-4:30PM CST at 501-262-1660, and request
a paper copy of the wish list
</p>
        </Col>
        <Col className="p-5 text-center">
<div className="p-3">
        <WishQr />
</div>
        <br />
<Button href="https://www.amazon.com/hz/wishlist/ls/349G09285V9ZH/ref=hz_ls_biz_ex"
 target="_blank"
 className="btn"
 role="button"
 rel="noopener noreferrer"
 >Amazon wish list</Button>
        </Col>
    </Row>
</Container>

<Container className="p-5 my-3 bg-light border rounded">
<h4>A Gift Card</h4>
<p>Purchase and send one of the following suggested gift cards -- Amazon, Walmart, Visa,
American Express, Dillard’s, Best Buy or Dick’s Sporting Goods.</p>

<p className="ms-5">a. Mail gift cards to the below listed address.</p>
<p className="ms-5">b. Sending a check to (Please note the word “Christmas” in the memo
section of your check.):<br />
COMP<strong>ACT</strong> Family Services<br />
2325 Malvern Avenue<br />
Hot Springs, AR 71901</p>
</Container>

<Container className="p-5 my-3 bg-light border rounded">
            <h4>3. GIVE A CHRISTMAS OFFERING</h4>
            <p>Tax-deductible offerings can be given by:</p>

            <div className="text-center py-3">
<p>Clicking on this link to AG Giving and search for COMP<strong>ACT</strong> Christmas:</p>
            <Button href="https://giving.ag.org/donate"
 target="_blank"
 className="btn"
 role="button"
 rel="noopener noreferrer"
 >Give Securely</Button>

 </div>
 <div className="text-center"><h5>OR</h5></div>

        <p className="ms-5">Sending a check to (Please note the word “Christmas” in the memo
section of your check.):<br />
COMP<strong>ACT</strong> Family Services<br />
2325 Malvern Avenue<br />
Hot Springs, AR 71901</p>

</Container>

<Container className="p-5">

    <p>On behalf of the children, youth and staff of COMPACT, thank you for your gift this Christmas. If you are able and
would like to participate, please plan for offerings, gift cards or gifts to arrive by <strong> Friday, December 3, 2021.</strong>
</p>
<h5>
Merry Christmas,
</h5>
<div className="col-4 p-3">
    <JaySig />
</div>
    <p className="lead">
Jay Mooney <br />
        <strong>
Executive Director
        </strong>
    </p>

    
</Container>
    </>
  );
}


const JaySig = () => {
    return (
        <svg viewBox="0 0 500 200">
  <path d="M378 54a201 201 0 0 0-19 28c-2 3-2 10-7 10-4-1-3-4-3-7-21 16-22 3-13-15-10-5-4 22-22 22-21-1 13-50 18-33 3 11 12-2 17-4l8 3v2c6-4 7-9 13-3 20-26 14 6 9 19-1 9 14-5 13-10 1-3 13-23 14-11-3 11-12 18-11 30 30-11 19-32 30-31 9 2-10 30-11 37h1c8-4 14-10 22-15 15-9 26 0 22 18-2 4 6 8 0 9-3 0-3 2-4 4-9 22-17 44-33 62-30 25-41-10-23-34 18-38 51-28 56-41 4-36-28-5-41 3-13 5-6-8-3-13l-1-1c-8 4-19 13-22-1-35 32-10-10-9-27Zm75 51c-22-1-43 17-52 37-16 28 3 43 24 17a186 186 0 0 0 28-54ZM350 69c-2-2 0-5-4-2-3 5-15 16-10 21 10 3 11-13 14-19Zm-25-4c-6 2-13 14-13 19l2 3c10 0 10-14 11-22ZM114 93C36 118-1 133 67 46c8-9 16-16 26-20 19-10 54-4 50 23l-4 23 14-6 1 1c-21 8-21 20-30 39-10 26-27 49-42 73-2 4-4 4-8 1-12-15 29-73 40-87Zm26-39c3-33-32-34-51-22-22 14-33 39-48 59-13 25 10 15 24 12a293 293 0 0 0 65-24c8-5 8-20 10-25Zm-10 31-1-1c-26 20-38 51-51 80-6 44 51-73 52-79ZM184 89c-8 4-19 21-24 5-32 28-2-29 10-33 5-4 10 7 2 7 8 6-6 19-3 27 18-3 18-29 26-29 9 4-7 21-5 30 27-16 26-8 21 18l10-4v1c-6 5-14 7-16 16-5 8-12 37-24 32-15-10 8-31 17-37 10-5 10-17 11-27 0-15-25 21-25-6Zm16 38-1-1c-7 6-20 16-16 27 11-3 12-18 17-26Zm-34-55a61 61 0 0 0-14 22c6-3 14-16 14-22ZM271 76c15-16 23-37 38-52 4 4 2 11 1 16l-21 71h-1c-2-11 5-23 7-33 3-15 9-28 10-42-14 16-21 38-40 49-5-9 11-34 8-45l-27 45c0 3-2 4-4 3-7-2 11-27 12-33 3-6 5-13 9-19h2v8l12-13c7 15-5 30-7 44Z"/>
</svg>
    )
}


const WishQr =() => {
   return (
    <svg viewBox="0 0 288 288">
    <path fill="#050001" d="M0 0h8v55H0zM0 62h8v16H0zM0 86h8v7H0zM0 101h8v8H0zM0 132h8v16H0zM0 171h8v8H0zM0 195h8v31H0zM0 234h8v54H0zM8 0h8v8H8zM8 47h8v8H8zM8 78h8v15H8zM8 101h8v16H8zM8 132h8v8H8zM8 156h8v31H8zM8 195h8v7H8zM8 234h8v7H8zM8 280h8v8H8zM16 0h7v8h-7zM16 16h7v23h-7zM16 47h7v8h-7zM16 70h7v8h-7zM16 93h7v32h-7zM16 132h7v8h-7zM16 148h7v8h-7zM16 164h7v23h-7zM16 202h7v16h-7zM16 234h7v7h-7zM16 249h7v24h-7zM16 280h7v8h-7zM23 0h8v8h-8zM23 16h8v23h-8zM23 47h8v8h-8zM23 86h8v7h-8zM23 132h8v24h-8zM23 171h8v24h-8zM23 202h8v24h-8zM23 234h8v7h-8zM23 249h8v24h-8zM23 280h8v8h-8zM31 0h8v8h-8zM31 16h8v23h-8zM31 47h8v8h-8zM31 78h8v8h-8zM31 93h8v16h-8zM31 125h8v7h-8zM31 140h8v8h-8zM31 164h8v15h-8zM31 187h8v8h-8zM31 210h8v8h-8zM31 234h8v7h-8zM31 249h8v24h-8zM31 280h8v8h-8zM39 0h8v8h-8zM39 47h8v8h-8zM39 70h8v8h-8zM39 86h8v15h-8zM39 109h8v8h-8zM39 140h8v8h-8zM39 156h8v23h-8zM39 195h8v23h-8zM39 234h8v7h-8zM39 280h8v8h-8zM47 0h8v55h-8zM47 62h8v8h-8zM47 78h8v8h-8zM47 93h8v8h-8zM47 109h8v8h-8zM47 125h8v7h-8zM47 140h8v8h-8zM47 156h8v8h-8zM47 171h8v8h-8zM47 187h8v8h-8zM47 202h8v8h-8zM47 218h8v8h-8zM47 234h8v54h-8zM55 70h7v16h-7zM55 101h7v8h-7zM55 117h7v8h-7zM55 132h7v8h-7zM55 164h7v31h-7zM55 202h7v16h-7zM62 8h8v23h-8zM62 47h8v23h-8zM62 86h8v31h-8zM62 132h8v16h-8zM62 171h8v8h-8zM62 187h8v15h-8zM62 218h8v16h-8zM62 280h8v8h-8zM70 62h8v16h-8zM70 125h8v7h-8zM70 140h8v24h-8zM70 195h8v39h-8zM70 257h8v16h-8zM70 280h8v8h-8zM78 0h8v16h-8zM78 23h8v32h-8zM78 62h8v24h-8zM78 93h8v16h-8zM78 125h8v7h-8zM78 140h8v16h-8zM78 164h8v7h-8zM78 187h8v31h-8zM78 226h8v8h-8zM78 249h8v24h-8zM86 31h7v16h-7zM86 55h7v23h-7zM86 86h7v7h-7zM86 101h7v8h-7zM86 117h7v15h-7zM86 148h7v23h-7zM86 179h7v8h-7zM86 210h7v16h-7zM86 234h7v15h-7zM86 257h7v31h-7zM93 39h8v16h-8zM93 62h8v8h-8zM93 86h8v7h-8zM93 101h8v24h-8zM93 132h8v24h-8zM93 164h8v7h-8zM93 195h8v7h-8zM93 210h8v16h-8zM93 257h8v8h-8zM93 280h8v8h-8zM101 8h8v39h-8zM101 70h8v8h-8zM101 86h8v15h-8zM101 132h8v8h-8zM101 148h8v16h-8zM101 179h8v8h-8zM101 195h8v15h-8zM101 218h8v8h-8zM101 234h8v7h-8zM101 257h8v16h-8zM109 0h8v8h-8zM109 16h8v7h-8zM109 31h8v8h-8zM109 47h8v39h-8zM109 93h8v16h-8zM109 117h8v8h-8zM109 132h8v16h-8zM109 156h8v15h-8zM109 179h8v8h-8zM109 218h8v8h-8zM109 234h8v7h-8zM109 249h8v8h-8zM109 265h8v15h-8zM117 8h8v15h-8zM117 31h8v16h-8zM117 55h8v7h-8zM117 86h8v7h-8zM117 101h8v8h-8zM117 117h8v15h-8zM117 140h8v8h-8zM117 156h8v8h-8zM117 171h8v24h-8zM117 210h8v8h-8zM117 241h8v8h-8zM117 265h8v7h-8zM117 280h8v8h-8zM125 0h7v31h-7zM125 39h7v23h-7zM125 86h7v15h-7zM125 109h7v8h-7zM125 125h7v7h-7zM125 156h7v15h-7zM125 187h7v15h-7zM125 218h7v8h-7zM125 241h7v31h-7zM132 0h8v8h-8zM132 23h8v8h-8zM132 70h8v16h-8zM132 101h8v24h-8zM132 132h8v16h-8zM132 156h8v8h-8zM132 187h8v8h-8zM132 202h8v8h-8zM132 218h8v16h-8zM132 241h8v8h-8zM140 0h8v8h-8zM140 16h8v39h-8zM140 62h8v8h-8zM140 101h8v8h-8zM140 117h8v8h-8zM140 132h8v8h-8zM140 148h8v8h-8zM140 171h8v8h-8zM140 187h8v8h-8zM140 202h8v8h-8zM140 218h8v16h-8zM140 241h8v8h-8zM140 257h8v23h-8zM148 0h8v39h-8zM148 55h8v7h-8zM148 93h8v16h-8zM148 125h8v7h-8zM148 148h8v23h-8zM148 226h8v15h-8zM148 249h8v8h-8zM148 265h8v15h-8zM156 16h8v7h-8zM156 31h8v24h-8zM156 62h8v24h-8zM156 101h8v24h-8zM156 132h8v24h-8zM156 179h8v8h-8zM156 202h8v16h-8zM156 226h8v15h-8zM156 272h8v16h-8zM164 8h7v23h-7zM164 39h7v8h-7zM164 55h7v23h-7zM164 109h7v8h-7zM164 125h7v7h-7zM164 164h7v7h-7zM164 179h7v31h-7zM164 234h7v7h-7zM164 249h7v8h-7zM171 0h8v8h-8zM171 23h8v8h-8zM171 39h8v16h-8zM171 62h8v31h-8zM171 101h8v8h-8zM171 132h8v8h-8zM171 148h8v31h-8zM171 218h8v31h-8zM171 272h8v8h-8zM179 0h8v8h-8zM179 31h8v8h-8zM179 62h8v8h-8zM179 78h8v31h-8zM179 117h8v15h-8zM179 140h8v16h-8zM179 164h8v7h-8zM179 195h8v15h-8zM179 226h8v62h-8zM187 0h8v23h-8zM187 39h8v39h-8zM187 93h8v8h-8zM187 140h8v8h-8zM187 156h8v15h-8zM187 218h8v8h-8zM187 249h8v16h-8zM187 280h8v8h-8zM195 8h7v8h-7zM195 23h7v8h-7zM195 39h7v8h-7zM195 62h7v24h-7zM195 117h7v23h-7zM195 156h7v8h-7zM195 171h7v8h-7zM195 195h7v15h-7zM195 218h7v8h-7zM195 241h7v8h-7zM195 265h7v7h-7zM202 0h8v8h-8zM202 39h8v23h-8zM202 78h8v15h-8zM202 109h8v8h-8zM202 125h8v15h-8zM202 164h8v15h-8zM202 187h8v8h-8zM202 202h8v24h-8zM202 272h8v8h-8zM210 0h8v16h-8zM210 62h8v16h-8zM210 93h8v24h-8zM210 132h8v8h-8zM210 148h8v31h-8zM210 187h8v8h-8zM210 210h8v16h-8zM210 241h8v16h-8zM210 272h8v8h-8zM218 16h8v7h-8zM218 31h8v24h-8zM218 62h8v8h-8zM218 78h8v39h-8zM218 148h8v8h-8zM218 171h8v8h-8zM218 187h8v8h-8zM218 218h8v39h-8zM218 265h8v7h-8zM226 62h8v8h-8zM226 78h8v15h-8zM226 101h8v16h-8zM226 125h8v15h-8zM226 148h8v31h-8zM226 202h8v24h-8zM226 249h8v8h-8zM234 0h7v55h-7zM234 62h7v8h-7zM234 78h7v8h-7zM234 93h7v8h-7zM234 109h7v8h-7zM234 125h7v23h-7zM234 156h7v8h-7zM234 171h7v8h-7zM234 187h7v8h-7zM234 202h7v8h-7zM234 218h7v8h-7zM234 234h7v7h-7zM234 249h7v16h-7zM234 272h7v8h-7zM241 0h8v8h-8zM241 47h8v8h-8zM241 78h8v15h-8zM241 101h8v24h-8zM241 171h8v39h-8zM241 218h8v8h-8zM241 249h8v8h-8zM241 280h8v8h-8zM249 0h8v8h-8zM249 16h8v23h-8zM249 47h8v8h-8zM249 70h8v16h-8zM249 109h8v8h-8zM249 140h8v8h-8zM249 156h8v39h-8zM249 202h8v8h-8zM249 218h8v39h-8zM249 272h8v8h-8zM257 0h8v8h-8zM257 16h8v23h-8zM257 47h8v8h-8zM257 62h8v31h-8zM257 101h8v24h-8zM257 140h8v16h-8zM257 171h8v16h-8zM257 218h8v8h-8zM257 257h8v16h-8zM257 280h8v8h-8zM265 0h7v8h-7zM265 16h7v23h-7zM265 47h7v8h-7zM265 62h7v39h-7zM265 117h7v23h-7zM265 148h7v23h-7zM265 195h7v7h-7zM265 249h7v8h-7zM265 265h7v7h-7zM272 0h8v8h-8zM272 47h8v8h-8zM272 62h8v24h-8zM272 101h8v8h-8zM272 117h8v8h-8zM272 132h8v8h-8zM272 171h8v8h-8zM272 187h8v8h-8zM272 202h8v24h-8zM272 241h8v8h-8zM280 0h8v55h-8zM280 78h8v31h-8zM280 140h8v16h-8zM280 164h8v7h-8zM280 179h8v16h-8zM280 202h8v39h-8zM280 265h8v23h-8z"/>
  </svg>
   )
}