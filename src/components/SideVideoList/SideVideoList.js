import "./SideVideoList.scss";
import SideVideo from "../SideVideo/SideVideo";

const SideVideoList = ({userSummary}) => {

    return (
        <div className="sideVideos">
            <ul className="sideVideos__list">
                
                {userSummary.map((user, id)=>(
                <SideVideo key={user.id} user={user} />
                ))}
            </ul>
        </div>
    )
}

export default SideVideoList;