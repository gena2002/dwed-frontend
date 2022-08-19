import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {IVideoStreamsList} from "../../models/IVideoStreamsList";
import Avatar from "@mui/material/Avatar";
import CardHeader from '@mui/material/CardHeader';
import styled from "styled-components";
import {ForwardedRef, forwardRef} from "react";

const StreamCard = forwardRef(({
                                   channel_name,
                                   channel_slug,
                                   category,
                                   live_at,
                                   thumbnail,
                                   logo,
                                   live_watchers,
                                   live_schedule,
                               }: IVideoStreamsList, ref: ForwardedRef<HTMLDivElement>) => {
        //logic

        return (
            <Root ref={ref}>
                <Card sx={{width: '100%'}}>
                    <CardBody>
                        <CardMedia
                            component="img"
                            height="140"
                            image={thumbnail}
                            alt={`img_${channel_slug}`}
                        />
                        <MyBadge>
                            Live
                        </MyBadge>
                    </CardBody>

                    <CardHeader
                        avatar={
                            <Avatar src={logo} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title={channel_name}
                        subheader={category.name}
                    />

                </Card>
            </Root>
        );
    }
)

export default StreamCard;

const Root = styled.div`
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  width: 280px;
`;

const CardBody = styled.div`
  position: relative;
`;

const MyBadge = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  color: #fff;
  background-color: #FF5A5F;
  padding: 2px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 5px;
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
`;