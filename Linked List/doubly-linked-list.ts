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

    public print(){

        let currentNode: Node | null = this.head;

        while(currentNode != null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

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
list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);
list.insertAtBeginning(4);
list.print();
list.reversePrint();