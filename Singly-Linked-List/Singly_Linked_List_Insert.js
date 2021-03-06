class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return null;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
            this.tail = newTail;
            this.tail.next = null;
        
        this.length--;

        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift(){
            if(!this.head) return undefined;
            var oldHead = this.head;
            this.head = oldHead.next;
            this.length--;
            if(this.length == 0) {
                this.head = null;
                this.tail = null
            }
            return oldHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else {
                newNode.next = this.head;
                this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index<0||index>=this.length) return null;

        var counter = 0;
        var current = this.head;
        while(index!=counter){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index,val){
        var foundNode =  this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index,val){
        if(index<0||index>this.length) return false;

        if(index === this.length) return !!this.push(val);

        if(index === 0) return !!this.unshift(val);


        var newNode  = new Node(val);
        var prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next =temp;
        this.length++;
        return true;
    }
}