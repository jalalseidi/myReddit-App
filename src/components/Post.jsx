import React from 'react';

const Post = ({ data }) => {
  const { title, author, subreddit, created_utc, selftext } = data;

  // Function to convert Unix timestamp to a readable date format
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(); // Customize the date format as needed
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Subreddit:</strong> {subreddit}
      </p>
      <p>
        <strong>Created:</strong> {formatDate(created_utc)}
      </p>
      {selftext && <p>{selftext}</p>}
    </div>
  );
};

export default Post;
