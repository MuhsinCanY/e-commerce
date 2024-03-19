import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  faPencil,
  faPlus,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {
  doPostRequestCardAction,
  getCardAction,
  deleteCardAction,
  doPutRequestCardAction,
} from '../../store/actions/shoppingActions'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

const Payment = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.shoppingReducer)
  const { register, handleSubmit, setValue, reset } = useForm()
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState({
    isEditing: false,
    id: 0,
    user_id: 0,
  })
  const [selectedCardId, setSelectedCardId] = useLocalStorage(
    'selectedCardId',
    cart[0]?.id
  )

  const onSubmit = (data) => {
    if (isEditing.isEditing) {
      dispatch(
        doPutRequestCardAction({
          ...data,
          id: isEditing.id,
          user_id: isEditing.user_id,
        })
      )
    } else {
      dispatch(doPostRequestCardAction(data))
    }
    setShowModal(false)
  }

  useEffect(() => {
    dispatch(getCardAction())
  }, [])

  const handleNewCard = () => {
    setShowModal(true)
    setIsEditing({ ...isEditing, isEditing: false, id: 0, user_id: 0 })
    reset()
  }

  const closeModal = () => {
    setShowModal(false)
    setIsEditing({ ...isEditing, isEditing: false })
  }

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal()
    }
  }

  const handleEdit = (card, id, user_id) => {
    setIsEditing({ ...isEditing, isEditing: true, id: id, user_id: user_id })
    setShowModal(true)
    setValue('card_no', card.card_no)
    setValue('expire_month', card.expire_month)
    setValue('expire_year', card.expire_year)
    setValue('name_on_card', card.name_on_card)
  }

  const handleDelete = (card) => {
    dispatch(deleteCardAction(card.id))
  }

  return (
    <div className="flex flex-col border-2 border-blue-100 rounded-lg p-4 gap-4 tracking-wider">
      <div className="flex justify-between">
        <h2 className="font-semibold">Credit Cards</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div
          onClick={handleNewCard}
          className="basis-1/2 border-2 border-blue-300 hover:border-blue-400 rounded-lg flex flex-col justify-center items-center py-12 cursor-pointer"
        >
          <FontAwesomeIcon icon={faPlus} size="2xl" className="text-blue-400" />
          <p className="text-lg font-semibold">Add new card</p>
        </div>
        {cart.map((c, i) => {
          const isSelected = selectedCardId == c.id ? true : false
          return (
            <div
              onClick={() => {
                setSelectedCardId(c.id)
              }}
              key={i}
              className={`${
                isSelected ? 'bg-blue-50 border-blue-400' : 'bg-white'
              } basis-1/2 border-2 rounded-lg p-4 flex flex-col gap-3 tracking-normal cursor-pointer`}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-lg">{c.name_on_card}</h1>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    onClick={() => {
                      handleEdit(c, c.id, c.user_id)
                    }}
                    icon={faPencil}
                    className="text-blue-300 hover:text-blue-500"
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      handleDelete(c)
                    }}
                    className="text-red-300 hover:text-red-500"
                    icon={faTrash}
                  />{' '}
                </div>
              </div>
              <div>
                <FontAwesomeIcon
                  size="2x"
                  className="text-[#0079C1]"
                  icon={faPaypal}
                />
              </div>
              <div className="text-right ">{c.card_no}</div>
              <div className="text-right ">
                {c.expire_month}/{c.expire_year}
              </div>
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
              {isEditing.isEditing ? 'Update card' : 'Add new card'}
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-4"
            >
              <div>
                <label htmlFor="card_no">Card No</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setValue('card_no', e.target.value)
                  }}
                  {...register('card_no')}
                  placeholder="Card No"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="expire_month">Expire Month</label>
                <input
                  type="text"
                  {...register('expire_month')}
                  placeholder="Expire Month"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="expire_year">Expire Year</label>
                <input
                  type="text"
                  {...register('expire_year')}
                  placeholder="Expire Year"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="name_on_card">Name On Card</label>
                <input
                  type="text"
                  {...register('name_on_card')}
                  placeholder="Name On Card"
                  className="input-field"
                />
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

export default Payment
