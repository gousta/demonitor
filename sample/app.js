const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// eslint-disable-next-line no-console
setInterval(() => console.log('Hello there. I am a log!'), 10000);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at port ${port}`);
});
