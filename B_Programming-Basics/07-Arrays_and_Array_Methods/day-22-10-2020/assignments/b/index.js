const products=[];


/*define a function createProduct() :
 * get the inputs
 * § optional check : if any input value is empty return and show error §
 * else :
 * create object : {
        * name : element(id:'product').value ,
        *price : element(id:'price').value , 
        * category :  element(id:'category').value
 * }
 * the array products.push(object);
*/
 

function createProduct(event){
    event.preventDefault(); 
    let product = document.getElementById('product').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;

    if(product == '' || price == '' || category == ''){
        return console.error('Please fill all the fields');
    }
    let productObject = {
        name:product,
        price:price,
        category:category
    };

    products.push(productObject);
    // console.log(products);
    
}

/**
 * Please define the function showProducts()
 * tip : the object can't show the properties in the browser [object Object]
 * (for loop products[i].name ,products[i].price,products[i].category  );
 */

//  let person={
//      name:'Safwan',
//      job:'Web Developer'
//  }

//  document.write(person);
//  document.write(person.name);
//  document.write(person.job);
function showProducts(){
    console.table(products);
    display.innerHTML += `
    <tr style="border:1px solid black; background-color: lightgray;">
        <th>SN</th>
        <th>Product Name</th>
        <th>Product Price</th>
         <th>Product Category</th>
    </tr>
    `;
    for (let index = 0; index < products.length; index++) {
        display.innerHTML +=`
        <tr style="border:1px solid black; background-color: yellow; color: red">
            <td>${index+1}</td>
            <td>${products[index].name}</td>
            <td>${products[index].price}</td>
             <td>${products[index].category}</td>
        </tr>
        `;
        
    }
}