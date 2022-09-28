import CommentBox from "./components/CommentBox/CommentBox";
import users from "./assets/Data/video-details.json";
import DisplayVideoDetails from "./components/DisplayVideoDetails/DisplayVideoDetails";

const App = () => {
  return (
    <main>
      <DisplayVideoDetails users={users[0]} />
      <CommentBox comments={users[0].comments} />
    </main>
  );
};

export default App;
