
type UsersType = {
    [key: string]: { id: number, name: string}
}

let users: UsersType

beforeEach( () => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '231321': {id: 231321, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})


test('should update corresponding user', () => {
    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina')
})

test('should update corresponding user', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})