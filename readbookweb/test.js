var http = require("http");
http.createServer(function(request, response) {
  var url = require('url');
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  console.log(query);

  response.writeHead(200, {"Content-Type": query.type });
  response.write("Hello World");
  response.end();
}).listen(5432);
