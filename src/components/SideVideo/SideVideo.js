import "./SideVideo.scss"


const SideVideo = (props) => {
 return (
   <div
     onClick={() => {
       props.sideVideoClickHandler(props.sideVideo.id);
     }}
     className="sideVideo"
   >
     <div className="sideVideo__image-div">
       <img
         src={props.sideVideo.image}
         alt={props.channel}
         video
         className="sideVideo__image"
       />
     </div>
     <div className="sideVideo__content">
       <h2 className="sideVideo__title">{props.sideVideo.title}</h2>
       <p className="sideVideo__channel">{props.sideVideo.channel}</p>
     </div>
   </div>
 );
}

export default SideVideo;