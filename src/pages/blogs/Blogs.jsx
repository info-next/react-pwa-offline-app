import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/blogSlice';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <button><Link to="/add-blog">Add Blog</Link></button>
<ul>
      {posts.map((post) => (
        <li key={post.id}><span>{post.id}: </span> {post.title}</li>
      ))}
    </ul>
    </div>
    
  );
}

export default Blogs;
