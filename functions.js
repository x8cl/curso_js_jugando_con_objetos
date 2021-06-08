var users = [
    {name: "Michael", 
    age:37}, 
    
    {name: "John", 
    age:30}, 
    
    {name: "David", 
    age:27}];
   
/* ¿Cómo harías print/log de la edad de John? */
for (var edad in users){
    if(users[edad].name == "John"){
        console.log(users[edad].age);
    }
}


/* ¿Cómo harías print/log del nombre del primer objeto? */
console.log(users[0].name);


/* ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop?
Tu output debería verse algo como esto 
Michael - 37
John - 30
David - 27 */
for (var todo in users){
        console.log(users[todo].name, " - ", users[todo].age);
}


/* ¿Cómo harías para imprimir el nombre de los mayores de edad? */
for (var mayorEdad in users){
    if(users[mayorEdad].age >= 18){
        console.log(users[mayorEdad].name);
    }
}