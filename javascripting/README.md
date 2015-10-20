# INTRODUCTION
To keep things organized, let's create a folder for this workshop.
Run this command to make a directory called ```javascripting``` (or something else if you like):

```mkdir javascripting```

Change directory into the ```javascripting``` folder:

```cd javascripting```

Create a file named ```introduction.js```:
```touch introduction.js``` or if you're on windows, ```type NUL > introduction.js```
Open the file in your favorite editor, and add this text:

``` javascript
console.log('hello');
```
Save the file, then check to see if your program is correct by running this command:

```javascripting verify introduction.js```

-------------------
Need help? View the README for this workshop: [http://github.com/sethvincent/javascripting
](http://github.com/sethvincent/javascripting)

-------------------
# VARIABLES

A variable is a name that can reference a specific value. Variables are declared using var
 followed by the variable's name.
Here's an example:

``` javascript
var example;
```

The above variable is declared, but it isn't defined (it does not yet reference a specific
 value).
Here's an example of defining a variable, making it reference a specific value:

``` javascript
var example = 'some string';
```

Note that it is declared using var and uses the equals sign to define the value that it re
ferences. This is colloquially known as "Making a variable equal a value".
Create a file named ```variables.js```.
In that file declare a variable named ```example```.
Make the variable ```example``` equal to the value ```'some string'```.
Then use ```console.log()``` to print the example variable to the console.
Check to see if your program is correct by running this command:

```## javascripting verify variables.js```

-------------------
# STRINGS

A string is any value surrounded by quotes.
It can be single or double quotes:

``` javascript
'this is a string'

"this is also a string"
```

Try to stay consistent. In this workshop we'll only use single quotes.
For this challenge, create a file named ```strings.js```.
In that file create a variable named someString like this:

``` javascript
var someString = 'this is a string';
```
Use ```console.log``` to print the variable ```someString``` to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify strings.js```

-------------------
# STRING LENGTH

You will often need to know how many characters are in a string.
For this you will use thing .length property. Here's an example:

``` javascript
var example = 'example string';
example.length
```

Make sure there is a period between ```example``` and ```length```.
The above code will return a ```number``` for the total number of characters in the string.

Create a file named ```string-length.js```.
In that file, create a variable named ```example```.
Make the ```example``` variable reference the string ```example string```.
Use ```console.log``` to print the ```length``` of the string to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify string-length.js```

-------------------
# REVISING STRINGS

You will often need to change the contents of a string.
Strings have built-in functionality that allow you to inspect and manipulate their contents.
Here is an example using the ```.replace()``` method:

``` javascript
var example = 'this example exists';
example = example.replace('exists', 'is awesome');
console.log(example);
```

Note that to change the value that the ```example``` variable references, we need
to use the equals sign again, this time with the ```example.replace()``` method to
the right of the equals sign.

## The challenge:

Create a file named ```revising-strings.js```.
Define a variable named ```pizza``` that references this string: ```pizza is alright```.
Use the ```.replace()``` method to change ```alright``` to ```wonderful```.
Use ```console.log()``` to print the results of the ```.replace()``` method to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify revising-strings.js```

-------------------
# NUMBERS

Numbers can be integers, like ```2```, ```14```, or ```4353```, or they can be decimals,
also known as floats, like ```3.14```, ```1.5```, or ```100.7893423```.

## The challenge:

Create a file named ```numbers.js```.
In that file define a variable named ```example``` that references the integer ```123456789```.
Use ```console.log()``` to print that number to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify numbers.js```

-------------------
# ROUNDING NUMBERS

We can do basic math using familiar operators like ```+```, ```-```, ```*```, ```/```, and ```%```.
For more complex math, we can use the ```Math``` object.
In this challenge we'll use the Math object to round numbers.

## The challenge:

Create a file named ```rounding-numbers.js```.
In that file define a variable named ```roundUp``` that references the float ```1.5```.
We will use the ```Math.round()``` method to round the number up.
An example of using ```Math.round()```:

``` javascript
Math.round(0.5);
```

Define a second variable named ```rounded``` that references the output of the ```Math.round()``` method, passing in the ```roundUp``` variable as the argument.
Use ```console.log()``` to print that number to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify rounding-numbers.js```

-------------------
# NUMBER TO STRING

Sometimes you will need to turn a number into a string.
In those instances you will use the ```.toString()``` method. Here's an example:

``` javascript
var n = 256;
n.toString();
```

## The challenge

Create a file named ```number-to-string.js```.
In that file define a variable named ```n``` that references the number ```128```;
Call the ```.toString()``` method on the n variable.
Use ```console.log()``` to print the results of the ```.toString()``` method to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify number-to-string.js```

-------------------
# IF STATEMENT

Conditional statements are used to alter the control flow of a program, based on a specified boolean condition.
A conditional statement looks like this:

``` javascript
if (n > 1) {
  console.log('the variable n is greater than 1.');
} else {
  console.log('the variable n is less than or equal to 1.');
}
```

Inside parentheses you must enter a logic statement, meaning that the result of the statement is either true or false.
The else block is optional and contains the code that will be executed if the statement is false.

## The challenge

Create a file named ```if-statement.js```.
In that file, declare a variable named ```fruit```.
Make the ```fruit``` variable reference the value ```orange```.
Then use ```console.log()``` to print ```The fruit name has more than five characters.``` if the length of the value of fruit is greater than five.
Print ```The fruit name has five characters or less.``` otherwise.
Check to see if your program is correct by running this command:

```javascripting verify if-statement.js```

-------------------
# FOR LOOPS

For loops look like this:

``` javascript
for (var i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}
```

The variable ```i``` is used to track how many times the loop has run.
The statement ```i < 10;``` indicates the limit of the loop.
It will continue to loop if i is less than ```10```.
The statement ```i++``` increases the variable ```i``` by ```1``` each loop.

## The challenge:

Create a file named ```for-loop.js```.
In that file define a variable named ```total``` and make it equal the number ```0```.
Define a second variable named ```limit``` and make it equal the number ```10```.
Create a for loop in 10 iterations. On each loop, add the number ```i``` to the ```total``` variable.
You can use a statement like this one:

``` javascript
total += i;
```

After the for loop, use ```console.log()``` to print the ```total``` variable to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify for-loop.js```

-------------------
# ARRAYS

An array is a list of values. Here's an example:

``` javascript
var pets = ['cat', 'dog', 'rat'];
```

### The challenge:

Create a file named ```arrays.js```.
In that file define a variable named ```pizzaToppings``` that references an array that contains
three strings in this order: ```tomato sauce, cheese, pepperoni```.
Use ```console.log()``` to print the ```pizzaToppings``` array to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify arrays.js```

-------------------
# ARRAY FILTERING

There are many ways to manipulate arrays.
One common task is filtering arrays to only contain certain values.
For this we can use the ```.filter()``` method.
Here is an example:

``` javascript 
var pets = ['cat', 'dog', 'elephant'];

var filtered = pets.filter(function (pet) {
  return (pet !== 'elephant');
});
```

The filtered variable will now only contain ```cat``` and ```dog```.

## The challenge:

Create a file named ```array-filtering.js```.
In that file, define a variable named numbers that references this array:
```[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];```
Like above, define a variable named ```filtered``` that references the result of ```numbers.filter()```.
The function that you pass to the ```.filter()``` method will look something like this:

``` javascript
function evenNumbers (number) {
  return number % 2 === 0;
}
```

Use ```console.log()``` to print the ```filtered``` array to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify array-filtering.js```

-------------------
# LOOPING THROUGH ARRAYS

For this challenge we will use a ```for loop``` to access and manipulate a list of values in an array.
Accessing array values can be done using an integer.
Each item in an array is identified by a number, starting at ```0```.
So in this array ```hi``` is identified by the number ```1```:
``` javascript
var greetings = ['hello', 'hi', 'good morning'];
```
It can be accessed like this:
```
greetings[1];
```
So inside a for loop we would use the i variable inside the square brackets instead of directly using an integer.

## The challenge:

Create a file named ```looping-through-arrays.js```.
In that file, define a variable named ```pets``` that references this array:

``` javascript
['cat', 'dog', 'rat'];
```

Create a for loop that changes each string in the array so that they are plural.
You will use a statement like this inside the for loop:
``` javascript
pets[i] = pets[i] + 's';
```
After the for loop, use ```console.log()``` to print the ```pets``` array to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify looping-through-arrays.js```

-------------------
# OBJECTS

Objects are lists of values similar to arrays, except values are identified by keys instead of integers.
Here is an example:

``` javascript
var foodPreferences = {
  pizza: 'yum',
  salad: 'gross'
}
```

## The challenge:

Create a file named ```objects.js```.
In that file, define a variable named ```pizza``` like this:

``` javascript
var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}
```

Use ```console.log()``` to print the ```pizza``` object to the terminal.
Check to see if your program is correct by running this command:

```javascripting verify objects.js```

