let user = {first_name: "CSS", last_name: "HTML", age: 4, website: "java2s.com"};

for(key in user){
    console.log(key);
}

let sum = 0;
let i = 1;
while(i <12){
    console.log(i);
    sum += i;
    i++;
}
console.log("The sum is "+ sum);