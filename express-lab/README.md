Got it! Here's your updated **Node + Express Lab 1** with cleaner instructions, HTML pages moved to a `views/` folder, and clarified steps for a more guided student experience.

---

# 🧪 Node + Express Lab 1: Getting Started with Your First Server

### 📚 Objective:

Build a simple Node.js + Express server that handles basic routing and serves HTML files as responses. You’ll also learn how to organize your static assets and set up your development environment.

---

## ✅ Part 1: Basic Lab

### 🔧 Step 1: Initialize the project

Open your terminal, navigate to your project folder, and run:

```bash
npm init -y
```

This creates a `package.json` file with default settings.

---

### 📦 Step 2: Install Express

```bash
npm install express
```

---

### 📄 Step 3: Create `server.js`

In the root of your project folder, create a file called `server.js`.

---

### 🧠 Step 4: Set up the server

Inside `server.js`:

* Import the Express package using `require()`
* Create an Express app instance using `const app = express();`
* Set the app to listen on **port 3000**

✅ **Bonus**: Add a callback function to `app.listen()` that logs to the console once the server is running.

---

### 🌐 Step 5: Create 3 routes

Your app should respond to these routes:

* `GET /`
  ➤ Respond with an HTML page containing a short paragraph about who you are and a link to `/about`.

* `GET /about`
  ➤ Respond with an HTML page that includes a longer description about yourself, a list of the technologies you know, your education, and what jobs you hope to get.

* `GET /test`
  ➤ Respond with a short message like `<p>Success!</p>`

---

## 🌟 Bonus Challenge: Serve HTML and CSS Files

### 📁 Step 6: Create folder structure

Inside your project folder, create the following:

```
project/
├── server.js
├── package.json
├── views/
│   ├── index.html
│   └── about.html
└── public/
    └── style.css
```

---

### 📄 Step 7: Create HTML Pages

#### `views/index.html`

Your homepage should include:

* A short paragraph about who you are
* A link to the `/about` page

#### `views/about.html`

Your about page should include:

* A longer description about yourself
* A list of technologies you know
* Your education
* The type of job(s) you want in the future
* A link back to the homepage

---

### 🎨 Step 8: Style Your Pages

Create a `style.css` file in the `public/` folder and add basic styling for body text, headings, and links.

---

### 🛠️ Step 9: Serve Static Files

Use the built-in Express middleware to serve static files like CSS and images. Add the following line to your `server.js` file **before your routes**:

```js
app.use(express.static('public'));
```

---

## ✅ Wrap-Up Checklist

* [ ] Project initialized with `npm init -y`
* [ ] Express installed with `npm install express`
* [ ] Created a working `server.js` file
* [ ] App listens on port 3000
* [ ] `/test` route responds with `<p>Success!</p>`
* [ ] `/` and `/about` routes send back full HTML pages
* [ ] HTML files stored in a `views/` folder
* [ ] CSS file loaded from a `public/` folder using `express.static()`

---

Let me know if you'd like this as a Google Doc, PDF, or printable handout for your students!
