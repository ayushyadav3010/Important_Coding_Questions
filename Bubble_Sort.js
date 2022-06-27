const array=[87,23,65,1,88,12,43,23,54,0,999,4]
function bubbleSort(array)
{
    let length=array.length;
    for(let i=0;i<length;i++)
    {
        for(let j=1;j<length-i;j++)
        {
            if(array[j]>array[j-1])
            {
            let temp=array[j-1];
            array[j-1]=array[j];
            array[j]=temp;
        }
    }
    }
}


console.log(bubbleSort(array))
console.log(array)