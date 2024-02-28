import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAxios, { API, REQ_TYPES } from '../helper/api'
import { CircularProgress } from '@mui/material'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRolesAction } from '../store/actions/storeActions'

// const formDataInitial = {
//   name: '',
//   email: '',
//   password: '',
//   password2: '',
//   role_id: 3,
// }

export default function Singup() {
  const roles = useSelector((store) => store.storeReducer.roles)
  const dispatch = useDispatch()

  let history = useHistory()
  const [isStoreSelect, setIsStoreSelect] = useState(false)
  const [isPasswordEqual, setIsPasswordEqual] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    dispatch(fetchRolesAction())
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: formDataInitial,
    defaultValues: {},
  })

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      setIsPasswordEqual(false)
    } else {
      setIsPasswordEqual(true)
      if (isStoreSelect) {
        const payload = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: data.role_id,
          store: {
            name: data.storeName,
            phone: data.storePhone,
            tax_no: data.storeTax_no,
            bank_account: data.storeBank_account,
          },
        }

        setIsLoading(true)

        API.post('/signup', payload)
          .then((res) => {
            console.log(res.data)
            history.goBack()
            toast('You need to click link in email to activate your account!')
          })
          .catch((err) => {
            console.log('errrrrr', err)
            toast(
              'You cannot register again with the registered email. Please check your information'
            )
          })
          .finally(() => {
            setIsLoading(false)
          })
      } else {
        const payload = {
          name: data.name,
          email: data.email,
          password: data.password,
          role_id: data.role_id,
        }
        setIsLoading(true)
        API.post('/signup', payload)
          .then((res) => {
            history.goBack()
            toast('You need to click link in email to activate your account!')
          })
          .catch((err) => {
            toast(
              'You cannot register again with the registered email. Please check your information'
            )
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
    }
  }

  return (
    <div className="bg-[#FAFAFA] py-10 font-[Montserrat] font-medium text-[16px] leading-[20px] tracking-wider">
      <div className="container">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-solid mx-auto grid grid-cols-1 gap-6 max-w-[440px]"
          >
            <h2 className="text-center text-[30px] font-bold">Sign Up</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                value="Muhsin"
                placeholder="Name"
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('name', {
                  required: 'Name is required',
                  min: 3,
                  pattern: {
                    value: /^[a-zA-Z0-9-]{3,3}/gm,
                    message: 'Name field should be appear at least 3 char',
                  },
                })}
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                value="mcyilmaz097@gmail.com"
                placeholder="Email"
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
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
                placeholder="Password"
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
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
                placeholder="Password Again"
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('password2', {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
                })}
              />
              {!isPasswordEqual && <p>Passwords not equal</p>}
            </div>

            <div>
              <label>Role</label>
              <select
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('role_id', {
                  required: true,
                  onChange: (e) => {
                    // console.log(e.target.value)
                    if (e.target.value == 2) {
                      setIsStoreSelect(true)
                    } else {
                      setIsStoreSelect(false)
                    }
                  },
                })}
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

            {isStoreSelect && (
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h2 className="font-bold text-[18px] mb-2">Store</h2>
                  <label>Store Name</label>
                  <input
                    type="text"
                    value="Sabanci"
                    placeholder="Store Name"
                    className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    {...register('storeName', {
                      required: 'Store Name is required',
                      pattern: {
                        value: /^[a-zA-Z0-9-]{3,}/gm,
                        message:
                          'Store Name field should be appear at least 3 char',
                      },
                    })}
                  />
                  <p className="text-red-500">{errors.storeName?.message}</p>
                </div>
                <div>
                  <label>Store Phone</label>
                  <input
                    type="text"
                    value="+905557171722"
                    placeholder="Store Phone"
                    className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    {...register('storePhone', {
                      required: 'Phone is required',
                      pattern: {
                        value:
                          /^(((\+|00)?(90)|0)[-| ]?)?((5\d{2})[-| ]?(\d{3})[-| ]?(\d{2})[-| ]?(\d{2}))$/gm,
                        message: 'Phone is not valid',
                      },
                    })}
                  />
                  <p className="text-red-500">{errors.storePhone?.message}</p>
                </div>
                <div>
                  <label>Store Tax ID</label>
                  <input
                    type="text"
                    name="name"
                    value="T1234V993456"
                    placeholder="Store Tax ID"
                    className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    {...register('storeTax_no', {
                      required: 'Tax ID is required',
                      min: 3,
                      pattern: {
                        value: /^[a-zA-Z0-9-]{12,}/gm,
                        message: 'Tax ID must be TXXXXVXXXXXX format',
                      },
                    })}
                  />
                  <p className="text-red-500">{errors.storeTax_no?.message}</p>
                </div>
                <div>
                  <label>Store Bank Account</label>
                  <input
                    type="text"
                    value="TR330006100519786457841234"
                    placeholder="Store Bank Account"
                    className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    {...register('storeBank_account', {
                      required: 'Bank Account is required',
                      pattern: {
                        value: /^[a-zA-Z0-9- ]{26,}/gm,
                        message: 'Bank Account is not valid',
                      },
                    })}
                  />
                  <p className="text-red-500">
                    {errors.storeBank_account?.message}
                  </p>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="mt-1 mx-auto block max-w-fit rounded-md bg-t-3 text-white border-transparent focus:border-gray-500 focus:ring-0 min-w-[152px] h-[50px]"
            >
              {/* {(loadingCostumer || loadingStore) && ( */}
              {isLoading && (
                <CircularProgress size={20} className="" color="inherit" />
              )}
              {/* {!(loadingCostumer || loadingStore) && 'Sing In'} */}
              {!isLoading && 'Sing In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
