# Scope Chains And Closures Workshop

Scope, Scope Chains, Closures, and Garbage Collection all have one thing in
common: They're often hand-waved away. How do closures actually work? When does
Garbage Collection occur? What really IS a Scope Chain?

In this workshop, we will discover it's not black magic after all; No hand
waving is required to explain these language features, in fact you've been using
them all along without realising.

----

# Scopes

The main type of scope in Javascript is Lexical Scoping. Present in the language
from the very beginning, this is the scope created within a function, and the
one most developers are familiar with.[1]

ES6 recently defined Block Scoping. This scope is created within curly braced
blocks.[2]

## Initializing Variables

The way a variable is initialized determines which scope type it is:

### Lexical Scope

`var` is used to denote a variable which is Lexically Scoped to the current
function:

```js
function someFunc() {
  var aVariable;
}
```

*`aVariable` is lexically scoped within `someFunc`*

### Block Scope

`let` & `const` are used to denote variables which are Block Scoped to the
current curly braced block:

```js
if (true) {
  let aVariable;
}
```

*`aVariable` is block scoped within the `if`'s curly braces*

----

# Your Mission

In an empty file, create a function `foo` which contains one variable lexically
scoped named `bar`.

Once complete, execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify your
solution.

## Notes

 * [1]: There are also 4 other scopes in the language: Global, `with`, `catch`,
        and `eval`. These tend not to be used much, so we will ignore them.
 * [2]: This workshop will concentrate only on Lexical Scoping.

``` js
function foo(){
    var bar;
}
```

----
----

# Scope Chains

## Nesting

Scopes can be nested. Both Lexical and Block scopes can contain other scopes:

```js
function someFunc() {
  function inner() {
  }
}
```
*`inner` is a nested lexical scope inside the lexical scope of `someFunc`*

----

```js
if (true) {
  while (false) {
  }
}
```
*The `while` is a nested block scope inside the block scope of `if`*

----

```js
function someFunc() {
  if (true) {
  }
}
```
*The `if` is a nested block scope inside the lexical scope of `someFunc`*

----

## Scoped Variable Access

All nested scopes follow the same rule: Each nested inner scope has access to
outer scope variables, but *NOT* vice-versa.

For example:

```js
function someFunc() {
  var outerVar = 1;
  function inner() {
    var innerVar = 2;
  }
}
```
*`inner` has access to both `innerVar` & `outerVar`, but `someFunc`* only *has
access to `outerVar`*

## Multiple Nested Scopes

Nesting isn't limited to a single inner scope, there can be multiple nested
scopes, each of which adhere to the *Scoped Variable Access* rule above. With
one addition: sibling scopes are also restricted from accessing each other's
variables.

For example:
```js
function someFunc() {
  function inner() {
  }
  function inner2() {
  }
}
```
*`inner` & `inner2` are both inner scopes of `someFunc`. Just as `someFunc`
cannot access `inner`'s variables, `inner` cannot access `inner2`'s variables
(and vice versa)*

## Scope Tree

Looking at the nesting from top-down, a tree of scopes is formed.

This code

```js
function someFunc() {
  function inner() {
  }
  function inner2() {
    function foo() {
    }
  }
}
```
Produces this tree
```
   someFunc()
       |
      / \
     /   \
    /     \
   ↓       ↓
inner()  inner2()
           |
           ↓
         foo()
```

Remembering that inner scopes can access outer scope's variables, but *not*
vice-versa (`foo()` can access `inner2()`'s variables, and `inner2()` can access
`someFunc()`'s variables), then it makes more sense to look at the tree from
bottom-up, which forms a chain, also known as...

## Scope Chains

Looking from most inner to most outer scope forms a *Scope Chain*.

```
   someFunc()
       ↑
        \
         \
          \
         inner2()
           ↑
           |
         foo()
```


----

# Your Mission

Modify your solution from lesson 1 so `foo`, in addition to lexically scoped variable `bar`, 
contains a function `zip`
which itself contains one variable lexically scoped called `quux`

Once complete, execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify your
solution.

----

# Solution

The scope chain you created now looks like this:

```
(global)
    ↑
    |
  foo()
 var bar
    ↑
    |
   zip()
 var quux
```

By following the arrows, we can see `zip()` has access to `var bar`, but not the
other way around.

----

``` js
function foo(){
    var bar;
    function zip(){
        var quux;
    }
}
```

----
----

# Global Scope & Shadowing

## Global Scope

Understanding where Scope Chains end is an important part of scoping. All
Javascript runtimes must implicitly create a _Global Scope_ object (`window` in
the browser, `global` in node), which sits at the top of every scope chain:

```
    (global)
       ↑
       |
   someFunc()
       ↑
      / \
     /   \
    /     \
inner()  inner2()
           ↑
           |
         foo()
```

In _Scopes_ we covered how usage of `var` or `let` dictates the scope of the
variable being defined. When assigning a variable without using either of `var`,
`let`, etc, the variable is assumed to exist in an outer scope.

The javascript runtime follows these steps to assign a variable:

 1) Search within the current scope.
 2) If not found, search in the immediately outer scope.
 3) If found, go to 6.
 4) If not found, repeat 2 and 3 until the Global Scope is reached.
 5) If not found in Global Scope, create it (on `window` / `global` objects).
 6) Assign the value.

In this way, it is possible to accidentally define a global variable (step 5).

### Example Global Scope

Consider the following example:

```js
function someFunc() {
   var scopedVar = 1;
   function inner() {
      foo = 2;
   }
}
```

Note the lack of `var` or `let`, etc for `foo = 2`. The Javascript runtime will
follow the above algorithm, first checking the scope of `inner()`, then of
`someFunc()`, then finally the Global Scope. Step 5 is then executed, so `foo`
becomes a variable in the Global Scope (`window.foo` / `global.foo`).

Phrased another way: By accidentally forgetting to use `var`, the variable `foo`
which otherwise would have been only within the lexical scope of `inner()` is
now available to be modified by _any_ scope. So, `someFunc()` now has access
where the developer may have meant for it not to.

_Remember: Only inner scopes can access variables of outer scopes. In this case
the `someFunc()` scope is an inner scope of the Global Scope, allowing access of
`foo` to `someFunc()`._

## Shadowing

A variable is created in a 'Step 0)' of the above algorithm: When `var` or `let`
is used. The variable is assigned to the correct scope, then execution moves on,
and any assignments to that variable follow the above algorithm.

It is perfectly valid to define two different variables, in different scopes,
with the same name:

```js
function someFunc() {
   var foo = 1;
}
function anotherFunc() {
   var foo = 2;
}
```

It is also valid to do this in nested scopes:

```js
function someFunc() {
   var foo = 1;
   function inner() {
      var foo = 2;
   }
}
```

This is called _Shadowing_. The `foo` inside `inner()` is said to _Shadow_ the `foo`
inside `someFunc`.

Shadowing means that the `inner()` scope only has access to its own `foo`. There
is no way for it to access the `foo` defined in `someFunc()`.

This can also be an accidental source of bugs, especially when there is deep
nesting, or long functions.

----

# Your Mission

Starting with your solution from the previous lesson, assign a value to the global variable
`quux` inside `foo()` (don't use `var` or `let`). Create a shadow variable in of `quux`
inside `zip()`. The value in the global variable `quux` has to be different than the
value of `quux` inside `zip()`.

Once complete, execute `$ADVENTURE_COMMAND verify <your-file.js>` to verify your
solution.

----

# Solution

Let's look at the scope chain for your solution:

```
  foo()
 var bar
return zip
    ↑
    |
  zip()
bar = true
```

By referencing `bar` within `zip`, we have created a _Closure_ where `zip()` _closes over_ the variable `bar` from its parent scope `foo()`.

Since we are returning the function `zip`, the reference to `bar` is maintained (and hence the closure is maintained) until `zip` is no longer required.

This has interesting implications for memory, which we will cover in the next lesson.

``` js
function foo(){
    var bar = false;
    quux = 2;
    function zip(){
        bar = true;
        var quux = 3;
    }
    return zip;
}
```

----
----

# Garbage Collection

Memory in Javascript is managed automatically by the runtime. The runtime
decides when/if to release any allocated memory. This decision process is called
_Garbage Collection_.

Every javascript runtime has their own algorithm for garbage collection, but
most use a variation of Mark & Sweep. The Mark & Sweep algorithm works by
marking references to memory (variables, functions, etc) which are still
reachable from active code. Any reference which is not marked, is swept into
the garbage (i.e. the memory is freed).

This concept of marking reachable memory is particulary relevant to closures:

```
 someFunc()
  var bar
return inner
     ↑
     |
  inner()
 alert(bar)
     ↑
     ⋮
```

When the closure `inner()` is returned from `someFunc()`, it maintains its
reference to `bar`. The Mark & Sweep algorithm will mark `bar` as reachable, and
hence will _not_ garbage collect it.

For `inner()` to correctly resolve its reference to `bar`, not only does the
memory for `bar` need to be kept, but the scope chain which describes how to
reach `bar` must also be kept.

Once the reference to `inner()` is no longer required, it can be marked for
garbage collection, which in turn means `bar` can also be marked, and finally
the entire scope chain can be marked, resulting in the freeing of all the
memory.

In this way, Scope, Scope Chains, Closures, and Garbage Collection are all
closely related.

----

# Your Mission

In this challenge, you will be required to use Chrome DevTools for detecting
Garbage Collection events. Follow these steps to get a feel for what happens
when Chrome performs its Mark & Sweep algorithm:

1)  Fire up a new tab in Chrome
2)  Open the DevTools > Timeline tab
3)  Ensure the settings are like so: `http://i.imgur.com/RMovIw4.png`
  a) Frames View is unselected (allows seeing memory graphs)
  b) Flame Chart View is selected (allows seeing where execution time is spent)
  c) Only "Memory" is selected from the options
4)  Click the solid gray record button to begin capturing data
5)  Visit `http://www.stackoverflow.com` (or your favourite website)
6)  Click the now-red record button to stop capturing data
7)  You should now see something similar to: `http://i.imgur.com/ZCNMrI1.png`
8)  The part we're interested in is when memory suddenly drops:
    `http://i.imgur.com/FyMyRVI.png`
9)  Click this drop in memory to select it
10) Now look for the yellow event called "GC Event": `http://i.imgur.com/3ieSxIZ.png`
11) Clicking this event will reveal information about total memory garbage
    collected, and how long it took.

One particularly interesting thing of note here is the length of time Garbage
Collection can take: Often well beyond the 16ms maximum required to keep it
within a single frame (at 60fps). While garbage collection occurs, it blocks the
main thread, which means other Javascript cannot be executed until the event
completes. Be conscious of how janky your application may become due to
extensive Garbage Collection events!

**Note**: If you'd like to get that lovely `[COMPLETED]` label for this lesson,
Run `$ADVENTURE_COMMAND verify`
