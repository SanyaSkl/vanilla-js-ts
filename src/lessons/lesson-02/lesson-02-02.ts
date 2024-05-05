 export type StreetType = {
    title: string
 }

export type AddressType = {
    number?: number
     street: StreetType
 }
export type HouseType = {
    id?: number
    builtAt: number
     repaired: boolean
     address: AddressType

 }

 type governmentBuildings = {
     type: string
     budget: number
     staffCount: number
     address: AddressType
 }

export type CityType = {
    title: "HOSPITAL" | "FIRE-STATION" | "New York"
     houses: Array<HouseType>
     governmentBuildings: Array<governmentBuildings>
     citizensNumber: number
 }

