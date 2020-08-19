# Exercise 2: Setting up Express

In exercise 1 we got our node project started, and it can execute our index.js file. That's great!

Let's install [Express](https://expressjs.com/), so we can use it as our Web Application server.

1. `npm i express`

Once npm has finished installing Express, we'll be able to use it! Yay! But to do that, we'll need Node to invoke Express.

2. Edit `index.js`

With Node applications, we can call other JS-based apps such as Express by using the `require()` function. Let's add that for Express.

```
console.log('Greetings from Node and index.js! 🙃');

// We need Express to act as our application server
const express = require('express');

// Let's test that Express is working as expected:
console.log(express);
```

Node is smart enough to know that `express` can be found in the `node_modules` directory. Cool hey?

3. Save `index.js`
4. Run our `serve` script again. What output do you get from the terminal / PowerShell?

You should see something like this:

```
> server-side@1.0.0 serve /…/server-side
> node ./index.js

Greetings from Node and index.js! 🙃
{ [Function: createApplication]
  application: 
   { init: [Function: init],
     defaultConfiguration: [Function: defaultConfiguration],
     … etc …
```

Ahh, no errors, and our `express` constant has resolved to a function, that's good!

Alrighty! Let's get Express to always run, and listen for requests.

5. Delete the `console.log()`
6. Add the following script:

```
// Let's create a new App
const app = express();

// We want express to run on this port
const port = 3000;
```

We'll now use the `listen()` method to run Express, we'll need to pass it our `port`.

7. Add this to our `index.js`:

```
app.listen(port, () => {
    console.log(`app is running here: http://localhost:${port}`);
});
```

OK, let's test our work now, by running the node script.

8. `npm run serve`
9. Open a browser and go to [http://localhost:3000/](http://localhost:3000/)
10. You should see something like this: `Cannot GET /`

That's a good thing. That means Express is running, but our Express App doesn't know what to do with your request for the homepage or `/`.

We'll have to tell Express how to deal with these and other requests.

Before we call the `listen()` method on our `app`, we'll need to set up some routing rules.

11. Add this before your `app.listen()` declaration:

```
app.get('/', (request, response) => {
  console.log('Request: /');
  response.send('Hello World, from the Express homepage!');
});
```

12. Re-run the `npm run serve` script, and now refresh your browser.
13. Now you should see a new message in your browser, and a message in your terminal.

That's gravy. Let's get Express to render some HTML instead.

14. Replace the `response.send()` method with this:

```
response.sendFile(__dirname + '/index.html');
```

15. And add an `index.html` file :)