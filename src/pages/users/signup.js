import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../util/AuthContext";

export default function Signup() {
    const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const { signup } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const [human, setHuman] = useState(false)
const history = useHistory()

function humanCheck(e) {
    e.preventDefault()
    setHuman(true)
}

async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    }

    try {
        setError('')
        setLoading(true)
     await signup(
         emailRef.current.value, 
         passwordRef.current.value,
        )
     history.push('/create-profile')
    } catch {
        setError('Failed to create an account')
    }
    setLoading(false)
}


    return (
        <>
            <Container className="my-3 d-flex flex-column align-items-center justify-content-center"
style={{minHeight:"84vh"}}>

        <Card className="w-100" style={{maxWidth: "400px"}}>
            <Card.Body>
<h2>Sign Up</h2>

<p>Already have an account?{" "}<Link to="/signin">Sign in here</Link></p>


        {error && <Alert variant="danger" className="mb-4 text-center">{error}</Alert>}

<Form onSubmit={handleSubmit}>

    <Form.Group className="mt-3" id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef}></Form.Control>
    </Form.Group>

    <Form.Group className="mt-3" id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef}></Form.Control>
    </Form.Group>

    <Form.Group className="mt-3" id="Password-confirm">
        <Form.Label>password confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef}></Form.Control>
    </Form.Group>
<br />
{!human &&
<Button className="w-100 btn-secondary" onClick={humanCheck}>I am indeed a person</Button>
}

{human &&
<Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
}

</Form>

{/* <Button onClick={googleSignIn}>SignUp with google</Button> */}



<br />
<p className="text-center">Already have an account?{" "}<Link to="/signin" className="link">Sign in here</Link></p>

{/* <br />
<p className="text-center">or</p>
<br />

<Button className="w-100" onClick={signInWithGoogle}>Sign in with Google</Button> */}

            </Card.Body>
        
        </Card>




</Container>
        </>
    )
}
