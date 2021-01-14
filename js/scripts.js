$(document).ready(function(){
  const age = parseInt(prompt("Enter your age:"))

  if(age >= 18){
    $('#voting').show();
    $('#headding').remove("h1");
  }else{
    $("#underAge").show();
  }

  

});