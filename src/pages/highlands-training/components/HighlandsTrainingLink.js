import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

const HighlandsTrainingLink = () => {
    return (
        <>

         <Container fluid className="bg-dark text-white p-2">
<Link to="/highlands-training">

Back to Training Home

</Link>
         </Container>

        </>
    )
}

export default HighlandsTrainingLink