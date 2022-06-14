import React, {useState} from 'react';

 export const validate = (input) => {
    let errors = {}
    if (!input.username) {
      errors.username = 'Username is required'
    } else if(!/\S+@\S+\.\S+/.test(input.username)){
      errors.username = 'Username is invalid'
    }
    if (!input.password){
      errors.password = 'Password is required'
    } else if (!/(?=.*[0-9])/.test(input.password)){
      errors.password = 'Password is invalid'
    }
    return errors
  }

export default function  Form() {
  const [input, setInput] = useState({username:'', password:''});
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    setErrors(validate({...input,[e.target.name]: e.target.value}))
    setInput({...input,[e.target.name]: e.target.value});
    
  }

  return (
    <form>
      <label>Username:</label>
      <input className={errors.username && 'danger'}
      name='username' 
      type='text'
      value={input.username}
      key= 'username'
      onChange={handleChange}/>
      {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
    <br />
      <label>Password:</label>
      <input className={errors.password && 'danger'}
      name='password' 
      type='password'
      value={input.password}
      key= 'password'
      onChange={handleChange}/>
      {errors.password && (
      <p className="danger">{errors.password}</p>
    )}
      <button type='submit'>Submit</button>
    </form>
  )
}
