# String

The **`String`** object is used to represent and manipulate a sequence of characters.

## Description

Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), to build and concatenate them using the [+ and += string operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/String_Operators), checking for the existence or location of substrings with the [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method, or extracting substrings with the [`substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) method.

## Methods

- **String.length**
  The **`length`** property of a `String` contains the length of the string.

- **String.concat()**
  The **`concat()`** method concatenates the string arguments to the calling string and returns a new string.
  It is **strongly recommended** that the assignment operators (`+`, `+=`) are used instead of the `concat()` method.

- **String.split()**
  The **`split()`** method divides a `String` into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
  **_Example :_**

```javascript
const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
//access the index 3 of the array words
console.log(words[3]); // expected output: "fox"

const chars = str.split("");
//access the index 8 of the array chars
console.log(chars[8]); // expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```

- **String.substring()**
  The **`substring()`** method returns the part of the `string` between the start and end indexes, or to the end of the string.
  **`substring(starting index'included' , end index 'not included)`**

**_Example :_**

```javascript
const str = "Mozilla";

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```

- **String.search()**
  The **`search()`** method executes a search for a match between a `pattern` and this `String`

> **Return value**:
> The index of the first match between the `pattern` and the given string, or `-1` if no match was found.

**_Example :_**

```javascript
let string = "That is nice";
let index = string.search("nice");

console.log(index); // expected output: 8
```

- **String.replace()**
  The **`replace()`** method returns a new string with a match of a `pattern` replaced by a `replacement`. The `pattern` is be a string `, and the `replacement` is a string as well.

> The original string is left unchanged.
> If `pattern` is a string, only the first occurrence will be replaced.

**_Example :_**

```javascript
let String = "That is great nice";
let pattern = "nice";
let replacement = "awesome";
let returnedString = "";

returnedString = String.replace(pattern, replacement);

console.log(String);
// expected output:"That is great nice"
console.log(returnedString);
// expected output: "That is great awesome"
```

- **String.replaceAll()**
  The **`replaceAll()`** method returns a new string with all matches of a `pattern` replaced by a `replacement`. The `pattern` is a string , and the `replacement` is a string as well.

> The original string is left unchanged.
> `.replaceAll` will be available starting on **_Chrome 85_**.
> **Firefox** is on version 78, and since `.replaceAll` has been available **starting version 77**

**_Example :_**

```javascript
let String = "That is nice day, it is nice";
let pattern = "nice";
let replacement = "awesome";
let returnedString = "";

returnedString = String.replaceAll(pattern, replacement);

console.log(String);
// expected output:"That is nice day, it is nice"
console.log(returnedString);
// expected output: "That is awesome day, it is awesome"
```

- **String.includes()**
  The **`includes()`** method determines whether one string may be found within another string, returning `true` or `false` as appropriate.

  **_Example :_**

  ```javascript
  const sentence = "The quick brown fox jumps over the lazy dog.";
  ```

const word = 'fox';

console.log(sentence.includes(word));
// expected output: true

```

```
