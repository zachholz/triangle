$(document).ready(function() {
  $("form#triangle").submit(function(event) {
   var number1 = parseInt($("#input1").val());
   var number2 = parseInt($("#input2").val());
   var number3 = parseInt($("#input3").val());


   if ((number1 === number2) && (number2 === number3)) {
     $("#result1").show();
     $("#result2").hide();
     $("#result3").hide();
     $("#other").hide();
   } else if ((number1 === number2) || (number2 === number3) || (number1 === number3)) {
     $("#result2").show();
     $("#result1").hide();
     $("#result3").hide();
     $("#other").hide();
   } else if ((number1 + number2 > number3) || (number1 + number3 > number2) || (number2 + number3 > number1)) {
       $("#other").show();
       $("#result1").hide();
       $("#result2").hide();
       $("#result3").hide();
   } else if ((number1 !== number2) && (number2 !== number3) && (number3 !== number1)) {
     $("#result3").show();
     $("#result2").hide();
     $("#result1").hide();
     $("#other").hide();
   }
  event.preventDefault();
  });
});
