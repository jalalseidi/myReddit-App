import React from 'react';
import Fetch from './components/Fetch';
// Post component
// const Post = ({ data }) => {
//   const {
//     title,
//     author,
//     selftext,
//     score
//   } = data;

//   return (
//     <li className="post">
//       <h4>Posted by: {author}</h4>
//       <h2>{title}</h2>
//       <p>{selftext.slice(0, 400)}</p>
//       <h4>Score: {score}</h4>
//     </li>
//   );
// };

function App() {
  return (
    <div>
      <Fetch />
    </div>
  )
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('https://www.reddit.com/r/webdev.json')
  //     .then((response) => response.json())
  //     .then((data) => setData(data.data.children));
  // }, []);

  // if (!data) return <p>Not Loading</p>;

  // if (!data.data || !data.data.children) {
  //   return <p>No data found.</p>;
  // }

  
  // return (
  //   <ol>
  //   {data.map((child) => <Post key={child.data.id} data={child.data} />)}
  // </ol>
  // );
}


export default App;
