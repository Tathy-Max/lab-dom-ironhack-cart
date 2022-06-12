// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  // step 1-2
  const price = product.querySelector('.price span').innerHTML; 
  const quantity = product.querySelector('.quantity input').value;
  
  // step 3
  const subTotalT = price * quantity;

  // step 4
  const subTotal = product.querySelector('.subtotal span'); // pq querySelector ?

  // step 5
  return (subTotal.innerText = subTotalT);
  //... your code goes here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const product = document.getElementsByClassName('.product');
  
  for (var i = 0, row; row = table.rows[i]; i++) {
    updateSubtotal(product);
  }

  // const singleProduct = document.querySelectorAll('.product');
  // updateSubtotal(singleProduct);

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

