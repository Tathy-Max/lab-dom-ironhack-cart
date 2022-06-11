// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span'); // pq price span?
  const quantity = product.querySelector('.quantity');

  const subTotal = document.getElementById('subtotal');
  
  const subTotalValue = quantity.innerText * price.innerText;
  return subTotal.innerText = subTotalValue;
  //... your code goes here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  
    // var T = document.getElementsByClassName('product');
  
    // var R = document.querySelectorAll('tbody .row')[0];
  
    // var C = R.cloneNode(true);
  
    // T.appendChild(C);

  

  

  //const tr = document.getElementsByClassName('product');

  // const tr = document.createElement("tr");
  // const tdName = document.getElementsByClassName('name');
  // tdName.innerHTML = "NEW CELL1";
  // tdName.innerText = "TV";
  // const tdPrice = document.getElementsByClassName('price');
  // tdPrice.innerHTML = "NEW CELL2";
  // tdPrice.innerText = "$300.00";
  // const tdQuantity = document.getElementsByClassName('quantity');
  // tdQuantity.innerHTML = "NEW CELL3";
  // tdQuantity.setAttribute("type", "0"); //min 0 ??? / input.type = "text";
  // const tdSubtotal = document.getElementsByClassName('subtotal');
  // tdSubtotal.innerHTML = "NEW CELL4";
  // tdSubtotal.innerText = tdQuantity.innerText * tdPrice.innerText;
  // const tdSubtotal = document.getElementsByClassName('subtotal');
  // tdSubtotal.innerHTML = "NEW CELL5";
  // tdSubtotal.innerText = tdQuantity.innerText * tdPrice.innerText;
         
          //<td class="action"><button class="btn btn-remove">Remove</button></td>

  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

