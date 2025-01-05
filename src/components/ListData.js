import React, { useEffect, useState } from "react";

const ListData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/10")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    console.log(data)
  }, [data]);
  return (
    <div>
      <h1>Data list</h1>
      {data ? <h1>{data.title}</h1> : <p>Loading.....</p>}
    </div>
  );
};

export default ListData;
