import React, { useState } from 'react';


const Newsletter = () => {
  const [value, changeValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' onChange={(e) => changeValue(e.target.value)} />
      <button>Enviar</button>
      {value}
    </form>
  );
};

export default Newsletter;
