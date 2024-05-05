import {CityType, governmentBuildings} from "../lesson-02/lesson-02-02";

export function demolishHousesOnTheStreet(city: CityType, happyStreet: string) {
    city.houses = city.houses.filter( h => h.address.street.title !== happyStreet)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildings>, number: number) => {
return buildings.filter(b => b.staffCount > number)
}