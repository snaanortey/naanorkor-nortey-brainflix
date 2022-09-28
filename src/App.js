import CommentBox from "./components/CommentBox/CommentBox";
import users from "./assets/Data/video-details.json";

const App = () => {
  return (
    <main>
      <CommentBox comments={users[0].comments} />
    </main>
  );
};

export default App;
