// Practice 01 (Variables)
//var age = prompt('What Is Your Age ?');
//document.getElementById('content').innerHTML = age;


// Practice 02 (Number)
/*
var num = 10;
var num1 =  num+ 2;
document.getElementById('content1').innerHTML = num1;
var num2 = num++;
document.getElementById('content2').innerHTML = num2;
var num3 = num--;
document.getElementById('content3').innerHTML = num3;
num += 10;
document.getElementById('content4').innerHTML = num;
*/



// Practice 03 (Function)
/*
function fun(){
 document.getElementById('content1').innerHTML = "This Is a Basic Function";
}fun();

function concatination(){
 var name = 'concatination';
 var result = 'Hello' + ' ' + name;
 document.getElementById('content2').innerHTML = result;
}concatination();


function functionwitharguments1(parameter1, parameter2){
 var result = parameter1 + ' -' + parameter2;
 document.getElementById('content3').innerHTML = result;
}functionwitharguments1('String', 'Concatination');


function functionwitharguments2(parameter1, parameter2){
 var result = 'NumberConcatinatio : ' + (parameter1 + parameter2);
 document.getElementById('content4').innerHTML = result;
}functionwitharguments2(50, 50);
*/






// Practice 04 (While Loop)
/*
var num = 1;
document.getElementById('content1').innerHTML = num;
while(num < 11){
 document.getElementById('content2').innerHTML = num;
 console.log(num);
 num++;
}
*/




// Practice 05 (For Loop)
/*
let i=1;
document.getElementById('content1').innerHTML = i;
for(i; i<=10; i++ ){
 document.getElementById('content2').innerHTML = i;
}
*/





// Practice 06 (Data Types)
/*
var number = 18;
let string = "bob";
let object = {first:'ok', last:'aha'};
let boolean = true;
let array = ['apple', 'mango', 'banana'];
let nulls = null;
*/




//Practice 07 String in javascript (Common Method)
/*
let fruit = 'Banana';
let morefruits = 'banana\napple';
document.getElementById('content1').innerHTML = morefruits;
document.getElementById('content2').innerText ='banana\napple';

var length1 = fruit.length;
var length2 = morefruits.length;
document.getElementById('content3').innerText = length1+' + '+ length2 + ' = ' +(length1 + length2);

var indexof1 = fruit.indexOf('n');// start 1
document.getElementById('content4').innerText = indexof1;

var indexof2 = fruit.indexOf('s');
document.getElementById('content5').innerText = indexof2;

var indexof3 = fruit.indexOf('nan');
document.getElementById('content6').innerText = indexof3;

var slice1 = fruit.slice(2, 4);// start 0
document.getElementById('content6').innerText = slice1;

var replace1 = fruit.replace('Ban', 123);
document.getElementById('content7').innerText = replace1;

var touppercase = fruit.toUpperCase();
document.getElementById('content8').innerText = touppercase;

var tolowercase = fruit.toLowerCase();
document.getElementById('content9').innerText = tolowercase;

var charAt1 = fruit.charAt(2);//start 0
document.getElementById('content10').innerText = charAt1;

var charAt2 = fruit[2];//start 0
document.getElementById('content11').innerText = charAt2;

var splitfruit = 'banana,mango,orange,berry';
var split = splitfruit.split(',');
document.getElementById('content12').innerText = split;
*/


//Practice 08  (Array)
/*
let fruits = ['banana','apple','orange','pineapples'];
    fruits = new Array ('banana','apple','orange','pineapples');
document.getElementById('content1').innerText = fruits;

fruits[0] = "kola";
document.getElementById('content2').innerText = fruits;

for(let i = 0; i<fruits.length; i++){
 console.log(fruits[i]);
 document.getElementById('content3').innerText = fruits[i];
}

var tostring = fruits.toString();
document.getElementById('content4').innerText = tostring;

var join = fruits.join('⚽');
document.getElementById('content5').innerText = join;

var pop = fruits.pop();
document.getElementById('content6').innerText = pop;

var push = fruits.push('PUSH');
document.getElementById('content7').innerText = push +' ---- '+ fruits;


var shift = fruits.shift();
document.getElementById('content8').innerText ='Remove first item : ---' + fruits;

var unshift = fruits.unshift('yes1st');
document.getElementById('content9').innerText ='New first item : ---' + fruits;


let newfruits = ['berry','ant','cull'];
let all = fruits.concat(newfruits);
document.getElementById('content10').innerText = all;

let slice = all.slice(1, 4);
document.getElementById('content11').innerText = slice;

let reverse = all.reverse();
document.getElementById('content12').innerText = reverse;

let allsort = all.sort();
document.getElementById('content13').innerText = allsort;

let someNumber = [5,10,5,35,10,15,40,20,45,25,30];
let sort1 = someNumber.sort();
document.getElementById('content14').innerText = sort1;

let sort2 = someNumber.sort(function(a,b) {return a-b});
document.getElementById('content15').innerText = sort2;

let sort3 = someNumber.sort(function(a,b) {return b-a});
document.getElementById('content15').innerText = sort3;

let emptyarray = [];
for(let num=0; num<=10; num++){
 emptyarray.push(num);
}
document.getElementById('content16').innerText = emptyarray;
*/












//Practice 09  (object)
/*
let student = {
 first:'Rafi',
 last:'Quazi',
 age: 20,
 studentInfo: function() {
  return this.first +' age = '+ this.age +'\n Very Good';
 }
};
document.getElementById('content1').innerText = student.first +' & '+ student.last;

student.first = 'Shafi';
document.getElementById('content2').innerText = student.first +' & '+ student.last;

document.getElementById('content3').innerText = student.studentInfo();
*/










//Practice 10  (Conditional Control flows)
/*
var age = prompt('What is your age ?');
if( (age >= 18) && (age <= 35) ){
    status = "This is true";
    document.getElementById('content1').innerText = status;
}else{
  status = "This is false";
    document.getElementById('content1').innerText = status;
}
*/




//Practice 11  (Switch)
/*
switch (6){
    case 0:  text='Weekend';break;
    case 5:  text='Weekend';break;
    case 6:  text='Weekend';break;
    default: text = 'weekday';
}
document.getElementById('content1').innerText = text;
*/








//Practice 12  (Json file)
/*
let students = `[
   {
    "name":"Quazi",
    "age":25,
    "height": 170
   },
   {
    "name":"Litle Quazi",
    "age":35,
    "height": 70
   },

   {
    "jsooon" : "Json ia an array inside carry object"
   }
]`
var json_to_js_array_object = JSON.parse(students);
document.getElementById('content1').innerText = json_to_js_array_object[1].name;
*/



//Practice 13  (Chalange-1)
function popup(){
    var birthyear = prompt('What is your birth year--?') ;
    var ageindays ='Birthday = '+ ((2020- birthyear)*365) + ' days';
    document.getElementById('chalange-1').innerText = ageindays;
}

function reset(){
    var ageindays ="";
    document.getElementById('chalange-1').innerText = ageindays;
}




//Practice 14  (Chalange-2)
function rpsGame(yourchoice){
  var humanchoice, botchoice;
  humanchoice = yourchoice.id;
  console.log(humanchoice);

  botchoice = numbertochoice(randtorpsint());
  console.log(botchoice);
  

  results = decidewinner(humanchoice, botchoice);
  console.log(results);

  message = finalmessage(results);
  console.log(message);

  rpsfrontend(yourchoice.id, botchoice, message);
}

function  randtorpsint(){
    return Math.floor(Math.random() * 3);
}

function numbertochoice(number){
    return['rock','paper','scissors'][number];
}


function decidewinner(yourchoice,computerchoice){
   var rpsdatabase = {
       'rock':{'scissors': 1, 'rock':0.5, 'paper': 0},
       'paper':{'rock': 1, 'paper':0.5, 'scissors': 0},
       'scissors':{'paper': 1, 'scissors':0.5, 'rock': 0}
   };

   var yourscore = rpsdatabase[yourchoice][computerchoice];
   var computerscore = rpsdatabase[computerchoice][yourchoice];

   return [yourscore,computerscore];
}


function finalmessage([yourscore,computerscore]){
  if(yourscore === 0){
     return {'message': 'You Lost', 'color': 'red'}; 
  }else if(yourscore == 0.5){
    return {'message': 'You  Tied', 'color': 'yellow'}; 
  }else{
    return {'message': 'You  Woan', 'color': 'green'};
 }
}


function rpsfrontend(humanimagechoice, botimagechoice, finalmessage){
    var imagedatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();

   var humandiv = document.createElement('div');
   var botdiv = document.createElement('div'); 
   var messagediv = document.createElement('div'); 

   humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "' height=150px width=150px style=' box-shadow:1px 1px 34px rgba(0, 248, 62, 0.7);'>";

   messagediv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size:60px; padding:30px; '>" + finalmessage['message'] + "</h1>"

   botdiv.innerHTML =  "<img src='" + imagedatabase[botimagechoice] + "' height=150px width=150px style=' box-shadow:1px 1px 34px rgba(255, 1, 1, 0.7);'>";



   document.getElementById('flex-box-rps-div').appendChild(humandiv); 
   document.getElementById('flex-box-rps-div').appendChild(messagediv);
   document.getElementById('flex-box-rps-div').appendChild(botdiv);  
}






//Practice 15  (Chalange-03)
var allbuttons = document.getElementsByTagName('button');
var copyallbuttons = [];
for(let i=0; i<allbuttons.length; i++){
    copyallbuttons.push(allbuttons[i].classList[1]);
}

function buttoncolorchange(buttonthingy){
  if(buttonthingy.value === 'red'){
      buttonsred();
  }else if(buttonthingy.value === 'green'){
      buttonsgreen();
  }else if(buttonthingy.value === 'reset'){
    buttonsreset(); 
  }else if(buttonthingy.value === 'random'){
    buttonsrandom(); 
  }
}


function buttonsred(){
    for(let i=0; i<allbuttons.length; i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);

        allbuttons[i].classList.add('btn-danger');
    }
}

function buttonsgreen(){
    for(let i=0; i<allbuttons.length; i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);

        allbuttons[i].classList.add('btn-success');
    }
}

function buttonsgreen(){
    for(let i=0; i<allbuttons.length; i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);

        allbuttons[i].classList.add('btn-success');
    }
}


function buttonsreset(){
    for(let i=0; i<allbuttons.length; i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);

        allbuttons[i].classList.add(copyallbuttons[i]);
    }  
}



function buttonsrandom(){
   let choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning', 'btn-info', 'btn-light'];
    for(let i=0; i<allbuttons.length; i++){
        let randomnumber = Math.floor(Math.random()*4);
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(choice[randomnumber]);
    }  
}





//Practice 16  (Chalange-04)
let blackcheckgame = {
    'you':{'scorespan':'#your-blackjack-score', 'div':'#your-box', 'score':0},
    'dealer':{'scorespan':'#dealer-blackjack-score', 'div':'#dealer-box', 'score':0},

    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],

    'cardsmaps': {'2':2, '3':3,'4':4, '5':5, '6':6, '7':7, '8':8,'9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isstand': false,
    'trunedover': false,
};

const you = blackcheckgame['you'];
const dealer = blackcheckgame['dealer'];


const hitsound = new Audio('sounds/swish.m4a');
const winsound = new Audio('sounds/cash.mp3');
const lostsound = new Audio('sounds/aww.mp3');


document.querySelector('#blackjack-hit-button').addEventListener('click',blackcheckhit);

document.querySelector('#blackjack-stand-button').addEventListener('click',dealerlogic);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackcheckimagedel);


function blackcheckhit(){
    if(blackcheckgame['isstand'] === false){
        let card = randomcards();
        showcard(card, you);
        updatescore(card, you);
        showscore(you);
    }
};

function randomcards(){
    let randomindex = Math.floor(Math.random() * 13);
    return blackcheckgame['cards'][randomindex];
};

function showcard(card,activeplayer){
 if(activeplayer['score'] <= 21){
    let cardimage = document.createElement('img');
    cardimage.src = `image/${card}.png`;
    document.querySelector(activeplayer['div']).appendChild(cardimage);
    hitsound.play();
  }
};

function blackcheckimagedel(){
    if(blackcheckgame['trunedover'] == true){
        blackcheckgame['isstand'] = false;

        let yourimage = document.querySelector('#your-box').querySelectorAll('img');
        let dealimage = document.querySelector('#dealer-box').querySelectorAll('img');

        for(i=0; i<yourimage.length; i++){
            yourimage[i].remove();
        }

        for(i=0; i<dealimage.length; i++){
            dealimage[i].remove();
        }

        you['score'] = 0;
        dealer['score'] = 0;

        document.querySelector('#your-blackjack-score').textContent = you['score'];
        document.querySelector('#your-blackjack-score').style.color = 'white';
        document.querySelector('#dealer-blackjack-score').textContent = dealer['score'];
        document.querySelector('#dealer-blackjack-score').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'white';

        blackcheckgame['trunedover'] == true;
    }
};




function updatescore(card, activeplayer){ 
   if(card == 'A'){
        if(activeplayer['score'] + blackcheckgame['cardsmaps'][card][1] <= 21){
            activeplayer['score'] += blackcheckgame['cardsmaps'][card][1];
        }else{
            activeplayer['score'] += blackcheckgame['cardsmaps'][card][0];
        }
   }else{
     activeplayer['score'] += blackcheckgame['cardsmaps'][card];
    }
};

function showscore(activeplayer){
    if(activeplayer['score'] > 21){
        document.querySelector(activeplayer['scorespan']).textContent = 'BUST!';
        document.querySelector(activeplayer['scorespan']).style.color = 'red';
    }else{
    document.querySelector(activeplayer['scorespan']).innerText = activeplayer['score'];
    }
};


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function dealerlogic(){
    blackcheckgame['isstand'] = true;
    while( (dealer['score'] < 16) && (blackcheckgame['isstand'] === true)){
        let card = randomcards();
        showcard(card, dealer);
        updatescore(card, dealer);
        showscore(dealer);
        await sleep(1000);
    } 
  
        blackcheckgame['trunedover'] = true;
        showresult(computewinner());
 
}


function computewinner(){
    let winner;
    if(you['score'] <= 21){
        if(you['score'] > dealer['score']  || (dealer['score'] > 21))
        {   
            blackcheckgame['wins'] ++; 
            winner = you;
        }
        else if(you['score'] < dealer['score'])
        {
            blackcheckgame['losses']++; 
            winner = dealer;
        }
        else //if(you['score'] === dealer['score'])
        {
            blackcheckgame['draws']++;
        }
    }else if(you['score'] > 21 && dealer['score']<=21)
    {
        blackcheckgame['losses']++;
        winner = dealer;
    }
    else //if( (you['score'] > 21) && (dealer['score']) > 21)
    {
        blackcheckgame['draws']++;
    }
    
    console.log('Winner is : ', winner);
    return winner;
}



function showresult(winner){
  let message, messagecolor;

    if(blackcheckgame['trunedover'] == true){
        if(winner === you){
            document.querySelector('#wins').textContent = blackcheckgame['wins'];
            message = "You Woan"; 
            messagecolor = 'green';
            winsound.play();
        }else if(winner === dealer){
            document.querySelector('#loses').textContent = blackcheckgame['losses'];
            message = "You Lost"; 
            messagecolor = 'red';
            lostsound.play();
        }else{
            document.querySelector('#draws').textContent = blackcheckgame['draws'];
            message = "You Draw"; 
            messagecolor = 'yellow';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messagecolor;
    };
};


























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































