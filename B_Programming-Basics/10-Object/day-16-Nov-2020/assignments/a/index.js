/**
 * please create an arrow function makeUser take two params, name and age
 * return an Object with two props , name and age
 * use the Property shorthand
 * example :
 * makeUser('Bob',32) ---> {name:'Bob', age: 32}
 * makeUser('Franzi',25) ---> {name:'Franzi', age: 25}
 * makeUser('Tim',28) ---> {name:'Tim', age: 28}
 * 
 */

const makeUser = (name, age) => { return { name, age }; } ;

// console.log(makeUser('Bob', 32));
// console.log(makeUser('Franzi', 25));


/**
 * Create arrow function
 * takes two params 
 * array of keys
 * object
 * returns array of kexys that are not in the object
 * 
 * example :
 * checkKeysOf(['name','age','dateOfbirth'], {name:'SomeOne'}) ---> ['age','dateOfbirth']
 * checkKeysOf(['name','age','dateOfbirth'], {}) ---> ['name','age','dateOfbirth']
 * checkKeysOf(['name','age','dateOfbirth'], {name:'la',age:12,dateOfbirth:1.1.1}) ---> []
 */

const checkKeysOf = (keys, object) => {
    
    return keys.filter(key => (!(key in object)));
   
};
// the time I call the function I give values for (['k1','k2'] , {k1:'val1'} )
// checkKeysOf(['name','age','dateOfbirth'], {name:'la',age:12,dateOfbirth:1.1.1})

console.log(checkKeysOf(['name', 'age', 'dateOfbirth'], {}));


/**
 * Thinking Area :
 * Solution 1:    
 * const checkKeysOf = (keys, object) => {
    
    let temp = [];
    for (let i = 0; i < keys.length; i++) {
      
        if (!(keys[i] in object)) {
            temp.push(keys[i]);
       }
        
    }

    return temp;
   
};

* Solution 2 : not perfect , I have extra items in the result !
let keys = ['name', 'age', 'dateOfbirth'];
let object = {name:'Safwan'}

let map1 = keys.map((item,index, array) => {
  if (!(item in object)){
     return array[index]
}else{
   return ''
}
  
});

console.log(map1);
// expected output: Array ["", "age", "dateOfbirth"]
 -- Here we have "" extra in the result !!

 * Solution 3 : use forEach array method ;) 

let keys = ['name', 'age', 'dateOfbirth'];
let object = {name:'Gabor'}

let temp = []

keys.forEach( item => {
  if(!(item in object)){
		temp.push(item)
  }
})

console.log(temp) 
//expected output : Array ["age", "dateOfbirth"]


 */

 /**
  * define an object with 4 properties
  * the key is country code "49"
  * the value is the country "Germany"
  * {.. , "49" : "Germany", ...}
  * 49 : Germany  , 41: Switzerland , 44 : UK ,  1 :USA
  * please make sure that the order will be starting from Germany 
  */

const codesOfCountries = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "UK",
  "+1": "USA",
  
};

for (const key in codesOfCountries) {
  console.log(Number(key) , codesOfCountries[key]);
}

// console.log(codesOfCountries);


/**
 * create arrow function takes one param
 * this param is an object like below:
 * define an object that have some properties 
        'name<string>':salary<number>
 * each property looks like this : 'Safwan':100
 * the function returns a sum <number>  of the salaries
 * 
 * example : 
 * 
 * sumOfSal({'Safwan':'100','Glauber':'1000000'}) --> 1000100
 * 
 */
const sumSalaries = obj => {
  let sum = 0;
  for (let key in obj) {
      sum += obj[key];
  }
  return sum;
};




