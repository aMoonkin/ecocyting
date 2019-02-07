[How can I perform operations in javascript just like we do pipeline of operations in java streams?](https://stackoverflow.com/questions/54568053/how-can-i-perform-operations-in-javascript-just-like-we-do-pipeline-of-operation)

The question want a pipeline that could apply functions on each member of a array.

```javascript
[].forEach(x => function1(x).function2(x).functionN(x))
```

as far as I am concerned, it's about how to make a "function" to a "function list". That is to say, if we have funcitons, we need a function to link them.

```javascript
function linkFn(...fns) {
    return function(x) {
        fns.reduce((lastResult, currentFn) => currentFn(lastResult), x)
    }
}
```

and [Nina Scholz](https://stackoverflow.com/users/1447675/nina-scholz) gives a simple and complete [solution](https://stackoverflow.com/a/54568750/7724445).

He uses a `array function` instead of `funciton`

```javascript
pipe = (...functions) => input => functions.reduce((acc, fn) => fn(acc), input)
```
`input` here is my `x`.