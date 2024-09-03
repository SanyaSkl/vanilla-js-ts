export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number };
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = { id: number, title: string };
export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}


//1

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power

    return copy
}

//2

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

//3

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

//4

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
}

//5

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

//6

// export function updateBook(u: UserWithLaptopType & UserWithBooksType,
//                            oldBook: string,
//                            newBook: string) {
//     const copy = {
//         ...u,
//         books: u.books.map(b => {
//             if (b === oldBook) {
//                 return newBook
//             } else {
//                 return b
//             }
//         })
//     }
// return copy
// }

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

//7
export const removeBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string) => ({
    ...u,
    books: u.books.filter(b => b !== oldBook)
})

//8
export const updateCompanyTitle = (u: WithCompaniesType,
                                   companyId: number,
                                   newCompanyTitle: string) => ({
        ...u,
        companies: u.companies.map(c => c.id === companyId
            ? {...c, title: newCompanyTitle}
            : c)
})

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newCompanyTitle: string
                                    ) => {
    let companyCopy = {...companies}
companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
    ? {...c, title: newCompanyTitle} : c
)
return companyCopy
}