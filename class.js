class student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="kolimunnesa School";
    }
}
const student1=new student(12,"shuvo");
const student2=new student(22,"monir");
const student3=new student(29,"Bhuttu");
console.log(student3);
console.log(student1.name,student2.name);