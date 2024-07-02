import { httpAxios } from "@/lib/httpHelper";

export async function signUp(user) {
    const result = await httpAxios
        .post("/api/users", user)
        .then((response) => response.data)
    return result
}

export async function loginin(loginData) {
    const result = await httpAxios
        .post("/api/login", loginData)
        .then((response) => response.data);
    return result;
}

export async function logout() {
    const result = await httpAxios
        .post("/api/logout")
        .then((response) => response.data);
    return result;
}