import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  faMobileScreenButton,
  faPencil,
  faPlus,
  faTimes,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAddressAction,
  doPostRequestAddressAction,
  doPutRequestAddressAction,
  getAddressAction,
} from '../../store/actions/shoppingActions'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { cities } from '../../helper/cities'

const initialValues = {
  title: '',
  name: '',
  surname: '',
  phone: '',
  city: '',
  district: '',
  neighborhood: '',
  address: '',
}

const Address = () => {
  const dispatch = useDispatch()
  const { address } = useSelector((state) => state.shoppingReducer)
  const { register, handleSubmit, setValue, reset } = useForm()
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setisEditing] = useState({
    isEditing: false,
    id: 0,
    user_id: 0,
  })
  const [selectedAddressId, setSelectedAddressId] = useLocalStorage(
    'selectedAddressId',
    address[0]?.id
  )

  useEffect(() => {
    setValue('title', '')
  }, [])

  const onSubmit = (data) => {
    console.log(data)
    if (isEditing.isEditing) {
      dispatch(
        doPutRequestAddressAction({
          ...data,
          id: isEditing.id,
          user_id: isEditing.user_id,
        })
      )
    } else {
      dispatch(doPostRequestAddressAction(data))
    }
    setisEditing({ ...isEditing, isEditing: false, id: 0, user_id: 0 })
    setShowModal(false)
  }

  const handleDelete = (address) => {
    dispatch(deleteAddressAction(address.id))
  }

  useEffect(() => {
    dispatch(getAddressAction())
  }, [])

  const handleNewAddress = () => {
    setShowModal(true)
    setisEditing(false)
    reset()
  }

  const closeModal = () => {
    setShowModal(false)
    reset()
  }

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal()
    }
  }

  const handleEdit = (address, id, user_id) => {
    setisEditing({ ...isEditing, isEditing: true, id: id, user_id: user_id })
    setValue('title', address.title)
    setValue('name', address.name)
    setValue('surname', address.surname)
    setValue('phone', address.phone)
    setValue('city', address.city)
    setValue('district', address.district)
    setValue('neighborhood', address.neighborhood)
    setValue('address', address.address)
    setShowModal(true)
  }

  return (
    <div className="flex flex-col border-2 border-blue-100 rounded-lg p-4 gap-4 tracking-wider">
      <div className="flex justify-between">
        <h2 className="font-semibold">Delivery Address</h2>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="rounded cursor-pointer border-2 border-blue-300 checked:bg-blue-200 hover:bg-blue-400 hover:text-blue-400 focus:outline-none focus:border-0 focus:bg-blue-300 checked:outline-none checked:focus:outline-none transform hover:scale-110 transition-transform duration-500 focus:ring-0"
          />
          <p>Send my bill to the same address</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div
          onClick={handleNewAddress}
          className="basis-1/2 border-2 border-blue-300 hover:border-blue-400 rounded-lg flex flex-col justify-center items-center py-12 cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlus} size="2xl" className="text-blue-400" />
          <p className="text-lg font-semibold">Add new address</p>
        </div>
        {address.map((a, i) => {
          const isSelected = selectedAddressId == a.id ? true : false
          return (
            <div
              onClick={() => {
                setSelectedAddressId(a.id)
              }}
              key={i}
              className={`${
                isSelected ? 'bg-blue-50 border-blue-400' : 'bg-white'
              } basis-1/2 border-2 rounded-lg p-4 flex flex-col gap-3 tracking-normal`}
            >
              <div className="flex justify-between">
                <h1 className="font-semibold text-lg">{a.title}</h1>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    onClick={() => {
                      handleEdit(a, a.id, a.user_id)
                    }}
                    icon={faPencil}
                    className="text-blue-300 hover:text-blue-500"
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      handleDelete(a)
                    }}
                    className="text-red-300 hover:text-red-500"
                    icon={faTrash}
                  />{' '}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="">
                  <FontAwesomeIcon className="text-blue-400" icon={faUser} />{' '}
                  {a.name} {a.surname}
                </p>
                <p className="">
                  <FontAwesomeIcon icon={faMobileScreenButton} /> {a.phone}
                </p>
              </div>
              <p className="">{a.address}</p>
              <p>
                {a.city} {a.district} {a.neighborhood}
              </p>
            </div>
          )
        })}
      </div>

      {showModal && (
        <div
          className="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center"
          onClick={handleModalClick}
        >
          <div className="modal-content max-w-xl bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-center text-lg font-semibold">
              Add New Address
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-4"
            >
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  {...register('title')}
                  placeholder="Title"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  placeholder="Name"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  {...register('surname')}
                  placeholder="Surname"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  {...register('phone')}
                  placeholder="Phone"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="city">City</label>
                <select
                  id="city"
                  {...register('city')}
                  placeholder="Select City"
                  className="input-field"
                >
                  <option value="">Select City</option>
                  {cities.map((c, i) => {
                    return (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  id="district"
                  {...register('district')}
                  placeholder="District"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="neighborhood">Neighborhood</label>
                <input
                  type="text"
                  id="neighborhood"
                  {...register('neighborhood')}
                  placeholder="Neighborhood"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  {...register('address')}
                  placeholder="Address"
                  rows={4}
                  className="input-field"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {isEditing.isEditing ? 'Update' : 'Submit'}
              </button>
            </form>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Address
