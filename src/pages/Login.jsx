import { CircularProgress } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { doPostRequestAction } from '../store/actions/userActions'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const formDataInitial = {
  email: '',
  password: '',
}

export default function Login() {
  const { error, loading } = useSelector((store) => store.userReducer)
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDataInitial,
  })

  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    }
    dispatch(doPostRequestAction(payload, history))
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
                value="customer@commerce.com"
                placeholder="Email"
                className="input-field"
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
                className="input-field"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>

            {error.response?.data.message && (
              <h2 className="text-red-500">{error.response?.data.message}</h2>
            )}

            <button
              type="submit"
              className="mt-1 mx-auto block max-w-fit rounded-md bg-t-3 text-white border-transparent focus:border-gray-500 focus:ring-0 min-w-[152px] h-[50px]"
            >
              {loading && (
                <CircularProgress size={20} className="" color="inherit" />
              )}
              {!loading && 'Sing In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
