function mindGame(x){
    if(typeof x !== "number"){
        return "please provide a number"
    }
    else if(x <= 0){
        return "plase provide a positive number"
    }
    else {
        const result = (((x*3)+10)/2)-5 ;
        return result ;
    }
    
}
console.log(mindGame('10'))