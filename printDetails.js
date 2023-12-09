function printDetails(person){
    if(typeof person !== 'object'){
        return "you will provide an object"
    }
    else{
        const name= person.name || 'nai' ;
        const age= person.age || 'nai' ;
        const email= person.email|| 'nai' ;
        const jamay= person.jamay|| 'nai' ;
        return 'amr nam '  + name +  '. amr boyos ' + age + '. amr email ' + email + '. amr jamay ' + jamay + '.'
}
}

const obj = {
    name : "salma"  ,
    age : 20 ,
    email :"salma@gmail.com "
}
const declaration = printDetails(obj);
console.log(declaration)
