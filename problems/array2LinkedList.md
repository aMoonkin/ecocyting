```javascript
let node = [1,2,3,4,5,6,7].reduce((acc, cur) => {
  let next = {
    val: cur,
    next: acc
  };
  return next;
}, null)
console.log(node);
111