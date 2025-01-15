import React, { useState, useEffect } from "react";

const Practice = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getData = (val) => {
    console.log(val);
  };

  return (
    <div>
      <h1>hello</h1>
      {data.map((item, index) => (
        <p key={index}>
          {item.name} <button onClick={() => getData(item)}>GetData</button>
        </p>
      ))}
    </div>
  );
};

export default Practice;
