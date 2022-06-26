function findFact(n)
{
    let fac=1;
    if(n==2)
    {
        fac=2;
    }
    for(let i=2;i<=n;i++)
    {
            fac=fac*i;

    }
    return fac;
}

console.log(findFact(5))