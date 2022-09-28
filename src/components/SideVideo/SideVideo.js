import "./SideVideo.scss"

const SideVideo = ({user}) => {
 return(
    <div className="sideVideo">
        <div className="sideVideo__image-div"> 
        <img src={user.image} alt="" className="sideVideo__image" />
        </div>
        <div className="sideVideo__content">
            <h2 className="sideVideo__title">{user.title}</h2>
            <p className="sideVideo__channel">{user.channel}</p>
        </div>
    </div>
 )
}

export default SideVideo;