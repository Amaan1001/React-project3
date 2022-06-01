import styles from "./DisplayUser.module.css";
import Card from "../UI/Card";
const DisplayUser = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.gender} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayUser;
