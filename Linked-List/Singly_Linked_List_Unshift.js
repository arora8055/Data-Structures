class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;

        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return;
    }

    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail =  current;
            current = current.next;
        }
        this.tail = newTail;
        newTail.next = null;
        
        if(this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = current.next;
        this.length--;
        if(this.length ==0){
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else { 
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }
}