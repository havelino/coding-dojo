function containsName(people,name){
    return people.some(p=>p.name === name);
}

let people =[ {id:1,name:"hugo"},{id:2,name:"paco"},{id:3,name:"luis"}];

const NAME = "luis";
console.log(`${NAME} exist in people : ${containsName(people,NAME)}`);