function getArrayList(array){
    if(array && Array.isArray(array)){
       // var returnList= [];
        for (let i = 0; i < array.length; i++){
            if(Number.isInteger(array[i])){
            if (checkSoDuong(array[i]) == 1){
                console.log(array[i]);
                break;
            }else if(i == array.length){
                console.log(-1) ;

            }        
        }
    }
    }else{
        console.log('Gía trị nhập bị rỗng hoặc không đúng');
        return[];
    }
}

function checkSoDuong(n){
    if(n && n > 0){
        return true;
    }else{
            return false;
    }
}


