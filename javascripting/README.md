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
