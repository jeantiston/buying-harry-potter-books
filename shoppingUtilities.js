const findPartitions = (n, maxBooksInSet, minSets) => {
    
    let partition = new Array(n);
    let k = 0;
    let sets = []

    partition[k] = n;

    while (true)
    {

        if (k == minSets - 1 && partition[0] <= maxBooksInSet) {
            sets.push(partition.slice(0, k+1))
        }

        let rem_val = 0;

        while (k >= 0 && partition[k] == 1)
        {
            rem_val += partition[k];
            k--;
        }

        if (k < 0)
            break;

        partition[k]--;
        rem_val++;


        while (rem_val > partition[k])
        {
            partition[k + 1] = partition[k];
            rem_val = rem_val - partition[k];
            k++;
        }

        partition[k + 1] = rem_val;
        k++;
    }

    return sets
}

export const createSets = cart => {

    let bookCount = Object.values(cart)

    let minSets = Math.max(...bookCount)
    let totalBooks = bookCount.reduce((total, current) => total + current, 0)

    return findPartitions(totalBooks, bookCount.length, minSets)

}

const discounts = {
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75
}

const unitPrice = 8

export const totalCost = set => {
    return set.reduce( (total, numberOfBooks) => {
        return total + (numberOfBooks * unitPrice * discounts[numberOfBooks])
    }, 0)
}

export const calculateShoppingCart = cart => {
    let sets = createSets(cart)

    let costs = sets.map(set => {
        return totalCost(set)
    })

    return Math.min(...costs)
}
