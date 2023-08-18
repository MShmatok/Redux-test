import React from 'react';
import Btn from './btn';

import Output from './Output';

const Counter = () => {
  return (
    <>
      <Output />
      <div>Counter</div>
      <Btn>Plus</Btn>
    </>
  );
};

export default Counter;
