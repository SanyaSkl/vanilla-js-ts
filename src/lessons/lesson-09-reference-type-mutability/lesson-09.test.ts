
function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address?: {title: string}
}
//1
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

//2
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

//3
test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = adminsCount + 1;

    const users = [
        { name: 'Vasya', age: 25 },
        { name: 'Petya', age: 30 },
        { name: 'Bandyugan', age: 10 }
    ];

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

//4
test('reference test type', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    address.title = 'Minsk City'

    expect(user.address).toBe(user2.address)
    //expect(user.address.title).toBe('Minsk City')
})

//5
test('reference array test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [ user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})


