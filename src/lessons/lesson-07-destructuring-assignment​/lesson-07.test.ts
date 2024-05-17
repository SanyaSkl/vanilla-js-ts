import {ManType} from "./lesson-07";


let props: ManType;
beforeEach( () => {
    props = {
        name: "Sanya",
        age:31,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    };
})

test("", () => {

    //const age = props.age;
    //const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(31);
    expect(lessons.length).toBe(2);

    expect(title).toBe("Nezavisimosti street");

})

test("", () => {

})