const calculateShoppingCart = cart => {
    var total = 0

    for (var key in cart) {
        total += cart[key] * 8
    }

    return total
}

export default calculateShoppingCart