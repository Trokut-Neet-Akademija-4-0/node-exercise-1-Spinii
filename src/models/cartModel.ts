import ICart from './interfaces/cartInterface'
import ICartProduct from './interfaces/cartProductInterface'

// ova classa nam triba za pracenje stanja kosarice
// a posto se ona dinamicki generira jer nemamo gotov json onda je bolje da kreiramo sa klasom i rijesci new pri exportu
class Cart implements ICart {
  constructor() {
    this.id = 0
    this.products = []
    this.total = 0
    this.discountedTotal = 0
    this.totalProducts = 0
    this.totalQuantity = 0
    this.userId = 0
  }

  products: ICartProduct[]

  id: number

  total: number

  discountedTotal: number

  userId: number

  totalProducts: number

  totalQuantity: number
}

export default new Cart()
