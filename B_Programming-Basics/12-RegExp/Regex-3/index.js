const rexpTest = (re, str) => {
    // return re.test(str);
    if (str.match(re)) {
        return str.match(re);
    }
    return str.match(re);
    //Glauber : alternatively return str.match(re) != null; 
    //retrun true if there is a matches otherwise false 
};

//Brackets [] :
let regex = /saf[wu]an/i; // Must be either w or u
let stri = 'Safwan';

regex = /[Gg]ermany/;
stri = 'germany';

//Whole alphabet :
regex = /^[A-Za-z]+$/;
stri = 'FbW';

// a word strats with Captial
regex = /^[A-Z]+/;
stri = 'Germany';

//write a Regualr Exp. checks that every new line starts with Capital Letter : use flag 'm' :
regex = /^[A-Z]+/gm;
stri = 'Some words \nOther words\nRead it well';

//Braces {} : Quantifiers
stri = 'Hello';
regex = /Hel{2}o/i; // Must occur exactly {m} m times 

//at least occur m times
stri = 'Yaho!!';
regex = /Yaho{2,}!!/i; // [2,∞[

//range of occurences :
regex = /Yaho{2,5}!!/i; // [2,5[

//write a Regualr Exp. checks that every new line starts with number of '-' between 2 to 5 times: use flag 'm' :
regex = /^-{2,5}/gm;
stri = '--Hello Wold\n--Hello FbW39\nHi -- Nils!!';

//Parentheses () - Grouping :

regex = /^([0-9]x){2}$/;
stri = '3x3x';

// Character Classes :
regex = /\w+/; //Word char - alphanumeric or _
regex = /\W+/; //Non Word char - Non alphanumeric or _
regex = /\d+/; // any digit , '+' repeated one or more
regex = /\D+/; // Non digit 
regex = /\s/; // a space char
regex = /\S/; // a non-space 
regex = /Hell\b/i; //Word boundary
stri = 'Hell World';

// Assertions :

regex = /x(?=y)/; // Match only if 'x' followed by  'y'
 regex = /x(?!y)/; // Match only if 'x' NOT followed by  'y'
stri = 'xyz are used for math , x is for the first formula';
    
//Example :
//  regex = /\w/g;
//  stri = '!!h ;';





