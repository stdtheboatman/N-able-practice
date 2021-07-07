class ListNode {
    constructor(value: any = undefined, next: ListNode = null) {
        this.value = value
        this.next = next
    }

    value: any
    next: ListNode
}

class List {
    constructor() {
        this._head = new ListNode()
        this._size = 0
    }

    _getNode(index: number): ListNode {
        let now = this._head
        while (index--) {
            now = now.next
        }

        return now
    }

    insert(index: number, value: any): void {
        if (index > this._size) {
            throw new Error('Index is more then list size\n')
        }

        if (index < 0) {
            throw new Error('Index should be not negative integer\n')
        }

        let prevNode = this._getNode(index)
        let newNode = new ListNode(value, prevNode.next)

        prevNode.next = newNode

        this._size++
    }

    remove(index: number): void {
        if (index >= this._size) {
            throw new Error('Index didn`t consist in list \n')
        }

        if (index < 0) {
            throw new Error('Index should be not negative integer\n')
        }

        let prevNode = this._getNode(index)

        prevNode.next = prevNode.next.next

        this._size--
    }

    get(index: number): number {
        if (index >= this._size) {
            throw new Error('Index didn`t consist in list \n')
        }

        if (index < 0) {
            throw new Error('Index should be not negative integer\n')
        }

        let prevNode = this._getNode(index)

        return prevNode.next.value
    }

    _head: ListNode
    _size: number
}

function listToArray(list: List): any[] {
    let result = []

    let now = list._head
    while(now.next) {
        now = now.next
        result.push(now.value)
    }

    console.log(result)

    return result
}




let list = new List

list.insert(0, 1)
list.insert(0, 2)
list.insert(0, 3)
list.insert(0, 4)


list.insert(2, 100)
list.remove(3)
list.remove(0)

console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))

console.log(listToArray(list))