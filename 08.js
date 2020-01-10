function Kelipatan(angka){
    var hasil = ''
    for(let i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            if(i % 10 == 0){
                hasil += i + ' Genap Kelipatan Lima, '
            }else{
                hasil += i + ' Genap  '
            }

        } else {
            if( i % 5 == 0){
                hasil += i +' Ganjil Kelipatan Lima, '
            } else {
                hasil += i +' Ganjil, '
            }
        }
    }
    return hasil
}

console.log(Kelipatan())