function kabisat(tahun){
    if ((tahun % 4) === 0){
        if ((tahun % 100) !== 0){
            output = 'Tahun Kabisat'
        } else {
            if ((tahun % 400) === 0){
                output = 'Tahun Kabisat'
            } else {
                output = 'Bukan Tahun Kabisat'
            }
        }
    } else {
        output = 'Bukan Tahun Kabisat'
    }
    return output
}

console.log(kabisat(2001))