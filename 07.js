function GanjilGenap(angka){
    var hasil = ''
    for( let i = 0; i <= 100; i++){
        if ( i % 2 != 0){
            hasil += i + ', '
        }
    }
    return hasil
}

console.log(GanjilGenap())