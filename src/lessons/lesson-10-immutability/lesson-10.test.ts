import {makeHairStyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from './lesson-10';

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
