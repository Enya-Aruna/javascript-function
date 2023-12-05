function findLeapYear(year){
const leapYear= [];
for(let i = 0 ; i< year.length ; i++){
    const index = i ;
    const element = year[index];
    const riminder =element % 4 ;
    if(riminder === 0){
        leapYear.push(element)
    }
   
    
}
return leapYear;
}

const totalYear =[2021 , 2022 , 2023 , 2024 , 2025 , 2026 , 2028 ]
const leapYearis = findLeapYear(totalYear)
console.log( leapYearis)