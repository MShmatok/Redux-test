import { addValue, deleteValue } from 'components/store/math/actions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Math = () => {
  const { array } = useSelector(state => state.math);
  const [input, setInput] = useState('1');

  const dispatch = useDispatch();
  const handlerAdd = () => {
    dispatch(addValue(input));
  };
  const handleDelete = () => {
    dispatch(deleteValue(input));
  };

  console.log(array);
  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handlerAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Math;
