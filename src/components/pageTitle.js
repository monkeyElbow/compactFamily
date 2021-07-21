import { useEffect } from 'react'


export default function PageTitle(title) {
    document.title = title;

    // useEffect(() => {
    //     document.title = title;
    // }, [title])
}


// function PageTitle(title, prevailOnUnmount = false) {
//     const defaultTitle = useRef(document.title);

//     useEffect(() => {
//         document.title = title;
//     }, [title])

//     useEffect(() => {
//         if (!prevailOnUnmount) {
//             document.title = defaultTitle.current;
//         }
//     }, [])
// }

