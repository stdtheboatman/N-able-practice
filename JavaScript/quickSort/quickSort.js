/*
get integer value in range 'left' ... 'right'
*/
function getRandomInteger(left, right) {
    left = Math.floor(left)
    right = Math.floor(right)

    return Math.floor(Math.random() * (right - left + 1) + left)
}

/*
sort everything that have access with []

*unstable sort
*/
function _quickSort(a, left, right) {
    if (left >= right) {
        return
    }

    let index = getRandomInteger(left, right)
    let q = a[index];

    // ... warning ... row upper need ;
    [a[index], a[right]] = [a[right], a[index]]

    let pointer = left - 1;
    for(let i = left; i <= right; i++) {
        if (a[i] <= q) {
            pointer++
            [a[i], a[pointer]] = [a[pointer], a[i]]
        }
    }

    _quickSort(a, left, pointer - 1)
    _quickSort(a, pointer + 1, right)
}

function quickSort(a) {
    _quickSort(a, 0, a.length - 1)
}

function getRandomArray() {
    let n = getRandomInteger(1, 10)

    let a = []
    for(let i = 0; i < n; i++) {
        a.push(getRandomInteger(0, n * 2 / 3))
    }

    return a
}

/*
check my sort function
*/
let a, b
do {
    a = getRandomArray()

    /*
    copy array 'a' to 'b'
    */
    b = [...a]

    quickSort(a)
    b.sort()

    console.log('a:')
    console.log(a)
    console.log('b:')
    console.log(b)

}
while(a !== b)