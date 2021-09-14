// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
        products.forEach((product, i) => {
            product.prodId = i+1;    
        })
        function isId(prod) {
            return prod.prodId === id;
          }
        //console.log(products.find(isId));

    // 2. Add found product to the cartList array
        cartList.push(products.find(isId))
        console.log(cartList);
        // console.log(cartList.type);
        calculateSubtotals();
        calculateTotal();
}

// Exercise 2
function cleanCart() {
    cartList = []
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
        subtotal.grocery.value = 0;
        subtotal.clothes.value = 0;
        subtotal.beauty.value = 0;

        console.log(cartList.length)
     for(i = 0; i < cartList.length; i++){
        // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        if(cartList[i].type === 'grocery'){
            subtotal.grocery.value += cartList[i].price;
            
             console.log("subtotalGrocery", subtotal.grocery.value);

        }else if(cartList[i].type === 'clothes'){
            subtotal.clothes.value += cartList[i].price;

            console.log("subtotalClothes", subtotal.clothes.value);

        }else if(cartList[i].type === 'beauty'){
            subtotal.beauty.value += cartList[i].price;

            console.log("subtotalBeauty", subtotal.beauty.value);

        }else{
            return
        }
    }
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0;
    for(let productType in subtotal){
        
            total += Object.values(subtotal[productType]).reduce((t, n) => t + n);
            console.log("productValue: ", subtotal[productType]);

    }
    console.log("Total: ", total);

}

// Exercise 5
function applyPromotionsSubtotals() {

}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}