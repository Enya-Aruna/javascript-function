function mindGame(x){
    if(typeof x !== "number" || x <= 0){
        return "please provide a valid number"
    }
    else {
        const result = (((x*3)+10)/2)-5 ;
        return result ;
    }
    
}
console.log(mindGame('10'))