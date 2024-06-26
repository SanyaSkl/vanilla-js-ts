import {StudentType} from "../lesson-02-object/lesson-02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./lesson-03";

let student: StudentType;
beforeEach(() => {
    student = {
    id: 1,
        name: "Alexandr",
        age: 31,
        isActive: true,
        address: {
        streetTitle: "Sergievskaya 20",
            city: {
            title: "Staryy Oskol",
                countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);

addSkill(student, "JS");

expect(student.technologies.length).toBe(4);
expect(student.technologies[3].title).toBe("JS");
expect(student.technologies[3].id).toBeDefined();
})

test("student should be made active", () => {
    expect(student.isActive).toBe(true);

    makeStudentActive(student);

    expect(student.isActive).toBe(false);
})

test("student live in city?", () => {


    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Staryy Oskol");


    expect(result1).toBe(false);
    expect(result2).toBe(true);
})