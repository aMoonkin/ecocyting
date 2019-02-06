[How to convert array of 1's and 0's to a ByteArray or Integer in JavaScript](https://stackoverflow.com/questions/54555518/how-to-convert-array-of-1s-and-0s-to-a-bytearray-or-integer-in-javascript)

## my solution

```javascript
var bytes = [ 1, 0, 1, 0, 0, 0, 1, 0 ]
```

there's a byte array, and wanna convert it into a Decimal integer.

It's can be done using a for loop, or using a reduce function:

```javascript
bytes.reduce((x, y, z) => x + y * 2 ** (bytes.length - z - 1), 0)
```

extract the function, we get:

```javascript
function getDecimal(accumulator, currentValue, index, array) {
    console.log(accumulator, currentValue, index)
    return accumulator + currentValue * 2 ** (array.length - index - 1)
}
bytes.reduce(getDecimal, 0)
```

Here's a trick I've never use before, the `0`. Sometimes we have to do some "extra" work on every value in a reduce function, and find the first `accumulator` is `array[0]` and the first `currentValue` is `array[1]`, which would make the "extra work" hard to apply. With a initValue `0`, we make it easier.