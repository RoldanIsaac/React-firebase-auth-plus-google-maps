import React from "react";
import { getAll } from "../services/api"
import { useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";


const Dashboard = () => { 

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await getAll();
      // setPosts(postsFromServer);
    }
    getPosts();

    const fetchedPosts = [
      { id: 1, title: 'Mi primer post', body: 'Contenido del primer post...', date: '2025-02-22' },
      { id: 2, title: 'Otro post interesante', body: 'Contenido de otro post...', date: '2025-02-20' },
      { id: 3, title: 'Aprendiendo React', body: 'Contenido sobre React...', date: '2025-02-19' },
    ];
    setPosts(fetchedPosts);

  }, []) 

  

  
  return (
    <div>
      {/* <div>
        { posts.map(post => (
          <li key={post.id}> {post.title} </li>
        ))}
      </div> */}

      <main>
        <CardList cards={posts} />
      </main>
    </div>
  );
 }

export default Dashboard;


