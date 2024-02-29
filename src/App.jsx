import React from 'react';
import Post from './components/Post'; // Assuming Post component is in a separate file


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData(null); // Set data to null to indicate error
      });
  }, []);

  if (!data || !data.children || data.children.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <ol>
      {data.children.map((child) => (
        <li key={child.data.name}>
          <Post data={child.data} />
        </li>
      ))}
    </ol>
  );
  
}


export default App;