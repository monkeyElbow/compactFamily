import { useEffect } from "react"

export default function NewsletterSignUp() {

    
        useEffect(() => {
            const script = document.createElement('script');
            script._ctct_m="37e4abe786bb2cc6f898f95304186ae0"
            script.src = "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
            script.id="signupScript"
            script.async = true;
            script.defer = true;
    
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }, [])
    

const SignUpCode = `

<div
    className="ctct-inline-form"
    data-form-id="6d4ac7a5-deef-43ad-b1d5-0a2ce1e524fa"
  ></div>
`

    return (
        <>

<div dangerouslySetInnerHTML={{__html: SignUpCode}} />

        </>
    )
}

//  https://stackoverflow.com/questions/60963786/how-to-add-external-javascript-files-in-react-js

// https://rangen.medium.com/dynamically-load-google-scripts-with-react-and-the-useeffect-hook-3700b908e50f

// original code 

