import React from 'react';

const Post = ({ data }) => {
  const {
    title,
    author,
    selftext,
    score
  } = data

  return (
    <div className="post"> {/* Use <div> instead of <li> */}
      <h4>Posted by: {author}</h4>
      <h2>{title}</h2>
      <p>{selftext.slice(0, 400)}</p>
      <h4>Score: {score}</h4>
    </div>
  )
}
export default Post;