const http = require("http");
const user = require("./module");
const filesys = require("./filesystem");
const url = require("url");
const events = require("events");
const nodemailer = require("nodemailer");

const eventEmitter = new events.EventEmitter();

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
    //url module ends

    //module starts
    let userdata = user.users("Sathesh", 23);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(userdata);
    response.end();
    //module ends

    //event starts
    const eventHandler = function() {
      console.log("The fs in Node.js processes has started");
    };
    eventEmitter.on("fs started", eventHandler);
    //event ends

    // filesystem starts
    filesys().then(() => eventEmitter.emit("fs started"));
    //filesystem ends

    //nodemailer starts
    //link for test mail sent is below
    //https://ethereal.email/message/XvJFYaPl.jAj4lJOXvJHBUEoyjB8O9xXAAAAAxYM6UN0kJhOyglsoorQQAA

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "marilie40@ethereal.email",
        pass: "XyReAtSWf6vETFdwtG"
      }
    });

    let mailOptions = {
      from: "marilie40@ethereal.email",
      to: "satheshnarayanann@gmail.com",
      subject: "This is a model mail from Node js",
      text: "This is a test mail"
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    //nodemailer ends
  })
  .listen(8080); //the server object listens on port 8080
