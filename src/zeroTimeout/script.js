
var onLoadFunction = function() {

  /*****
    setTimeout(callBackfunction, milisecond)
  *****/
  console.log(1);
  console.log(2);

  setTimeout(() => {
    console.log(3);
  },5000);

  console.log(4);
}
