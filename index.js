function insertNumber(n)
{
  var existNumber=  $("#result").val();
  $("#result").val(existNumber+n)
}
function clearAll(){
    $("#result").val('')
}
function calculate(){
 var answer= eval(  $("#result").val());
 $("#result").val(answer)
}
function deleteNumbers(){
  var presentValue = $("#result").val();
  if(presentValue != ''){
    $("#result").val(presentValue.slice(0,-1))
  }
}