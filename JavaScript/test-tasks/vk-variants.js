// str_1 simple case return 1 fragment
const str_1 = `Lorem ipsum dolor sit amet consectetur adipiscing elit`
// str_2 simple case return 2 fragments
const str_2 = `Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus`
// str_3 worst case in my simple version it will be 9/9, 10/9. New version correct.
const str_3 = `Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna
pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit
amet posuere risus`

function splitText(str) {
  const strArray = str.split("");
  const smski = [];

  if (strArray.length <= 140) {
    smski.push(str);
    return smski;
  }

  const numberAll = Math.ceil(strArray.length / 140); // Максимальное кол-во фрагментов

  let index = 1;

  while (strArray.length) {
    const suffix = `${index}/${numberAll}`;
    const suffixLength = suffix.split("").length;

    if (index > 9999) {
      throw new Error(
        `Слишком много символов в строке. Максимальное кол-во фрагментов должно быть в диапазоне от [0..9999].`
      );
    }

    if (strArray.length + suffixLength <= 140) {
      smski.push(strArray.splice(0).join("") + ` ${suffix}`);
      return smski;
    } else {
      if (strArray[139 - suffixLength] !== " ") {
        for (let x = 139 - suffixLength; x >= 0; x--) {
          if (strArray[x] === " ") {
            smski.push(strArray.splice(0, x + 1).join("") + suffix);
            index++;
            break;
          }
        }
      } else if (strArray[139 - suffixLength] === " ") {
        smski.push(
          strArray.splice(0, 139 - suffixLength + 1).join("") + suffix
        );
        index++;
      }
    }
  }

  return smski;
}

// for (let i = 1; i <= numberAll; i++) {
//   const suffix = `${i}/${numberAll}`;
//   const suffixLength = suffix.split("").length;

//   if (strArray.length + suffixLength <= 140) {
//     smski.push(strArray.join("") + ` ${suffix}`);
//   } else {
//     if (strArray[139 - suffixLength] !== " ") {
//       for (let x = 139 - suffixLength; x >= 0; x--) {
//         if (strArray[x] === " ") {
//           smski.push(strArray.splice(0, x + 1).join("") + suffix);
//           break;
//         }
//       }
//     } else if (strArray[139 - suffixLength] === " ") {
//       smski.push(
//         strArray.splice(0, 139 - suffixLength + 1).join("") + suffix
//       );
//     }
//   }
// }


// function splitText(str) {
//   const strArray = str.split("");
//   const smski = [];

//   if (strArray.length <= 140) {
//     smski.push(str);
//     return smski;
//   }

//   const numberAll = Math.ceil(strArray.length / 140) + ""; // Максимальное кол-во фрагментов
//   const numberLength = numberAll.split("").length
//   let index = 1;

//   while (strArray.length) {
//     const suffix = [`${index}`, "/"];
//     for (let i = 1; i <= numberLength; i++) {
//       suffix.push("$")
//     }
//     const suffixLength = suffix.length;

//     if (index > 9999) {
//       throw new Error(
//         `Слишком много символов в строке. Максимальное кол-во фрагментов должно быть в диапазоне от [0..9999].`
//       );
//     }

//     if (strArray.length + suffixLength <= 140) {
//       smski.push(strArray.splice(0).join("") + ` ${suffix.join("")}`);
//       smski.map(e => {
//         let replacer = suffix.slice(suffix.indexOf("/") + 1).join("")
//         console.log(e.replace(replacer, `${index}`))
//         e = e.replace(replacer, `${index}`)
//         return 2
//       })
//       return smski;
//     } else {
//       if (strArray[139 - suffixLength] !== " ") {
//         for (let x = 139 - suffixLength; x >= 0; x--) {
//           if (strArray[x] === " ") {
//             smski.push(strArray.splice(0, x + 1).join("") + suffix.join(""));
//             index++;
//             break;
//           }
//         }
//       } else if (strArray[139 - suffixLength] === " ") {
//         smski.push(
//           strArray.splice(0, 139 - suffixLength + 1).join("") + suffix.join("")
//         );
//         index++;
//       }
//     }
//   }

//   return smski;
// }


// function parseText(str, fragmentsCount) {
//   const strArray = str.split("");
//   const smski = [];
//   let index = 1;

//   while (strArray.length) {
//     const suffix = [`${index}`, "/", `${fragmentsCount}`];
//     const suffixLength = suffix.length;

//     if (index > 9999) {
//       throw new Error(
//         `Слишком много символов в строке. Максимальное кол-во фрагментов должно быть в диапазоне от [0..9999].`
//       );
//     }

//     if (strArray.length + suffixLength <= 140) {
//       smski.push(strArray.splice(0).join("") + ` ${suffix.join("")}`);
//       if (index !== fragmentsCount) {
//         if ((index + "").split("").length !== (fragmentsCount + "").split("").length) {
//           return parseText(str, index)
//         }

//         if ((index + "").split("").length === (fragmentsCount + "").split("").length) {
//           const result = []
//           smski.map(e => result.push(e.slice(0, e.indexOf("/") + 1).concat(`${index}`)))

//           return result
//         }
//       }
//       return smski
//     } else {
//       if (strArray[139 - suffixLength] !== " ") {
//         for (let x = 139 - suffixLength; x >= 0; x--) {
//           if (strArray[x] === " ") {
//             smski.push(strArray.splice(0, x + 1).join("") + suffix.join(""));
//             index++;
//             break;
//           }
//         }
//       } else if (strArray[139 - suffixLength] === " ") {
//         smski.push(
//           strArray.splice(0, 139 - suffixLength + 1).join("") + suffix.join("")
//         );
//         index++;
//       }
//     }
//   }
//   return smski
// }

// function splitText(str) {
//   if (str.split("").length <= 140) return [...'', str];
//   const minFragments = Math.ceil(str.split("").length / 140); // Минимальное кол-во фрагментов, если длина фрагмента по максимуму 140 символов. Без суффиксов !!!
//   return parseText(str, minFragments)
// }