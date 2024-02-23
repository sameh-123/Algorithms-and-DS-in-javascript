class Node{
    constructor(value=null){
        this.value=value
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.n=0
        this.head=null
    }
    append(value){
        let node=new Node(value)
        if(this.head==null){
            this.head=node
        }
        else{
            let curr=this.head
            while(curr.next!=null){
                curr=curr.next
            }
            curr.next=node
        }
        this.n++;
    }
    prepend(value){
        let node=new Node(value)
        if(this.head==null){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.n++;
    }
    size(){
        return this.n;
    }
    front(){
        if(this.head==null)return null
        return this.head.value
    }
    back(){
        if(this.head==null)return null
        let node=this.head
        while(node.next!=null){
            node=node.next
        }
        return node.value
    }
    at(index){
        if(index>=this.n||index<0)return null
        let node=this.head
        let i=0
        while(i<index){
            node=node.next
            i++
        }
        return node.value
    }
    pop(){
        if(this.head==null)return
        if(this.n==1){
            this.head=null
            this.tail=null
            this.n=0
            return
        }
        let node=this.head
        while(node.next.next!=null){
            node=node.next
        }
        delete node.next
        node.next=null
    }
    popFront(){
        if(this.head==null)return
        let nxt=this.head.next
        delete this.head
        this.head=nxt
        this.n--
    }
    contains(value){
        let node=this.head
        while(node!=null){
            if(node.value==value){
                return true
            }
            node=node.next
        }
        return false
    }
    find(value){
        let node=this.head
        let i=0
        while(node!=null){
            if(node.value==value){
                return i
            }
            node=node.next
            i++
        }
        return null
    }
    toString(){
        let s=""
        let node=this.head
        while(node!=null){
            s+="( "+String(node.value)+" ) -> "
            node=node.next
        }
        s+="null"
        return s
    }
    insertAt(value,index){
        if(index==0){
            this.prepend(value)
            return
        }
        if(index==this.n){
            this.append(value)
            return
        }
        if(index>this.n||index<0){
            return "out of boundries"
        }
        let new_node=new Node(value)
        let i=0
        let curr=this.head
        while(i<index-1){
            i++
            curr=curr.next
        }
        new_node.next=curr.next
        curr.next=new_node
        this.n++;
    }
    removeAt(index){
        if(index<0||index>=this.n)return
        if(index==0){
            this.popFront()
            return
        }
        let i=0
        let curr=this.head
        while(i<index-1){
            i++
            curr=curr.next
        }
        let nxt=curr.next.next
        delete curr.next
        curr.next=nxt
        this.n--;
    }
}
let myList=new linkedList()
myList.append(5)
myList.append(3)
myList.toString()   //expected ( 5 ) -> ( 3 ) -> null
myList.pop()
myList.toString()   //expected ( 5 ) -> null
myList.removeAt(0)
myList.toString()  // expected null
myList.insertAt(5,0)
myList.prepend(1)
myList.toString()   //expected ( 1 ) -> ( 5 ) -> null
myList.contains(3)  // expected false  
myList.contains(5)  // expected true
myList.find(1)     // expected 0
myList.find(11)   // expected null  