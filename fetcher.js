const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);

const fetcher = async input => {
  if (!input[1]) {
    console.log("Error no file path given");
    return;
  }
  request(input[0], (err, res, body) => {
    if (err) {
      console.log("Error with URL");
      return;
    }
    fs.writeFile(input[1], body, err => {
      if (err) {
        console.log(err);
        return;
      }
    });
    console.log(`Downloaded and saved ${body.length * 2} bytes to ${input[1]}`);
  });
};

fetcher(args);

// command line run code:
// node fetcher.js https://www.example.com data/data.html
