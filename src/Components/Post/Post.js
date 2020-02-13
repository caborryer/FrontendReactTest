import React, { useState } from 'react';

const Post = () => {
  const [post, setPost] = useState([]);


  async function getData() {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      console.log(response)

    }catch (error) {
      console.log(error)

    }

  }
  return (
    <div>
      <h1>hi</h1>

    </div>
  );
};

export default Post;