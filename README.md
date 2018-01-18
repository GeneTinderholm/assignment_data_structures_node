# assignment_data_structures_node

Determine the Big O of the following (and ideally explain briefly why):

Accessing an item by index in an array

```
O(1) time
```

Unshifting a new item into the beginning of an array

```
O(1) time
```

Pushing an item onto the end of an array

```
O(1) time
```

Upcasing a String

```
O(n) time
```

Reversing a String

```
O(n) time -> if swapping  
```

Finding the max of an array

```
O(n) time
```

splitting a String

```
O(n) time
```

Inserting a value to an Object

```
O(1) time
```

Retrieving the keys of an Object ({ foo: "bar" }.keys)

```
O(n) time
```

---

```
class Stack {
constructor(){
this.stack = []
}

push(value){

    let oldstacklength = this.stack.length
    let newstack = []
    for(let i = 0; i <= this.stack.length - 1; i ++){
     newstack[i] = this.stack[i]
    }

    newstack[oldstacklength] = value

    this.stack = newstack
    return newstack

}

pop(){
let oldstacklength = this.stack.length
let newstack = []

 for(let i = 0; i <= this.stack.length - 1 - 1; i ++){
newstack[i] = this.stack[i]
}
let popvalue = this.stack[this.stack.length - 1]

 this.stack = newstack
return popvalue
}

peek(){
let lastidx = this.stack.length - 1
return this.stack[lastidx]
}

empty(){
return this.stack.length === 0
}
}
```

---

```
class Queue {
constructor(){
this.queue = []
}

enqueue(value){

    let oldQueueLength = this.queue.length
    let newQueue = []
    for(let i = 0; i <= this.queue.length - 1; i ++){
     newQueue[i] = this.queue[i]
    }

    newQueue[oldQueueLength] = value

    this.queue = newQueue
    return newQueue

}

dequeue(){
let oldQueueLength = this.queue.length
let newQueue = []

 for(let i = 1; i <= this.queue.length - 1; i ++){
newQueue[i] = this.queue[i]
}
let dequeueValue = this.queue[0]

 this.queue = newQueue
return dequeueValue
}

peekFront(){
return this.queue[0]
}

peekBack(){
let lastidx = this.queue.length - 1
return this.queue[lastidx]
}

empty(){
return this.queue.length === 0
}
}
```

---

Linked List and Hash Tables

```
/*
class DoublyLinkedListNode {
  constructor(value, next = null, previous = null){
    this.value = value
    this.next = next
    this.previous = previous
  }

  insertNext(value){
    this.next = new LinkedListNode(value)
    return this.next
  }

  insertPrevious(value){
    this.previous = new LinkedListNode(value)
    return this.previous
  }
}

//docs: call both insertNext and insertPrevious
*/



class LinkedListNode {
  constructor(value){
    this.value = value
    this.next = null
  }

  insertNext(value){
    this.next = new LinkedListNode(value)
    return this.next
  }
}


/*
|null|8|null|

class LinkedList {
  constructor(headNode){
    this.headNode = headNode
  }

  insertNodeAtEnd(node){
    if(this.headNode.previous == null){
      this.headNode.insertPrevious(node)
      this.headNode.insertNext(node)

      node.insertNext(this.headNode)
      node.insertPrevious(this.headNode)
    } else {
      this.headNode.previous
    }
  }

  reverse(){

    let currentNode = this.headNode
    while (currentNode != this.headNode.previous){
      let nextNode = currentNode.next
      let previousNode = currentNode.previous

      currentNode.next = previousNode
      currentNode.previous = nextNode

      currentNode = currentNode.previous

    }
  }
}
*/


class LinkedList {
  constructor(headNode){
    this.headNode = headNode
  }

  insertNodeAtEnd(node){
    let currentNode = headNode
    while(currentNode.next !== null){
      currentNode = currentNode.next
    }
    currentNode.next = node
  }

  insertNodeAtIndex(node, index){
    let currentNode = headNode
    let count = 0
    while(count <= index){
      currentNode = currentNode.next
    }
    let followingNode = currentNode.next
    currentNode.next = node
    node.next = followingNode
  }

  reverse(){
    let arr = []
    let currentNode = headNode

    while(currentNode.next !== null){
      arr.push(currentNode)
      currentNode = currentNode.next
    }
    arr.push(currentNode)

    for(let i = 0; i < arr.length; i++){
      let node = arr[i]
      node.next = arr[i-1] ? arr[i-1] : null
    }

    this.headNode = arr[arr.length - 1]
  }

  checkLength(){
    let count = 0
    while(count <= index){
      currentNode = currentNode.next
    }
    return coutn
  }
}

// let a = new LinkedListNode("a")
// a.insertNext("b")

//-------------------------------
class HashTable {
  constructor(buckets = []){
    this.buckets = buckets //array of linked lists
  }

  hash(key){
    let obj = {
      "a": 0,
      "b": 1,
      //...
    }

    let char = key[0].toLowerCase()
    return obj[char]
  }

  insert(word){ //word = {term: , definition: }
    let hashed = hash(word.term)
    let currentLinkedList = this.buckets[hashed]

    let node = new LinkedListNode(word)
    if(currentLinkedList == null){
      currentLinkedList = new LinkedList(node)
    } else {
      currentLinkedList.insertNodeAtEnd(node)
    }

    this.buckets[hashed] = currentLinkedList
  }

  renderList(){
    return this.buckets.map((currentLinkedList) => {
      return currentLinkedList.checkLength()
    })
  }

  define(term){ //word.term
    let hashed = hash(term)
    let correctLinkedList = this.buckets[hashed]

    let steps = 0
    let currentNode = correctLinkedList.headNode
    while(currentNode.value.term !== term){//word object is stored as the node's value
      steps += 1
      currentNode = currentNode.next
      if(currentNode.next == null){
        console.log(steps)
        return "friendly message: not found"
      }
    }

    console.log(steps)
    return currentNode.value.definition
  }

}
```
