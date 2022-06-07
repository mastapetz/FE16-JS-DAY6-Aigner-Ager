/**
 * JavaScricpt Shopping Cart
 */
var products = [{
    name: "Roses",
    image: "img/roses.jpg",
    price: 19.99,
    qtty: 1
}, {
    name: "Tulps",
    image: "img/tulps.jpg",
    price: 17.99,
    qtty: 1
}, {
    name: "Violets",
    image: "img/violets.jpg",
    price: 18.99,
    qtty: 1
}];

for (let val of products) {
    document.getElementsByClassName("products")[0].innerHTML += `<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
    <p class="product-title h3 m-3">${val.name}</p>
    <img class="product-image" src="${val.image}" width="200" height="200">
    <div class="product-details">
        <p class="product-price h4 m-3">${val.price} €</p>
        <button class="btn btn-success product-button" type="button">ADD TO CART</button>
    </div>
    </div>
    `
}

var cart = []

function addToCart(product) {
    let item = cart.find((val) => val.name == product.name)
    if (item) {
        item.qtty++
    } else {
        cart.push(product)
    }
    createRows()
    Total()
}


let btns = document.getElementsByClassName("product-button")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        addToCart(products[i])
    })
}

function createRows() {
    var result = ""

    for (let val of cart) {
        result += `
    <div class="cart-row row d-flex">
        <div class="cart-item col-6 my-3 ">
            <img class="cart-item-image" src="${val.image}" width="100" height="100">
            <span class="cart-item-title h5 ">${val.name}</span>
        </div>
        
        <span class="cart-price col-3 h4 my-3">${val.price} €</span>
       
        <div class="cart-qtty-action col-3 d-flex">            
            <i class="minus fa fa-minus-circle my-auto" ></i>            
            <div class="cart-quantity p-4 h4">${val.qtty}</div>            
            <i class="plus fa fa-plus-circle my-auto"></i>         
            <button class="del btn btn-danger rounded-circle  my-auto ms-3 fw-bold" type="button"> X </button>            
        </div>
    </div>
    `;
    }
    document.getElementById("cart-items").innerHTML = result

    let plus = document.getElementsByClassName("plus")
    let minus = document.getElementsByClassName("minus")
    let del = document.getElementsByClassName("del")

    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", function () {
            plusQtty(i)
            Total()
            totalCartItems()
        });
        minus[i].addEventListener("click", function () {
            minusQtty(i)
            Total()
            totalCartItems()
        });
        del[i].addEventListener("click", function () {
            deleteItem(i)
            Total()
            totalCartItems()
        });
    }
    totalCartItems()
}

function Total() {
    let total = 0;
    for (let val of cart) {
        total = total + (val.price * val.qtty);
        if (total > 100) {
            discount = total * 0.9
            document.getElementById("discount").innerHTML = `
                <strong class="cart-discount-title">Discount</strong>
                <span id="discount" class="cart-total-price h4">-10%</span><br>
                <strong class="cart-new-total-title">New total</strong>
                <span id="new-total" class="cart-new-total-price h4">${discount.toFixed(2)}€</span><br>
            `
        } else {
            document.getElementById("discount").innerHTML = ""
        }

    }
    document.getElementById("price").innerHTML = total.toFixed(2) + " €"

}

function plusQtty(i) {
    cart[i].qtty++
    document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty
}

function minusQtty(i) {
    if (cart[i].qtty == 1) {
        cart.splice(i, 1)
        createRows()
    } else {
        cart[i].qtty -= 1
        document.getElementsByClassName("cart-quantity")[i].innerHTML = cart[i].qtty
    }
}

function deleteItem(i) {
    cart[i].qtty = 1
    cart.splice(i, 1)
    createRows()
}

function totalCartItems() {
    let cartItems = 0
    for (let con of cart) {
        cartItems = cartItems + con.qtty
    }
    document.getElementById("total-items").innerHTML =
        `<span id="total-items" class="cart-total-items">Total items: </span>
        <strong class="cart-total-items">${cartItems}</strong>`
}
totalCartItems()