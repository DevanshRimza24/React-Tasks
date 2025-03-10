import { useEffect, useState } from "react"
import axios from "axios"
import ImageCard from "../components/ImageCard"
import "../Gallery.css"

interface Image {
    id: string;
    name: string;
    imageUrl: string;
}

const Gallery = () => {

    useEffect(() => {

        const fetchImages = async () => {

         try {
            const response = await axios.get("http://localhost:3001/api/get-images")

            console.log(response)
            
            if(response.status) {
                setImages(response.data.data)
            }


         }
         catch (error) {

         }

        }
        fetchImages()
    }, [])

    const [images, setImages] = useState<Image[]>([])

    return (
        <div className="gallery-container">
            <h2>Welcome to Gallery Page</h2>

            <div className="image-grid">
                {images.length > 0 ? (
                    images.map((image) => <ImageCard key={image.id} image={image} />)
                ) : (
              <p>No image uploaded yet</p>
              )}
            </div>
        </div>
    )
}


export default Gallery