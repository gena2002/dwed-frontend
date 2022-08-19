import React from 'react';
import {IVideoStreamsList} from "../../models/IVideoStreamsList";

const StreamCard = ({
                        channel_name,
                        channel_slug,
                        category,
                        live_at,
                        thumbnail,
                        logo,
                        live_watchers,
                        live_schedule
                    }: IVideoStreamsList) => {

    //logic

    return (
        <div>
            StreamCard
            <div>
                {channel_name}
            </div>
        </div>
    );
};

export default StreamCard;
