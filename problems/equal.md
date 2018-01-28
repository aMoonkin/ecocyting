[Can (a ==1 && a== 2 && a==3) ever evaluate to true?]([https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true)

## solution1 [answered by (Kevin B](https://stackoverflow.com/users/400654/kevin-b])
```javascript
const a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}

if(a == 1 && a == 2 && a == 3) {
  console.log('Hello World!');
}
```

