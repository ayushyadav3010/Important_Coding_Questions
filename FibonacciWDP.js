//0,1,1,2,3,5,8,13,21,34,55,89,144,233..........
// fibonacci without Dynamic Programming
let calculations=0;
// function fibonacci(n)
// {
// calculations++;
// if(n<2)
// {
//     return n;
// }
// return fibonacci(n-1)+fibonacci(n-2);
// }

// Fibonacci with Dynamic Programming

function fibonacciWithDP()
{
    let cache={};
    return function fib(n)
    { calculations++;   
        if(n in cache)
        {
            return cache[n];
        }else{
            if(n<2)
            {
                return n;
            }
            else{
              
                cache[n]=fib(n-1)+fib(n-2);
                return  cache[n];
            }
        }
    }
}
const fasterfibonacci=fibonacciWithDP();
console.log("DP",fasterfibonacci(10));
console.log("Total Calculations=",calculations)

// Only space complexiety is increased but the time complexiety is O(n);