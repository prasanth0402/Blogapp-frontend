import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PostPage from "./pages/PostPage";
import Post from "./components/Post";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<PostPage />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;