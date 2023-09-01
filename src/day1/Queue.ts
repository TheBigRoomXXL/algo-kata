
type QueueNode<T> = {
    val: T,
    next?: QueueNode<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const node = { val: item } as QueueNode<T>
        if (!this.tail) {
            this.tail = this.head = node
        } else {
            this.tail.next = node
            this.tail = this.tail.next
        }
        this.length++

    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined
        }

        const head = this.head
        this.head = this.head.next

        head.next = undefined

        this.length--

        if (this.length == 0) {
            this.tail = undefined
        }
        return head.val
    }

    peek(): T | undefined {
        return this.head?.val
    }
}
