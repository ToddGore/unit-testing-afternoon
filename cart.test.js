let Cart = require('./cart')
let Cars = require('./data/cars')


// Arrange
// Act
// Assert

describe('Cart Properties', () => {

    test('cart property should be of type "Array" and length should be 0', () => {
        let result = Cart.cart
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(0)

    }),
        test('total property should be of type "number" and not be a string', () => {
            let result = Cart.total
            expect(typeof result).toBe(number)
            expect(result).toBe(0)
        })



})

describe('Cart Methods', () => {

    test('cart length to increase by 1 on each call and the car object to appear at the end of the cart array', () => {
        let result = Cart.addToCart(car)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(0)

    }),
        test("total property to increase by the car object's price on each call", () => {
            let result = Cart.addToCart
            expect(Array.isArray(result)).toBe(true)
            expect(result.length).toBe(0)

        }),
        test("cart length to decrease by 1 on each call and cart array to maintain the order of car objects in the cart array", () => {
            let result = Cart.removeFromCart
            expect(Array.isArray(result)).toBe(true)
            expect(result.length).toBe(0)

        }),
        test("total property to decrease by the car object's price on each call.", () => {
            let result = Cart.removeFromCart(index, price)
            expect(Array.isArray(result)).toBe(true)
            expect(result.length).toBe(0)

        }),
        test("cart length to equal 0 and total property to equal 0", () => {
            let result = Cart.checkout
            expect(Array.isArray(result)).toBe(true)
            expect(result.length).toBe(0)

        })

})