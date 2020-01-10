function GanjilGenap(angka){
    if(angka % 2 == 0){
        return 'Genap'
    }
    return 'Ganjil'
}

const nilai = GanjilGenap(19)
console.log(nilai)
