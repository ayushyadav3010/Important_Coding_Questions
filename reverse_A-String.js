/*function reverse(str)
{
    if(!str||str.length<2||typeof str=='String')
    {
        return "thats not the string!!!";
    }
    const arr=[];
    const len=str.length-1;
    for(let i=len;i>=0;i--)
    {
        arr.push(str[i]);

    }
    console.log(arr);
    return arr.toString();
}*/

function reverse2(str)
{
    return str.split(' ').reverse().join(' ');
}
reverse2('I am Ayush')