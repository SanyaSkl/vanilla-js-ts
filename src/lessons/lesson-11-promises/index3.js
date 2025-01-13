// // findUserInDB(1).then(user => {
// //     console.log(user.name)
// // })
//
//
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;
//
// function getNumber() {
//     //const promise = Promise.resolve(Math.random())
//
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.random())
//         }, 2000)
//     })
//     return promise
// }
//
// // const n1 = getNumber()
// // const n2 = getNumber()
// //
// // console.log(n1)
// // console.log(n2)
//
// getNumber().then(n => console.log(n))
// getNumber().then(n => console.log(n))
//
// const repo = {
//     save(data) {
//         try {
//             localStorage.setItem('some-key', JSON.stringify(data))
//         } catch (error) {
//             return false
//         }
//         return true
//     },
//     saveAsync(data) {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 localStorage.setItem('some-key', JSON.stringify(data))
//                 resolve()
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         return promise
//     }
// }
//
// const result = repo.save({name: 'IT-Kamasutra'})
// if(result) {
//     console.log('SAVED')
// } else {
//     console.warn('NOT SAVED')
// }
//
// repo.saveAsync({name: 'IT-Kamasutra'})
//     .then(() => console.log('SAVED'))
//     .catch(error =>  console.warn('NOT SAVED: ' + error))
//
// const run = async () => {
//     await repo.saveAsync({name: 'IT-Kamasutra'})
//         .then(() => console.log('SAVED'))
//     const data = await repo.read()
//     console.log(data)
// }
// run()