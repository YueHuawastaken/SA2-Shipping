const typeInText = document.querySelector ("#shippingId");
const outputShippingId = typeInText.value;
displayProducts(productId);
const processBtn = document.querySelector ("#processBtn");
processBtn.addEventListener("click", function () {
    if (outputShippingId == 12345) {
    console.log(displayProducts);
    }
    else  { 
        console.log("Invalid Shipping ID")
    }
})