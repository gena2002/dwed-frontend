import $api from "../http/index";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return await $api.post<AuthResponse>(``, {username, password})
    }

    // static async register(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return await $api.post<AuthResponse>(``, {username, password})
    // }

    static async logout(): Promise<void> {
        return await $api.post(``);
    }

}