class Node{
    constructor(value,next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head= null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0 
    }

    getSize() {
        return this.size
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev=prev.next
            }
            prev.next= node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head=node
        }
        else {
            node.next= this.head
            this.head=node
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size){
            return
        }
        if(index===0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; index-1;i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    
    print() {
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head
            let listValue = ''
            while(curr) {
                listValue += `${curr.value}`
                curr=curr.next
            }
            console.log("🚀 ~ file: index.js:40 ~ LinkedList ~ print ~ listValue:", listValue)          
        }
    }
}

const list = new LinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(40)
list.print()
list.getSize()
list.insert(30,1)
list.print()


