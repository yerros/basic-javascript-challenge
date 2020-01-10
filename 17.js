const data = '1,3,4,1,201,100,4,7,42,85,12,583,13,104,31,76,49'
const dataArr = data.split(',')


function BubbleSort(a){
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length; j++){
            if(a[j] > a[j+1]){
                let num = a[j];
                a[j] = a[j+1];
                a[j+1] = num
            }
        }
    }
    return a;
}

console.log(BubbleSort(dataArr));