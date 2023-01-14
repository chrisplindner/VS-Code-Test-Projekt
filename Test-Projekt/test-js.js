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
    
    if(!newName){
      throw "Problem: Name cannot be blank!!" 
    }                                  
    //Fehlermeldung, wenn eingeg. Name leer
    // nach „throw" wird kein Code weiter ausgeführt

    const [first, last] = newName.split(" ");
    //neu eingeg. Name wird zu Array gesplitet; Einträge heißen first und last  
    this.first = first; 
    this.last = last;
    //Einträge des Arrays werden als neuer Value der Property zugewiesen;
  }
}

const actor = new Person (Will, Smith);

console.log(actor.fullName);

//K: “Will Smith” Achtung: fullName wird jetzt ohne Klammern aufgerufen
