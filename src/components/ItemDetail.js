import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/posts';

const ItemDetail = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { loading, posts, error } = useSelector((state) => state.posts);
  const postId = match.params.id;
  const post = posts.find((p) => p.id === parseInt(postId));

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <p>Details Page For Post With ID {post.id}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default ItemDetail;
