import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import searchLogo from "../../assets/Icons/search.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";

const Header = () => {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img className="header__logo-image" src={logo} alt="logo icon" />
          </div>
          <div className="header__nav">
            <div className="header__navOne">
              <div className="header__nav-search">
                <img
                  src={searchLogo}
                  alt="search logo"
                  className="header__nav-search-icon"
                />
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
                <img src={uploadIcon} alt="" className="header__upload-image" />
                <button className="header__upload-button">UPLOAD</button>
              </div>
              <div className="header__imagediv header__imagediv--mobile">
                <img src={profilePic} alt="profile pic" className="header__image" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;