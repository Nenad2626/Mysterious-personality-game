let enigma=document.querySelector(".enigma");
let img=document.querySelector("img");
let headline=document.querySelector(".question");
let addingLevel=document.querySelector(".level");
let end=document.querySelector("p");

function orderSquare()  {

for(let i=0; i < 25; ++i)  {

let squaring=document.createElement("div");
squaring.className="square";
enigma.appendChild(squaring);

  }   
}

orderSquare();

function orderSquare2()  {

for(let i=0; i < 49; ++i)  {

let squaring1=document.createElement("div");
squaring1.className="square";
squaring1.style.width="55.1px";
squaring1.style.height="55.1px";
enigma.appendChild(squaring1);
   
   }  
 }
  
function orderSquare3()  {

for(let i=0; i < 100; ++i)  {

let squaring2=document.createElement("div");
squaring2.className="square";
squaring2.style.width="38px";
squaring2.style.height="38px";
enigma.appendChild(squaring2);

    }   

 }

let squares=document.querySelectorAll(".square");

function addColor() {
  
$(".square").addClass("color");

$(".square").click(function() {
$(this).removeClass("color");

if($(".color").length < 21)  {

$(".square").off("click");

  }

});

}

addColor();

function addColor2() {
	
$(".square").addClass("color1");

$(".square").click(function() {
$(this).removeClass("color1");

if($(".color1").length < 43)  {

$(".square").off("click");

	}

});

}


function addColor3() {
	
$(".square").addClass("color2");

$(".square").click(function() {
$(this).removeClass("color2");

if($(".color2").length < 91)  {

$(".square").off("click");

	}

});

}

let clock=document.querySelectorAll(".timer");
let start;
let start2;
let start3;
let start4;
let start5;
let start6;
let start7;
let start8;
let start9;
let start10;
let start11;
let start12;
let start13;
let start14;
let start15;

function tickTock() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start);
start=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

 }

}


let answer=document.querySelector(".answer");

answer.addEventListener("keydown", correctAnswer1);

function correctAnswer1(event) {
	
if(event.keyCode===13 && answer.value==="Nikola Tesla" && headline.textContent==="Famous scientist") {

clearInterval(start);
start=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel2);     

  }

if(event.keyCode===13 && answer.value==="Michael Jordan" && headline.textContent==="Famous athlete") {

clearInterval(start2);
start2=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel3);     

  }	

if(event.keyCode===13 && answer.value==="Madonna" && headline.textContent==="Famous singer") {

clearInterval(start3);
start3=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel4);     

  }	


if(event.keyCode===13 && answer.value==="Barack Obama" && headline.textContent==="Famous politician") {

clearInterval(start4);
start4=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel5);     

  }	  

if(event.keyCode===13 && answer.value==="Oprah Winfrey" && headline.textContent==="Famous TV presenter") {

clearInterval(start5);
start5=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel6);     

  }	  

if(event.keyCode===13 && answer.value==="Tom Cruise" && headline.textContent==="Famous actor") {

clearInterval(start6);
start6=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel7);     

  }	  

if(event.keyCode===13 && answer.value==="J.K.Rowling" && headline.textContent==="Famous writer") {

clearInterval(start7);
start7=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel8);     

  }	  

if(event.keyCode===13 && answer.value==="Mark Zuckerberg" && headline.textContent==="Famous developer") {

clearInterval(start8);
start8=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel9);     

  }	

if(event.keyCode===13 && answer.value==="Ludwig van Beethoven" && headline.textContent==="Famous composer") {

clearInterval(start9);
start9=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel10);     

  }	

if(event.keyCode===13 && answer.value==="Neil Armstrong" && headline.textContent==="Famous astronaut") {

clearInterval(start10);
start10=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel11);     

  }	

if(event.keyCode===13 && answer.value==="Angelina Jolie" && headline.textContent==="Famous actress") {

clearInterval(start11);
start11=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel12);     

  }	

if(event.keyCode===13 && answer.value==="James Cameron" && headline.textContent==="Famous director") {

clearInterval(start12);
start12=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel13);     

  }	

if(event.keyCode===13 && answer.value==="Mickey Mouse" && headline.textContent==="Famous cartoon character") {

clearInterval(start13);
start13=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel14);     

  }	  

if(event.keyCode===13 && answer.value==="Michael Schumacher" && headline.textContent==="Famous Formula 1 driver") {

clearInterval(start14);
start14=null;
answer.readOnly=true;
$(".square").css("visibility","hidden");

addingLevel.textContent="Next level";
addingLevel.addEventListener("click", newLevel15); 

  }	  

if(event.keyCode===13 && answer.value==="Cindy Crawford" && headline.textContent==="Famous model") {

clearInterval(start15);
start15=null;
answer.readOnly=true;

$(".square").css("visibility","hidden");
addingLevel.textContent="Click to finish";
addingLevel.addEventListener("click", final);

  }	  

}

function final() {
 
end.style.visibility="visible"; 
enigma.style.visibility="hidden";
answer.style.visibility="hidden";
$(".timer").css("visibility","hidden");     
addingLevel.removeEventListener("click", final);
addingLevel.textContent="Click to begin";
addingLevel.addEventListener("click", newLevel1);
addingLevel.addEventListener("click", playingAgain);

}

function newLevel1() {

clock[1].textContent=20;
img.src="Tesla.jpg";
headline.textContent="Famous scientist";
answer.value="";
answer.disabled=false;
start=setInterval(tickTock, 1000);
$(".square").remove();
orderSquare();
addColor();
end.style.visibility="hidden";

addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel1);

}  

function newLevel2() {

headline.textContent="Famous athlete";	
img.src="MJ.jpg";
addColor();
$(".square").css("visibility","visible");

clock[1].textContent=20;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel2);
start2=setInterval(tickTock1, 1000);

}


function tickTock1() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start2);
start2=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}


function newLevel3() {

headline.textContent="Famous singer";	
img.src="Madonna.jpg";
addColor();
$(".square").css("visibility","visible");
   
clock[1].textContent=20;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel3);
start3=setInterval(tickTock2, 1000);

}


function tickTock2() {
	
let parsing=parseInt(clock[1].textContent);
    
clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start3);
start3=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel4() {

headline.textContent="Famous politician";	
img.src="Obama.jpg";
$(".square").css("visibility","visible");
addColor();

clock[1].textContent=20;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel4);
start4=setInterval(tickTock3, 1000);

}

function tickTock3() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start4);
start4=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel5() {

headline.textContent="Famous TV presenter";	
img.src="Oprah.jpg";
$(".square").css("visibility","visible");
addColor();

clock[1].textContent=20;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel5);
start5=setInterval(tickTock4, 1000);

}

function tickTock4() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start5);
start5=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel6() {

headline.textContent="Famous actor";	
img.src="TC.jpg";
$(".square").remove();
orderSquare2();
addColor2();

clock[1].textContent=25;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel6);
start6=setInterval(tickTock5, 1000);

}

function tickTock5() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start6);
start6=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel7() {

headline.textContent="Famous writer";	
img.src="JK.jpg";
addColor2();
$(".square").css("visibility","visible");

clock[1].textContent=25;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel7);
start7=setInterval(tickTock6, 1000);

}

function tickTock6() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start7);
start7=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}


function newLevel8() {

headline.textContent="Famous developer";	
img.src="MZ.jpg";
addColor2();
$(".square").css("visibility","visible");

clock[1].textContent=25;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel8);
start8=setInterval(tickTock7, 1000);

}

function tickTock7() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start8);
start8=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel9() {

headline.textContent="Famous composer";	
img.src="Beethoven.jpg";
addColor2();
$(".square").css("visibility","visible");

clock[1].textContent=25;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel9);
start9=setInterval(tickTock8, 1000);

}

function tickTock8() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start9);
start9=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel10() {

headline.textContent="Famous astronaut";	
img.src="NA.png";
addColor2();
$(".square").css("visibility","visible");

clock[1].textContent=25;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel10);
start10=setInterval(tickTock9, 1000);

}

function tickTock9() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start10);
start10=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}


function newLevel11() {

headline.textContent="Famous actress";
img.src="AJ.jpg";
$(".square").remove();
orderSquare3();
addColor3();

clock[1].textContent=30;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel11);
start11=setInterval(tickTock10, 1000);

}

function tickTock10() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start11);
start11=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel12() {

headline.textContent="Famous director";
img.src="JC.jpg";
$(".square").css("visibility","visible");
addColor3();

clock[1].textContent=30;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel12);
start12=setInterval(tickTock11, 1000);

}

function tickTock11() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start12);
start12=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel13() {

headline.textContent="Famous cartoon character";
img.src="MM.jpg";
$(".square").css("visibility","visible");
addColor3();

clock[1].textContent=30;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel13);
start13=setInterval(tickTock12, 1000);

}

function tickTock12() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start13);
start13=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel14() {

headline.textContent="Famous Formula 1 driver";
img.src="MSC.jpg";
$(".square").css("visibility","visible");
addColor3();

clock[1].textContent=30;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel14);
start14=setInterval(tickTock13, 1000);

}

function tickTock13() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start14);
start14=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}

function newLevel15() {

headline.textContent="Famous model";
img.src="CC.jpg";
$(".square").css("visibility","visible");
addColor3();

clock[1].textContent=30;
answer.readOnly=false;
answer.value="";
addingLevel.textContent="";
addingLevel.removeEventListener("click", newLevel15);
start15=setInterval(tickTock14, 1000);

}

function tickTock14() {
	
let parsing=parseInt(clock[1].textContent);

clock[1].textContent=parsing-1;

if(clock[1].textContent < 10)  {

$(clock[1]).prepend(0);

  }

if(clock[1].textContent==0) {

clearInterval(start15);
start15=null;
answer.disabled=true;
addingLevel.addEventListener("click",newLevel1);
addingLevel.textContent="Play again";

  }

}


let firstButton=document.querySelector(".button1");
let secondButton=document.querySelector(".button2");
let thirdButton=document.querySelector(".button3");
let fourthButton=document.querySelector(".button4");
let textRules=document.querySelector(".startingGame2");
let textRules1=document.querySelector(".startingGame3");
let textRules2=document.querySelector(".startingGame1");
let textRules4=document.querySelector(".startingGame4");


addingLevel.addEventListener("click", startPlaying);

function startPlaying() {

enigma.style.visibility="visible";
headline.style.visibility="visible";
answer.style.visibility="visible";
$(".timer").css("visibility","visible");
addingLevel.textContent="";
addingLevel.removeEventListener("click", startPlaying);
start=setInterval(tickTock, 1000);

}

firstButton.addEventListener("click", goBack);

function goBack() {
  
textRules.style.visibility="hidden";
textRules1.style.visibility="hidden";
textRules2.style.visibility="visible";
textRules4.style.visibility="hidden";

}

secondButton.addEventListener("click", goToPlay);

function goToPlay() {
	
textRules1.style.visibility="hidden";
textRules.style.visibility="visible";
textRules2.style.visibility="hidden";
textRules4.style.visibility="hidden";
addingLevel.textContent="Click to begin";

if(headline.style.visibility==="visible") {

addingLevel.textContent="";

  }

}

thirdButton.addEventListener("click", rules);

function rules() {

textRules.style.visibility="hidden";
textRules1.style.visibility="visible";
textRules2.style.visibility="hidden";
textRules4.style.visibility="hidden";
addingLevel.textContent="";

}

fourthButton.addEventListener("click", policy);

function policy() {
  
textRules.style.visibility="hidden";
textRules1.style.visibility="hidden";
textRules2.style.visibility="hidden";
textRules4.style.visibility="visible";

}

function playingAgain() {
  
enigma.style.visibility="visible";
headline.style.visibility="visible";
answer.style.visibility="visible";
$(".timer").css("visibility","visible");
answer.value="";
answer.readOnly=false;
addingLevel.removeEventListener("click", playingAgain);

}