// 1. callbacks
// функция загружает новый скрипт и выполняет его
// асинхронная функция так как последующий код не ждет когда эта функция выполнится
// Если после вызова loadScript(…) есть какой-то код, то он не будет ждать, пока скрипт загрузится.
// но нам нужно точно знать когда скрипт загрузиться - например,  чтобы использовать переменные из скрипта или функция определенные в нем
// function loadScript(src) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
// }
//
// // передадим параметром функцию callback - функцию, которая должна быть выполнена после выполнения основной
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }
//
// // // асинхронное программирование при помощи коллбэков
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//   alert(`Здорово, скрипт ${script.src} загрузился`);
//   alert(_); // функция, объявленная в загруженном скрипте
// });
// //
// // // как нам загрузить несколько скриптов - один ЗА другим
// loadScript('/my/script.js', function (script) {
//
//   loadScript('/my/script2.js', function (script) {
//
//     loadScript('/my/script3.js', function (script) {
//       // ...и так далее, пока все скрипты не будут загружены
//     });
//   });
// });
//
// // //а если при загрузке скрипта произошла ошибка и функция коллбэк не может быть выполнена?
// loadScript('/my/script.js', function(error, script) { // («error-first callback»)
//   if (error) {
//     // обрабатываем ошибку
//   } else {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//     // скрипт успешно загружен
//   }
// });

// 2.Promise
// let promise = new Promise(function(resolve, reject) {
//   // эта функция выполнится автоматически, при вызове new Promise
//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => {resolve(123)}, 1000, (error) => reject(new Error('error in async function')));
// });


// 3. Then
// promise.then((result)=> {console.log(result+2)}, (error)=> {console.log(`В promise возникла ошибка: ${error.message}`)});


// 4.Catch
// promise.catch((error)=> { console.log(`В promise возникла ошибка: ${error.message}`) });


// 5. Finally
// new Promise((resolve, reject) => {
//   /* сделать что-то, что займёт время, и после вызвать resolve или может reject */
//   resolve('РЕЗУЛЬТАТ');
//   reject('ОШИБКА')
// })
//   // выполнится, когда промис завершится, независимо от того, успешно или нет
//   .finally(() => (console.log('остановить индикатор загрузки')))
// // таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
// .then(result => console.log(`показать результат: ${result}`), err => console.log('показать ошибку'));

//
// // loadScript через Promise
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
//
// promise.then(
//   script => alert(`${script.src} загружен!`),
//   error => alert(`Ошибка: ${error.message}`)
// );

// 6. Цепочка Promise. promise.then возвращает promise
// new Promise(function(resolve, reject) {
//
//   setTimeout(() => resolve(1), 1000); // (*)
//
// }).then(function(result) { // (**)
//
//   console.log(result); // 1
//   return result * 2;
//
// }).then(function(result) { // (***)
//
//   console.log(result); // 2
//   return result * 2;
//
// }).then(function(result) {
//
//   console.log(result); // 4
//   return result * 2;
//
// });

// 7. Promise API
// Promise.all, https://learn.javascript.ru/promise-api
// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then((results) => { console.log(`Результаты промисов: ${results}`) }); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива


// 8. Async/await

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout((err) => reject("Возникла ошибка " + err), 1000)
  });

  try {
    return await promise;

  } // будет ждать, пока промис не выполнится (*)
  catch (err) {
    console.log("Моя ошибка " + err)
  }; // "готово!"
}

f();