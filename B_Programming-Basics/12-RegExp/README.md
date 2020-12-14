# A Basic Regex Cheat Sheet

Fortunately, (or Unfortunately depending on your preference), the trick to learning regular expressions is merely just memorizing the common character symbols and groupings.

I’ve included a reference guide below. If you’re serious about understanding regex, when you have some time I encourage you to take 20 minutes and memorize the table below.

## Symbols

- **.** — (period) Matches any single character, except for line breaks.
- **\*** — Matches the preceding expression 0 or more times.
- **+** — Matches the preceding expression 1 or more times.
- **?** — Preceding expression is optional (Matches 0 or 1 times).
- **^** — Matches the beginning of the string.
- **$** — Matches the end of the string.

## Character groups

- **\d** — Matches any single digit character.
- **\w** — Matches any word character (alphanumeric & underscore).
- **[XYZ]** — Character Set: Matches any single character from the character within the brackets. You can also do a range such as **[A-Z]**
- **[XYZ]+** — Matches one or more of any of the characters in the set.
- **[^a-z]** — Inside a character set, the ^ is used for negation. In this example, match anything that is NOT an uppercase letter.

## Flags:

- There are five optional flags. They can be used separately or together and are placed after the closing slash. Example: `/[A-Z]/**g**` I’ll only be introducing 2 here.
- **g** — Global search
- **i** — case insensitive search

## Advanced

- **(x)** — Capturing Parenthesis: Matches x and remembers it so we can use it later.
- **(?:x)** — Non-capturing Parenthesis: Matches x and does not remembers it.
- **x(?=y)** — Lookahead: Matches x only if it is followed by y.

# More Advanced Regex Examples

Before we jump into a project, lets explore some of the concepts and keys mentioned above.

First, we’ll test a string for any numeric digits. To accomplish this we can use `\d`. Take a look at the below code. It will return `true` as long as there is at least one numeric digit in the test string.

console.log(/**\d**/.test('12-34'));  
// true

As you can see, we have four numeric digits, so our code will return `true`.

Awesome! But what if we want to match the format of our test string? We can use multiple `\d` characters. For example, to match `11`, we would simply use `\d\d`, which represents any two numbers consecutively. Take a look at the below code:

console.log(/**\d-\d-\d-\d/**.test('1-2-3-4'));  
// trueconsole.log(/**\d-\d-\d-\d/**.test('1-23-4'));  
// false

You can see we are testing for any sequence of numbers with dashes between them. Our first test passes as that’s what our test string contains. Our second test fails.

But what happens if we don’t care how may digits are before or after our dashes so long as there is at least one? We can use the `+` to match the `\d` one or more times. Here it is in action:

console.log(/**\d+**-**\d+**/.test('12-34'));  
// trueconsole.log(/**\d+**-**\d+**/.test('1-234'));  
// trueconsole.log(/**\d+**-**\d+/**.test('-34'));  
// false

To simplify things, we can use parenthesis to group expressions together. Lets say we have a cat meowing and we want to match against that meow:

console.log(/me+(ow)+w/.test('meeeeowowoww'));  
// true

Woah. OK. Lets break that down. There’s a lot going on up here.

/me+(ow)+w/m => matching a single letter 'm'  
e+ => matching the letter 'e' one or more times  
(ow)+ => matching the letters 'ow' one or more times  
w => matching the letter 'w' once'm' + 'eeee' +'owowow' + 'w'

As you can see above, when operators like `+` are used immediately after parenthesis, they affect the entire contents of those parenthesis.

As a final example we’ll look at the `?` operator. The question mark makes the preceding character optional. Take a look at the code below:

console.log(/cats? says?/i.test('the Cat says meow'));  
// trueconsole.log(/cats? says?/i.test('the Cats say meow'));  
// true

Each test passes. This is because we’ve made the `s`'s in `cat` and `say` optional. You’ll notice I also added an `i` to the end of our regex. This is called a flag and makes our search ignore case. That’s why `cat` will still match with `Cat`!

# Important Considerations:

Regular expressions are wrapped in slashes. They also make use of other various characters like `+`, `?`, etc. If you ever want to search for these characters, you need to escape them with a backslash. Here’s how that would look:

var slash = /**\/**/;  
var qmark = /**\?**/;

As an additional aside, it’s important to know that you can sometimes use multiple character sets to match the same thing. Here are two examples:

- `\d` is the same as `[0-9]`: Each will match any number (digit)
- `\w` is the same as `[A-Za-z0-9_]`: Each will match any single **alphanumeric** character or **underscore**
