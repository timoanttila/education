import {defineStore} from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		cart: {quantity: 0, totalProducts: 0, products: []},
		products: []
	}),
	getters: {
		getCart() {
			return this.cart
		},
		getProducts() {
			return this.products
		}
	},
	actions: {
		resetCart() {
			this.cart = {quantity: 0, totalProducts: 0, products: []}
			localStorage.setItem('cart', '')
		},
		setProducts(products) {
			this.products = products
		},
		updateCart(newCart) {
			let totalProducts = 0
			let quantity = 0

			for (const product of newCart.products) {
				totalProducts += Number(product.total)
				quantity += Number(product.quantity)
			}

			const countVat = (value) => {
				return (24 / 100) * value
			}

			let total = totalProducts
			let totalProductVat = countVat(totalProducts)
			let vat = totalProductVat

			if (newCart.shipping) {
				total += newCart.shipping.price
				vat += countVat(totalProducts)
			}

			const cartData = {
				...newCart,
				totalProducts,
				totalProductVat,
				total,
				vat,
				quantity,
				updated: new Date()
			}

			localStorage.setItem('cart', JSON.stringify(cartData))
			this.cart = cartData
		},
		productAdd(newProduct) {
			const oldCart = this.cart ?? {}
			const products = oldCart.products ?? []
			const newCart = {...oldCart, products: [...products, newProduct]}
			this.updateCart(newCart)
		},
		productQuantity(key, value) {
			const oldCart = this.cart
			const products = oldCart.products

			if (!products[key] || !value || value <= 0) {
				products.splice(key, 1)
			} else {
				const price = products[key].priceUsed ?? products[key].price
				products[key].quantity = value
				products[key].total = price * value
			}

			const newCart = {...oldCart, products}
			this.updateCart(newCart)
		}
	}
})
