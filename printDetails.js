function printDetails(person){
    if(typeof person !== 'object'){
        return "you will provide an object"
    }
    else{
      
        const name= person.name || '__' ;
        const age= person.age || '__' ;
        const email= person.email|| '__' ;
        const jamay= person.jamay|| '__' ;
        return   name + age + email +jamay ;
}
}

const obj = {
    name : "salma"  ,
    age : 20 ,
    email :"salma@gmail.com "
}
const declaration = printDetails(obj);
console.log(declaration)
