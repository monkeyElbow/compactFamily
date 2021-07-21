import { useEffect } from "react"

export default function NewsletterList() {
    
    
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src="https://static.ctctcdn.com/js/archive-static/current/archive-static.min.js";
        script.id="archiveScript";
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        }
    }, [])


    return (
        <>
        
            {/* <script
                id="archiveScript"
                src="//static.ctctcdn.com/js/archive-static/current/archive-static.min.js"
              ></script> */}

           
<div
        id="archiveList"
        data-archive-count="10"
        data-m="a07e809qjlu0"
      />



        </>
    )
}
