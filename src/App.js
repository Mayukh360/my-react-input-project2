import Form from './Components/Form/Form';
import React, { useState } from 'react';


function App() {
  const [userList, setUserList] = useState([]);

  const addGoalHandler = (userName, userAge) => {
    setUserList((prevUserList) => [...prevUserList, { name: userName, age: userAge }]);
  };

  return (
    <div>
      <Form onAddGoal={addGoalHandler} />
      {userList.map((user) => (
        <div key={Math.random().toString()}>
          <div></div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age} Years Old</p>
        </div>
      ))}
    </div>
  );
}

export default App;
