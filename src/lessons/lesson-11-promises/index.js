// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         findUserInDB(user.friend)
//             .then(user => {
//                 console.log(user)
//                 findUserInDB(user.friend)
//                     .then(user => {
//                         console.log(user)
//                     })
//             })
//     })
//
// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         return user
//     })
//     .then(user => findUserInDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1)
//         return friend1
//     })
//     .then(friend1 => findUserInDB(friend1.friend))
//     .then(friend2 => console.log(friend2.name))
//
// console.log('finish')

async function run() {
    let user = await findUserInDB(1)
    console.log(user.name)
    let friend1 = await findUserInDB(user.friend)
    console.log(friend1.name)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name)
}

