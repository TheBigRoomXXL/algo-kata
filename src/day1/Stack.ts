type StackNode<T> = {
    val: T;
    prev?: StackNode<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: StackNode<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    push(item: T): void {
        let node = { val: item } as StackNode<T>

        if (this.head) { //Not empty stack
            node.prev = this.head
        }

        this.head = node
        this.length++
    }

    pop(): T | undefined {
        if (!this.head) { return undefined }
        const node = this.head

        this.head = this.head.prev
        this.length--

        return node.val
    }

    peek(): T | undefined {
        return this.head?.val
    }
}
