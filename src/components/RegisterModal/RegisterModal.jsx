import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import * as yup from 'yup';

import css from './RegisterModal.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/authOps';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const RegisterModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => dispatch(signUp(data));

  return (
    <div className={css.container}>
      <h1>Registration</h1>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" />
        <p>{errors.name?.message}</p>

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
          Sign Up
        </button>
      </form>
    </div>
  );
};