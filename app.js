/*------------------------------------------------------ For first Question */

let num = parseInt(prompt("Enter a number to check, it's good or bad."));
if(num%10==0){
    console.log(`${num} is a good number.`)
}else{
    console.log(`${num} is a bad number.`)
}
/*------------------------------------------------------ For Second Question */

let name = prompt("Enter your name here..");
let age = parseInt(prompt("Enter you age here.."));
console.log(`${name} is ${age} years old.`);

/*------------------------------------------------------ For third Question */
let quater = parseInt(prompt("Enter the number of quater to print(1-4"));
let quater1 = ['January','February','March'];
let quater2 = ['April','May','June'];
let quater3 = ['July','August','September'];
let quater4 = ['October','Novmber','December'];

switch(quater){
    case 1:
        console.log(quater1);
        break;
    case 2:
        console.log(quater2);
        break;
    case 3:
        console.log(quater4);
        break;
    case 4:
        console.log(quater4);
        break;
    default:
        console.log("Please Enter a valid option");
}
/*------------------------------------------------------ For fourth Question */
let str = prompt("Enter a string to check golden sting or not");
if(str.charAt(0)==('A')||str.charAt(0)==('a') && str.length > 5){
   console.log(`'${str}' is a golden string.`);
}else{
   console.log(`'${str}' is not a golden string.`);
}

/*------------------------------------------------------ For fifth Question */
let firstNum = parseInt(prompt("Enter first number."));
let secNum = parseInt(prompt("Enter second number."));
let thirdNum = parseInt(prompt("Enter third number."));
let largest = [firstNum,secNum,thirdNum];

if(firstNum >= secNum && firstNum >= thirdNum){
   largest = firstNum;
}else if(secNum >= firstNum && secNum >= thirdNum){
   largest = secNum;
}else{
   largest = thirdNum;
}
console.log(`largest of 3 numbers is ${largest}`);
/*------------------------------------------------------ For sixth Question */
let firstNumb = parseInt(prompt("Enter the first number."));
let secNumb = parseInt(prompt("Enter second number."));
if(firstNumb%10==secNumb%10){
   console.log(`the last digit of ${firstNumb} and ${secNumb} are same.`);
}else{
   console.log(`the last digit of ${firstNumb} and ${secNumb} are not same.`);
}
