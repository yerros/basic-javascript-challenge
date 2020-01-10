const namaKota = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Medan', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];


function RemoveDuplicate(a){
    var b = [];
    for(let i = 0; i < a.length; i++){
        if (b.indexOf(a[i]) === -1 && a[i] !== ''){
            b.push(a[i])
        }       
    }
    return b;
}

console.log(RemoveDuplicate(namaKota));
