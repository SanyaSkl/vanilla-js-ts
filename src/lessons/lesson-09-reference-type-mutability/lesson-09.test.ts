
function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('reference test type', () => {

    let user: UserType = {
        name: 'Dimych',
        age: 32
    };

    icreaseAge(user);

    expect(user.age).toBe(33)

    let superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})


test('array test', () => {

    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Natasha',
            age: 31
        }
    ];

    let admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})