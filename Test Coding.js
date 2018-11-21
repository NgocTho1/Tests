
//Coding (level 1)

// 1
function array(arr) {
  let val = 0;
  arr.forEach(e => {
    val +=e;
  })
  return val;
}

var arr = [1, 2, 5, 7, 9];
console.log(array(arr));


// 2
function fib(n) { 
  if (n <= 1) return n; 
  return fib(n - 1) + fib(n - 2); 
} 

var n = 8;
console.log(fib(n));
