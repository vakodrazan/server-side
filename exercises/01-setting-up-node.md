# Exercise 1: Setting up our Node environment

Let's start by initialising a Node project in this repo.

1. `npm init -y`

Now that we have a `package.json` file…

2. Commit!
3. Let's edit it so we can run a node script that calls a specific JS file. Let's call this script: `serve`. We'll use `node ./index.js` as the basis for the script.

In other words, we want Node.js to run our `index.js` file.

OK, let's run the script!

4. `npm run serve`

What happened? Did you get an error like this?

```
> server-side@1.0.0 serve /…/server-side
> node ./index.js

module.js:550
    throw err;
    ^

Error: Cannot find module '/…/server-side/index.js'
    at Function.Module._resolveFilename (module.js:548:15)
    at Function.Module._load (module.js:475:25)
    at Function.Module.runMain (module.js:694:10)
    at startup (bootstrap_node.js:204:16)
    at bootstrap_node.js:625:3
```

Why did this happen?

That's right, there's no `index.js` file in your repo!

5. Add a new file in this repo, called `index.js`
6. Add some contents to it:

```
console.log('Greetings from Node and index.js! 🙃');
```

7. Save `index.js`
8. Now run the script again: `npm run serve`
9. If you're getting a nice message in your terminal / PowerShell, let's commit all our changes again.

Up next, we're going to add a web application server, Express!