import {IVideoStreamsList} from "../IVideoStreamsList";

export interface StreamsResponse {
    count: number;
    next: string;
    previous: string;
    results: IVideoStreamsList[];
}