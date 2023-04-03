'use strict';
//lec 5 task 1

let browser = `Edge`;
if (browser == `Edge`) {
    alert("You 've got the Edge!");
}
else if (browser == 'Chrome' || browser == 'FireFox' || browser == 'Safari' || browser == 'Opera') {
    alert('Okey We Support This Browser Too');
}
else {
    alert('We Hope that this page looks ok !')
}
// lec 5 task 2
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// lec 5 task 3
/*
let fruits = ["Apples", "Pear","Orange"];
//push a new value into the "copy"
let shoppingcart = fruits;
 shoppingcart.push("Banana");
// what's in fruits?
["Apples", "Pear","Orange","Banana"];
 Length = 4
 Q:What is this code going to show -> alert(Fruits.Length)?
 A::the length of fruits array
 A::thats mean push function doing affect on the original array
*/

//lec 5 task 5
/* 
let arr =["a","b"];
arr.push(function(){
    alert (this);
})
arr[2];

result is -> array values
beacuse index[2] have a function that returning array values
*/

/*
Q: If The compare function returns a value less than 0 , then a comes first
A:: beacuse a is less than 0
Q:if The Compare Function returns a values greater than 0 , then b comes first
A:: beacuse b is greater than a and 0
Q:if the compare function returns 0, a and b remain unchanged with respect to each other,
A::thats mean  a and b are equal
*/