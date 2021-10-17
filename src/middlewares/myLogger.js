import React from 'react';

const myLogger = (store) => (next) => (action) => {
  console.log(action);
  const result = next(aciton);
  return result;
};

export default myLogger;
