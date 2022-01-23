class Stack {
  #head = undefined;
  #size = 0;

  push = (value) => {
    const node = {
      head: this.#head,
      value,
    };
    this.#head = node;
    this.#size++;
  };
  pop = () => {
    if (this.#head) {
      const node = this.#head;
      this.#head = node.head;
      this.#size--;
    } else {
      throw new Error('Stack is empty');
    }
  };
  getTop = () => this.#head;
  getSize = () => this.#size;
  isEmpty = () => (this.#size === 0 ? true : false);
}
module.exports = Stack;
