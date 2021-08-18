import { Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { db } from "../util/firebase";

export default function ScoreboardFirebase() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scores, setScores] = useState([])
  

useEffect(() => {
  setLoading(true)
  const getScores = []

  try{

return db.collection('Scoreboard')
.get().then((snapshot) => {
  if(getScores.length < 1) {
    console.log('fetching')
    snapshot.forEach((doc) => {
  getScores.push({
    ...doc.data(),
    key: doc.id
  })
})
}

setScores(getScores)
setLoading(false)
console.log(scores)
})
  }catch(error){
setError("trouble in paradise")
}

},[]);



 
     return(
         <>
         {error &&
         <Alert variant="warning">{error}</Alert>
         }
         {loading &&
         <Alert variant="success">Loading</Alert>
         }

{/* {scores &&
<div>{scores.hillcrest}</div>} */}


{scores.map((score) => <div key={score.id}>

{score.hillcrest}
{score.compaCare}
{score.fosterCare}
{score.highlands}
{score.safeCare}


</div>)}


    </>
  );
};
