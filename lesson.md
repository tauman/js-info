# JavaScript Training


## Resources:

- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)
- [Five Part Article on the Node Event Loop](https://jsblog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810)


## 1. Node Event Loop
- Types of Events
    1. Expired Timers => `setTimeout()`, `setInterval()`
    2. IO Events => callbacks, events, etc. from I/O
    3. Immediates => `setImmediate()`
    4. Close Handlers => `socket.on('close')` , etc.
    5. Micro Tasks => rejection/resolution of Promises
    6. Next Tick => `nextTick()`
- Explain the event loop
- Demo `setTimeout()` and order of operations `1-timeout.js`
- Demo and explain `2-recursion.js`


## 2. Asynchronous JavaScript
- Callbacks
    1. Explain callbacks/"errorback"
    2. Demo `1-callbacks.js`
    3. Demo `2-callbacks-forgot-my-return.js`
- Promises
    1. Explain Promises:
        - `Promise.resolve()`
        - `Promise.reject()`
        - `Promise.race()`
        - `Promise.all()`
    2. Demo and explain `3-promises.js`
- Async/Await
    1. Demo and explain `4-async-await.js`
    2. Demo and explain `5-promise-async.js`
- Mocha Tests and Asynchronous Functions
    1. Demo and explain `tests-demo-spec.js`
    2. Exercise: `exercise-spec.js`


## 3. Functions: Declarations, Expressions, and Arrow Functions
- Examples of each: discuss/explain `1-examples-of-each.js`
- Where is `this`: discuss/explain `2-where-is-this.js`
- Pure Functions and deterministic functions: `3-pure-functions.js`
- Higher Order Functions: `4-higher-order.js`


## 4. Destructuring, the Spread Operator, and Default Params
- Arrays: `1-array-examples.js`
- Objects: `2-object-examples.js`
- Parameters: `3-default-params.js`

## 5. Map and Set
- `1-set.js`
- `2-map.js`
