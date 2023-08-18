import React from 'react';
import { useSelector } from 'react-redux';

const Output = () => {
  const { total } = useSelector(state => state.counter);
  return <div>{total}</div>;
};

export default Output;
