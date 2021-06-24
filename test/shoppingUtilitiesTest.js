import { assert } from "chai"
import calculateShoppingCart from '../shoppingUtilities.js'

describe('calculateShoppingCart', function () {
    it('check that it returns a number', function () {

        assert.isNumber(calculateShoppingCart())
    })

    it('1 book', function () {
        var cart = {
            'book1': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 8)
    })
})