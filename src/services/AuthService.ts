import $api from "../http/index";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async FastAuth(phone: string): Promise<AxiosResponse<AuthResponse>> {
        return await $api.post<AuthResponse>(`/v1.0/api/account/fast_auth/`, {phone})
    }

    // static async register(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return await $api.post<AuthResponse>(``, {username, password})
    // }

    static async logout(): Promise<void> {
        return await $api.post(``);
    }

}