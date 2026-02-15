/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать класс Stack

class Stack<T> {
  /** Добавляет элемент в стек */
  push(item: T) {}

  /** Удаляет и возвращает верхний элемент */
  pop() {}

  /** Проверяет, пуст ли стек */
  isEmpty() {}

  /** Количество элементов в стеке */
  get size() {
    return 0;
  }

  /** Очищает стек */
  clear() {}
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.size); // 2
console.log(stack.isEmpty()); // false
