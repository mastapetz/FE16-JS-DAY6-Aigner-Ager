"use strict";
// SVGs
const cartSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>`;
const plusSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>`;
const minusSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>`;
const cancelSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
// other var
const cart = [];
const stock = [
  {
    name: "Tulips",
    image:
      "https://unsplash.com/photos/iVVmEEJbALU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8dHVsaXBzJTIwcmVkfGVufDB8fHx8MTY1NDU5MDQxNA&force=true",
    quantity: 1,
    color: "blue",
    // color: ["red","blue"],
    price: 2.5,
  },
  {
    name: "Roses",
    image:
      "https://unsplash.com/photos/iJY-h1wEMK4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTJ8fHJvc2VzJTIwd2hpdGV8ZW58MHx8fHwxNjU0NTkwNDM5&force=true",
    quantity: 1,
    color: "red",
    // color: ["red","blue", "white", "black"],
    price: 4.5,
  },
  {
    name: "Orchid",
    image:
      "https://unsplash.com/photos/eH5gAM2X2wQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8b3JjaGlkJTIwcHVycGxlfGVufDB8fHx8MTY1NDU5MDQ3OQ&force=true",
    quantity: 1,
    color: "purple",
    // color: ["purple" ,"white"],
    price: 7.5,
  },
  {
    name: "Lillies",
    image:
      "https://unsplash.com/photos/0KLPrQNEnQ4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bGlsbGllc3xlbnwwfHx8fDE2NTQ1MTQ3Mzc&force=true",
    quantity: 1,
    color: "white",
    price: 6.25,
  },
];

for (let kind of stock) {
  document.getElementsByClassName("flower")[0].innerHTML += `
  <div class="flowers col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xsl-3 text-center">
    <p class="flowers-name h2"> ${kind.name} </p>
    <img class="flowers-image  width="200"  height="200"  src="${kind.image}"></img>
    <div class="flowers-details>
        <div class="flowers-colors">Color: ${kind.color}</div>
        <div class="flowers-price">Price: € ${kind.price}  </div>
        <button type="button" class="btn btn-success buy-flower rounded-pill">${cartSvg}</button>
    </div>
  </div>
  `;
}

function addToCart(flower) {
  if (cart.find((val) => flower.name == val.name)) {
    flower.quantity++;
  } else {
    cart.push(flower);
  }
  total();
  createCart();
}
let buttons = document.getElementsByClassName("buy-flower");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    addToCart(stock[i]);
  });
}

function createCart() {
  document.getElementById("cart-items").innerHTML = "";
  for (let val of cart) {
    document.getElementById("cart-items").innerHTML += `
    <div class="row cart-row d-flex">
      <!-- first column-->
      <div class="col col-6 my-3 cart-item">
        <img class="cart-item-image" src="${val.image}"></img>
        <span class="cart-item-title h5">${val.name}</span>
      </div>
      <!-- second column-->
      <span class="col col-3 cart-item-price h4 my-3">${val.price} €</span>
      <!-- first column-->
      <div class="col col-3 cart-quantity-action d-flex">
        
        <button class="minus btn btn-transparent rounded-circle border-dark border-1 my-auto ms-3 fw-bold" type="button"> - </button>
        <div class="cart-quantity p-4 h4">${val.quantity}</div>
        <button class="plus btn btn-transparent border-dark rounded-circle my-auto ms-3 fw-bold" type="button"> + </button>
       

        <button class="del-btn btn btn-danger rounded-circle my-auto ms-3 fw-bold border-1" type="button"> X</button>
      </div>
    </div>
    `;
  }
  let minusButton = document.getElementsByClassName("minus");
  let plusButton = document.getElementsByClassName("plus");
  let cancelButton = document.getElementsByClassName("del-btn");

  for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener("click", function () {
      plusQuant(i);
      total();
    });
    minusButton[i].addEventListener("click", function () {
      minusQuant(i);
      total();
    });
    cancelButton[i].addEventListener("click", function () {
      cancelQuant(i);
      total();
    });
  }
}

function minusQuant(index) {
  if (cart[index].quantity == 1) {
    cart.splice(index, 1);
    createCart();
  } else {
    cart[index].quantity--;
    document.getElementsByClassName("cart-quantity")[index].innerHTML =
      cart[index].quantity;
  }
}

function plusQuant(index) {
  cart[index].quantity++;
  document.getElementsByClassName("cart-quantity")[index].innerHTML =
    cart[index].quantity;
}

function cancelQuant(index) {
  cart[index].quantity = 1; //must be included
  cart.splice(index, 1);
  createCart();
}

function total() {
  let total = 0;
  for (let val of cart) {
    total = total + val.price * val.quantity;
  }
  document.getElementById("cart-price").innerHTML = total + " €";
}
