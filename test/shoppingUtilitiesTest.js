import { assert } from "chai"
import { calculateShoppingCart, createSets}  from '../shoppingUtilities.js'

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

    it('2 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 15.2)
    })

    it('3 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1,
            'book3': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 21.6)
    })

    it('4 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1,
            'book3': 1,
            'book4': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 25.6)
    })

    it('5 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1,
            'book3': 1,
            'book4': 1,
            'book5': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 30)
    })

    it('2 same books', function () {
        var cart = {
            'book1': 2
        }

        assert.strictEqual(calculateShoppingCart(cart), 16)
    })

    it('3 same books', function () {
        var cart = {
            'book1': 3
        }

        assert.strictEqual(calculateShoppingCart(cart), 24)
    })

    it('2 same books and 1 different book', function () {
        var cart = {
            'book1': 2,
            'book2': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 23.2)
    })

    it('2 same books and 2 different books', function () {
        var cart = {
            'book1': 2,
            'book2': 1,
            'book3': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 29.6)
    })

    it('2 same books and 3 different books', function () {
        var cart = {
            'book1': 2,
            'book2': 1,
            'book3': 1,
            'book4': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 33.6)
    })

    it('2 same books and 4 different books', function () {
        var cart = {
            'book1': 2,
            'book2': 1,
            'book3': 1,
            'book4': 1,
            'book5': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 38)
    })

    it('2 book1, 2 book2, 1 book3, 1 book4, 1 book5', function () {
        var cart = {
            'book1': 2,
            'book2': 2 ,
            'book3': 1,
            'book4': 1,
            'book5': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 45.2)
    })

    it('2 book1, 2 book2, 2 book3, 1 book4, 1 book5', function () {
        var cart = {
            'book1': 2,
            'book2': 2 ,
            'book3': 2,
            'book4': 1,
            'book5': 1
        }

        assert.strictEqual(calculateShoppingCart(cart), 51.6)
    })

    it('2 book1, 2 book2, 2 book3, 2 book4, 2 book5', function () {
        var cart = {
            'book1': 2,
            'book2': 2 ,
            'book3': 2,
            'book4': 2,
            'book5': 2
        }

        assert.strictEqual(calculateShoppingCart(cart), 60)
    })

    it('3 book1, 3 book2, 2 book3, 2 book4, 2 book5', function () {
        var cart = {
            'book1': 3,
            'book2': 3 ,
            'book3': 2,
            'book4': 2,
            'book5': 2
        }

        assert.strictEqual(calculateShoppingCart(cart), 75.2)
    })

    it('3 book1, 3 book2, 2 book3, 2 book4, 3 book5', function () {
        var cart = {
            'book1': 3,
            'book2': 3 ,
            'book3': 2,
            'book4': 2,
            'book5': 3
        }

        assert.strictEqual(calculateShoppingCart(cart), 81.6)
    })

    
})

describe('createSets', function () {
    it('check that it returns an array', function () {
        assert.isArray(createSets())
    })

    it('1 book', function () {
        var cart = {
            'book1': 1
        }

        assert.deepEqual(createSets(cart), [1])
    })

    it('2 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1
        }

        assert.deepEqual(createSets(cart), [2])
    })

    it('3 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1,
            'book3': 1
        }

        assert.deepEqual(createSets(cart), [3])
    })

    it('4 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1,
            'book3': 1,
            'book4': 1
        }

        assert.deepEqual(createSets(cart), [4])
    })

    it('5 different books', function () {
        var cart = {
            'book1': 1,
            'book2': 1,
            'book3': 1,
            'book4': 1,
            'book5': 1
        }

        assert.deepEqual(createSets(cart), [5])
    })
    
    it('2 same books', function () {
        var cart = {
            'book1': 2
        }

        assert.deepEqual(createSets(cart), [1, 1])
    })

    it('3 same books', function () {
        var cart = {
            'book1': 3
        }

        assert.deepEqual(createSets(cart), [1, 1, 1])
    })

    it('2 same books and 1 different book', function () {
        var cart = {
            'book1': 2,
            'book2': 1
        }

        assert.deepEqual(createSets(cart), [2, 1])
    })

    it('2 same books and 2 different books', function () {
        var cart = {
            'book1': 2,
            'book2': 1,
            'book3': 1
        }

        assert.deepEqual(createSets(cart), [3, 1])
    })

    it('2 same books and 3 different books', function () {
        var cart = {
            'book1': 2,
            'book2': 1,
            'book3': 1,
            'book4': 1
        }

        assert.deepEqual(createSets(cart), [4, 1])
    })

    it('2 same books and 4 different books', function () {
        var cart = {
            'book1': 2,
            'book2': 1,
            'book3': 1,
            'book4': 1,
            'book5': 1
        }

        assert.deepEqual(createSets(cart), [5, 1])
    })

    it('2 book1, 2 book2, 1 book3, 1 book4, 1 book5', function () {
        var cart = {
            'book1': 2,
            'book2': 2 ,
            'book3': 1,
            'book4': 1,
            'book5': 1
        }

        assert.deepEqual(createSets(cart), [5, 2])
    })

    it('2 book1, 2 book2, 2 book3, 1 book4, 1 book5', function () {
        var cart = {
            'book1': 2,
            'book2': 2 ,
            'book3': 2,
            'book4': 1,
            'book5': 1
        }

        assert.deepEqual(createSets(cart), [5, 3])
    })

    it('2 book1, 2 book2, 2 book3, 2 book4, 2 book5', function () {
        var cart = {
            'book1': 2,
            'book2': 2 ,
            'book3': 2,
            'book4': 2,
            'book5': 2
        }

        assert.deepEqual(createSets(cart), [5, 5])
    })

    it('3 book1, 3 book2, 2 book3, 2 book4, 2 book5', function () {
        var cart = {
            'book1': 3,
            'book2': 3 ,
            'book3': 2,
            'book4': 2,
            'book5': 2
        }

        assert.deepEqual(createSets(cart), [5, 5, 2])
    })

    it('3 book1, 3 book2, 2 book3, 2 book4, 3 book5', function () {
        var cart = {
            'book1': 3,
            'book2': 3 ,
            'book3': 2,
            'book4': 2,
            'book5': 3
        }

        assert.deepEqual(createSets(cart), [5, 5, 3])
    })

})
