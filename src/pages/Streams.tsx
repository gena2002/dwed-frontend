import React, {useContext, useEffect} from 'react';
import {Context} from "../context";
import Container from "../components/UI/Container";
import StreamCard from "../components/template/StreamCard";

const Streams = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        store.getAllStreams(1, 0)
    }, []);


    return (
        <Container style={{marginTop: 10}}>
            <div>
                Streams
                <div>
                    {store.streams.results.map(stream => <StreamCard
                        key={stream.channel_slug}
                        channel_slug={stream.channel_slug}
                        category={stream.category}
                        channel_name={stream.channel_name}
                        live_at={stream.live_at}
                        live_schedule={stream.live_schedule}
                        live_watchers={stream.live_watchers}
                        logo={stream.logo}
                        thumbnail={stream.thumbnail}
                    />)}
                </div>
            </div>
        </Container>
    );
};

export default Streams;
