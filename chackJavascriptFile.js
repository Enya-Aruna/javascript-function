// function isJavaScriptFile(fileName){
//     if(typeof fileName !== "string"){
//         return "please provide me a valid file name "
//     }
//     else
//         // if(fileName.toLowerCase().endsWith(".js") === true){
//         //     return true ;
//         // }

//         // else{
//         //     return false ;
//         // }
//         return fileName.toLowerCase().endsWith(".js") === true ;
//     }

function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        return "please provide me a valid file name "
    }
    else{
        const arry = fileName.split(".")
       const lastElement = arry.pop();
       return lastElement.toLowerCase() === "js";
    }
  
    }

const file = isJavaScriptFile('png.jpg.html.pdf.js')
console.log( file)