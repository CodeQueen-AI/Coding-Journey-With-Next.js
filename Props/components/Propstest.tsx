import React from 'react';

const PropsTest = (props: { name: string; cast: string }) => {
  console.log('props', props);
  return (
    <div>
      <h3>{`Hello ${props.name} ${props.cast}`}</h3>
    </div>
  );
};

export default PropsTest;
