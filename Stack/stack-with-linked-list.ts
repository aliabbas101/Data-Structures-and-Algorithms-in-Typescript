import { Node, SinglyLinkedList } from "../Linked List/singly-linked-list";

export interface IStack<T> {
    push(T): void;
    pop(): T;
    peek(): T;
    isEmpty(): boolean;

}

export class Stack<T> implements IStack<T>{

    private linkedList: SinglyLinkedList<T>;

    constructor(){
        this.linkedList = new SinglyLinkedList();
    }

    public push(data: T): void {
        this.linkedList.insertAtBeginning(data);
    }

    public pop(): T {

        let itemToDelete: Node<T> = this.linkedList.head;
        this.linkedList.delete(0);

        return itemToDelete.data;
    }

    public peek(): T {
        return;
    }

    isEmpty(): boolean {
        return false;
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