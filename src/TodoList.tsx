import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  email: string;
  name: string;
  password: string;
  password1: string;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  });
  const [todo, setTodo] = useState('');

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError('password', { message: 'password are not the same' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'email',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver.com emails allowed',
            },
          })}
          placeholder='email'
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register('name', { required: 'name is required' })}
          placeholder='Name'
        />
        <input
          {...register('password', {
            required: 'password is required',
            minLength: { value: 5, message: 'Your password is too short' },
          })}
          placeholder='password'
        />
        <span>{errors?.password?.message as string}</span>

        <input
          {...register('password1', {
            required: 'password is required',
            minLength: { value: 5, message: 'Your password is too short' },
          })}
          placeholder='password'
        />
        <span>{errors?.password1?.message as string}</span>

        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
