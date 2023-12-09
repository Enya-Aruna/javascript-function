/* 
akta function dewa hobe called "isaJGseven()" . eta input hiseba akta number neba .
akon tumar task: 
tumak  input value and 7 ar modde pattokko ber korte hobe jodi ei pattokko 7 er er ceya cuto hoi , tobe tumak return korte hobe sey beogfol. nahole tumak return korte hobe dobule of the number.
mane j sonka input nebe seteyr digun...

input :6 
output :-1
input: -15 
output :-22 
input :15
output: 30 
*/

function isLGseven(x){
if(typeof x !== 'number'){
    return 'please provide a number' ;

}
else{
    const differ = x - 7 ;
    if(differ < 7){
        return differ ;
    }
    else{
        return x*2 ;
    }
}
}
console.log(isLGseven(6))