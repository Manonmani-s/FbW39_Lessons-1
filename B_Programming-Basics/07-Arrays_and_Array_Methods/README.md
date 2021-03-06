# Array

The **`Array`** is a special variable, which can hold more than one value at a time.

The JavaScript **`Array`** is a special object that is used to store multiple values; each value is associated with auto generated numeric key called **index** starts at **0** .

You access an array element by referring to the **index number**.

```javascript
let element_1 = cars[0];
```

## Properties

- **Array.length** &#9989;

```javascript
const clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// expected output: 4
```

## Methods

## Static methods

`Array.from()`

Creates a new `Array` instance from an array-like or iterable object.

`Array.isArray()`

Returns `true` if the argument is an array, or `false` otherwise.

`Array.of()`

Creates a new `Array` instance with a variable number of arguments, regardless of number or type of the arguments.

## Instance methods

`Array.prototype.concat()`

Returns a new array that is this array joined with other array(s) and/or value(s).

`Array.prototype.copyWithin()`

Copies a sequence of array elements within the array.

`Array.prototype.entries()`

Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array.

`Array.prototype.every()`

Returns `true` if every element in this array satisfies the testing function.

`Array.prototype.fill()`

Fills all the elements of an array from a start index to an end index with a static value.

`Array.prototype.filter()`

Returns a new array containing all elements of the calling array for which the provided filtering function returns `true`.

`Array.prototype.find()`

Returns the found `element` in the array, if some element in the array satisfies the testing function, or `undefined` if not found.

`Array.prototype.findIndex()`

Returns the found index in the array, if an element in the array satisfies the testing function, or `-1` if not found.

`Array.prototype.forEach()` &#9989;

Calls a function for each element in the array.

`Array.prototype.includes()`

Determines whether the array contains a value, returning `true` or `false` as appropriate.

`Array.prototype.indexOf()` &#9989;

Returns the first (least) index of an element within the array equal to an element, or `-1` if none is found.

`Array.prototype.join()` &#9989;

Joins all elements of an array into a string.

`Array.prototype.keys()`

Returns a new `Array Iterator` that contains the keys for each index in the array.

`Array.prototype.lastIndexOf()`

Returns the last (greatest) index of an element within the array equal to an element, or `-1` if none is found.

`Array.prototype.map()`

Returns a new array containing the results of calling a function on every element in this array.

`Array.prototype.pop()` &#9989;

Removes the last element from an array and returns that element.

`Array.prototype.push()` &#9989;

Adds one or more elements to the end of an array, and returns the new `length` of the array.

`Array.prototype.reduce()`

Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

`Array.prototype.reduceRight()`

Apply a function against an accumulator> and each value of the array (from right-to-left) as to reduce it to a single value.

`Array.prototype.reverse()` &#9989;

Reverses the order of the elements of an array _in place_. (First becomes the last, last becomes first.)

`Array.prototype.shift()` &#9989;

Removes the first element from an array and returns that element.

`Array.prototype.slice()`

Extracts a section of the calling array and returns a new array.

`Array.prototype.some()`

Returns `true` if at least one element in this array satisfies the provided testing function.

`Array.prototype.sort()`

Sorts the elements of an array in place and returns the array.

`Array.prototype.splice()` &#9989;

Adds and/or removes elements from an array.

`Array.prototype.toString()`

Returns a string representing the array and its elements.

`Array.prototype.unshift()` &#9989;

Adds one or more elements to the front of an array, and returns the new `length` of the array.

[**Reference for Arrays and Arrays Methods with complete examples**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
