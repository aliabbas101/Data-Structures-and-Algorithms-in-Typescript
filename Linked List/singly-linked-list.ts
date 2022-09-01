export class Node<T> {
    public data: T;
    public next: Node<T> | null | undefined;
}

export class SinglyLinkedList<T> {

    public head: Node<T> | null | undefined = null;

    public insertAtBeginning(data: T): Node<T> {
        
        /** Creating a new temporary node */
        let temp: Node<T> = new Node();
        
        temp.data = data;

        /** Temp can either be null if list is empty or point to next node  */
        temp.next = this.head;
        
        /** Temp also becomes the new head pointer, as we are inserting at beginning */
        this.head = temp;
        
        return temp;

    }

    public insertAtEnd(data: T){
        
        let newNode: Node<T> = new Node();
        newNode.data = data;
        newNode.next = null;

        let currentNode: Node<T> = this.head;

        if(this.head == null){
            this.head = newNode;
            return;
        }

        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        
        currentNode.next = newNode;

    }

    public insert(data: T, n: number) : Node<T> {
        
        let nodeToInsert : Node<T> | null | undefined = new Node();
        nodeToInsert.data = data;
        nodeToInsert.next = null;

        /** When node needs to be inserted at the beginning of list */
        if(n == 1) {
            nodeToInsert.next = this.head;
            this.head = nodeToInsert;
            return nodeToInsert;
        }

        /** When node needs to be inserted at a specific index */
        
        /** We need to get the refernece of the head pointer first */
        let currentNode: Node<T> | null | undefined = this.head;

        /** Running the loop N-2 times as we need to skip head node reference and last null node reference */
        for(let i=0; i < n-2; i++){
            if(currentNode) {
                currentNode = currentNode.next;
            }
        }

        if(currentNode){
            nodeToInsert.next = currentNode.next;
            currentNode.next = nodeToInsert;
        }

        return nodeToInsert;
    }

    public reverse(): Node<T> {
        let currentNode: Node<T> | null | undefined = this.head;
        let previousNode: Node<T> | null | undefined = null;
        let nextNode: Node<T> | null | undefined

        while(currentNode != null){
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this.head = previousNode;
        return this.head;
    }


    public reverseRecursive(currentNode: Node<T>): Node<T> {

        if(currentNode.next == null) {
            this.head = currentNode; 
            return;
        }

        this.reverseRecursive(currentNode.next);
        let nextNode : Node<T> = currentNode.next;
        nextNode.next = currentNode;
        currentNode.next = null;
    }


    public delete(n: number){

        let currentNode: Node<T> | null | undefined = this.head;

        if(n == 1){
            this.head = currentNode?.next;
            currentNode = null;
            return;
        }

        for(let i=0; i < n-2; i++){
            if(currentNode){
                currentNode = currentNode.next;
            }
        }

        if(currentNode){
            let temp: Node<T> | null | undefined = currentNode.next;
            currentNode.next = temp?.next;
            temp = null;
        }

    }

    public printList(){
        
        let temp: Node<T> | null | undefined = this.head;

        while(temp != null){
            console.log(temp?.data);
            temp = temp?.next;
        }
    }

    public printRecursive(node: Node<T>){
        if(node == null) return;
        this.printRecursive(node.next);
        console.log(node.data);
    }


}

export class Person {
    name: string;
}

let list: SinglyLinkedList<Person> = new SinglyLinkedList();
list.insertAtEnd({name:"Ali"});
list.insertAtEnd({name:"John"});
list.insertAtEnd({name:"Micheal"});
list.insertAtEnd({name:"Sarah"});

list.printList()

list.reverseRecursive(list.head);
list.printList()

