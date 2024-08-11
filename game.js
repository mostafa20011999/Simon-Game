var start = 0;
var colors = ["red","green","blue","yellow"];
var level = 1;
var sequence = [];
var player = [];
var cnt = 0;
$(document).keydown(function(){
  if(start===0){
  start = 1;
  generate();
}
})
function generate(){
  $("h1").text("Level "+level)
  var x = Math.floor(Math.random()*4);
  x = colors[x];
  sequence.push(x);
  playSound(x);
  $("."+x).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
}
  $(".btn").click(
  function (){
    if(start===1){
      var id = this.getAttribute("id");
    player.push(id);
    playSound(id);
    timeOut(id);
    console.log("player   "+player);
    console.log("sequence   "+sequence);
    check();
    }
    
  }
)


function check(){
if(player[cnt]===sequence[cnt]){
  if(player.length===sequence.length){
      player = [];
      cnt = 0;
      level++;
      setTimeout(function(){
        generate();},1000)
  }
  else{
    cnt++;
  }
}
else{
  var x = new Audio("./sounds/wrong.mp3");
  x.play();
  $("body").addClass("game-over")
  $("h1").html("You Lose");
  start = 0;
  sequence = [];
  player = [];
  level =1;
  setTimeout(function(){
    $("h1").text("press any key to restart");
    $("body").removeClass("game-over");
  },3000)
}
}
function timeOut(element){

    $("."+element).addClass("pressed");
   setTimeout(function(){
    $("."+element).removeClass("pressed");
   },300)

}
function playSound(color){
  var sound = new Audio("./sounds/"+color+".mp3");
  sound.play();
}
