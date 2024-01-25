import type { Person } from "../person/types"

export type User = {
    id: number,
    passHash: string,
    email: string,
    activated: boolean,
}

export type RequestUser = {
    id: number,
    passHash: string,
    email: string,
    activated: boolean
    role: string,
    person: Person,
}