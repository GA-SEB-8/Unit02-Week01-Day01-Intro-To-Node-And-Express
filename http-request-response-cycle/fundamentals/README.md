<h1>
  <span class="headline">HTTP Request Response Cycle</span>
  <span class="subhead">Fundamentals</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to explain the HTTP request-response cycle in detail, including understanding the roles and actions of both the client and server at each stage.

## Understanding the request-response cycle

Let's take a deeper look into each stage of the request-response cycle:

![HTTP Request-Response Cycle Steps](./assets/req-res-steps.png)

1. The user interacts with the client software:
    - When you click a link, submit a form, or navigate to a URL, your web browser prepares to send a request to a server.
    - Think of each action you take as a specific request. Different types of requests may be carried out depending on the type of action that is made, but all generate requests.
2. The client software processes the user interaction and relays an HTTP request:
    - Your browser turns your action into an HTTP request. This includes choosing the right method (like GET or POST), the URL, and additional details like browser type.
    - Different actions (like clicking a link vs. submitting a form) use different request methods. It's like choosing a different way to ask for something.
3. The server software receives the request:
    - The server receives your request and decides what action to take next.
4. The server prepares its response:
    - Servers can do a lot based on your request. When you ask for a webpage, the server finds all the pieces to assemble it for you. It might grab data, update something, or perform another task.
5. The server returns a response message:
    - After the server does its work, it sends back a response. This includes a status code (like `200` for success) and often the data you asked for.
    - The status code is a quick way for the server to tell your browser how things went (success, error, or something else).
6. The client processes the response:
    - Your browser gets the response and acts on it. If it's a webpage, your browser shows it to you. If there's an error, it lets you know.
    - Your browser's job is to make sense of the server's response. Just like when you receive an answer, you react based on what you hear.

When the client receives the response, that request-response cycle has ended, and there will be no further HTTP communications unless the client sends another request.
