import "./Logo.css";
import logotip from "../../img/logotipp.jpg"

export default function Logo() {
  return (
    <div className="logo">
      <img className="logo_img" src={logotip} alt="" />
    </div>
  )
}