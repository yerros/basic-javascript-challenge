function Loopa(a,b){
    var Output = ''
    for (let i = a; i <= b; i++ ){        
        Output += i+', ';
    }
    return Output
}
const result = Loopa(1,100)
console.log(result)