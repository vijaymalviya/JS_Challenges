{
let num = 3;
if(num > 0){
    console.log("number is positive")
}
else if(num<0){
    console.log("number is negative")
}
else{
    console.log("number is zero")
}
}

let personage = parseInt(prompt("please enter your age"));
if(personage >= 18){
    console.log("person is eligible to vote")
}
else{
    console.log("Person is not eligible to vote")
}
// number to find largest of three

let n = parseInt(prompt("Enter first number"))

let i= 0;
while(i <= n){
    let j = i;
    while(j<= i){
        
        let str = '*';
        console.log(str.repeat(j))
        j++;
    }
    i++;
}
