import { Notify } from 'notiflix';
import { useState } from 'react';
import { Form, Input, Label, Button, LoggedLink } from './LoginForm.module';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(() => {
        Notify.failure('Incorrect login or password');
      });

    // Очистка полів вводу не виконується
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter email ..."
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter password ..."
        />
      </Label>
      <Button type="submit">LogIn</Button>
      <LoggedLink to="/register">Don't have an account? Register</LoggedLink>
    </Form>
  );
};

export default LoginForm;
