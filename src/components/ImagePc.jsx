import ProfileImage from "../assets/yo.png";
import "../styleComponents/ImagePc.css";

function ImagePc() {
  return (
    <img className="imgPc" src={ProfileImage} alt="Profile Image" />
  );
}

export default ImagePc;