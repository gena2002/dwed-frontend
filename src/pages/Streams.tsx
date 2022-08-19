import React, {ForwardedRef, useCallback, useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../context";
import Container from "../components/UI/Container";
import StreamCard from "../components/template/StreamCard";
import PageLoader from "../components/UI/PageLoader";
import {observer} from "mobx-react-lite";
import styled from "styled-components";
import {useContainerDimensions} from "../hooks/useContainerDimensions";

const Streams = () => {
    const {store} = useContext(Context);
    const contentWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        store.getAllStreams(8, 0)
    }, []);

    const {width, height} = useContainerDimensions(contentWrapper)

    function getRootWidth(w: number) {
        let gap = 10;
        let base = 280;
        let count = Math.floor(w / base)
        let newWidth = (count * (base + gap)) - gap;
        console.log(w, '/', base, ' = ', w / base)
        return `${newWidth}px`
    }

    if (!store.streams.results) return <PageLoader/>

    try {
        return (
            <Container style={{margin: '10px auto'}}>
                <div ref={contentWrapper} style={{margin: '0 auto', width: '100%'}}>
                    <Root width={getRootWidth(width)}>
                        {store.streams.results.map((stream, i) => <StreamCard
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
                    </Root>
                </div>
            </Container>
        );
    } catch (e) {
        return <></>
    }
};

export default observer(Streams);

type RootType = {
    width?: string;
}

const Root = styled.div<RootType>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
  width: ${props => props.width || '100%'};
`;

