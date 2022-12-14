import {IMediaCatsList} from "./IMediaCatsList";
import * as React from "react";

export interface IVideoStreamsList {
    channel_name: string;
    channel_slug: string;
    category: IMediaCatsList;
    live_at: string;
    thumbnail: string;
    logo: string;
    live_watchers: string;
    live_schedule: string;
}