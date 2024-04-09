import React, { useState, useEffect } from 'react';
import PostList from './components/PostList'; 
import { useGetDataQuery } from './api/apiSlice';



function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoading, isSuccess, isError} = useGetDataQuery()


  
  

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError('Error fetching data. Please try again later.');
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data || !data.children || data.children.length === 0) {
    return <p>No posts available</p>;
  }

  return <PostList posts={data.children} />;
}


export default App;