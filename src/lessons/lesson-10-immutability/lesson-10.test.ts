import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBook,
    updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from './lesson-10';

//1

test("Reference type test", () => {
    let user: UserType = {
        name: "Alex",
        hair: 32,
        address: {city: "Minsk"},
    };

    const awesomeUser = makeHairStyle(user, 2);

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(awesomeUser.address).toBe(user.address);
});

//2

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev');
});

//3

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const upgradeUser = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(upgradeUser);
    expect(user.laptop).not.toBe(upgradeUser.laptop);
    expect(user.address).toBe(upgradeUser.address);
    expect(upgradeUser.laptop.title).toBe('Macbook');
});

//4

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).not.toBe(userCopy.address);
    expect(userCopy.address.house).toBe(99);
});

//5

test("add  new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = addNewBooksToUser(user, 'ts');

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.books[4]).toBe('ts');
    expect(user.books.length).toBe(4)
});

//6

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('ts')
});

//7

test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('react')
});

//8

test("update company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'MTS'}, {id: 2, title: 'Sber'}]
    };

    const userCopy = updateCompanyTitle(user, 1, 'MTC') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies[0].title).toBe('MTC')

});

//9

test("update company ", () => {
    let companies = {
        'Alex': [{id: 1, title: 'MTS'}, {id: 2, title: 'Sber'}],
        'Artem': [{id: 2, title: 'Sber'}]
    }

   const copy = updateCompanyTitle2(companies, 'Alex', 1, 'MTC')

    expect(copy['Alex']).not.toBe(companies['Alex'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Alex'][0].title).toBe('MTC')
});