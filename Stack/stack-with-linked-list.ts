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