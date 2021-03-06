class Node {
    constructor(val){
        this.val =val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail =newNode;
        }
        else{
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        
        
        var poopedNode = this.tail;
        if(this.length==1){
            this.head= null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
    }

    shift(){
        if(!this.head) return undefined;  

            var poppedNode = this.head;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        } else {
                this.head = poppedNode.next;
                this.head.prev = null;
                poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }
}