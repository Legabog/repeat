// Вместо мутирования массива с помощью splice, в этой оптимизированной версии функции используется инструмент для иммутабельных систем slice.
// Этот вариант намного лучше показал себя на максимальной строке ~1,3 миллиона символов.

// Функция с splice в разных окружениях выполнялась от 7800 ms до 20000 ms
// Функция с slice выполняется практически моментально.

// Принцип: "Проходим по строке с указателем.". Добавлено число i которое является указателем.
// Все тест кейсы пройдены успешно.

function splitTextOnFragments_optimized(str) {
  function parseText(str, fragmentsCount) {
    const strArray = str.split("");
    const smski = [];
    let i = 0;
    let index = 1;

    const start = new Date().getTime();

    while (i < strArray.length) {
      const suffix = `${index}/${fragmentsCount}`;

      if (index > 9999) {
        throw new Error(
          `Слишком много символов в строке. Максимальное кол-во фрагментов должно быть в диапазоне от [0..9999].`
        );
      }

      if (strArray.length - i <= 140) {
        smski.push(strArray.slice(i).join("") + ` ${suffix}`);
        if (index !== fragmentsCount) {
          console.log(index, fragmentsCount);
          if ((index + "").length !== (fragmentsCount + "").length) {
            return parseText(str, index);
          }
          if ((index + "").length === (fragmentsCount + "").length) {
            return smski.map((e) =>
              e.replace(`/${fragmentsCount}`, `/${index}`)
            );
          }
        }
        return smski;
      } else {
        if (strArray[i + 139 - suffix.length] !== " ") {
          for (let x = i + 139 - suffix.length; x >= i; x--) {
            if (strArray[x] === " ") {
              smski.push(strArray.slice(i, x + 1).join("") + suffix);
              i = x + 1;
              index++;
              break;
            }
          }
        } else if (strArray[i + 139 - suffix.length] === " ") {
          smski.push(
            strArray.slice(i, i + 139 - suffix.length + 1).join("") + suffix
          );
          i = i + 139 - suffix.length + 1;
          index++;
        }
      }
    }

    const end = new Date().getTime();
    console.log(`Test time: ${end - start} ms.`);
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
