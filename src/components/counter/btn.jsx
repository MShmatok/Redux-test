import { increment } from 'components/store/counter/action';
import React from 'react';
import { useDispatch } from 'react-redux';

const Btn = () => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(increment(1));
  };
  return <button onClick={handlerClick}>btn</button>;
};

export default Btn;
