import {CityType} from "../lesson-02/lesson-02-02";
import {addMoneyToBudget, repairedHouse, toFireStaff, toHireStaff} from "./lesson-03";



let cityFunc: CityType;

beforeEach(() => {
    cityFunc = {
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
                type: 'FIRE-STATION', budget: 400000, staffCount: 1000,
                address: {street: {title: "Souths park str"}}
            }
        ],
        citizensNumber: 1000000
    }
})


test("Budget should be changed for HOSPITAL ", () => {
    addMoneyToBudget(cityFunc.governmentBuildings[0], 100000);
    expect(cityFunc.governmentBuildings[0].budget).toBe(300000)
})

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(cityFunc.governmentBuildings[0], -100000);

    expect(cityFunc.governmentBuildings[1].budget).toBe(400000);
})

test("Houses should be repaired", () => {
    repairedHouse(cityFunc.houses[1]);

    expect(cityFunc.houses[1].repaired).toBeTruthy();
})

test("staff should be increased", () => {
    toFireStaff(cityFunc.governmentBuildings[0], 20);

    expect(cityFunc.governmentBuildings[0].staffCount).toBe(180);
})

test("staff should be repaired", () => {
    toHireStaff(cityFunc.governmentBuildings[0], 20);

    expect(cityFunc.governmentBuildings[0].staffCount).toBe(220);
})