import {AxiosResponse} from "axios";
import $api from "../http";
import {AccountResponse} from "../models/response/AccountResponse";

export default class AccountService {
    static async get(): Promise<AxiosResponse<AccountResponse>> {
        return await $api.get<AccountResponse>(`/v1.0/api/account/`)
    }

}