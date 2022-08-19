import $api from "../http/index";
import {AxiosResponse} from 'axios';
import {StreamsResponse} from "../models/response/StreamsResponse";

export default class StreamingService {
    static async get(limit: number, offset: number): Promise<AxiosResponse<StreamsResponse>> {
        return await $api.get<StreamsResponse>(`/v1.0/api/streaming/`, {params: {limit, offset}})
    }
}