---
title: Presenting - JavaScript for loop
theme: "league"
---

<!-- .slide: data-background="./assets/background10.jpg" -->

# JavaScript for loop

#### In this lesson, we will learn about the loops and about for loops in JavaScript with the help of examples.

---

## Loops and iteration:

- Loops offer a quick and easy way to do something repeatedly.
  In programming, loops are used to repeat a block of code.

- For example, if you want to show a message 100 times, then you can use a loop. It's just a simple example; you can achieve much more with loops.

This lesson focuses on JavaScript `'for'` loop. We will learn about the other type of loops in the upcoming sessions.

<!-- .element: class="fragment" -->

---

## JavaScript for loop:

> The syntax of the ' for ' loop is:

```
for(initialExpression; condition; updateExpression) {
    // for loop body
}
```

<!-- .element: class="fragment" -->

---

- The **initialExpression** initializes and/or declares variables and executes only once.

```
(let i = 0; -- ; -- )
```

---

- The **condition** is evaluated.

  - If the condition is `false`, the `for` loop is terminated.
  - if the condition is `true`, the block of code inside of the `for` loop is executed.

```
(let i = 0; i < 10 ; -- )
```

---

- The **updateExpression** updates the value of **initialExpression** while the condition is `true`.
- The **condition** is evaluated again.This process continues until the condition is `false`.

```
(let i = 0; i < 10 ; i = i +1 )
```

_To learn more about the **conditions**, visit [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)._

---

    				Flowchart of JavaScript for loop

<img alt="Working of for loop in JavaScript with flowchart" src="//cdn.programiz.com/sites/tutorial2program/files/javascript-for-loop.png" title="Working of for loop in JavaScript" width="480">
<!-- .element: class="fragment" -->

---

## Example 1: Display a Text Five Times:

```
// program to display text 5 times
let n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}
```

[**Check the code here**](https://codepen.io/Safwan-DCI/pen/gOMaEGm)

> **Output**

```javascript
    I love JavaScript.
    I love JavaScript.
    I love JavaScript.
    I love JavaScript.
    I love JavaScript.
```

 <!-- .element: class="fragment" -->

---

 <table border="0">
		<tbody>
			<tr>
				<th>Iteration</th>
				<th>Variable</th>
				<th>Condition: i &lt;= n</th>
				<th>Action</th>
			</tr>
      <tr>
				<td>1st</td>
				<td><code>i = 1</code><br><code>n = 5</code></td>
				<td><code>true</code></td>
				<td><samp>I love JavaScript.</samp> is printed.<br><var>i</var> is increased to <strong>2</strong>.</td>
			</tr> <!-- .element: class="fragment" -->
      	</tbody>
	</table>

---

 <table border="0">
		<tbody>
			<tr>
				<th>Iteration</th>
				<th>Variable</th>
				<th>Condition: i &lt;= n</th>
				<th>Action</th>
			</tr>
      <tr>
				<td>2nd</td>
				<td><code>i = 2</code><br><code>n = 5</code></td>
				<td><code>true</code></td>
				<td><samp>I love JavaScript.</samp> is printed.<br><var>i</var> is increased to <strong>3</strong>.</td>
			</tr> <!-- .element: class="fragment" -->
      	</tbody>
	</table>

---

 <table border="0">
		<tbody>
			<tr>
				<th>Iteration</th>
				<th>Variable</th>
				<th>Condition: i &lt;= n</th>
				<th>Action</th>
			</tr>
     <tr>
				<td>3rd</td>
				<td><code>i = 3</code><br><code>n = 5</code></td>
				<td><code>true</code></td>
				<td><samp>I love JavaScript.</samp> is printed.<br><var>i</var> is increased to <strong>4</strong>.</td>
			</tr> <!-- .element: class="fragment" -->
      	</tbody>
	</table>

---

 <table border="0">
		<tbody>
			<tr>
				<th>Iteration</th>
				<th>Variable</th>
				<th>Condition: i &lt;= n</th>
				<th>Action</th>
			</tr>
    <tr>
				<td>4th</td>
				<td><code>i = 4</code><br><code>n = 5</code></td>
				<td><code>true</code></td>
				<td><samp>I love JavaScript.</samp> is printed.<br><var>i</var> is increased to <strong>5</strong>.</td>
			</tr> <!-- .element: class="fragment" -->
      	</tbody>
	</table>

---

 <table border="0">
		<tbody>
			<tr>
				<th>Iteration</th>
				<th>Variable</th>
				<th>Condition: i &lt;= n</th>
				<th>Action</th>
			</tr>
   <tr>
				<td>5th</td>
				<td><code>i = 5</code><br><code>n = 5</code></td>
				<td><code>true</code></td>
				<td><samp>I love JavaScript.</samp> is printed.<br><var>i</var> is increased to <strong>6</strong>.</td>
			</tr> <!-- .element: class="fragment" -->
      	</tbody>
	</table>

---

 <table border="0">
		<tbody>
			<tr>
				<th>Iteration</th>
				<th>Variable</th>
				<th>Condition: i &lt;= n</th>
				<th>Action</th>
			</tr>
 <tr>
				<td>6th</td>
				<td><code>i = 6</code><br><code>n = 5</code></td>
				<td><code>false</code></td>
				<td>The loop is terminated.</td>
			</tr> <!-- .element: class="fragment" -->
      	</tbody>
	</table>

---

## Example 2: Display numbers from 1 to 5:

```
// program to display numbers from 1 to 5
let n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}
```

[**Check the code here**](https://codepen.io/Safwan-DCI/pen/xxOwBJb)

> **Output**

```
  1
  2
  3
  4
  5
```

 <!-- .element: class="fragment" -->

---

<table border="0">
        <tbody>
            <tr>
                <th>Iteration</th>
                <th>Variable</th>
                <th>Condition: i &lt;= n</th>
                <th>Action</th>
            </tr>
             <tr>
                <td>1st</td>
                <td><code>i = 1</code><br><code>n = 5</code></td>
                <td><code>true</code></td>
                <td><samp>1</samp> is printed.<br><var>i</var> is increased to <strong>2</strong>.</td>
            </tr><!-- .element: class="fragment" -->
            </tbody>
    </table>
---
<table border="0">
        <tbody>
            <tr>
                <th>Iteration</th>
                <th>Variable</th>
                <th>Condition: i &lt;= n</th>
                <th>Action</th>
            </tr>
           <tr>
                <td>2nd</td>
                <td><code>i = 2</code><br><code>n = 5</code></td>
                <td><code>true</code></td>
                <td><samp>2</samp> is printed.<br><var>i</var> is increased to <strong>3</strong>.</td>
            </tr><!-- .element: class="fragment" -->
            </tbody>
    </table>
---
<table border="0">
        <tbody>
            <tr>
                <th>Iteration</th>
                <th>Variable</th>
                <th>Condition: i &lt;= n</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>3rd</td>
                <td><code>i = 3</code><br><code>n = 5</code></td>
                <td><code>true</code></td>
                <td><samp>3</samp> is printed.<br><var>i</var> is increased to <strong>4</strong>.</td>
            </tr><!-- .element: class="fragment" -->
            </tbody>
    </table>
---
<table border="0">
        <tbody>
            <tr>
                <th>Iteration</th>
                <th>Variable</th>
                <th>Condition: i &lt;= n</th>
                <th>Action</th>
            </tr>
         <tr>
                <td>4th</td>
                <td><code>i = 4</code><br><code>n = 5</code></td>
                <td><code>true</code></td>
                <td><samp>4</samp> is printed.<br><var>i</var> is increased to <strong>5</strong>.</td>
            </tr><!-- .element: class="fragment" -->
            </tbody>
    </table>
---
<table border="0">
        <tbody>
            <tr>
                <th>Iteration</th>
                <th>Variable</th>
                <th>Condition: i &lt;= n</th>
                <th>Action</th>
            </tr>
         <tr>
                <td>5th</td>
                <td><code>i = 5</code><br><code>n = 5</code></td>
                <td><code>true</code></td>
                <td><samp>5</samp> is printed.<br><var>i</var> is increased to <strong>6</strong>.</td>
            </tr><!-- .element: class="fragment" -->
            </tbody>
    </table>
---
<table border="0">
        <tbody>
            <tr>
                <th>Iteration</th>
                <th>Variable</th>
                <th>Condition: i &lt;= n</th>
                <th>Action</th>
            </tr>
      <tr>
                <td>6th</td>
                <td><code>i = 6</code><br><code>n = 5</code></td>
                <td><code>false</code></td>
                <td>The loop is terminated.</td>
            </tr><!-- .element: class="fragment" -->
            </tbody>
    </table>
---
## Example 3: Display Sum of n Natural Numbers

```
// program to display the sum of natural numbers
let sum = 0;
let n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);
```

[**Check the code here**](https://codepen.io/Safwan-DCI/pen/XWKmGQr)

> **Output**

```
 sum: 5050
```

 <!-- .element: class="fragment" -->

---

> Here, the value of sum is **0** initially. Then, a `for` loop is iterated from `i = 1 to 100`. In each iteration, i is added to sum and its value is increased by **1**.

<!-- .element: class="fragment" -->

> When i becomes **101**, the test condition is `false` and sum will be equal to `0 + 1 + 2 + ... + 100`.

<!-- .element: class="fragment" -->

---

The above program to add sum of natural numbers can also be written as

```
// program to display the sum of n natural numbers
let sum = 0;
let n = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = n; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:',sum);
```

---

> This program also gives the same output as the **Example 3**. You can accomplish the same task in many different ways in programming; programming is all about logic.

> Although both ways are correct, you should try to make your code more readable.

---

### JavaScript Infinite for loop

If the test condition in a `for` loop is always `true`, it runs forever (until memory is full). For example,

```
// infinite for loop
for(let i = 1; i > 0; i++) {
    // block of code
}
```

In the above programs, the condition is always `true` which will then run the code for infinite times.

---

<!-- .element: class="fragment" -->

# THE END

<!-- .slide: data-background="./assets/background1.jpg"  -->
