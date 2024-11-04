

// Answer 1

function func(num){
    if(num % 2 == 0){
        document.write(` <br> Answer for first question: ${num} is a even number`+`<br>`);
    }
    else{
        document.write(`<br> Answer for first question: ${num} is a odd number`+`<br>`);
    }
}

func(4)


// Answer 2


function reverseTheString(str){
    
   document.write(`<br> Answer for second question: `+str.split('').reverse().join('')+`<br>`);
}
reverseTheString('hello');


//Answer 3

let add = 0;
let arr = [1,2,3,4,5,6,7];
for(let i = 0; i<=arr.length; i++){
    if(arr[i] % 2 == 0){
        add += arr[i];
        
    }   
}
document.write(`<br> Answer for third question: <br>`+add+`<br>`);



//Answer 4

function checkPalindrome(str3) {

const arr1 = str3.split('');
const reverse = arr1.reverse();
const strFinal = reverse.join('');

if(str3 == strFinal) {
    document.write(`<br> ${str3}  Answer for fourth question :: The input string is a palindrome <br>`+`<br>`);
}
else {
   document.write(` <br>${str3}  Answer for fourth question :: The input string is not a palindrome `+`<br>`);
}
}
checkPalindrome('madam');
   


 // Answer 5


 let arr3 =  [1, 2, 2, 3, 4, 4];

 function removingDuplicates(arr3) {
     return [...new Set(arr3)];
 }
 document.write(" Answer for fifth question : After removing the duplicates from the array : "+removingDuplicates(arr3)+`<br>`);

       



// Answer 6

function factorial(n){
    if(n == 0 ){
        return 1;
    }
    return (n * factorial(n-1));
}
document.write(`<br> Answer for sixth question:`+factorial(5)+`<br>`);


// Answer 7

function capitalize(str) {
    let word = str.toLowerCase().split(' ');
    for (let i = 0; i < word.length; i++) {
        
        word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);     
    }
    
    return word.join(' '); 
 }
 
 document.write(capitalize(`<br> Answer for seventh question: hello world`)+`<br>`);




 //Answer 8
 function sum(a) {
   return function sum(b){
    return function sum(c){
        return a + b + c;
    }
   }
}

document.write(`<br> Answer for Eight question : `+sum(1)(2)(3)+`<br>`);




let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

if(username == '' ){
    document.textContent = "Invalid"
}

