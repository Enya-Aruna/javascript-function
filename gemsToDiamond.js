function gemsToDiamond(x , y , z){
    if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
        return 'please provide me a number'
    }
    else if(x < 0 || y < 0 || z < 0){
        return 'please provide me a posative number'
    }
    else if(x % 1 !== 0 || y % 1 !== 0 || z % 1 !== 0 ){
        return 'please provide me a intger number'
    }
    else{
        const perGemsPowerToDiamondFriend1 = 21 ;
        const perGemsPowerToDiamondFriend2 = 32 ;
        const perGemsPowerToDiamondFriend3 = 43 ;
        const totalDiamond = 
           (x * perGemsPowerToDiamondFriend1) +
           (y * perGemsPowerToDiamondFriend2) +
           (z * perGemsPowerToDiamondFriend3 ) 
           if(totalDiamond >2000){
            return totalDiamond -2000 ;
           }
           else{
            return totalDiamond ;
           }

    }
}

const total = (gemsToDiamond(100 , 6 , 4));
console.log(total)