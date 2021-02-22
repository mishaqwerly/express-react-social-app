import React from 'react'
import './Articles.scss'
import {apiClient} from "../../config/axios";
import {useState, useEffect} from 'react'

import Post from '../post/Post'

function Articles() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await apiClient.get("/posts");
      console.log(response.data)
      setPosts(response.data);
    }
    fetchData();
  }, []); 

  return (
    <div className="articles page">
      Articles
      <div className="articles__list">
        {
          posts.map((item,index) => <Post content={item} key={index}/>)
        }
      </div>
    </div>
  )
}

export default Articles;
