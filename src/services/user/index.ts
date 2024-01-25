import http from "../api";
import type { RequestUser } from "./types";

const endpoint = "/users"

async function getUserId(id: number) {
    return await http.get(`${endpoint}/${id}`);
}

async function deleteUser(id: number) {
    return await http.delete(`${endpoint}/${id}`);
}

async function postUser(postUser: RequestUser) {
    return await http.post(`${endpoint}`, postUser);
}

async function updateUser(updateUser: RequestUser, id: number) {
    return await http.put(`${endpoint}/${id}`, updateUser);
}

async function filterUser() {
    console.log("chegamos aqui")
    try {
        const response = await http.get(`${endpoint}`)
        return response.data;
    } catch (err) {
        console.error(`Erro ao filtrar usuários`);
        throw err;
    }
}

export default {
    getUserId,
    deleteUser,
    postUser,
    updateUser,
    filterUser
}