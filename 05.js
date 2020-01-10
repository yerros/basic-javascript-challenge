function Rating(umur){
    if(umur >= 21){
        return 'Dewasa'
    } else if( umur >= 13){
        return 'Remaja'
    } else if( umur >= 9){
        return 'Bimbingan Orang Tua'
    } else if( umur < 9){
        return 'Semua Usia'
    }
}

console.log(Rating(25))