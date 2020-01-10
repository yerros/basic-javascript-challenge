
function grade(nilai){
    if (nilai >= 90){
        return 'A'
    } else if (nilai >= 80 && nilai <= 89){
        return 'B'
    } else if (nilai >= 70 && nilai <= 79){
        return 'C'
    } else if (nilai >= 60 && nilai <= 69){
        return 'D'
    } else if ( nilai <= 59){
        return 'E'
    }
}

console.log(grade(65))