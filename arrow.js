/**const doubleIt=function myFun(num){
    return num*2;
}*/
const doubleIt=num=>num*2;
const result=doubleIt(50);
const add=(x,y)=> x+y;
const result2=add(50,70);
const give5=()=>5;
const result3=give5();
const doMath=(a,b)=>{
    const sum=a+b;
    const diff=a-b;
    const result=sum*diff;
    return result;

}
const result4=doMath(7,5);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
