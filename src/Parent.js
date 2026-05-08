import React from 'react';
import Child from './Child';

function Parent() {
  const name = 'John Doe';
  const age = 30;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export default Parent;