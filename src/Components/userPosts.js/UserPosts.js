import React, { useEffect, useState } from 'react';
import TablePost from './TablePost';

const UserPosts = () => {
  const [post, setPost] = useState([]);

  async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json()
      console.log(data)
      return data


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [post])

  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
        <tr className="table-light">
          <th scope="col">Type</th>
          <th scope="col">Column heading</th>
          <th scope="col">Column heading</th>
          <th scope="col">Column heading</th>
        </tr>
        </thead>
        <tbody>
        <TablePost/>
        </tbody>
      </table>
    </div>
  );
};

export default UserPosts;