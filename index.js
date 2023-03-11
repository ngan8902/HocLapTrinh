function getArrayList(array){
    if(array && Number.isInteger(array)){
        for (let i = 0; i < array.length; i++){
            if (checkSoNguyenTo(array[i]) == 1) 
            console.push( array[i] );
        }
    }else{
        console.log('Gía trị nhập bị rỗng hoặc không đúng');
        return[];
    }
}

function checkSoNguyenTo(n){
    if(n && n >= 2){
        var bien = 0
        for (let j = 1 ; j <= n ; j++){
            if(n % j == 0){
                console.log(n);
                bien++;
            }
        } 
        console.log(bien);
        if(bien === 2){
            return true
        }else{
            return false;
        }
    }
}

function checkSoChan(n){
    if(n){
    for (let j = 1 ; j <= n ; j++){
        if(n % 2 == 0){
        console.log(n);
        return true;
        }else{
            return false;
        }
    }
   }
}
