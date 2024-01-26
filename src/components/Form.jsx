import React, {useState} from 'react';

function Form({title, handleClick}) {
  const [email, setEmail] = useState('m@mail.ru');
  const [pass, setPass] = useState('123456');

  return (
    <div className='form'>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      <input
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <button
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </button>
    </div>
  )
}

export default Form;