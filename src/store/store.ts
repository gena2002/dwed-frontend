import {makeAutoObservable} from "mobx";

import axios from 'axios';
import AuthService from "../services/AuthService";
import AccountService from "../services/AccountService";
import {AccountResponse} from "../models/response/AccountResponse";


export default class Store {
    user = {} as AccountResponse;
    isAuth = null;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean | null) {
        // @ts-ignore
        this.isAuth = bool;
    }


    setUser(user: AccountResponse) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    // async fetching(callback: Function) {
    //     try {
    //         this.setLoading(true)
    //         await callback
    //     } catch (e: any) {
    //         console.log(e.response?.data?.message);
    //     } finally {
    //         this.setLoading(false)
    //     }
    // }

    async login(phone: string) {
        try {
            this.setLoading(true)
            const response = await AuthService.FastAuth(phone);
            console.log(response.data)
            localStorage.setItem('refresh', response.data.refresh)
            localStorage.setItem('access', response.data.access)
            this.setAuth(true);
        } catch (e: any) {
            console.log(e.response?.data?.message);
            this.setAuth(false);
        } finally {
            this.setLoading(false)
        }

    }


    // async registration(email: string, password: string) {
    //     try {
    //         const response = await AuthService.registration(email, password);
    //         console.log(response)
    //         localStorage.setItem('token', response.data.accessToken);
    //         this.setAuth(true);
    //         this.setUser(response.data.user);
    //     } catch (e) {
    //         console.log(e.response?.data?.message);
    //     }
    // }

    async logout() {
        try {
            // const response = await AuthService.logout();
            localStorage.removeItem('access')
            this.setAuth(false);
            this.setUser({} as AccountResponse);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    // async checkAuth() {
    //     this.setLoading(true);
    //     try {
    //         const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
    //         console.log(response);
    //         localStorage.setItem('token', response.data.accessToken);
    //         this.setAuth(true);
    //         this.setUser(response.data.user);
    //     } catch (e) {
    //         console.log(e.response?.data?.message);
    //     } finally {
    //         this.setLoading(false);
    //     }
    // }


    async getAccount() {
        try {
            this.setLoading(true)
            const response = await AccountService.get();
            this.setUser(response.data)
            this.setAuth(true);
            console.log(response.data)
        } catch (e: any) {
            console.log(e.response?.data?.message);
            this.setAuth(false);
        } finally {
            this.setLoading(false)
        }

    }

}