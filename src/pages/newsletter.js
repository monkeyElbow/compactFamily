import NewsletterList from "../components/NewsletterList";
import NewsletterSignUp from "../components/NewsletterSignUp";


const newsletter = () => {

    return(
        <>
        

        <div className="photoblue py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <h3>Digital Newsletter</h3>

<NewsletterSignUp />
            </div>


            <div className="col-md-6">
              <h4>Previous Newsletters</h4>

<NewsletterList />
           
            </div>
          </div>
        </div>
      </div>

        </>
    )
}

export default newsletter;