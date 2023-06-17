import { LoggedItem, LoggedLink, LoggedList } from './LoggedNav.module';

const LoggedNav = () => {
  return (
    <LoggedList>
      <LoggedItem>
        <LoggedLink to="login">LogIn</LoggedLink>
      </LoggedItem>
      <LoggedItem>
        <LoggedLink to="register">Register</LoggedLink>
      </LoggedItem>
    </LoggedList>
  );
};

export default LoggedNav;
