import "../ImageCard.css"
import { useNavigate } from "react-router-dom";
import View from "./View";

interface ImageCardProps {
    image: {
        id: string;
        name: string;
        imageUrl: string
    }
}

const ImageCard = ({ image }: ImageCardProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/View", {
            state: { imageId: image.id, imageName: image.name, imageUrl: image.imageUrl }
          })
         
    }

    return (
        <div className="image-card">
            <img src={`http://localhost:3001${image.imageUrl}`} alt={image.name} onClick={handleClick} />
            <p>{image.name}</p>
        </div>
    )
}

export default ImageCard