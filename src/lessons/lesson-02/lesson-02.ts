/*
type YearOfBirth = {
    year: number,
    mount: string,
    day: number
}

type OwnerType = {
    name: string,
    surname: string,
    yearOfBirth: YearOfBirth
}

type ListCarType = {
    id: number,
    brand: string,
    model: string,
    color: string,
    maxSpeed: number,
    hp: number,
    stateNumber: string,
    yearOfIssue: number,
    isRegistered: boolean,
    isWorking: boolean,
    owner: OwnerType
}

type CarType = {
    carModel: string
    ownerDetails: string
    listCar: Array<ListCarType>
}

export const car: CarType = {

        carModel: "описание характеристик автомобиля",
        ownerDetails: "информация о владельце",
    },
    listCar: [
        {
            id: 1,
            brand: "Skoda",
            model: "Octavia",
            color: "White",
            maxSpeed: 240,
            hp: 102,
            stateNumber: "Р700МУ31",
            yearOfIssue: 2008,
            isRegistered: true,
            isWorking: true,
            owner: {
                name: "Olga",
                surname: "Sklyarenko",
                yearOfBirth: {
                    year: 1983,
                    mount: "January",
                    day: 9
                }
            }
        },

        {
            id: 2,
            brand: "LADA",
            model: 21099,
            color: "Silver",
            maxSpeed: 180,
            hp: 87,
            stateNumber: "Е929ОТ31",
            yearOfIssue: 2001,
            isRegistered: true,
            isWorking: true,
            owner: {
                name: "Alexandr",
                surname: "Sklyarenko",
                yearOfBirth: {
                    year: 1992,
                    mount: "October",
                    day: 8
                }
            }
        },

        {
            id: 3,
            brand: "Renault",
            model: "Logan",
            color: "Blue",
            maxSpeed: 220,
            hp: 92,
            stateNumber: "А700МХ31",
            yearOfIssue: 2014,
            isRegistered: true,
            isWorking: true,
            owner: {
                name: "Alexandr",
                surname: "Sklyarenko",
                yearOfBirth: {
                    year: 1961,
                    mount: "September",
                    day: 10
                }
            }
        },
        {
            id: 4,
            brand: "Cadillac",
            model: "Escalade",
            color: "Black",
            maxSpeed: 280,
            hp: 416,
            stateNumber: "С700АА31",
            yearOfIssue: 2022,
            isRegistered: true,
            isWorking: true,
            owner: {
                name: "Alexandr",
                surname: "Sklyarenko",
                yearOfBirth: {
                    year: 1992,
                    mount: "October",
                    day: 8
                }
            }
        },
    ]
}

console.log()
console.log()






*/
