// Сам концепт строится на мутировании массива с помощью splice. Выполняем алгоритм пока в массиве, который представляет собой посимвольно спличенную строку, есть элементы. При этом соблюдаются все условия разбивки.

function splitTextOnFragments(str) {
  function parseText(str, fragmentsCount) {
    const strArray = str.split("");
    const smski = [];
    let index = 1;

    while (strArray.length) {
      const suffix = `${index}/${fragmentsCount}`

      if (index > 9999) {
        throw new Error(
          `Слишком много символов в строке. Максимальное кол-во фрагментов должно быть в диапазоне от [0..9999].`
        );
      }

      // Если длина массива + длина суффикса допустмая(<=140)
      if (strArray.length + suffix.length <= 140) {
        smski.push(strArray.splice(0).join("") + ` ${suffix}`);
        // Если индекс оказался больше минимального, подсчитанного количества фрагментов.
        if (index !== fragmentsCount) {
          // Если индекс оказался больше по разрядам, тоесть занимает больше места в строке, например был 9, а стал  10 (9 = 1 символ, 10 = 2 символа), то пересчитываем заного всё с новым значением.
          if ((index + "").length !== (fragmentsCount + "").length) {
            return parseText(str, index);
          }
          // Если индекс по разрядам остался таким же, например был 4, а стал 5(4 = 1 символ, 5 = 1 символ). То нам надо только поменять это в результирующем значении
          if ((index + "").length === (fragmentsCount + "").length) {
            const result = [];
            smski.map((e) =>
              result.push(e.slice(0, e.indexOf("/") + 1).concat(`${index}`))
            );
            return result;
          }
        }
        return smski;

      } 
        // Если символов больше 140, то сплитим
        else {
        if (strArray[139 - suffix.length] !== " ") {
          // Поиск ближайшего пробела с учётом суффикса
          for (let x = 139 - suffix.length; x >= 0; x--) {
            if (strArray[x] === " ") {
              smski.push(strArray.splice(0, x + 1).join("") + suffix);
              index++;
              break;
            }
          }
        } else if (strArray[139 - suffix.length] === " ") {
          smski.push(
            strArray.splice(0, 139 - suffix.length + 1).join("") +
            suffix
          );
          index++;
        }
      }
    }
    return smski;
  }

  function splitText(str) {
    if (str.length <= 140) return [str];
    // Минимальное количество фраментов. Без суффиксов!!!. Необходимо для первого прогона.
    const minFragments = Math.ceil(str.length / 140);
    return parseText(str, minFragments);
  }

  return splitText(str);
}
