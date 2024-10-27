import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/authOps';

import css from './LoginModal.module.css';

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => dispatch(signIn(data));

  return (
    <div className={css.container}>
      <h1>Log In</h1>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <div className={css.wrapper}>
          <input
            {...register('password')}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            className={css.password}
          />
          {showPassword ? (
            <FiEye
              size={20}
              className={css.icon}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FiEyeOff
              size={20}
              className={css.icon}
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <p>{errors.password?.message}</p>

        <button type="submit" className={css.submit}>
          Log In
        </button>
      </form>
    </div>
  );
};