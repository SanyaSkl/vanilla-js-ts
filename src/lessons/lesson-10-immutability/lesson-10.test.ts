import { UserType } from './lesson-10';

function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power

    return copy
}

//1

test("Reference type test", () => {
    let user: UserType = {
        name: "Alex",
        hair: 32,
        address: { title: "Minsk" },
    };

    const awesomeUser = makeHairStyle(user, 2);

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
});

//2

