document.addEventListener("DOMContentLoaded", async function(){
    const filedata = await LoadProducts();
    const productId = [];
    LoadData(filedata,productId);
    console.log(productId);

    const processBtn = document.querySelector ("#processBtn");
    processBtn.addEventListener("click", function () {
    const typeInText = document.querySelector ("#shippingId");
    const outputShippingId = typeInText.value;
    if (outputShippingId == 12345) {
    renderTable(productId);
    }
    else  { 
        console.log("Invalid Shipping ID")
    }
})
});


function renderTable (productId) {
    const displayItems = document.querySelector ("#displayItems")
displayItems.style.display = "block";
const tableProducts = document.querySelector ("#tablebody")
for (let p of productId) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${p.ID}</td>
    <td>${p.Name}</td>
    <td>${p.Value}</td>
    <td><button class="btn btn-primary btn-sm edit-button">Edit</button></td>
    <td><button class="btn btn-danger btn-sm delete-button">Delete</button></td>`
    
// select the edit button that is inside the productId
const editButton = tableRow.querySelector(".edit-button");
editButton.addEventListener("click", function(){
    processEditAppointment(p, productId);
})

// select the delete button that is inside the productId
tableRow.querySelector(".delete-button").addEventListener("click", function(){
    processCancelAppointment(p, productId);
})

    tableProducts.appendChild (tableRow)
}
}

async function LoadProducts()
{
    const response = await axios.get("product.json");
    return response.data;
}

function LoadData(filedata,productId) {
    console.log(filedata.products);
     for (let f of filedata.products) {
    productId.push (f)
     }
}