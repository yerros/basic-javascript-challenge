// Palindrom adalah suatu kata atau kalimat yang dibaca dari depan maupun belakang mempunyai bunyi yang sama
function Palindrom(a){
    var regex = /[\W_]/g; // select all non-alphanumeric characters
    var lowerCase = a.toLowerCase().replace(regex, '');
    var check = lowerCase.split('').reverse().join('');
    console.log(check)
    if(lowerCase === check){
        console.log('Palindrom')
    } else {
        console.log('Bukan Palindrom')
    }
}

Palindrom('A man, a plan, a canal. Panama.')