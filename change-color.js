var $buttonChange = document.getElementsByClassName('buttonChange')[0];
var $buttonBack = document.getElementsByClassName('buttonBack')[0];
var $buttonAuto = document.getElementsByClassName('buttonAuto')[0];
var $body = document.body;
var interval;

var hexadecimal = function(){ 
  return "#" + parseInt(Math.random() * 1000000);
};

var changeBackgroundColor = function(){
	$body.style.backgroundColor = hexadecimal();
};

$buttonChange.addEventListener("click", function(event) {
  clearInterval(interval);
  changeBackgroundColor();
});

$buttonBack.addEventListener("click", function(event){
  clearInterval(interval);
  $body.style.backgroundColor = "#FFF";
});

$buttonAuto.addEventListener("click", function(){
	interval = setInterval(changeBackgroundColor, 1000);
});