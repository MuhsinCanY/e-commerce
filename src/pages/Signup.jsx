import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAxios, { REQ_TYPES } from '../helper/api'
import { CircularProgress, TextField } from '@mui/material'

const formDataInitial = {
  name: '',
  email: '',
  password: '',
  password2: '',
  role_id: 3,
}

export default function Singup() {
  const [isStoreSelect, setIsStoreSelect] = useState(false)
  const [isPasswordEqual, setIsPasswordEqual] = useState(false)
  const { data: roles, setData: setRoles, doRequest } = useAxios([])
  const {
    data: store,
    setData: setStore,
    doRequest: doRequestStore,
  } = useAxios([])
  const {
    data: costumer,
    setData: setCostumer,
    loading: loadingCostumer,
    doRequest: doRequestCustomer,
  } = useAxios([])

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

  const onSubmit = (data) => {
    console.log(data.password !== data.password2, data.password, data.password2)
    if (data.password !== data.password2) {
      setIsPasswordEqual(false)
    } else {
      setIsPasswordEqual(true)
      if (isStoreSelect) {
        console.log('Store post')
        doRequestStore({
          endpoint: '/signup',
          reqType: REQ_TYPES.POST,
          payload: {
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
          },
        }).then((res) => {
          console.log(res.data)
        })
      } else {
        console.log('Costumer post')
        doRequestCustomer({
          endpoint: '/signup',
          reqType: REQ_TYPES.POST,
          payload: {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id,
          },
        })
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    console.log(data)
  }
  console.log('Errrororrrr', errors)

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
                    value: /^[a-zA-Z0-9-]{3,}/gm,
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
                value="xmcyilmaz1998@gmail.com"
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
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                {...register('role_id', {
                  required: true,
                  onChange: (e) => {
                    console.log(e.target.value)
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
                    placeholder="Store Phone"
                    className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    {...register('storePhone', {
                      required: 'Phone is required',
                      min: 3,
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
                    placeholder="Store Tax ID"
                    className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    {...register('storeTax_no', {
                      required: 'Tax ID is required',
                      min: 3,
                      pattern: {
                        value: /^[a-zA-Z0-9-]{3,}/gm,
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
                    placeholder="Store Bank Account"
                    className="mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    {...register('storeBank_account', {
                      required: 'Bank Account is required',
                      pattern: {
                        value: /^[a-zA-Z0-9-]{3,}/gm,
                        message: 'Name field should be appear at least 3 char',
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
              className="mt-1 mx-auto px-5 py-3 block max-w-fit rounded-md bg-t-3 text-white border-transparent focus:border-gray-500  focus:ring-0"
            >
              {loadingCostumer && (
                <CircularProgress size={20} className="mx-1" color="inherit" />
              )}
              Sing In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
