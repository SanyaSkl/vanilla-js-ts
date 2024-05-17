import {StudentType} from "../lesson-02-object/lesson-02";
import {governmentBuildings, HouseType} from "../lesson-02-object/lesson-02-02";

// const sum = (a: number, b: number) => {
//     return a + b;
// }

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = false
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: governmentBuildings, budget: number) => {
    building.budget += budget
}

export const repairedHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (governmentBuilding: governmentBuildings, number: number) => {
    governmentBuilding.staffCount -= number;
}

export const toHireStaff = (governmentBuilding: governmentBuildings, number: number) => {
    governmentBuilding.staffCount += number;
}