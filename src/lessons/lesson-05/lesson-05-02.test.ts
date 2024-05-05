import {CityType} from "../lesson-02/lesson-02-02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./lesson-05-02";



let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id: 1, builtAt: 2012, repaired: false,
            address: {
                number: 100, street: {
                    title: "White street"
                }
            }
        },
            {
                id: 2, builtAt: 2008, repaired: false,
                address: {
                    number: 100, street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 3, builtAt: 2020, repaired: false,
                address: {
                    number: 200, street: {
                        title: "Happy street"
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

test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("Souths park str");
})

test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})

test("create greeting messages for street", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
expect(messages[0]).toBe("Hello street residents White street");
expect(messages[1]).toBe("Hello street residents Happy street");
expect(messages[2]).toBe("Hello street residents Happy street");
})