import CartProduct from '../models/cartProductModel'
import ICart from '../models/interfaces/cartInterface'
import userCart from '../models/cartModel'
import productService from './productService'

class CartService {
  private cart: ICart = userCart

  getCart(): ICart {
    return this.cart
  }

  addProductById(id: number): ICart {
    this.changeProductQuantity(id, 1)
    return this.cart
  }

  deleteProductById(id: number): ICart {
    const indexToDelete = this.getCartProductIndexByProductId(id)

    if (indexToDelete >= 0) this.cart.products.splice(indexToDelete, 1)

    return this.cart
  }

  changeProductQuantity(productId: number, quantityModifier: number): void {
    const product = productService.getProductById(productId)

    if (product !== undefined) {
      const existingCartProduct = this.cart.products.find(
        (CartProduct) => CartProduct.product.id === product.id,
      )
      if (existingCartProduct) {
        if (existingCartProduct.quantity + quantityModifier > 0)
          existingCartProduct.quantity += quantityModifier
        else this.deleteProductById(existingCartProduct.id)
      } else if (quantityModifier > 0)
        this.cart.products.push(
          new CartProduct(
            this.getNextAvailableCartProductId(),
            product,
            quantityModifier,
          ),
        )
    }
  }

  getCartProductByProductId(id: number): CartProduct | undefined {
    return this.cart.products.find(
      (cartProduct) => cartProduct.product.id === id,
    )
  }

  getCartProductIndexByProductId(id: number): number {
    return this.cart.products.findIndex(
      (cartProduct) => cartProduct.product.id === id,
    )
  }

  getNextAvailableCartProductId(): number {
    let greatestId = 0
    this.cart.products.forEach((cartProduct) => {
      greatestId = cartProduct.id > greatestId ? cartProduct.id : greatestId
    })

    return greatestId + 1
  }
}

export default new CartService()