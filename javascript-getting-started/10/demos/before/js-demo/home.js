'user strict';

//this forces you to declare your variables, you should normally use this in every module to make sure errors show up on un declared variables

const app = {
    productId: 12435,
    username: "Joe",
    ordernumber: 789
}

// Its good practice to only have one global app product to store any globally needed variables
function showProductId() {
    console.log(app.productId);         
}

showProductId();

//Global Scope
// Too many globalscopes are bad as it pollutes the global scope
 function showProductId2(){
     let productid2 = 12345;
     console.log(productid2);
 }

 showProductId2();