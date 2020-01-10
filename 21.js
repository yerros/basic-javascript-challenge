function numConvert(value, from, to){
    var dec = 'dec'
    var bin = 'bin'
    switch(from == dec){
        case to == 'bin':
            console.log(parseInt(value, 10).toString(2));
            break;
        case to == 'hex':
            console.log(parseInt(value, 10).toString(16));
            break;
        case to == 'oct':
            console.log(parseInt(value, 10).toString(8));
            break;
        default:
    }
}

numConvert(10, 'dec', 'hex')



//parseInt(key, 10).toString(16)