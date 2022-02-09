import React from "react";
import useFetch from "../../hooks/useFetch";

const MultipleCustomHooks = ({ id }) => {

  const url = `https://www.breakingbadapi.com/api/quotes/${ encodeURI(id) }`;
  const {data,loading,error} = useFetch(url);

//   const info = data[0];

//   console.log('data', info);

  return (
    <>
      <hr />
      <h1>Multiple Custom HOOKS</h1>
      { loading && <p> loading... </p> }
      { error && <p> fatal error </p> }
      { !(loading) && <p> { JSON.stringify(data,null,10) } </p> }
      <hr />
    </>
  );
};

export default MultipleCustomHooks;
