/*
tail recursion didn`t optimized :(
*/
function _factorial(curRes, n) {
    if (n) {
        return _factorial(curRes * n, n - 1);
    }
    return curRes;
}
function factorialRecursion(n) {
    return _factorial(1, n);
}
function factorialIteration(n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
function binpow(a, n) {
    var res = 1;
    while (n) {
        if (n & 1) {
            res *= a;
        }
        a *= a;
        n >>= 1;
    }
    return res;
}
function _getSinI(x, index) {
    return binpow(-1, index % 2) *
        binpow(x, 2 * index + 1) /
        factorialIteration(2 * index + 1);
}
function sinWithEpsilon(x, eps) {
    var value = 0;
    var index = 0;
    var result = 0;
    do {
        value = _getSinI(x, index);
        result += value;
        index++;
    } while (Math.abs(value) > eps);
    return result;
}
var x = 3;
console.log(Math.sin(x));
console.log(sinWithEpsilon(x, 1e-4).toFixed(4));
