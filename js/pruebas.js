function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let preCart = cartList.map((obj) => obj);

    const cartWithoutReps = {}

    // for(let i = 0; i < preCart.length; i++){
        // cartWithoutReps[preCart[i].quantity] = cartWithoutReps[preCart[i].quantity] == null ? preCart[i].quantity = 1 : preCart[i].quantity += 1;
        // cartWithoutReps[preCart[i].quantity] = cartWithoutReps[preCart[i].quantity] == !null ? preCart[i].quantity += 1 : preCart[i].quantity = 1;

        // preCart[i].push(cartWithoutReps);
        preCart.forEach((elem) => {cartWithoutReps[elem.quantity] = cartWithoutReps[elem.quantity] == null ?  1 : elem.quantity + 1;
        })
    
    // }


    // const found = cart.some(item => cartList.includes(item));
    // let preCart = JSON.parse(JSON.stringify(cartList));
    //  console.log("item", preCart);
    // cart = [];
    // for (let i = 0; i < preCart.length; i++){
        
    //     if(!preCart[i].quantity){
    //         cartList[i].quantity = 1;
    //         preCart = JSON.parse(JSON.stringify(cartList));
    //     }else if(preCart[i].quantity){
    //         cartList[i].quantity += 1;
    //         preCart = JSON.parse(JSON.stringify(cartList));
             cartSet = new Set(preCart);
             cart = [...cartSet]
    //         preCart = []
    //     }
        console.log("cartWithoutReps: ", preCart);

        console.log("Cart: ", cart);
        console.log("CartList: ", cartList);
    

        // if (!found){
        //     preCart[i].quantity = 1;
        //     cart.push(preCart[i]);
        //     console.log("notfound");
        // } else if(found){
        //     let cartQtty = preCart[i].quantity + 1;

        //     console.log("cartQtty",cartQtty);

        //     preCart[i].quantity = cartQtty;  
        //     console.log("found");
        // }
                //  cartList = []
                 

    // }
    // cartSet = new Set(preCart);
    // // console.log("cartSet", cartSet);
    // cart = [...cartSet]

    // cart = cartList
    //  cartList = cart;
    // for (let i = 0; i < cartList.length; i++){
    // for (let prod in cartList){
    //     for( let prod2 in cart){
    //         console.log("prod", prod, prod2);
        //     if(prod !== prod2){
        // return
        // }
    //     if(cartList[i] !== cart){
    //         cartList[i].quantity = 1;
    //         cart.push(cartList[i]);
    //     }else if(cartList[i].id === cart.id){
    //         // cart.find(e => e === cartList[i]).push(e.quantity++)        = cart.filter((x) => {return x === cartList[i]})
    //         cart.quantity++;

    //     }
    // }

}
