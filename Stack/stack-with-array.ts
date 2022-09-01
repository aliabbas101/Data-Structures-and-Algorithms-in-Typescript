export interface IStack<T> {
    push(T): void;
    pop(): T;
    peek(): T;
    isEmpty(): boolean;

}

export class Stack<T> implements IStack<T> {

    private top: number = -1;
    private arr: T[] = [];

    public push(item: T) {
        this.top = this.top + 1;
        this.arr[this.top] = item; 

    }
    
    public pop() : T{
        if(this.top == -1){
            return;
        }
        
        let poppedItem: T = this.arr[this.top];
        this.top = this.top - 1;
        return poppedItem;
    }

    public peek(): T {
        return this.arr[this.top];
    }

    public isEmpty(): boolean {
        
        if(this.top > -1) {
            return false;
        }

        return true;
    }
}

export interface Disk {
    color: string;
    order: number;
}

let stack : Stack<Disk> = new Stack();

stack.push({color: "red", order: 0});
stack.push({color: "yellow", order: 1});
stack.push({color: "blue", order: 2});
stack.push({color: "green", order: 3});

console.log(stack.pop());
console.log(stack.peek());