"use strict";

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get fullName() {
    return `${this.first} $${this.last}`;
  }
  set fullName(newName){
    const [first, last] = newName.split(" "); //neu eigeg. Name wird zu Array gesplitet; Einträge heißten first und last  
    this.first = first;   //Einträge des Arrays werden als neuer Value der Property zugewiesen; 
    this.last = last;
  }
}

const actor = new Person (Will, Smith);

console.log(actor.fullName());


