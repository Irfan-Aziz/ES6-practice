function add(num1,num2=20){
    
    return num1+num2;
}
const total=add(15,1);//In this case, num2=20 is not considered rather num2=1


console.log(total);