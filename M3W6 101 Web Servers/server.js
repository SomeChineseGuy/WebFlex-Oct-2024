const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url, request.method)
  if(request.url === "/" && request.method === "GET") {
    response.write('welcome to my site!')
  } else if(request.url === '/about' && request.method === "GET") {
    response.write('<h1> This is the about page! </h1>')
  }  else if(request.url === '/data' && request.method === "GET") {
    response.end({
      data: 123
    })
  }

  response.end()
});


// http://localhost:8080
server.listen(8080, () => {
  console.log('The Server is on!')
});