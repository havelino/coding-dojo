let people =[ {id:1,name:"hugo"},{id:2,name:"paco"},{id:3,name:"luis"},{id:4,name:"luis"},{id:6,name:"paco"}];

let groups={};

people.forEach(p=>{if(groups[p.name]===undefined){
                        groups[p.name]=[];
                    }
                    groups[p.name].push(p)}
            );

console.log(groups);
