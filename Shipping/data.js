const productId = [
    {
        "ID" : 123,
        "Name" : "Naruto Resin",
        "Value" : "400SGD",
    }
]
function displayProducts (productId) {
    console.log ("Your Items");
    console.log ();
    for (let p of productId) {
        console.log("ID :", p.ID);
        console.log("Name :", p.Name);
        console.log("Value :", p.Value);
    }
}
displayProducts(productId); 