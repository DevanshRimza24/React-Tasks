import { useLocation } from "react-router-dom";
import "../ImageCard.css"

const View = () => {

    const location = useLocation();
  const { imageId, imageName, imageUrl } = location.state || {};
    return (
        <div className="image-view">
            <img src={`http://localhost:3001${imageUrl}`} alt="" />
        </div>
    )
}

export default View