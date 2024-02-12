
document.addEventListener("DOMContentLoaded", async function(){
    //const filedata = await LoadProducts();
    const productId = await loadProductsJSONBIN();
    //LoadData(filedata,productId);
    console.log(productId);
    const saveBtn = document.querySelector ("#saveButton");
    saveBtn.addEventListener ("click", function () {
   saveProducts (productId);
    })
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
const addButton = document.querySelector ("#addButton");
addButton.addEventListener ("click", function () {
//     const ID = prompt("Enter the parcel ID : ");
//     const Name = prompt ("Enter Product Name :");
//     const Value = prompt ("Enter the Value :");
//     const newParcel = {
//      "ID" : ID,
//      "Name" : Name,
//      "Value" : Value,
//     }
//    productId.push(newParcel);
//    console.log(productId);
    createProduct(productId);
   renderTable (productId);

});
});
// const prompt = require ('prompt-sync') ();
// const addButton = document.querySelector ("#addButton");
// addButton.addEventListener ("click", function () {
    // const ID = prompt("Enter the parcel ID : ");
    // const Name = prompt ("Enter Product Name :");
    // const Value = prompt ("Enter the Value :");
    // const newParcel = {
    //  "ID" : ID,
//      "Name" : Name,
//      "Value" : Value,
//     }
//    productId.push(newParcel);

// });


function renderTable (productId) {
    // console.log(productId);
    const displayItems = document.querySelector ("#displayItems")
displayItems.style.display = "block";
const tableProducts = document.querySelector ("#tablebody")
tableProducts.innerHTML = " ";
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
    editProducts(p, productId);
    renderTable(productId);
})

// select the delete button that is inside the productId
tableRow.querySelector(".delete-button").addEventListener("click", function(){
    // console.log("Delete")
    deleteProducts(p, productId);
    renderTable(productId);

    // function deleteTask(p, productId) {
    //     // we need to find the index of the task that we want in delete in the todos array
    //     let wantedIndex = null;
    //     for (let d = 0; d < p.length; i++) {
    //         // check if the id of the task that I want to delete
    //         // matches the id of the task currently indicated by index `i`.
    //         if (productId == p[d].productId) {
    //             wantedIndex = d;
    //         }
    //     }
    //     if (wantedIndex) {
    //         // use .splice to delete an element from array
    //         // parameter 1: where to start deleting (aka which index to start deleting from)
    //         // parameter2 : how many to delete
    //         todos.splice(wantedIndex, 1);
    //     }
    // }
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
// const addButton = document.querySelector (".addbutton");
// addButton.addEventListener ("click", function ())