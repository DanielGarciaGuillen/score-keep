import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(()=> {
    class Person {
        constructor(name = 'Anonymous', age = 0){
            this.name = name;
            this.age = age;
        }
        getGreeting() {
            return `Hi I am ${this.name}.`;
        }

        getPersonDescription()  {
            return `This is ${this.name} and he is ${this.age} old.`;
        }
    }
    
    class Employee extends Person{
        constructor(name, age, title){
            super(name, age);
            this.title = title;
        }
        hasJob(){
            return !!this.title;
        }

        getGreeting(){
            if(this.title){
                return `Hi! I am ${this.name} I work as ${this.title}`;
            }else{
                return super.getGreeting();
            }
        }
    }

    class Programmer extends Person {
        constructor(name, age, language = 'Assembly'){
            super(name, age);
            this.language = language;
        }
        getGreeting(){
            if(this.language){
                return `Hi! I am ${this.name} and I programm on ${this.language}.`
            }else{
                return super.getGreeting();
            }
        }
    }

   

    let me = new Employee('Mike',10, 'db admin');
    console.log(me.getGreeting());
    let you = new Employee('Dan',10);
    console.log(you.getGreeting());
    let dan = new Programmer('Baby',10, "javascript");
    console.log(dan.getGreeting());
});

