function isValidPhotoName(photoName , ImageExtensions){
    if(typeof photoName !== 'string' || !Array.isArray(ImageExtensions)){
        return 'please provid a valid input' ;
    }
    else{
        for (const item of ImageExtensions) {
            if(photoName.toLowerCase().endsWith(item.toLowerCase())){
                return true ;
            }
            
        }
        return false ;
    }
}

const photo = 'profile.ico' ;
const extensions = ['jpg' , 'jpeg' , 'svg' , 'png'] ;
console.log(isValidPhotoName(photo , extensions))