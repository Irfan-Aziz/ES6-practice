const hubby="Elias Kanchon"; //value of const variable can't be changed
console.log(hubby);
const numbers=[12,45];
numbers[1]=88;
numbers.push(12);
console.log(numbers);


let patientName="rahim chacha";
patientName="rahima chachi";//value of let variable can be changed
console.log(patientName);

let sum=0;
for(let i=0;i<10;i++){
    sum=sum+i;
}
console.log(i); //i is not defined because value of let variable cant be accessed outside the block