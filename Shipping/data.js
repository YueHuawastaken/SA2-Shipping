// We need 1) JSON BIN ID and the base JSON BIN API URL
const BIN_ID="65ca363edc74654018a3c0fc";
const BASE_JSON_BIN_URL="https://api.jsonbin.io/v3/b";
// not a good idea to embed the master key in data.js
const MASTER_KEY="$2a$10$pkQ6JeXUpcUuukmKgJyuQ.qd9cQ3gYSzeCG3WbAvXv99EwS9KpOie";

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
// function addProduct (productId, ID, Name, Value) {
    // const newParcel = {
    //     "ID" : ID,
    //     "Name" : Name,
    //     "Value" : Value,
    //    }
    //   productId.push(newParcel);
// }
 function createProduct (productId)
 {
    const ID = prompt("Enter the parcel ID : ");
    const Name = prompt ("Enter Product Name :");
    const Value = prompt ("Enter the Value :");
    const newParcel = {
     "ID" : ID,
     "Name" : Name,
     "Value" : Value,
    }
   productId.push(newParcel);
 }

 function editProducts (p, productId) {
    let wantedProduct = null;
 for (let i of productId)
 if (i.id == p.id) {
    wantedProduct = i;
    break;
}
const newName = prompt("Enter Your New Product Name :")
const newValue = prompt("Enter the New Value :")
wantedProduct.Name = newName;
wantedProduct.Value = newValue;
}

 function deleteProducts (p, productId) {
        // we need to find the index of the task that we want in delete in the todos array
        let wantedIndex = null;
        for (let d = 0; d < productId.length; d++) {
            // console.log(productId[d])
            // check if the id of the task that I want to delete
            // matches the id of the task currently indicated by index `i`.
            if (productId[d].ID == p.ID) {
                wantedIndex = d;
            }
        }
        if (wantedIndex != null) {
            // use .splice to delete an element from array
            // parameter 1: where to start deleting (aka which index to start deleting from)
            // parameter2 : how many to delete
            productId.splice(wantedIndex, 1);
        }
 }

 async function loadProductsJSONBIN() {
    const response = await axios.get(`${BASE_JSON_BIN_URL}/${BIN_ID}/latest`);
    console.log(response.data);
    return response.data.record;
}

async function saveProducts(productId) {
    // first parameter: the URL (aka the endpoint)
    // second parameter: new data which will overrwrite the existing one
    // third parameter: header options (stores meta data)
    const response = await axios.put(`${BASE_JSON_BIN_URL}/${BIN_ID}`, productId,{
        'Content-Type':"application/json",  // inform JSON BIN API that we are sending something in JSON format
        'X-Master-Key': MASTER_KEY, // provide the credientals to update the JSON BIN
    })
    return response.data;
}