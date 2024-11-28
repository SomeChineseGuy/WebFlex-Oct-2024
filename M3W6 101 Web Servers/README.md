## M3W6

## Web Servers 101

- [ ] Web Servers (Theory)
- [ ] Request <-----> Response
- [ ] Node JS Server
- [ ] Express JS
- [ ] GET Requests
- [ ] EJS
- [ ] Serverside rendering

### TCP

Computer trying to talk to server

Computer ------------Connecting------------- Server
Computer --------Connection established------- Server
Computer ------------Messaging-------------> Server
Computer <------------Messaging------------- Server
Computer <------------Messaging------------- Server
Computer <------------Messaging------------- Server
Computer ------------Messaging-------------> Server
Computer ------------Messaging-------------> Server
Computer ------------connection ends------------- Server

### HTTP

Computer ------------Connect------------- Server
Computer --------Connection established------- Server
Computer --------Send information to a server (request) --------> Server
Computer <--------Send information back to the computer (Response) -------- Server
Computer ------------connection ends------------- Server

## Request

A request is a server asking for information from the client (client will be a browser like chrome or IE)
2 Major information in this request

- Verb/Method: GET / POST
- Path: /about, /homepage
  Path: /users - Get request
  Path: /users - POST request

## Response

- Can contain anything
- You can send over a blank page, send over an HTML page, data in the form of JSON
- Status Code
- 1xx => Low level routing - inbetween computers
- 2xx => Everything is OK!
- 3xx => Redirection
- 4xx => Client error
- 5xx => Server Errors
