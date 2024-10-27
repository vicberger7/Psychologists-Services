/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import css from './MoreModal.module.css';
import toast from 'react-hot-toast';

const schema = yup
  .object({
    name: yup.string().required(),
    tel: yup.string().min('13').max('13').required(),
    time: yup.string().required(),
    email: yup.string().required(),
    comment: yup.string(),
  })
  .required();

export const MoreModal = ({ data, handleOpenModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
    handleOpenModal();
    toast(`Successfully reserved an appointment to ${data.name}`, {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#54be96',
        color: '#fff',
        marginTop: '100px',
        textAlign: 'center',
      },
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Make an appointment with a psychologists</h1>
      <h2 className={css.subTitle}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </h2>
      <div className={css.mainBox}>
        <img
          src={data.avatar_url}
          alt={data.name}
          height={44}
          width={44}
          className={css.imgBox}
        />
        <div className={css.nameBox}>
          <h3 className={css.h3}>Your psychologists</h3>
          <p className={css.name}>{data.name}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" />
        <p>{errors.email?.message}</p>

        <div className={css.formWrapper}>
          <input
            {...register('tel')}
            className={css.password}
            type="text"
            defaultValue={`+380`}
          />
          <p>{errors.tel?.message}</p>
          <input {...register('time')} className={css.password} type="time" />
          <p>{errors.time?.message}</p>
        </div>
        <input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <textarea {...register('comment')} placeholder="Comment" />
        <p>{errors.comment?.message}</p>
        <p>{errors.password?.message}</p>

        <button type="submit" className={css.submit}>
          Send
        </button>
      </form>
    </div>
  );
};