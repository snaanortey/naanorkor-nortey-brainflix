import CommentBox from "./components/CommentBox/CommentBox";
import users from "./assets/Data/video-details.json";
import DisplayVideoDetails from "./components/DisplayVideoDetails/DisplayVideoDetails";
import { useState } from "react";

const App = () => {
const [currentUser, setCurrentUser] = useState (users[0]);

const [currentComment, setCurrentComment] = useState (users[0].comments)



  return (
    <main>
      <DisplayVideoDetails users={currentUser} />
      <CommentBox comments={currentComment} />
    </main>
  );
};

export default App;
