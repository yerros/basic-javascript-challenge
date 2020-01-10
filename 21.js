function numConvert(value, from, to){
    if(from == 'dec'){
        if(to == 'hex'){
            console.log(parseInt(value, 10).toString(16));
        }
        if(to == 'bin'){
            console.log(parseInt(value, 10).toString(2));
        }
        if(to == 'oct'){
            console.log(parseInt(value, 10).toString(8));
        }
    }
    if (from == 'hex'){
        if(to == 'dec'){
            console.log(parseInt(value, 16).toString(10));
        }
        if(to == 'bin'){
            console.log(parseInt(value, 16).toString(2));
        }
        if(to == 'oct'){
            console.log(parseInt(value, 16).toString(8));
        }
    }
    if (from == 'bin'){
        if(to == 'dec'){
            console.log(parseInt(value, 2).toString(10));
        }
        if(to == 'hex'){
            console.log(parseInt(value, 2).toString(16));
        }
        if(to == 'oct'){
            console.log(parseInt(value, 2).toString(8));
        }
    }
    if (from == 'oct'){
        if(to == 'dec'){
            console.log(parseInt(value, 8).toString(10));
        }
        if(to == 'hex'){
            console.log(parseInt(value, 8).toString(16));
        }
        if(to == 'bin'){
            console.log(parseInt(value, 8).toString(2));
        }
    }
}

numConvert(10, 'dec', 'hex')
