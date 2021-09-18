// import { post } from "jquery";
import { useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../util/AuthContext";
// import { db } from "../../util/firebase";


export default function Dashboard() {
  const { currentUser, signout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();



  // LOGOUT FUNCTION
  async function handleLogout() {
    setError("");

    try {
      await signout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>



      <Container
        className="my-3 d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "64vh" }}
      >
        <Card style={{ maxWidth: "400px" }}>
          <Card.Body className="text-center mb-4">
            <h2>Dashboard</h2>
            <br />

            {/* {loading && <div>Loading...</div>} */}
            {error && <Alert variant="danger">{error}</Alert>}

            {currentUser && (
              <div>
                <h4>{currentUser.email}</h4>
              </div>
            )}
            <br />

            {/* <h5>
            <strong>Email:</strong> {currentUser.email}
          </h5> */}

            <Link to="/compacare-training" className="btn btn-primary w-100 mt-3">
              CompaCare Training
            </Link>
            <Link to="/create-profile" className="btn btn-primary w-100 mt-3">
              Create Profile
            </Link>
            <Link to="/update-password" className="btn btn-primary w-100 mt-3">
              Update Email or Password
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" className="link" onClick={handleLogout}>
            Sign Out
          </Button>
        </div>
      </Container>

    </>
  );
}
