function findFactotial(n)
{
    if(n===2)
    {
        return 2;
    }
    return n*findFactotial(n-1)
}
console.log(findFactotial(5))                   