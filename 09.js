const word = 'saya ingin makan nasi goreng'

function Balik(word){
    arr = word.split(' ')
    arr.reverse()
    const hasil = arr.join(' ')
    console.log(hasil)
}

Balik(word)