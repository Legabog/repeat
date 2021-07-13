// ** Assynchronous in JavaScript **

// * Callbacks for assynhronous
// Callback hell
// An example:
fs.readdir(source, function (err, files) {
  if (err) {
    console.log("Error finding files: " + err);
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename);
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log("Error identifying file size: " + err);
        } else {
          console.log(filename + " : " + values);
          aspect = values.width / values.height;
          widths.forEach(
            function (width, widthIndex) {
              height = Math.round(width / aspect);
              console.log(
                "resizing " + filename + "to " + height + "x" + height
              );
              this.resize(width, height).write(
                dest + "w" + width + "_" + filename,
                function (err) {
                  if (err) console.log("Error writing file: " + err);
                }
              );
            }.bind(this)
          );
        }
      });
    });
  }
});
// * SetTimout
// An example:
function fn() {
  setTimeout(() => console.log("Hi"), 5000);
}
// * Promises
// An example:
const fnPromises = () =>
  new Promise((resolve, reject) => resolve("I was resolved"));

fnPromises
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

// * Async/await
// Promise's sugar
// An example:
async function getData() {
  const returnedValue = await fetch()
  return returnedValue
}
// * Generators
// An example:
function* numberGemerator(n = 10) {
  for(let i = 0; i < n; i++){
    yield i
  }
}