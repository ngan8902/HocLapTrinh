function getArrayList(array){
    if(array && Array.isArray(array)){
       var returnList= [];
        for (let i = 0; i < array.length; i++){
            if(Number.isInteger(array[i])){
                if (checkSoDuong(array[i])){
                    returnList.push(array[i]);
                }
            }
        }
        return sapXepGiaTriTangDan(returnList);
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

function sapXepGiaTriTangDan(array){
    if(array && Array.isArray(array)){
        for(let i = 0 ; i < array.length-1 ; i++){
            for(let j = i + 1 ; j < array.length ; j++ ){
                if(array[j] < array[i]){
                var tam = array[j];
                array[j] = array[i];
                array[i] = tam;
                }
            }
        }
        return array;
    }else{
        return false;
    }
}