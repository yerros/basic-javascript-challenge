function Mirror(a){
    const arr = a.split('')
    const newArr = JSON.parse(JSON.stringify(arr))
    newArr.reverse()
    const result = arr.concat(newArr)
    console.log(result.join(''))
}

Mirror('123')