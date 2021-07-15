import { useEffect, useState } from "react"

export default function NewsletterSignUp() {
    
    
    const [loaded, setLoaded] = useState(false);
    
    const useScript = url => {
        useEffect(() => {
            const script = document.createElement('script');
            var
    _ctct_m="37e4abe786bb2cc6f898f95304186ae0"
            script.src = "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
            script.id="signupScript"
            script.async = true;
            script.defer = true;
        script.addEventListener('load', ()=>setLoaded(true));
    
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }, [url])
    }



const signUpCode = `

<div
    className="ctct-inline-form"
    data-form-id="6d4ac7a5-deef-43ad-b1d5-0a2ce1e524fa"
  ></div>
`

    return (
        <>
             {loaded ? 'Script loaded' : 'script not loaded'}

<div dangerouslySetInnerHTML={{__html: signUpCode}} />

        </>
    )
}

//  https://stackoverflow.com/questions/60963786/how-to-add-external-javascript-files-in-react-js

// https://rangen.medium.com/dynamically-load-google-scripts-with-react-and-the-useeffect-hook-3700b908e50f

// original code 

{/* <script
var
_ctct_m="37e4abe786bb2cc6f898f95304186ae0"
id="signupScript"
src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
async
defer
></script>

<div
    className="ctct-inline-form"
    data-form-id="6d4ac7a5-deef-43ad-b1d5-0a2ce1e524fa"
  ></div> */}