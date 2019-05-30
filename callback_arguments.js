// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(
    function(element, index) {
    if (element === "Waldo")
    found(element, index)
    });
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(arr[i], i);   // execute callback
  //   }
  // }
}

function actionWhenFound(name, index) {
  console.log("Found " + name + " at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);