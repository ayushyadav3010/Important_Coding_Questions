function fibonaccaiRec(n)
{
    if(n<2)
    {
        return n;
    }
    return fibonaccaiRec(n-1)+fibonaccaiRec(n-2);
}
console.log(fibonaccaiRec(8))