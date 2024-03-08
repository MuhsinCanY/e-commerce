import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { addToCartAction } from '../../store/actions/shoppingActions'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const { images, name, price } = product
  const history = useHistory()

  const handleClick = () => {
    history.push({
      pathname: `/${product.category_id}/${product.id}/${product.name}`,
      state: product,
    })
  }
  const handleAddToCart = () => {
    const item = { count: 1, checked: true, product: product }
    dispatch(addToCartAction(item))
  }

  return (
    <div
      // onClick={handleClick}
      className="cursor-pointer flex grow basis-[250px] flex-col gap-3 mb-4 text-center font-[Montserrat] font-bold"
    >
      <div onClick={handleClick} className="flex flex-col">
        <img src={images[0].url} className="object-cover " />
        <h4 className="text-[16px] pt-3">{name}</h4>
        <p>
          <span className="text-[#BDBDBD] mr-2 line-through">
            ${(price + 10).toFixed(2)}
          </span>
          <span className="text-t-4">${price.toFixed(2)}</span>
        </p>
        <div className="flex justify-center gap-2">
          <div className="size-4 bg-t-1 rounded-full"></div>
          <div className="size-4 bg-t-4 rounded-full"></div>
          <div className="size-4 bg-[#E77C40] rounded-full"></div>
          <div className="size-4 bg-t-3 rounded-full"></div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="text-t-1 transform hover:scale-110 transition-transform duration-500"
      >
        <FontAwesomeIcon icon={faCartPlus} size="xl" />
      </button>
    </div>
  )
}
