// Exercise 10
// Move this variable to a json file and load the data in this js
var products = [
  {
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
var cartList = [];
var cart = [];
var subtotal = {
  grocery: {
    value: 0,
    discount: 0,
  },
  beauty: {
    value: 0,
    discount: 0,
  },
  clothes: {
    value: 0,
    discount: 0,
  },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let element;
  for (let i = 1; i <= this.products.length; i++) {
    if (id === i) {
      element = products[i - 1];
    }
  }
  // 2. Add found product to the cartList array
  this.cartList.push(element);
}

// Exercise 2
function cleanCart() {
  this.cartList = [];
}

// Exercise 3
function calculateSubtotals() {
  var subtotals = {
    grocery: 0,
    beauty: 0,
    clothes: 0,
  };
  // 1. Create a for loop on the "cartList" array
  for (let i = 0; i < this.cart.length; i++) {
    var element = this.cart[i];
    switch (element.type) {
      case "grocery":
        // subtotals.grocery += element.price;
        subtotals.grocery += element.subtotal;
        break;
      case "beauty":
        // subtotals.beauty += element.price;
        subtotals.beauty += element.subtotal;
        break;
      default:
        // subtotals.clothes += element.price;
        subtotals.clothes += element.subtotal;
        break;
    }
  }
  // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
  this.subtotal.grocery.value = subtotals.grocery;
  this.subtotal.beauty.value = subtotals.beauty;
  this.subtotal.clothes.value = subtotals.clothes;
}

// Exercise 4
function calculateTotal() {
  this.calculateSubtotals();
  // Calculate total price of the cart either using the "cartList" array
  var total = 0;
  for (const elementByType in this.subtotal) {
    total += this.subtotal[elementByType].value;
  }
  this.total = total;
}

// Exercise 5
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  var cart = [];
  this.cartList.forEach(element => {
      var elementFinded = cart.find(e => e.name === element.name);
      if (!elementFinded) {
        cart.push({
            name: element.name,
            price: element.price,
            type: element.type,
            quantity: 1,
            subtotal: element.price,
            subtotalWithDiscount: 0
        });
      } else {
        elementFinded.quantity += 1;
        elementFinded.subtotal += element.price;
      }
  });
}

// Exercise 6
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  this.cart.forEach(element => {
    if (element.name === 'cooking oil' && element.quantity >= 3) {
      element.subtotalWithDiscount = 10;
    } else if (element.name === 'Instant cupcake mixture' && element.quantity >= 10) {
      element.subtotalWithDiscount = element.price - (element.price * 2/3);
    }
  });
}

// Exercise 7
function addToCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let element;
  for (let i = 1; i <= this.products.length; i++) {
    if (id === i) {
      element = products[i - 1];
    }
  }
  // 2. Add found product to the cart array
  var elementFinded = this.cart.find(e => e.name === element.name);
  if (!elementFinded) {
    this.cart.push({
        name: element.name,
        price: element.price,
        type: element.type,
        quantity: 1,
        subtotal: element.price,
        subtotalWithDiscount: 0
    });
  } else {
    elementFinded.quantity += 1;
    elementFinded.subtotal += element.price;
  }
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let element;
  for (let i = 1; i <= this.products.length; i++) {
    if (id === i) {
      element = products[i - 1];
    }
  }
  var elementFinded = this.cart.find(e => e.name === element.name);
  if (elementFinded && elementFinded.quantity > 1) {
    elementFinded.quantity -= 1;
    elementFinded.subtotal -= elementFinded.price;
  } else {
    var elementFindedIndex = this.cart.findIndex(e => e.name === element.name);
    this.cart.splice(elementFindedIndex, 1);
  }
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  if (this.cart.length > 0) {
    document.querySelector('h3.bill').style.display = 'none';
  } else {
    document.querySelector('h3.bill').style.display = 'block';
  }
  var list = document.querySelector('.list');
  list.textContent = '';
  this.cart.forEach(element => {
    let li = document.createElement('li');
    li.classList = ['col-md-3 m-2 list-group-item d-flex justify-content-between align-items-center']
    let span = document.createElement('span');
    span.classList = ['badge badge-primary badge-pill'];
    span.innerHTML = element.quantity;
    li.innerHTML = element.name;
    // let pPrice = document.createElement('p');
    // pPrice.classList = ['price'];
    // pPrice.innerHTML = 'Total: ' + element.subtotal;

    li.appendChild(span);
    // li.appendChild(pPrice);
    list.appendChild(li);
  })
  this.calculateTotal();
  var total = document.querySelector('span.total');
  total.innerHTML = 'Total: ' + this.total;
  // Fill the shopping cart modal manipulating the shopping cart dom
}
