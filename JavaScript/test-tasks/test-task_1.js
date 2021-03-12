/** 
* Представим, что на одном из проектов нам потребовался DSL для решения бизнес-задачи. Наши пользователи - большие поклонники Lisp, поэтому синтаксис этого языка им более привычен, чем синтаксис JS.
* Парсер оригинального синтаксиса Lisp нам написать хоть и не так сложно, но все же для MVP это может быть неразумно, а вот простенький интерпретатор нам точно будет полезен.
*
* Что мы хотим получить:
* 1. Возможность объявлять функции таким образом: [defn, 'funcName', ['a', 'b'], ['sum', 'a', 'b']], где
*      defn - ключевое слово для определения функции
*      'funcName' - имя функции
*      ['a', 'b'] - перечисление аргументов функции
*      ['sum', 'a', 'b'] - тело функции (т. е. вызов функции sum с аргументами a и b)
* 2. Соответственно вызов функции должен быть таким ['funcName', 'a', 'b']
*
* Ниже уже реализован некоторый runtime и есть пример вызова interpret. Необходимо имплементировать interpret и defn.
* 
* P.S.
* Даже если не получится выполнять задание в полной мере (например, где-то застряли), все равно скидывайте в качестве решения то, что получилось.
*/
// 

const defn = (functionName, args, body) => {
  if (functionName !== "" && typeof (functionName) === "string") { // проверяем имя функции (чтобы оно не было равна пустой строке) и тип (она должна быть строкой)
    if (args.length !== 0) { // проверяем кол-во аргументов, оно не должно быть равно 0
      let argsValidate = 0 // аргумент для валидации
      for (let x = 0; x < args.length; x++) {
        if (typeof (args[x]) !== "string") { // в теле цикла проверяем, чтобы каждый элемент был строкового типа
          argsValidate++ // если какой-то элемент не строка увеличиваем аргумент валидации на 1
          console.log(`Warning! Function ${x + 1} argument is wrong!`)
        }
      }

      if (argsValidate === 0) { // если в части объявления функции у нас всё корректно выполняем код дальше
        if (typeof (body[0]) === "function" && body[0].name === "sum") { // проверяем тип функции sum и имя
          if (body.length === args.length + 1) { // проверяем, чтобы в теле функции было такое же кол-во аргументов, что и при объявлениии функции
            let bodyArgsValidate = 0 // идентично добавляем переменную для валидации аргументов в теле функции
            for (let y = 1; y < body.length; y++) {
              if (typeof (body[y]) !== "string" || body[y].trim() !== args[y - 1].trim()) { // проверяем тип аргументов (он должен быть строкой) и сравниваем с аргументами при объявлении функции
                bodyArgsValidate++ // увеличиваем переменную для валидации аргументов в теле, если условие прошло
                console.log(`Warning! Function body argument[${y}] is wrong!`)
              }
            }

            if (bodyArgsValidate === 0) { // если валидация успешно прошла возвращаем массив с именем функции с аргументами и телом функции
              return [functionName, args, body]
            } 
          } else {
            console.log("Warning! Wrong number of arguments in body of function defenition!")
          }
        } else {
          console.log("Warning! Wrong function in body!")
        }
      }

    } else {
      console.log("Warning! Missing arguments!")
    }
  } else {
    console.log("Warning! Wrong function name!")
  }
}

const interpret = (...code) => {
  const [functionDefenitionName, , functionDefenitionBody] = defn([...code][0][1], [...code][0][2], [...code][0][3])
  const [functionCallName, functionCallAllArgs, functionCallArgs]  = [[...code][1][0], [...code][1], [...code][1].slice(1)]

  if (typeof ([...code][0][0]) === "function" && [...code][0][0].name === "defn") { // проверяем тип и имя defn
    if (functionCallName.trim() === functionDefenitionName.trim() ) { // проверяем имя функции в объявлении и в вызове
      if (functionCallAllArgs.length === functionDefenitionBody.length) { // проверяем кол-во аргументов в вызове и в теле функции
        let functionCallArgsValidation = 0 // добавляем переменную для проверки аргументов вызова функции (должен быть number)
        for (let i = 1; i < functionCallAllArgs.length; i++ ) {
          if (typeof(functionCallAllArgs[i]) !== "number") {
            functionCallArgsValidation++ // увеличиваем переменную для валидации аргументов в теле, если условие прошло
            console.log(`Warning! Function call argument[${i}] is wrong!`)
          }  
        }

        if (functionCallArgsValidation === 0) {
          return sum(...functionCallArgs)
        }
      } else {
        console.log("Warning! Wrong number of args in function call!")
      }
    } else {
      console.log("Warning! Wrong function name in function call!")
    }
  } else {
    console.log("Warning! Incorrect definition of function!")
  }
   
}

// Функция, используемая в runtime
const sum = (...args) => args.reduce((prev, curr) => prev + curr)


const result = interpret(
  [defn, "sum3", ['a', 'b', 'c'], [sum, 'a', 'b', 'c']],
  ['sum3', 10, 20, 30]
)

console.assert(result === 60)