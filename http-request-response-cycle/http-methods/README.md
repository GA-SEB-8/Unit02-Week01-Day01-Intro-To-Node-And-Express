<h1>
  <span class="headline">HTTP Request Response Cycle</span>
  <span class="subhead">HTTP Methods</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to identify and explain the four primary HTTP methods: `GET`, `POST`, `PUT`, and `DELETE`.

## HTTP methods

[HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) indicate the desired action to be performed on a given resource on the server. Since they are action-oriented, they are frequently referred to as HTTP verbs.

| HTTP method | Action taken by browser |
| ----------- | ----------------------- |
| `GET`    | Requests a specific resource from the server. Only used for retrieving data. |
| `POST`   | Sends data to the server. Often this request will create a new resource but can be used for any type of request that submits information to a server. |
| `PUT`    | Sends data to the server requesting to update an existing resource.          |
| `DELETE` | Requests the removal of a specified resource from the server.                |

## Use cases

Here are some real scenarios, how users carry them out, and how the browser responds to that user action:

### `GET`

**Scenario**: A user wants to view the latest news articles on a news website.

**User action**: The user navigates to the news website and clicks on the ***Latest News*** section.

**Browser action**: The browser sends a `GET` request to the server to retrieve and display the latest news articles.

### `POST`

**Scenario**: A user is creating a new profile on a social media platform.

**User action**: The user fills out a sign-up form with their details and clicks **Submit**.

**Browser action**: This browser sends a **POST** request to the server, instructing it to create a new user profile with the provided information.

### `PUT`

**Scenario**: A user has moved and is updating the address for their cell phone bill.

**User action**: The user inputs their new address into a form and confirms the update.

**Browser action**: The browser sends a **PUT** request to the server, instructing it to replace the existing address information with the new address.

### `DELETE`

**Scenario**: A user decides to delete a blog post they have written on a blogging platform.

**User action**: The user navigates to their blog post and clicks the **Delete** button.

**Browser action**: The browser sends a **DELETE** request to the server, instructing it to remove that specific blog post.

## 🎓 You Do

Given the scenarios and user actions below, determine the action taken by the browser.

### Scenario 1

**Scenario**: A user wants to check their balance on an online banking website.

**User action**: The user navigates to view their account balance without making any changes.

What action will the browser take?

### Scenario 2

**Scenario**: A user signs in to an existing account on an e-commerce website.

**User action**: The user fills out a sign-in form with their username and password and clicks **Submit**.

What action will the browser take?

## Additional HTTP methods

There are many HTTP methods that you will likely encounter in your career beyond `GET`, `POST`, `PUT`, and `DELETE`. It is helpful to be aware of the most common HTTP methods and understand how they can be used. See this documentation from [Mozilla's developer network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) that explains the nine most common ones.
