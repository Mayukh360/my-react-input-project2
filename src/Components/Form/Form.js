import React, { useState } from 'react';
import './Form.css';


export default function Form(props) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim().length===0 ||enteredAge.trim().length===0){
      alert('Please Enter Valid Name and Age (Non Empty values)');
      return;
    }
    else if(enteredAge<0){
      alert('Please Enter A valid Age');
      return;
    }
    props.onAddGoal(enteredName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div >
        <label>Username</label>
        <input onChange={inputNameChangeHandler} type='text' value={enteredName} />
      </div>
      <div>
        <label>Age(Years)</label>
        <input onChange={inputAgeChangeHandler} type='number' value={enteredAge} />
      </div>
      <button type='submit'>Add User</button>
    </form>
  );
}
