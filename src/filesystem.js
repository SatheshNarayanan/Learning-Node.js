var fs = require("fs");

exports.files = () => {
  //Read data from a file
  fs.readFile("src/module.js", function(err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Data in file has been read - ${data}`);
  });
  //Open and create a file
  fs.open("src/fileopen.txt", "w", function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
  //Write data in a file and if file doesn't exist create one
  fs.writeFile(
    "src/filesystem.txt",
    "This is a example for creating a file using filesystems in Node.js",
    function(err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Data has been written in file");
    }
  );
  //Append data to an existinf file
  fs.appendFile(
    "src/filesystem.txt",
    " *****Appending a text file****",
    function(err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Data has been appended in the file");
    }
  );
  //Delete file
  fs.unlink("src/fileopen.txt", function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File deleted!");
  });
};
