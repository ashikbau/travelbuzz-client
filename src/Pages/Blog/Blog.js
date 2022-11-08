import React from 'react';

const Blog = () => {
    return (
        <div className="card  w-full bg-gray-100 shadow-xl text-center">
  <div className="card-body items-center text-center">
    <h2 className="card-title ">What is the difference between SQL and NoSQL?</h2>
    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
    
  </div>
  <div className="card-body  items-center text-center">
    <h2 className="card-title">What is JWT, and how does it work?</h2>
    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

Once decoded, you will get two JSON strings:

The header and the payload.
The signature. 
    </p>
    
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">What is the difference between javascript and NodeJS?</h2>
    <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.


JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
    
  </div>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">How does NodeJS handle multiple requests at the same time?</h2>
    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
    
  </div>
</div>
    );
};

export default Blog;