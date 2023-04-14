import Form from './Components/Form/Form';
import classes from './Components/Form/Form.module.css';
import React, { useState } from 'react';
import Card from './Components/UI/Card';


function App() {
  const [userList, setUserList] = useState([]);

  const addGoalHandler = (userName, userAge) => {
    setUserList((prevUserList) => [...prevUserList, { name: userName, age: userAge }]);
  };

  return (
    <Card className={classes.input}>
      <Form onAddGoal={addGoalHandler} />
      {userList.map((user) => (
        <div key={Math.random().toString()}>
          <div></div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age} Years Old</p>
        </div>
      ))}
    </Card>
  );
}

export default App;
