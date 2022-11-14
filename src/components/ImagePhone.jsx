import ProfileImage from "../assets/yo.png";
import "../styleComponents/ImagePhone.css";

function ImagePhone() {
  return (
    <img className="imgPhone" src={ProfileImage} alt="Profile Image" />
  );
}

export default ImagePhone;