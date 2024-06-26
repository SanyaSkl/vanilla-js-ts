import {createGreetingMessage, ManType} from "./lesson-05";

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexandr Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
});

test("should get array of greeting message", () => {

    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-Incubator");
    expect(messages[1]).toBe("Hello Alexandr. Welcome to IT-Incubator");
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT-Incubator");
});