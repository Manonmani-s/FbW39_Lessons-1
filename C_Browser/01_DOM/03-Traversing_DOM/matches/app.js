


// for ... of used to iterate within an iterable object

// iterable object : keys are numbers : not anything else ("array-like" or "arrays" )

// for more infors : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

//The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false.

//The method comes in handy when we are iterating over elements (like in an array or something) and trying to filter out those that interest us.

//[href$="nein"] : $ select the element with attribute that starts with 'extension or easy 'dot', it also select the element that doesn't start with dot

for (let element of document.body.children) {
    // if (element.matches(".nein")) {
    //     console.log('This Element is a match', element);
    // }

    // if (element.matches("[class='.nein']")) {
    //     console.log('This Element is a match', element);
    // }
    if (element.matches("[class$='nein']")) {
        console.log('This Element is a match', element);
    }
    // if (element.matches("a[href$='nein']")) {
    //     console.log('This Element is a match', element);
    // }
}


let person = ['Peter', 69];


for (let x of person) {
    console.log(x);
}