function evenVsOdd(number){

    const reminder = number % 2 ;
  if(reminder === 0){
   return true ;
  }
  else{
    return false ;
  };
};

console.log(evenVsOdd(201));
console.log(evenVsOdd(1026));
