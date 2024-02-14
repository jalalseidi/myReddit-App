import { useState, useEffect } from 'react';
import React from 'react';


const Fetch = () => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  if (!data) return null

  return (
    // <ol>
    //   {data.data.map((child) => <li>{child.children.data.title}</li>)}
    // </ol>
    <div>
      {data.data.children.data.title}
    </div>
  )
}
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:3000/data')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
//   return (
//     // <ol>
//     //   {data.data.children.map((child) => <li>{child.data}</li>)}
//     // </ol>
//     <div>{data.data.children.title} </div>
//   );
// };
export default Fetch;
