import React from 'react';

const OptionalChainingTest = () => {
  const testObj = {
    nested: {
      value: 'Hello, world!'
    }
  };

  return (
    <div>
      {testObj?.nested?.value || 'Optional chaining is not working'}
    </div>
  );
};

export default OptionalChainingTest;
