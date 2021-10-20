import Cropper from "react-easy-crop"
import { useState, useCallback } from "react"
import { Container, Form, Button, Image } from "react-bootstrap";
import {ref, uploadBytes} from 'firebase/storage'
import { storage } from "../../../util/firebase";
import { useAuth } from "../../../util/AuthContext";



export default function ProfileImageUpdater() {
  document.title = "COMPACT Update Profile Pic"
  const { currentUser } = useAuth();
  const[crop, setCrop] = useState({ x:0, y:0 });
  const[zoom, setZoom] = useState(1);
  const [inputImg, setInputImg] = useState('')
    const [croppedImage, setCroppedImage] = useState(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
      }, [])


const onInputChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', () => {
        setInputImg(reader.result)
    }, false)

    if (file) {
        reader.readAsDataURL(file)
    }
}
const handleSubmitImage = (e) => {
    e.preventDefault()
    // const storageRef = ref(storage, `/users/${currentUser.uid}`);
    // uploadBytes(storageRef, blob).then((snapshot) =>{
    //   console.log('uploaded file. redirect user back to dash')
    // });
}




// page main return
    return (
        <>
        {croppedImage &&
        (<>
        <h5>preview</h5>
        <Image src={croppedImage} />
        </>)
        }
         <Form onSubmit={handleSubmitImage}>
<Form.Group controlId="fileUpload" className="mb-3 p-3 border border-5">
  <Form.Label>Update your profile image</Form.Label>
  <Form.Control className="my-2 border" type="file" accept="image/*"  onChange={onInputChange} />
</Form.Group>
        {inputImg && (
            <div className="w-50" 
            style={{
                maxHeight:"250", 
                maxWidth:"250", 
                height:"250", 
                width:"250", 
                position:"relative"
                }}>
                
            </div>
            )}
            <Button type="submit">Update</Button>
            </Form>


            <div style={{position:"relative",minHeight:"600px"}}>
            <Cropper 
            image={inputImg}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
                />
            </div>

            <Container className="d-flex flex-column justify-content-center py-4 controls">
          <input type="range" 
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(zoom)}
          classes={{ container: 'slider' }}
          />

          <br />
          <small>Scroll wheel works too!</small>
      </Container>
        </>
    )
}
