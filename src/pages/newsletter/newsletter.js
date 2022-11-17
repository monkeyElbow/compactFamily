// import NewsletterList from "../components/NewsletterList";
// import NewsletterSignUp from "../components/NewsletterSignUp";
import { Container } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import axios from "axios";

// Building fully custom signup
// constant contact app.constantcontact.com v3 api
// API_key: 785c9a97-2304-45e1-ba78-4f6cd41fab5d

const NewsletterPage = () => {
  

// const [error, setError] = useState('')
// const [userEmail, setUserEmail] = useState('')

// const api = axios.create({
//   baseURL: `https://api.cc.email/v3/emails`,
//   redirect_uri: '/',
// client_id: '785c9a97-2304-45e1-ba78-4f6cd41fab5d',
// scope: 'campaign_data',

// })
// useEffect(() => {
// function getter() {
//   api.get('/').then(res => {
//     console.log(res.data)
//   })
// }

//   try {
// getter()
//   } catch(e) {
// setError(e)
//   }
// },[])


// function AddMyEmail(e) {
//   axios({
//     method:'post',
//     url: 'https://api.cc.email/v3/contacts',
//     email_address:userEmail,

//   })
// }


    return(
        <>
        {/* {error &&
<Alert variant="warning">{error}</Alert>
        } */}




            {/* <Button variant="warning" href="https://v3.developer.constantcontact.com/">v3 CC dev</Button>

            <Button variant="warning" href="https://axios-http.com/docs/api_intro">AXIOS</Button> */}
        <Container className="p-5" 
        style={{minHeight:"40rem"}}>
        {/* <div className="container"> */}
          {/* <div className="row"> */}
            {/* <div className="col-md-6 text-center"> */}



              <h3>Digital Newsletter</h3>

{/* <Button href="https://www.compact.family/newsletter.htm">Manage</Button> */}
<iframe
title="SignUpForm"
width="100%"
height="800px"
src="https://lp.constantcontactpages.com/su/bKDx5PM" frameborder="0"></iframe>

<p>
  <small>
    <em>
      Don't see a form here to sign up? 
      <a target="_blank"
      role="button"
      rel="noopener noreferrer" href="https://lp.constantcontactpages.com/su/bKDx5PM"> Click here to open the form a new window.</a>
    </em>
  </small>
</p>


              <iframe src="https://www.compact.family/newsletter.htm" frameborder="0"
width="100%"
height="500px"
title="sign up form"
></iframe>


              {/* <h4>Sign up</h4>
              <Form onSubmit={AddMyEmail}> 
              <Form.Control 
              value={userEmail}
              placeholder="email"
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              />

              </Form><Button type="submit">Add Me!</Button> */}


            </Container>

{/* <NewsletterSignUp /> */}

{/* <div
className="ctct-inline-form" data-form-id="6d4ac7a5-deef-43ad-b1d5-0a2ce1e524fa"
></div> */}


        </>
    )
}

export default NewsletterPage;
