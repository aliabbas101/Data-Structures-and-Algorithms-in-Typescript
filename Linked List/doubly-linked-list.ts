export class Node {
    public data: any;
    public next: Node | null;
    public prev: Node | null;
}

export class DoublyLinkedList {

    private head: Node | null | undefined = null;

    constructor(){}


    /**
     * Creates new node with next and previous node null references
     * @param data 
     * @returns
     */
    private createNewNode(data: any) : Node {
        let newNode: Node = new Node();
        newNode.data = data;
        newNode.next = null;
        newNode.prev = null;

        return newNode;
    }

    /**
     * Inserts node at the beginning of doubly linked list, resets the head pointer
     * @param data 
     * @returns 
     */
    public insertAtBeginning(data: any){
        let newNode : Node = this.createNewNode(data);

        if(this.head == null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head= newNode;

    }

    /**
     * Insert node at any specific index in Doubly linked list
     * @param data data to be inserted
     * @param index index at which node should be inserted in list
     * @returns 
     */
    public insert(data: any, index: number){

        if(index == 0){
            this.insertAtBeginning(data);
            return;
        }
        
        if(this.head == null && index > 0){
            return;
        }

        let newNode: Node = this.createNewNode(data);

        let currentNode : Node | null =  this.head;
        for(let i=0; i<index-1; i++){
            currentNode = currentNode.next;
        }

        let nextNode: Node | null = currentNode.next;
        newNode.next = nextNode;
        newNode.prev = currentNode;
        currentNode.next = newNode;
        
        if(nextNode !=  null){
            nextNode.prev= newNode;
        }

    }


    public deleteFromBeginning(){
        if(this.head == null){
            return;
        }

        let currentNode: Node | null = this.head;
        if(currentNode.next != null){
            let nextNode: Node | null = currentNode.next;
            nextNode.prev = null;       
        }

        this.head = currentNode.next;
    }

    /**
     * Deletes node at specified index
     * @param index 
     */
    public delete(index: number) {
        if(index == 0){
            this.deleteFromBeginning();
            return;
        }

        let currentNode : Node | null = this.head;
        
        for(let i=0; i < index ; i++){
            currentNode = currentNode.next;
        }

        let previousNode : Node | null = currentNode.prev;
        let nextNode : Node | null = currentNode.next;

        if(previousNode){
            previousNode.next = nextNode;
        }

        if(nextNode){
            nextNode.prev = previousNode;
        }
        currentNode = null;

    }


    /** Prints linked list in forward direction */
    public print(){

        let currentNode: Node | null = this.head;

        while(currentNode != null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    /**
     * Prints doubly linked list in reverse direction using prev link references
     */
    public reversePrint(){
        let currentNode: Node | null = this.head;

        /** First we are going to the last node of the list */
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }

        /** We will traverse back to head using prev node references */
        while(currentNode != null){
            console.log(currentNode.data);
            currentNode = currentNode.prev;
        }

    }


}

let list: DoublyLinkedList = new DoublyLinkedList();
list.insert(1, 0);
list.insert(2, 1);
list.insert(3, 2);
list.insert(4, 3);
list.delete(2);


/** Verifying whether all nodes have their prev and next links intact by printing list in forward and reverse */
list.print();
list.reversePrint();