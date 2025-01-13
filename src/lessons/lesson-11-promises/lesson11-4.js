
// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 1000)


// function wait(ms: number | undefined) {
//     return new Promise<void>((resolve, reject) => {
//         setTimeout(() => {resolve()}, ms)
//     })
// }
//
// async function run() {
//     await wait(1000)
//     console.log(1)
//     await wait(2000)
//     console.log(2)
//     await wait(3000)
//     console.log(3)
// }
//
// run()