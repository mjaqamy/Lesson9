// Написать свой метод myFilter в прототипе массивов

const arr = [1, 5, -4, 3, -2, 0];
Array.prototype.myFilter = function <T>(func: (value: T, index: number, array: T[]) => boolean): T[] {
  // создаём новый массив, куда будем складывать подходящие элементы
  const result = [];
  // проходим по каждому элементу массива
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      result.push(this[i]); //push() - добавляем элемент массива в result
    }
  }
  return result;
};
console.log(arr.myFilter((value) => value > 0));
