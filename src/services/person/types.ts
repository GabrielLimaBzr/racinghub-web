import type { Address } from "../address/types"

export type Person = {
    id: number,
    name: string,
    birthDate: string,
    type: string,
    document: string,
    gender: string,
    address: Address

}