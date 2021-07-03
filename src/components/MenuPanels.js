import {Link} from 'react-router-dom'

const MenuOne = () => {
    return (
        <>
<Link to="/contact-us">Contact Us</Link>
<Link to="/welcome">Welcome</Link>
<Link to="/mission">Mission</Link>
<Link to="/leadership">Leadership</Link>
<Link to="/campus">The Campus</Link>
<Link to="/history">History and Future</Link>
<Link to="/employment">Employment</Link>

</>
    )
}   

const MenuTwo = () => {
    return(
        <>
<Link to="/hillcrest">Hillcrest Children's Home</Link>
<Link to="/highlands">Highlands Maternity Home</Link>
<Link to="/fostercare">Foster Care</Link>
<Link to="/compacare">CompaCare</Link>
<Link to="/find">FIND Kinship Navigator</Link>
<Link to="/safecare">SAFECARE</Link>
        </>
    )
}

const MenuThree = () => {
    return(
        <>
<Link to="/announcements">Announcements</Link>
<Link to="/partners">Partners</Link>
<Link to="/products">Products</Link>
<Link to="/newsletter">Newsletter</Link>
<Link to="/brand">Brand</Link>
        </>
    )
}


const MenuFour = () => {
    return(
        <>
<Link to="/gifts">Gifts</Link>
<Link to="/sponsor">Sponsor</Link>
<Link to="/special-projects">Special Projects</Link>
<Link to="/giving">Planned Giving</Link>
<Link to="/teams">Mission Teams</Link>
<Link to="/host-families">Host Families</Link>
<Link to="/volunteer">Volunteer</Link>
        </>
    )
}

const MenuFive = () => {
    return(
        <>
<Link to="/pray">PRAY</Link>
<Link to="/give">GIVE</Link>
<Link to="/serve">SERVE</Link>
        </>
    )
}



export {MenuOne, MenuTwo, MenuThree, MenuFour, MenuFive};