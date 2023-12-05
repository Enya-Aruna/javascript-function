function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        // console.log('Your Year is leap Year' , year );
        return true ;
    }
    else{
        // console.log('Your Year is not a leap Year' , year );
        return false ;
    }
}

const yearIs = isLeapYear(2024);
const yearIs1 = isLeapYear(1949);
console.log('Your Year is leap Year' , yearIs)
console.log('Your Year is leap Year' , yearIs1)

