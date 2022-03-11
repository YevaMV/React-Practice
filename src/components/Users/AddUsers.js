import { useState } from 'react';

import Card from '../UI/Card';

import classes from './AddUsers.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUsers(props) {
  const [userNameValue, setUserNameValue] = useState('');
  const [userAgeValue, setUserAgeValue] = useState('');
  const [error, setError] = useState();

  const userNameValueHandler = (event) => {
    setUserNameValue(event.target.value);
  };

  const userAgeValueHandler = (event) => {
    setUserAgeValue(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userNameValue.trim().length === 0 || userAgeValue.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non empty values)',
      });
      return;
    }

    if (+userAgeValue < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    props.onAddUser(userNameValue, userAgeValue);
    setUserNameValue('');
    setUserAgeValue('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
}

export default AddUsers;
