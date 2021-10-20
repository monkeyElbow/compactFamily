import NewsletterList from "../components/NewsletterList";
import NewsletterSignUp from "../components/NewsletterSignUp";
import { Container } from "react-bootstrap";
import { useEffect } from "react";



const NewsletterPage = () => {
  
  useEffect(() => {
  
    const script = document.createElement('script')
  
script.text = script1
script.async = true

    document.head.appendChild(script)
  
  
  },[])



    return(
        <>

        <Container className="py-4" 
        style={{minHeight:"40rem"}}>
        {/* <div className="container"> */}
          {/* <div className="row"> */}
            {/* <div className="col-md-6 text-center"> */}
              <h3>Digital Newsletter</h3>
{/* <NewsletterSignUp /> */}

<div
className="ctct-inline-form" data-form-id="6d4ac7a5-deef-43ad-b1d5-0a2ce1e524fa"
></div>


            </Container>


            {/* <div className="col-md-6">
              <h4>Previous Newsletters</h4>
<NewsletterList />
            </div>
          </div>
        </div>
      </div> */}

        </>
    )
}

export default NewsletterPage;

const script1 = () => {
  return (
    <>

    <script> var _ctct_m = "37e4abe786bb2cc6f898f95304186ae0"; </script>
<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script> 

    </>
  )
}
// inject into body
{/* <script> var _ctct_m = "37e4abe786bb2cc6f898f95304186ae0"; </script>
<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script> */}


// inline code
{/* <div class="ctct-inline-form" data-form-id="6d4ac7a5-deef-43ad-b1d5-0a2ce1e524fa"></div> */}
