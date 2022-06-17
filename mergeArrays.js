function mergeSortedArrays(array1, array2) {
    const mergeArray = []
    let array1Item = arr1[0]
    let array2Item = arr2[0]
    let i = 1;
    let j = 1;

    if (arr1.length == 0) {
        return arr2;
    }
    if (arr2.length == 0) {
        return arr1
    }
    
    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            mergeArray.push(array1Item)
            array1Item = array1[i];
            i++
        } else {
            mergeArray.push(array2Item)
            j++
        }

        return mergeArray;
    }


}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])