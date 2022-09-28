import CommentBox from "./components/CommentBox/CommentBox";
import users from "./assets/Data/video-details.json";
import DisplayVideoDetails from "./components/DisplayVideoDetails/DisplayVideoDetails";
import SideVideoList from "./components/SideVideoList/SideVideoList";
import userSummary from "./assets/Data/videos.json"
import { useState } from "react";


const App = () => {
const [currentUser, setCurrentUser] = useState (users[0]);

const [currentComment, setCurrentComment] = useState (users[0].comments)



  return (
    <main>
      <DisplayVideoDetails users={currentUser} />
      <CommentBox comments={currentComment} />
      <SideVideoList userSummary={userSummary}/>
    </main>
  );
};

export default App;
