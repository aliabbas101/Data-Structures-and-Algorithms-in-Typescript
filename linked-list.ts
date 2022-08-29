export class Node {
    public data: any;
    public next: Node | null | undefined;
}

export class LinkedList {

    private head: Node | null | undefined = null;

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

    insert(data: any, n: number) : Node {
        
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

    public delete(n: number) {

        let currentNode: Node | null | undefined = this.head;

        if(n == 1){
            this.head = currentNode?.next;
            currentNode = null;
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


}


let list: LinkedList = new LinkedList();
list.insert({name:"Ali"}, 1)
list.insert({name:"John"}, 2)
list.insert({name:"Micheal"}, 3)
list.insert({name:"Sarah"}, 4)
list.delete(1);
list.delete(1);
list.printList();

