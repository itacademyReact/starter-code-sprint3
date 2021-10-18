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
        // console.log(products.find(isId));

    // 2. Add found product to the cartList array
        cartList.push(products.find(isId))
        // console.log(cartList);
        // console.log(cartList.type);
        calculateSubtotals();
        calculateTotal();
        applyPromotionsSubtotals();
        generateCart();
        applyPromotionsCart()
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

     for(i = 0; i < cartList.length; i++){
        // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        if(cartList[i]["type"] === 'grocery'){
            subtotal.grocery.value += cartList[i].price;
            
            //  console.log("subtotalGrocery", subtotal.grocery.value);

        }else if(cartList[i]["type"] === 'clothes'){
            subtotal.clothes.value += cartList[i].price;

            // console.log("subtotalClothes", subtotal.clothes.value);

        }else if(cartList[i]["type"] === 'beauty'){
            subtotal.beauty.value += cartList[i].price;

            // console.log("subtotalBeauty", subtotal.beauty.value);

        }else{
            return
        }
    }
    console.log("subtotalGrocery", subtotal.grocery.value);
    console.log("subtotalClothes", subtotal.clothes.value);
    console.log("subtotalBeauty", subtotal.beauty.value);

}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    total = 0;
    for(let productType in subtotal){
        
            total += Object.values(subtotal[productType]).reduce((t, n) => t + n);
            // console.log("productValue: ", subtotal[productType]);

    }
    // console.log("Total: ", total);

}

// Exercise 5
function applyPromotionsSubtotals() {

    subtotal.grocery.discount= 0;
    subtotal.clothes.discount = 0;
    subtotal.beauty.discount = 0;

    let oilProdNum = 0;
    let mixtureProdNum = 0;

    let oilDiscount = 0;
    let mixtureDiscount = 0;
    for(let i = 0; i < cartList.length; i++){
        if(cartList[i].name === 'cooking oil'){
            oilProdNum++;
        }else if(cartList[i].name === 'Instant cupcake mixture'){
            mixtureProdNum++;
        }
    }

    if(oilProdNum >= 4){
        oilDiscount = (products[0].price - 10) * oilProdNum;
    }
    if(mixtureProdNum >= 11){
        mixtureDiscount = (products[2].price - products[2].price * 2/3) * mixtureProdNum;
    }
    // console.log("Oil discount: ", oilDiscount);
    // console.log("Mixture discount: ", mixtureDiscount);

    // Finalment hauràs d'aplicar la rebaixa als subtotales
    subtotal.grocery.value = subtotal.grocery.value - oilDiscount - mixtureDiscount;

    // i tornar a calcular el total (cridant a la funció de l'exercici 4).
    calculateTotal();
}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    // console.log("cartList", cartList);
            //duplicamos el array de objetos "cartList" en una nueva variable para no modificar el array original ("cartList")
    let preCart = cartList.map((obj) => obj);

            //creamos nueva variable objeto "quantity" para almacenar la nueva propiedad "quantity"
    const quantityValue = {}

            //creamos loop for para iterar dentro del array de "preCart" para ir asignando el nuevo valor de "quantity"
    for(let i = 0; i < preCart.length; i++){

            //usamos un ternario ("condition ? exprIfTrue : exprIfFalse") para asignar a "quantity[preCart[i].name]"(que es  la "quantity"), 
            //el valor "1" si no existe ningun valor ("quantity[preCart[i].name] == null ? 1"), o bien actualizar el valor sumando "+1" (": quantity[preCart[i].name] + 1;")
            //en caso de encontrar un valor
            quantityValue[preCart[i].name] = quantityValue[preCart[i].name] == null ? 1 : quantityValue[preCart[i].name] + 1;
            // console.log("product quantiy", preCart[i].name, quantityValue[preCart[i].name]);
    }
            //combinamos el uso de "Object.keys(quantity)" para acceder al nombre de las propiedades de "quantity", 
            //junto con el ".map(productName => { return { ...preCart.find(obj => obj.name === productName), "quantity": quantity[productName]}})",
            //para crear una copia del array "preCart" ("return { ...preCart"), concretamente del objeto que nos llega de la función onClick ("preCart.find(obj => obj.name === productName)"),
            //eso lo conseguimos con el ".find()", asimilamos el objeto dentro del array ("obj => ") y lo encontramos mediante el nombre del objeto ("obj.name === productName")
            //finalmente le añadimos la propiedad nueva "quantity": a la que asignamos el valor obtenido anteriormente en el loop (""quantity": quantityValue[productName]")
    cart = Object.keys(quantityValue).map(productName => { return { ...preCart.find(obj => obj.name === productName), "quantity": quantityValue[productName]}})

            //añadimos el subtotal(precio) del producto
    for(let i = 0; i < cart.length; i++){
        cart[i].subtotal = cart[i].quantity * cart[i].price;
    }
            //console.logs para pruebas
    // console.log("cartWithoutReps: ", preCart);
    // console.log("Cart: ", cart);
    // console.log("CartList: ", cartList);

    applyPromotionsCart();

}
    

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach((cartProd) => {
        if(cartProd.subtotalWithDiscount === null){
            cartProd.subtotalWithDiscount = 0;
        }else if(cartProd.name === 'cooking oil' && cartProd.quantity > 3){
            cartProd.subtotalWithDiscount = cartProd.quantity * 10;
        }else if(cartProd.name === 'Instant cupcake mixture' && cartProd.quantity >= 10){
            cartProd.subtotalWithDiscount = cartProd.quantity * cartProd.price * 2/3
        }else{
            cartProd.subtotalWithDiscount = cartProd.quantity * cartProd.price
        }
    })
    // console.log("cartWithDiscount: ", cart);


}
// Exercise 8
function addToCart(id) {
    addToCartList(id)
    // 1. Loop for to the array products to get the item to add to cart
            //creamos un loop "forEach" -> "products.forEach((product, i) => {..}" para añadir una propiedad que haga las veces de id("prodId") 
            //a todos nuestros objetos en el array "products", que asimilamos a su número de "index" (que empieza en 0 en vez de 1) al "(id)" que nos llega al pulsar el button
            // -> product.prodId = i + 1;
    products.forEach((product, i) => {
        product.prodId = i + 1;    
    })
            //iniciamos un loop "for" para recorrer el array "products", tomar el producto necesario
    for(i = 0; i < products.length; i++){
            //iniciamos condicional "if" para comprobar si el objeto sobre el que se está iterando el loop ("if(products[i].prodId === id..") coincide con el id del producto seleccionado,
            //y ("&&")(deben cumplirse ambas condiciones), 
            //existe en nuestro array "cart" -> "cart.find(cartObj => {return cartObj.name === products[i].name}) !== products[i])". "obj.find" devuelve 1er obj que cumpla la condición,
            //"cartObj => {return cartObj.name === products[i].name}" usando el ".name" busca un objeto en "cart" que coincida ("===") con el obj iterado ("products[i].name")
        if(products[i].prodId === id && cart.find(cartObj => {return cartObj.name === products[i].name}) !== products[i]){
    // 2. Add found product to the cartList array

            //cumplida la condicion anterior (el producto no existe en nuestro array "cart"), pusheamos el nuevo objeto a "cart" ("cart.push(products[i]);")
            //pusheado el obj, accedemos al obj en "cart" ("cart.find(cartObj => {return cartObj.name === products[i].name})"), añadimos la propiedad (".quantity = 1;"),  
            cart.push(products[i]);
            const cartQuantity = cart.find(cartObj => {return cartObj.name === products[i].name}).quantity = 1;
            const cartPrice = cart.find(cartObj => {return cartObj.name === products[i].name}).price
            cart.find(cartObj => {return cartObj.name === products[i].name}).subtotal = cartQuantity * cartPrice;

            //como en la condición anterior, pero en este caso si encuentra una coincidencia entre obj en "cart" y el obj recibido por "id"  ("=== products[i]" en vez de "!== products[i]")
        }else if(products[i].prodId === id && cart.find(cartObj => {return cartObj.name === products[i].name}) === products[i]){
            //en este caso el obj de "cart" que coincide (" cart.find(cartObj => {return cartObj.name === products[i].name})") y le actualizamos la "quantity" (".quantity += 1;"),
            //y guardaamos el resultado en "const cartQuantity"
            //también guardamos el obj modificado y algunas de sus proiedades ("const cartPrice = cart.find(..)") para trabajar más facilmente con esos valores.
            const objCart = cart.find(cartObj => {return cartObj.name === products[i].name});
            cartQuantity = cart.find(cartObj => {return cartObj.name === products[i].name}).quantity  += 1;
            const cartPrice = cart.find(cartObj => {return cartObj.name === products[i].name}).price;
            const cartName = cart.find(cartObj => {return cartObj.name === products[i].name}).name;
            //usamos las vars creadas anteriormente para calcular con facilidad la propiedad ".subtotal" ("= cartQuantity * cartPrice;") y la añadimos al obj que estamos actualizando en "cart"
            let cartSubttl = cart.find(cartObj => {return cartObj.name === products[i].name}).subtotal = cartQuantity * cartPrice;
            //creamos los condicionales necesarios ("if(cartName === 'cooking oil' && cartQuantity > 3)") ("else if(cartName === 'Instant cupcake mixture' && cartQuantity >= 10)")
            //ayudandonos de las variables creadas para comprovar los requerimientos de producto y quantity de éste para aplicar o no el precio con descuento
            if(cartName === 'cooking oil' && cartQuantity > 3){
                objCart.subtotalWithDiscount = cartQuantity * 10;
            }else if(cartName === 'Instant cupcake mixture' && cartQuantity >= 10){
                objCart.subtotalWithDiscount = cartQuantity * cartPrice * 2 / 3;
            }else{
                objCart.subtotalWithDiscount = cartSubttl;
            }
        }
    }
    //console.log("cart: ", cart);

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