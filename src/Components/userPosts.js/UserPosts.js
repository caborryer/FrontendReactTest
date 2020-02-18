import React, { useEffect, useState } from 'react';
import FlashMessage from "../Errors/FlashMessage";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({});

  async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      //setPosts(data)
      console.log(data);

      setError({})

    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getData()
  }, [posts, setPosts]);

  let FMessage = <FlashMessage type="error" message= {error.message} />;

  return (
    <div className="container">
      {error.message ? (FMessage) : ''}
      <table className="table table-hover">
        <thead>
        {posts.map(post=>(
          <tr className="table-light">
            <th scope="col">User id :{post.userId}</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
            <th scope="col">Column heading</th>
          </tr>
        ))}
        </thead>
        <tbody>
        <tr className="table-primary">
          <th scope="row">Active</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserPosts;