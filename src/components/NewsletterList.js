import { useEffect, useState } from "react"

export default function NewsletterList() {

const [loaded, setLoaded] = useState(false);

useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.id="archiveScript";
    scriptTag.src="//static.ctctcdn.com/js/archive-static/current/archive-static.min.js";
    scriptTag.addEventListener('load', ()=>setLoaded(true));
    document.body.appendChild(scriptTag);
}, [])

useEffect(()=>{
    if (!loaded) return;


    
}, [loaded])

    

    return (
        <>
        
            {/* <script
                id="archiveScript"
                src="//static.ctctcdn.com/js/archive-static/current/archive-static.min.js"
              ></script> */}

             
             {loaded ? 'Script loaded' : 'script not loaded'}

              <div
                id="archiveList"
                data-archive-count="10"
                data-m="a07e809qjlu0"
              ></div>


        </>
    )
}
