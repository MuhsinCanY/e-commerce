import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const formDataInitial = {
  email: '',
  password: '',
}

export default function Login() {
  const [loadingLogin, setLoadingLogin] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDataInitial,
  })

  const onSubmit = (data) => {
    setLoadingLogin(true)
    //TODO: Post request
  }

  return (
    <div className="bg-[#FAFAFA] py-10 px-8 font-[Montserrat] font-medium text-[16px] leading-[20px] tracking-wider">
      <div className="container ">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-solid mx-auto grid grid-cols-1 gap-6 max-w-[440px]"
          >
            <h2 className="text-center text-[30px] font-bold">Login</h2>

            <div>
              <label>
                Email<span>*</span>
              </label>
              <input
                type="text"
                // value="customer@commerce.com"
                placeholder="Email"
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Email is not valid',
                  },
                })}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div>
              <label>
                Password<span>*</span>
              </label>

              <input
                value="123456"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            <button
              type="submit"
              className="mt-1 mx-auto block max-w-fit rounded-md bg-t-3 text-white border-transparent focus:border-gray-500 focus:ring-0 min-w-[152px] h-[50px]"
            >
              {loadingLogin && (
                <CircularProgress size={20} className="" color="inherit" />
              )}
              {!loadingLogin && 'Sing In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
