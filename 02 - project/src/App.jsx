import React from "react";
import PostList from "./feature/posts/postsList";
import AddPostForm from "./feature/posts/AddPostForm";

const App = () => {
  return (
    <main>
      <AddPostForm />
      <PostList />
    </main>
  );
};

export default App;
