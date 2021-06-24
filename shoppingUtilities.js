const discounts = {
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75
}

const unitPrice = 8

export const createSets = cart => {
    var sets = []

    for (var key in cart) {
        for (var i of Array(cart[key]).keys() ) {
            if (sets[i]) {
                sets[i] += 1
            }
            else {
                sets.push(1)
            }
        }
    }

    return sets
}

export const calculateShoppingCart = cart => {
    var sets = createSets(cart)

    var total = 0

    for (var i of sets) {
        console.log(i)
        var subtotal = i * unitPrice

        if (i > 1) {
            subtotal *= discounts[i]
        }

        total += subtotal

    }

    return total
}
