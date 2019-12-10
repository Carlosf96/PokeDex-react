import React from 'react';

const Types = ({types}) => {
  const formatTypes = s => [...s.reduce((p, c) => p + "/" + c.type.name, "")].slice(1).join("");
  return types ? <p>{formatTypes(types)}</p> : <p>No types</p>;
};

export default Types;