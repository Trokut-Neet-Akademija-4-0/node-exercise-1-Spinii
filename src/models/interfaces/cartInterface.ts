import CartProduct from '../cartProductModel'

interface ICart {
  id: number
  products: CartProduct[]
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

export default ICart
