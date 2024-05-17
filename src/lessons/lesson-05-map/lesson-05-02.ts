import {governmentBuildings, HouseType} from "../lesson-02-object/lesson-02-02";


export const getStreetsTitlesOfGovernmentBuildings =
    (buildings: Array<governmentBuildings>) => {
return buildings.map(b => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title);
}

export const createMessages = (houses: Array<HouseType>) => {
        return houses.map(c =>`Hello street residents ${c.address.street.title}`)
    }