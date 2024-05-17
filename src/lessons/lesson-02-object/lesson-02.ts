type LocalCityType = {
    title: string,
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
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


type YearOfBirthType = {
    year: number
    month: string
    day: number
}

type OwnerListType = {
    name: string
    surname: string
    yearOfBirth: YearOfBirthType
}

type  CarListType = {
    id: number
    brand: string
    model: string
    color: string
    maxSpeed: number
    hp: number
    stateNumber: string
    yearOfIssue: number
    isRegistered: boolean
    isWorking: boolean
}

type CarType = {
    carModel: string
    ownerDetails: string
    listCar: Array<CarListType>
    ownerList: Array<OwnerListType>
}

const car: CarType = {
    carModel: "описание характеристик автомобиля",
    ownerDetails: "информация о владельце",
    listCar: [
        {
            id: 1,
            brand: "Skoda",
            model: "Octavia",
            color: "White",
            maxSpeed: 240,
            hp: 102,
            stateNumber: "О715ТО31",
            yearOfIssue: 2008,
            isRegistered: true,
            isWorking: true
        },

        {
            id: 2,
            brand: "LADA",
            model: "21099",
            color: "Silver",
            maxSpeed: 180,
            hp: 87,
            stateNumber: "Е929ОТ31",
            yearOfIssue: 2001,
            isRegistered: true,
            isWorking: true
        },


        {
            id: 3,
            brand: "Cadillac",
            model: "Escalade",
            color: "Black",
            maxSpeed: 280,
            hp: 416,
            stateNumber: "С700АА31",
            yearOfIssue: 2022,
            isRegistered: true,
            isWorking: true
        },
    ],

    ownerList: [
        {
            name: "Alexandr",
            surname: "Ivanov",
            yearOfBirth: {
                year: 1990,
                month: "October",
                day: 12
            }
        },
        {
            name: "Olga",
            surname: "Ivanova",
            yearOfBirth: {
                year: 1990,
                month: "January",
                day: 15
            }
        },
        {
            name: "Alexandr",
            surname: "Ivanov",
            yearOfBirth: {
                year: 1990,
                month: "October",
                day: 12
            }
        }
    ]
}

