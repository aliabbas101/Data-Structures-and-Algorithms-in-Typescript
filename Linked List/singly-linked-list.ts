export class Node {
    public data: any;
    public next: Node | null | undefined;
}

export class SinglyLinkedList {

    public head: Node | null | undefined = null;

    public insertAtBeginning(data: any): Node {
        
        /** Creating a new temporary node */
        let temp: Node = new Node();
        
        temp.data = data;

        /** Temp can either be null if list is empty or point to next node  */
        temp.next = this.head;
        
        /** Temp also becomes the new head pointer, as we are inserting at beginning */
        this.head = temp;
        
        return temp;

    }

    public insertAtEnd(data: any){
        
        let newNode: Node = new Node();
        newNode.data = data;
        newNode.next = null;

        let currentNode: Node = this.head;

        if(this.head == null){
            this.head = newNode;
            return;
        }

        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        
        currentNode.next = newNode;

    }

    public insert(data: any, n: number) : Node {
        
        let nodeToInsert : Node | null | undefined = new Node();
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
        let currentNode: Node | null | undefined = this.head;

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

    public reverse(): Node {
        let currentNode: Node | null | undefined = this.head;
        let previousNode: Node | null | undefined = null;
        let nextNode: Node | null | undefined

        while(currentNode != null){
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }

        this.head = previousNode;
        return this.head;
    }


    public reverseRecursive(currentNode: Node): Node {

        if(currentNode.next == null) {
            this.head = currentNode; 
            return;
        }

        this.reverseRecursive(currentNode.next);
        let nextNode : Node = currentNode.next;
        nextNode.next = currentNode;
        currentNode.next = null;
    }


    public delete(n: number){

        let currentNode: Node | null | undefined = this.head;

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
            let temp: Node | null | undefined = currentNode.next;
            currentNode.next = temp?.next;
            temp = null;
        }

    }

    public printList(){
        
        let temp: Node | null | undefined = this.head;

        while(temp != null){
            console.log(temp?.data);
            temp = temp?.next;
        }
    }

    public printRecursive(node: Node){
        if(node == null) return;
        this.printRecursive(node.next);
        console.log(node.data);
    }


}

let list: SinglyLinkedList = new SinglyLinkedList();
list.insertAtEnd({name:"Ali"});
list.insertAtEnd({name:"John"});
list.insertAtEnd({name:"Micheal"});
list.insertAtEnd({name:"Sarah"});

list.printList()

list.reverseRecursive(list.head);
list.printList()

