$(document).ready(function(){
  var saying;
  var writer;
  function getNewQuote(){
    var quotes = ["There are two types of people in this world.  Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'.",
    "Because it's there.",
"Footsteps always follow us, whenever it is snowing.  They always show us where we've been, but never where we're going.","For I know the plans that I have for you.",
"The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.",
"Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.",
"The significant problems we face cannot be solved at the same level of thinking we were at when we created them.","We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.",
"One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'",
"It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.",
"Maps are a way of organizing wonder.","I have decided to make my life my argument.","Now it's a sqirt mecca for mystery artist, but back then it was just magic.","Knowledge keeps about as well as fish.",
"It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that coud be the beginning of the end.",
"Do not go gentle into that good night.  Rage, rage against the dying of the light.","For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.","You can do whatever you want ,just keep trying until you succeed"];
var author = ["Unknown","George Mallory on climbing mountains","Winnie the Pooh's A-Z","The Lord,Jer 29:11","Royal Robbins","Unkown","Albert Einstein","T S Eliot","Proverb","Dag Hammarskjold, Sec. Gen.of the UN","Edward Tufte",
"Albert Schweitzer","Jim Snyder on Kayaking","Alfred North Whitehead","Norman  Cousins, Anatomy of an Illness","Dylan Thomas","John Stone", "Gaudeamus Igitur","Priya Dutta"];
    
  var randomNum = Math.floor(Math.random()*quotes.length);
   saying = quotes[randomNum];
    writer = author[randomNum]; 
    $('.quote').text(saying);
    $('.author').text(writer);
  }
  $("#tweet").on("click",function(){
   window.open("https://twitter.com/intent/tweet?text=" + saying );
 }); 
    
  
  $(".qbtn").on( "click", function() {
   getNewQuote();
});  
 
});