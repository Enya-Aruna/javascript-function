function findingBedData(arr){
    if(!Array.isArray(arr)){
         return 'please provide me an array of number'
    }
    else{
        let baddata = 0 ;
        // for(let i = 0 ; i <arr.length ; i++)
        // {
        //     if(typeof arr[i] !== 'number' ){
        //         return 'please provide me an array of number'
        //     }
        //     else{
        //         if(arr[i] < 0){
        //             baddata++ ;
        //         }
        //     }
        for (const item of arr) {
            if(typeof item !== 'number'){
                return 'please provide me an array of number';
            }
            else{
                if(item < 0){
                    baddata ++ ;
                }
            }
        }
        return baddata ;
        }
      
    }
  

const number = [ -10 , 20 , 40  , -21 ,- 91];
const  result = findingBedData(number)
console.log(result)

/* const x = false ;
console.log(x)
console.log(!x) */
