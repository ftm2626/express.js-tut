const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("./test.html");
const homestyle = readFileSync("./styles.css");

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log("user hit server");
  //home page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html", // not necessary //MIME types
    });
    //  res.write("<h1>hello</h1>"); res.end(); OR
    res.end(homepage);
  }
  // style
  else if (url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css", // not necessary //MIME types
    });
    res.write(homestyle);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.write("about page");
    res.end();
  }
  // 404 page
  else {
    res.writeHead(404);
    res.write("404");
    res.end();
  }
});

server.listen(5000);
