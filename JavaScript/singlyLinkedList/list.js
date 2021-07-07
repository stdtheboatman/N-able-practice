var ListNode = /** @class */ (function () {
    function ListNode(value, next) {
        if (value === void 0) { value = undefined; }
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return ListNode;
}());
var List = /** @class */ (function () {
    function List() {
        this._head = new ListNode();
        this._size = 0;
    }
    List.prototype._getNode = function (index) {
        var now = this._head;
        while (index--) {
            now = now.next;
        }
        return now;
    };
    List.prototype.insert = function (index, value) {
        if (index > this._size) {
            throw new Error('Index is more then list size\n');
        }
        if (index < 0) {
            throw new Error('Index should be not negative integer\n');
        }
        var prevNode = this._getNode(index);
        var newNode = new ListNode(value, prevNode.next);
        prevNode.next = newNode;
        this._size++;
    };
    List.prototype.remove = function (index) {
        if (index >= this._size) {
            throw new Error('Index didn`t consist in list \n');
        }
        if (index < 0) {
            throw new Error('Index should be not negative integer\n');
        }
        var prevNode = this._getNode(index);
        prevNode.next = prevNode.next.next;
        this._size--;
    };
    List.prototype.get = function (index) {
        if (index >= this._size) {
            throw new Error('Index didn`t consist in list \n');
        }
        if (index < 0) {
            throw new Error('Index should be not negative integer\n');
        }
        var prevNode = this._getNode(index);
        return prevNode.next.value;
    };
    return List;
}());
function listToArray(list) {
    var result = [];
    var now = list._head;
    while (now.next) {
        now = now.next;
        result.push(now.value);
    }
    console.log(result);
    return result;
}
var list = new List;
list.insert(0, 1);
list.insert(0, 2);
list.insert(0, 3);
list.insert(0, 4);
list.insert(2, 100);
list.remove(3);
list.remove(0);
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(listToArray(list));
