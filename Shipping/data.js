// const productId = [
//     {
//         "ID" : 123,
//         "Name" : "Naruto Resin",
//         "Value" : "400SGD",
//     },
//     {  "ID" : 456,
//         "Name" : "Sasuke Resin",
//         "Value" : "500SGD"
//     },
//     {   "ID" : 789,
//          "Name" : "Gojo Resin",
//          "Value" : "600SGD" 
//         },
// ]
function displayProducts (productId) {
    console.log ("Your Items");
    console.log ();
    for (let p of productId) {
        console.log("ID :", p.ID);
        console.log("Name :", p.Name);
        console.log("Value :", p.Value);
    }
}
// displayProducts(productId); 

// function createProduct 