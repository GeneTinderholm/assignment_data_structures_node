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
