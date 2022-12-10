// Your code here
class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
    return;
  }

  static introducePeople(array){
    let validArray = true;

    if(!(array instanceof Array)){
      throw new Error('introducePeople only takes an array as an argument.');
    }

    array.forEach(element => {
      if(!(element instanceof Person)){
        validArray = false;
        throw new Error('All items in array must be Person class instances.');
      }
    }
  )
  if(validArray === true ){
      array.forEach(Person => {
        Person.introduce(); 
          }
        )
      }
  }  
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}