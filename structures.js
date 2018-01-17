class Stack {
  constructor(string) {
    this.stack = string.split("");
  }
  push(el) {
    this.stack[this.stack.length] = el;
  }
  pop() {
    let result = this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;
    return result;
  }
  peek() {
    return this.stack[0];
  }
  empty(){
    return this.stack.length === 0;
  }
}

let x = new Stack("Hello");


class Queue {
  constructor() {
    this.stack = [];
  }
  enqueue() {}
  dequeue() {}
  peek() {}
}
