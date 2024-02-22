import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAxios from '../helper/api'
import { TextField } from '@mui/material'

const formDataInitial = {
  name: '',
  email: '',
  password: '',
  password2: '',
  role_id: 3,
}

export default function Singup() {
  const { data: roles, setData: setRoles, doRequest } = useAxios([])

  useEffect(() => {
    doRequest({
      endpoint: `/roles`,
    }).then((res) => {
      setRoles(res.data.reverse())
    })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDataInitial,
  })

  const handleChange = (event) => {
    // let { name, value, type } = event.target
    // value = type === 'checkbox' ? event.target.checked : value
    // setForm({ ...form, [name]: value })
    console.log(event)
  }

  const onSubmit = (data) => console.log(data)
  console.log('Errrororrrr', errors)

  return (
    <div className="bg-[#e6e6e6] py-10 font-[Montserrat] font-medium text-[16px] leading-[20px] tracking-wider">
      <div className="container">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-solid mx-auto grid grid-cols-1 gap-6 max-w-[440px]"
          >
            <TextField
              label="Name"
              variant="filled"
              defaultValue="Name"
              helperText={
                <p className="text-red-500">{errors.name?.message}</p>
              }
              type="text"
              className="border-0"
              {...register('name', {
                required: 'Name is required',
                min: 3,
                pattern: {
                  value: /^[a-zA-Z0-9-]{3,}/gm,
                  message:
                    'The name field must consist of at least 3 characters',
                },
              })}
            />
            <div>
              <label>Name</label>

              {/* <p>{errors.name.message != '' && <h1>Welcome back!</h1>}</p> */}
              <p>{errors.name?.message}</p>

              <input
                type="text"
                // value="Muhsin"
                // onChange={handleChange}
                name="name"
                placeholder="Name"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('name', {
                  required: 'Name is required',
                  min: 3,
                  pattern: {
                    value: /^[a-zA-Z0-9-]{3,}/gm,
                    message: 'Name field should be appear at least 3 char',
                  },
                })}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                value="mcyilmaz1998@gmail.com"
                // onChange={handleChange}
                placeholder="Email"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </div>
            <div>
              <label>Password</label>

              <input
                value="Password12."
                type="password"
                // onChange={handleChange}
                placeholder="Password"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('password', {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
                })}
              />
            </div>

            <div>
              <label>Password Again</label>
              <input
                type="password"
                value="Password12."
                // onChange={handleChange}
                placeholder="Password Again"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('password2', {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
                })}
              />
            </div>

            <div>
              <label>Role</label>
              <select
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('role_id', { required: true })}
              >
                {roles.map((role, i) => {
                  return (
                    <option key={i} value={role.id}>
                      {role.name}
                    </option>
                  )
                })}
              </select>
            </div>

            <button
              type="submit"
              className="mt-1 mx-auto px-5 py-3 block max-w-fit rounded-md bg-t-3 text-white border-transparent focus:border-gray-500  focus:ring-0"
            >
              Sing In
            </button>
          </form>
        </div>
        <div>Singup</div>
        <div>Password needs to be matched to second pass input field</div>
      </div>
    </div>
  )
}
