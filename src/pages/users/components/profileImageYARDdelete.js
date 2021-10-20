import Cropper from "react-easy-crop"
import { useState, useCallback } from "react"
import { Container, Form, Button } from "react-bootstrap";
import {ref, uploadBytes} from 'firebase/storage'
import { storage } from "../../../util/firebase";
import { useAuth } from "../../../util/AuthContext";



export default function ProfileImageUpdater() {
  document.title = "COMPACT Update Profile Pic"
  const { currentUser } = useAuth();
  const[blob, setBlob] = useState(null)
  const [inputImg, setInputImg] = useState('')

  const getBlob = (blob) => {
      setBlob(blob)
  }


// image to canvas
const createImage = (url) =>
    new Promise ((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', error => resolve(image))
        image.setAttribute('crossOrigin', 'anonymous')
        image.src = url
    })
const getCroppedImg = async (imageSrc, crop) => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = 250
    canvas.height = 250

    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,0,
        canvas.width,
        canvas.height
    )

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            resolve(blob)
        }, 'image/jpg')
    })
}

// end image to canvas

// image uploader
const ImageUpload = () => {
   
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
        const storageRef = ref(storage, `/users/${currentUser.uid}`);
        uploadBytes(storageRef, blob).then((snapshot) =>{
          console.log('uploaded file. redirect user back to dash')
        });
    }

    return (
        <>
        <Form onSubmit={handleSubmitImage}>
<Form.Group controlId="fileUpload" className="mb-3 p-3 border border-5">
  <Form.Label>Update your profile image</Form.Label>
  <Form.Control className="my-2 border" type="file" accept="image/*"  onChange={onInputChange} />
</Form.Group>
        {inputImg && (
            <Container className="w-50" 
            style={{
                maxHeight:"250", 
                maxWidth:"250", 
                position:"relative"
                }}>
                
                <ImageCropper 
                getBlob={getBlob}
                iputImg={inputImg}
                />
            </Container>
            )}
            <Button type="submit">Update</Button>
            </Form>
            </>
    )
}

// end image uploader



//   start image cropper component
const ImageCropper = () => {
        const[crop, setCrop] = useState({ x:0, y:0 });
        const[zoom, setZoom] = useState(1);

        // const container_height = 300

const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(
        inputImg,
        croppedAreaPixels
    )
    getBlob(croppedImage)
}

        // from doc=
        // const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        //     console.log(croppedArea, croppedAreaPixels)
        // },[])

        return (
            <>
            <Container fluid style={{position:"relative",minHeight:"600px"}}>
            <Cropper 
            image={inputImg}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            // onMediaLoaded={(mediaSize) => {
                //     onZoomChange(container_height / mediaSize.naturalHeight)
                // }}
                />
            </Container>

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
    // end image cropper

// page return
    return (
        <>
          <ImageUpload />
          {/* <ImageCropper /> */}
        </>
    )
}
