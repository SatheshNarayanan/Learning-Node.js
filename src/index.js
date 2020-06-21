const http = require("http");
const user = require("./module");
const filesys = require("./filesystem");
const url = require("url");

//create a server object:
http
  .createServer(function(request, response) {
    //url module starts
    let address = "http://localhost:8080/default.htm?year=2020&month=June";
    let q = url.parse(address, true);

    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    var qquery = q.query;
    console.log(qquery.year);
    console.log(qquery.month);

    //module starts
    let userdata = user.users("Sathesh", 23);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(userdata);
    response.end();
    //module ends
    // filesystem starts
    filesys.files();
    //filesystem ends
  })
  .listen(8080); //the server object listens on port 8080
