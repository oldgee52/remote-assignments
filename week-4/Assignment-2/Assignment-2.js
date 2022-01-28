function ajax(src, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let datas = JSON.parse(xhr.responseText);
        callback(datas);
    };
    xhr.open('GET', src);
    xhr.send();
}

function render(data) {
    for (let i = 0; i < data.length; i++) {
        const name_div = document.createElement('div');
        const price_div = document.createElement('div');
        const description_div = document.createElement('div');
        const products = document.createElement('div');
        const title = document.getElementById('title')
        name_div.className = "name";
        price_div.className = "price";
        description_div.className = "description";
        products.className = "products";
        let name = document.createTextNode(data[i].name);
        let price = document.createTextNode(data[i].price);
        let description = document.createTextNode(data[i].description);
        name_div.appendChild(name);
        price_div.appendChild(price);
        description_div.appendChild(description);

        products.appendChild(name_div);
        products.appendChild(price_div);
        products.appendChild(description_div);
        title.appendChild(products)
    }
}
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
    function(response) {
        render(response);
    }); // you should get product information in JSON format and render data in the page