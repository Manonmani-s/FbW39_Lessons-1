
//Define Events Handlers :

const validateName = () => { 
    const name = document.getElementById('name');
    const re = /^[A-Z][a-zA-Z\s]{1,10}$/;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
};


const validateZipcode = () => {
 const code = document.getElementById('zipcode');
 const re = /^\d{5}$/;
 if (!re.test(code.value)) {
    code.classList.add('is-invalid');
} else {
    code.classList.remove('is-invalid');
    code.classList.add('is-valid');
}
    
};

const validateEmail = () => {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-]+)\.([a-zA-Z]{2,5})$/;
   
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
   } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
   }
       
   };


const validatePassowrd = () => {
    const password = document.getElementById('password');
  //^ is optional , $ is wrong , the order is optional 
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!&%#\?\$\^])(?=.{8,})/;
       
     
    
       
 
   
    if (!re.test(password.value)) {
        password.classList.add('is-invalid');
   } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
   }
       
   };

   const validatePhone = () => {
    const phone = document.getElementById('phone');
  
    // const re = /^[0-9]{10,12}$/;
       const re = /^(\+?\d{2})?\-?(\d{4})\-?(\d{3,})\-?(\d{4,})$/;
    
       
       console.log(phone.value.match(re));
    
       
 
   
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
   } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
   }
       
   };

//Add the Events Listeners :
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('zipcode').addEventListener('blur', validateZipcode);

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('password').addEventListener('blur', validatePassowrd);

document.getElementById('phone').addEventListener('blur', validatePhone);