### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    - Using promises(then/catch), async/await, callbacks
  
- What is a Promise?
     - One time garantee of the future value


- What are the differences between an async function and a regular function?
    - Async function always returns a promise


- What is the difference between Node.js and Express.js?
    - Node.js is a platform for building server side web applications using JavaScript,
    - Express.js is a node.js based framework.


- What is the error-first callback pattern?
    - Error-first callback is a function (f.e app.use(Error-first callback(err, data))) that has error object is it's first argument. It is returned by the first argument isf any error occurs

- What is middleware?
  - Middleware is code that runs between the requests/routes.

- What does the `next` function do?
   - Next() will tell the program to move on to the next matching route.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
- Program waits for each request to be resolved before it moves to a next one. 
   - Promise.all will solve this problem, since the requests are independent from each other.
   - Also no error handling.