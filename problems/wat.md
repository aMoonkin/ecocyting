There's some "WATs" in this [video](https://www.destroyallsoftware.com/talks/wat), well, as far as i'm concerned, it's common in javascript 0_0.

- `[] + [] =`
    It's just because when `+` something, javascript "helps" you to use `toString` method.
    ```javascript
    [] = [];
    [].toString() = "";
    ```
- `[] + {} = `
    If I tell you that `let a = {}; a.toString()` is `[object Object]`, you know the right answer.
- `{} + [] = `
    Wow, it's the same as the last one, isn't it? Actually, it's 0. Because `{}` here is parsed into a empty block, returns nothing. And, `+[]` means `+ Number([])`, we got a 0 after all.
-  `[] + {} === {} + []`
    The answer is true. Just because `{} + []`, `{}` here would be parsed as an **Object** instead of a empty block. The same thing occured when apply ({} + []).
- `{} + {}`
    The original answer is `NaN`, but I got `[object Object]`. The different is what the first `{}` is parsed. At the very moment I write this, the first `{}` is parsed as an Object(node 10.15.1, chrome 71.0.3578.98).