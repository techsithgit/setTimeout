
var onLoadFunction = function() {

  /*****
    setTimeout(callBackfunction, milisecond)
  *****/
  let tID;

  //set 5second(5000 miliseconds) timeout
  $('#setTimeout').click(()=>{
    tID = setTimeout(()=> {
      console.log('from setTimeout');
    },5000);
  });

  //after cliking on the Set Timeout button,
  //click on the Clear Timeout before 5seconds
  $('#clearTimeout').click(()=>{
    clearTimeout(tID);
  });
}
