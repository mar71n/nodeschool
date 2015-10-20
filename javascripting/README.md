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
