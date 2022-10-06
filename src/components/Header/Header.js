import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchLogo from "../../assets/Icons/search.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Link to="/"> 
            <img className="header__logo-image" src={logo} alt="logo icon" />
            </Link>
          </div>
          <div className="header__nav">
            <div className="header__navOne">
              <div className="header__nav-search">
                <input
                  type="search"
                  className="header__nav-search-button"
                  placeholder="Search"
                ></input>
              </div>
              <div className="header__imagediv header__imagediv--mobile">
                <img src={profilePic} alt="profile pic" className="header__image" />
              </div>
            </div>
            <div className="header__navTwo">
              <div className="header__uploaddiv">
              <Link to="videoUploadPage"> 
                <button className="header__upload-button">UPLOAD</button>
                </Link>
              </div>
              <div className="header__imagediv header__imagediv--tablet">
                <img src={profilePic} alt="profile pic" className="header__image" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;