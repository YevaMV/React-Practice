import { useState } from 'react';

import Card from '../UI/Card';

import classes from './AddUsers.module.css';
import Button from '../UI/Button';

function AddUsers(props) {
  const [userNameValue, setUserNameValue] = useState('');
  const [userAgeValue, setUserAgeValue] = useState('');

  const userNameValueHandler = (event) => {
    setUserNameValue(event.target.value);
  };

  const userAgeValueHandler = (event) => {
    setUserAgeValue(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(userNameValue, userAgeValue);
    if (userNameValue.trim().length === 0 || userAgeValue.trim().length === 0) {
      return;
    }

    if (+userAgeValue < 1) {
      return;
    }

    setUserNameValue('');
    setUserAgeValue('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userNameValue}
          onChange={userNameValueHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userAgeValue}
          onChange={userAgeValueHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUsers;
