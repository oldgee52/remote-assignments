//利用products.length
function avgWay1(data) {
    let sum = 0;
    for (let i = 0; i < data.products.length; i++) {
        sum += data.products[i].price
    }
    let avg = sum / data.products.length;
    return avg;
}


//利用size
function avgWay2(data) {
    let sum = 0;
    for(let i = 0; i < data.size; i++ ) {
        sum += data.products[i].price
    }
    let avg = sum / data.size;
    return avg;
}


avgWay1({
    size: 3,
    products: [{
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
})



avgWay2({
    size: 3,
    products: [{
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
})