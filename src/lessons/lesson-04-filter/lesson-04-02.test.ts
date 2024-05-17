import {CityType} from "../lesson-02-object/lesson-02-02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./lesson-04-02";

let cityFilter: CityType;

beforeEach(() => {
    cityFilter = {
        title: "New York",
        houses: [{
            id: 1, builtAt: 2012, repaired: false,
            address: {
                number: 100, street: {title: "White street"}
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


test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(cityFilter, "Happy street")

    expect(cityFilter.houses.length).toBe(1);
    expect(cityFilter.houses[0].id).toBe(1);
})

test("buildings with correct staff count", () => {
    let buildings =
        getBuildingsWithStaffCountGreaterThen(
            cityFilter.governmentBuildings,
            500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");

})