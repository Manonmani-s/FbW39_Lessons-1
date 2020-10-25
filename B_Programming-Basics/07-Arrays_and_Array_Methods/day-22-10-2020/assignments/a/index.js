const products =[];
const prices = [];
const categories = [];

/**
 * please create an input to add product to the product array
 * tip: define the function addProduct()
 * create another input to add prices to the price list array
 * use either Number() or parseInt() to convert the value into number again
 * create another input to add a category into the categories array
 */

 function addProduct(){
     let product = document.getElementById('product').value;
    
     products.push(product);
     console.log(products);
 }

 function addPrice(){
    let price =parseFloat(document.getElementById('price').value) ;
    prices.push(price);
    console.log(priceList);
}

function addCategory(){
    let category = document.getElementById('category').value;
    console.log(category);
    
    categories.push(category);
    console.log(categories);


}

/**
 * create a button to show list of products
 */

function showProducts(){
    let productList = document.getElementById('productList');
    console.log(productList);
    //bonus step : clear the previouse items in the list
    productList.innerHTML =``;
    for(i=0; i<products.length;i++){
      
        productList.innerHTML += `<li>Product-${i+1}: ${products[i]}`;
       /*
       productList.innerHTML =  productList.innerHTML + `<li>Product-${i+1}: ${products[i]}`;
       */
    }
} 

/**
 * create a button to show list of prices
 */


 function showPrices(){
     // step 1 : bring the prices 'ul'
     let priceList = document.getElementById('priceList');
     //bonus step : clear the previouse items in the list
     priceList.innerHTML =``;
     // step 2 : loop through the prices array
     for (let index = 0; index < prices.length; index++) {
        // step 3 : create a list-item 'li' and add it to the 'ul'

        priceList.innerHTML += `<li>${prices[index]}</li>`; 
     }
 }


 /**
 * create a button to show list of categories
 */

 function showCategories(){
     //step 1 : get the categories ul from the html document
     let categoryList = document.getElementById('categoryList');
    //bonus step : clear the previouse items in the list
    categoryList.innerHTML =``;
     //step 2 : loop through categories array 
     for (let index = 0; index < categories.length; index++) {
        

         //step 3 : to create a 'li' for each elemnt in the array categories and add it to the categoryList 'ul'
         categoryList.innerHTML += `<li>${categories[index]}</li>`; 
     }
 }


 //Exercise :
 //create a market array
 let market = [];
 function createMarket(){
     // loop through the products array and for each product push to the market array an object includes property productName : the name is element in index i
  for (let i = 0; i < products.length; i++) {
     
    // inside the  loop :
    market.push({productName :products[i], price: prices[i], category:categories[i]});  
   
  }


  console.log(market);
 }


