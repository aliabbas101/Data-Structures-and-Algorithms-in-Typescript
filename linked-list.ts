export class Node {
    public data: any;
    public next: Node | null;
}

export class LinkedList {

    private head: Node | null = null;

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

    public printList(){
        
        let temp: Node | null = this.head;

        while(temp != null){
            console.log(temp?.data);
            temp = temp?.next;
            
        }
    }


}


let list: LinkedList = new LinkedList();
list.insertAtBeginning({name: "Ali", age:23});
list.insertAtBeginning({name: "John", age:22});
list.insertAtBeginning({name: "Micheal", age:21});
list.printList();

