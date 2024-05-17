import {CityType} from "./lesson-02-02";

export let cityLocal: CityType;

beforeEach(() => {
    cityLocal = {
        title: "New York",
        houses: [{
            builtAt: 2012, repaired: false,
            address: {
                number: 100, street: {title: "White street"}
            }
        },
            {
                builtAt: 2008, repaired: false,
                address: {
                    number: 100, street: {
                        title: "Happy street"
                    }
                }
            },
            {
                builtAt: 2020, repaired: false,
                address: {
                    number: 200, street: {
                        title: "Hogwarts street"
                    }
                }
            }],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {street: {title: "Central Str"}}
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {street: {title: "Souths park str"}}
            }
        ],
        citizensNumber: 1000000
    }
})

test("city should contains 3 houses", () => {
    expect(cityLocal.houses.length).toBe(3);

    expect(cityLocal.houses[0].builtAt).toBe(2012);
    expect(cityLocal.houses[0].repaired).toBe(false);
    expect(cityLocal.houses[0].address.number).toBe(100);
    expect(cityLocal.houses[0].address.street.title).toBe("White street");

    expect(cityLocal.houses[1].builtAt).toBe(2008);
    expect(cityLocal.houses[1].repaired).toBe(false);
    expect(cityLocal.houses[1].address.number).toBe(100);
    expect(cityLocal.houses[1].address.street.title).toBe("Happy street");

    expect(cityLocal.houses[2].builtAt).toBe(2020);
    expect(cityLocal.houses[2].repaired).toBe(false);
    expect(cityLocal.houses[2].address.number).toBe(200);
    expect(cityLocal.houses[2].address.street.title).toBe("Hogwarts street");
})

test("city should contain hospital and fire station", () => {
    expect(cityLocal.governmentBuildings.length).toBe(2);

    expect(cityLocal.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(cityLocal.governmentBuildings[0].budget).toBe(200000)
    expect(cityLocal.governmentBuildings[0].staffCount).toBe(200)
    expect(cityLocal.governmentBuildings[0].address.street.title).toBe("Central Str")

    expect(cityLocal.governmentBuildings[1].type).toBe("FIRE-STATION")
    expect(cityLocal.governmentBuildings[1].budget).toBe(500000)
    expect(cityLocal.governmentBuildings[1].staffCount).toBe(1000)
    expect(cityLocal.governmentBuildings[1].address.street.title).toBe("Souths park str")
})
