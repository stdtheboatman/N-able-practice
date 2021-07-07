/*
tail recursion isn`t optimized :(
*/
function _factorial(curRes: number, n: number): number {
    if (n) {
        return _factorial(curRes * n, n - 1)
    }

    return curRes
}

function factorialRecursion(n: number): number {
    return _factorial(1, n)
}

function factorialIteration(n: number): number {
    let res = 1
    for (let i = 1; i <= n; i++) {
        res *= i
    }

    return res
}

function binpow(a: number, n: number): number {
    let res = 1
    while(n) {
        if (n & 1) {
            res *= a
        }

        a *= a
        n >>= 1
    }

    return res
}

function _getSinI(x: number, index: number): number {
    return binpow(-1, index % 2) *
        binpow(x, 2 * index + 1) /
        factorialIteration(2 * index + 1)
}

function sinWithEpsilon(x: number, eps: number): number {
    let value = 0
    let index = 0
    let result = 0

    do {
        value = _getSinI(x, index)
        result += value

        index++

    } while(Math.abs(value) > eps)

    return result
}

let x = 3
console.log(Math.sin(x))
console.log(sinWithEpsilon(x, 1e-4).toFixed(4))