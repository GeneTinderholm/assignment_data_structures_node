
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
    let currentNode = this.headNode;
    while(currentNode.next){
      currentNode = currentNode.next
    }
    return count
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
      "c": 2,
      "d": 3,
      "e": 4,
      "f": 5,
      "g": 6,
      "h": 7,
      "i": 8,
      "j": 9,
      "k": 10,
      "l": 11,
      "m": 12,
      "n": 13,
      "o": 14,
      "p": 15,
      "q": 16,
      "r": 17,
      "s": 18,
      "t": 19,
      "u": 20,
      "v": 21,
      "w": 22,
      "x": 23,
      "y": 24,
      "z": 25,
    }

    let char = key[0].toLowerCase()
    return obj[char]
  }

  insert(word){ //word = {term: , definition: }
    let hashed = this.hash(word.term)
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
      return ( currentLinkedList.checkLength() + 1)
    })
  }

  define(term){ //word.term
    let hashed = this.hash(term)
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
  read(dictFile){
    const fs = require('fs');
    let dict = fs.readFileSync(dictFile);
    dict = JSON.parse(dict);
    for(let i = 0; i < dict.words.length; i++){
      this.insert(dict.words[i]);
    }
  }

}

let testHash = new HashTable();
testHash.read('./dict.json');
console.log(testHash.renderList());
console.log(testHash.define("apple"));
