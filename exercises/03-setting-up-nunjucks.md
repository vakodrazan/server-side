# Exercise 3: Setting up Nunjucks

We're going to use [Nunjucks](https://mozilla.github.io/nunjucks/api.html), because we want to use JavaScript to power our HTML.

First, we'll need to add `nunjucks` to our Node packages.

1. `npm i nunjucks`

After that's installed, we'll need to change our Express configuration a little, like they say in [this getting started with Nunjucks page](https://mozilla.github.io/nunjucks/getting-started.html)

2. Add the following to the top of `index.js`:

```
const nunjucks = require('nunjucks');
```

3. Add the following to `index.js` after you've instantiated your `app`:

```
nunjucks.configure({
  autoescape: true,
  express: app
});
```

4. If your Node server was running, you'll need to restart it now. Else, start your server again.
5. Check that you're not getting any errors in the console when you request the homepage as normal. No errors? Good :)

Let's add our first Nunjucks file!

6. Create a file in a new folder, at this path: `views/index.html.njk`
7. Add the following to this new `.njk` file:

```
<p>Hello from:</p>
<ol>
  <li>Node.js</li>
  <li>Express</li>
  <li>and now… Nunjucks</li>
</ol>
```

It's a good idea to create a directory that will act as your 'views' directory. This way we can manage all the HTML-like files that the webserver will need in one place.

With the Nunjucks file waiting for us, we have to match the requests for the homepage `/` to this Nunjucks file.

7. Change our `app.get('/'…)` method to this:

```
app.get('/', (request, response) => {
  response.render('./views/index.html.njk');
});
```

8. Delete `index.html`, we're done with you.
9. Restart your server.
10. Refresh the homepage in your browser. You should be seeing our HTML list we made earlier.
11. Edit this `njk` file, adding whatever you want to the HTML.
12. Save, and refresh in the browser.
13. Do you see your changes?

If we make any changes to this `njk` file, the server won't show the additions because its only read once at build time. We'll have to restart the Node server each time we make a change. 🤮

Thankfully, we can use another tool to restart node for us if the `njk` files change. It's called `nodemon` (short for Node Monitor, or is that No demon? 😈). Let's install `nodemon` as a development dependency, as we'll only want to run this in our dev environment.

14. `npm i -D nodemon`

We'll have to use `nodemon` rather than `node` in our `serve` script.

15. Edit our `serve` script in `package.json` to this command:

```
"nodemon -e js,njk ./index.js"
```

16. Run the serve script again. Is it working?

Congratulations, Nunjucks is running. In the next exercise we'll start using some of Nunjucks cool features.

17. If you haven't already, Save, Commit, and Push. We've done some cool stuff today.