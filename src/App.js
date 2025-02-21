import { useEffect } from "react";
import { getAll, getOne, createOne, updateOne, deleteOne } from "./services/api";

useEffect(() => {
  const getPosts = async () => {
    const postsFromServer = await getAll();
    setPosts(postsFromServer);
  }
  getPosts();
}) 

posts = []

const setPosts = (posts) => {
  posts = posts;
}


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
