const newsletter = () => {
    return(
        <>
        

        <div className="photoblue py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <h3>Digital Newsletter</h3>

              <div
                className="ctct-inline-form"
                data-form-id="6d4ac7a5-deef-43ad-b1d5-0a2ce1e524fa"
              ></div>
              {/* 
              <script>
              </script> */}

              <script
                var
                _ctct_m="37e4abe786bb2cc6f898f95304186ae0"
                id="signupScript"
                src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
                async
                defer
              ></script>
            </div>

            <div className="col-md-6">
              <h4>Previous Newsletters</h4>

              <script
                id="archiveScript"
                src="//static.ctctcdn.com/js/archive-static/current/archive-static.min.js"
              ></script>
              <div
                id="archiveList"
                data-archive-count="10"
                data-m="a07e809qjlu0"
              ></div>
            </div>
          </div>
        </div>
      </div>

        </>
    )
}

export default newsletter;