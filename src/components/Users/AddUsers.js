import Card from '../UI/Card';

import classes from './AddUsers.module.css';

function AddUsers(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button typeof="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUsers;
